class PostImage < ApplicationRecord
  
  # mount_uploader :file, ImageUploader
  belongs_to :seminar
  belongs_to :post
  
  enum image_type: { froala: 'froala', eyecatch: 'eyecatch', speaker: 'speaker'}

  def self.ransackable_attributes(auth_object = nil)
    ["id", "post_id", "seminar_id", "updated_at", "url"]
  end

end
