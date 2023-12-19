class PropertyImage < ApplicationRecord
  # include DeleteImageValidator

  # mount_uploader :file, ImageUploader
  before_create :set_default_value
  after_create :set_url
  after_save :update_property_in_rightmove, if: -> { Rails.application.config.rightmove }
  after_destroy :update_property_in_rightmove, if: -> { Rails.application.config.rightmove }
  # before_destroy :disallow_delete_image_in_production_bucket, if: -> { !Rails.env.production? }
  has_many :display_images, dependent: :destroy

  belongs_to :property
  belongs_to :floor_plan

  CATEGORIES = {
    'Room'      => 'room',
    'Layout'    => 'layout'
  }.freeze

  scope :main_image, -> { where(main_image: true) }

  validates :property_id, :floor_plan_id, allow_blank: true, numericality: { only_integer: true }
  validates :file, presence: true
  validates :category, presence: true, inclusion: { in: self::CATEGORIES.values }

  private

  def set_default_value
    self.bucket = Settings.AWS.s3.bucket + '-property-image'
    self.region = Settings.AWS.s3.region
    self.access_key = Settings.AWS.access_key
  end

  def set_url
    update(url: "https://#{bucket}.s3-#{region}.amazonaws.com/#{id}/#{file.filename}")
  end

  def update_property_in_rightmove
    if property.present? && property.is_rightmove_property?
      property.has_images? ? ExportUpdateRightmoveJob.perform_later(property.id) : ExportDeleteRightmoveJob.perform_later(property.id)
    end
  end
end
