class BuildingImage < ApplicationRecord
  # include DeleteImageValidator

  # mount_uploader :file, ImageUploader
  before_create :set_default_value
  after_create :set_url
  # before_destroy :disallow_delete_image_in_production_bucket, if: -> { !Rails.env.production? }

  belongs_to :building
  has_many :display_images, dependent: :destroy

  CATEGORIES = {
    'Exterior'      => 'exterior',
    'Facility'      => 'facility',
    'Surrounding'   => 'surrounding',
    'Room'          => 'room'
  }.freeze

  validates :building_id, :file, presence: true
  validates :category, presence: true, inclusion: { in: self::CATEGORIES.values }

  private

  def set_default_value
    self.bucket = Settings.AWS.s3.bucket + '-building-image'
    self.region = Settings.AWS.s3.region
    self.access_key = Settings.AWS.access_key
  end

  def set_url
    update(url: "https://#{bucket}.s3-#{region}.amazonaws.com/#{id}/#{file.filename}")
  end
end
