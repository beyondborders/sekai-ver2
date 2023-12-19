class DeveloperImage < ApplicationRecord
  # include DeleteImageValidator

  # mount_uploader :file, DeveloperImageUploader
  before_create :set_default_value
  after_create :set_url
  # before_destroy :disallow_delete_image_in_production_bucket, if: -> { !Rails.env.production? }

  belongs_to :developer

  validates :file, :developer_id, presence: true

  private

  def set_default_value
    self.bucket = Settings.AWS.s3.bucket + '-developer-image'
    self.region = Settings.AWS.s3.region
    self.access_key = Settings.AWS.access_key
  end

  def set_url
    update(url: "https://#{bucket}.s3-#{region}.amazonaws.com/#{id}/#{file.filename}")
  end
end
