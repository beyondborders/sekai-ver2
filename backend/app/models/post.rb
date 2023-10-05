class Post < ApplicationRecord

  has_many :post_images
  has_one :eyecatch_image, -> { where image_type: 'eyecatch' }, class_name: 'PostImage', foreign_key: :post_id

end