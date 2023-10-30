class Post < ApplicationRecord

  has_many :post_images
  has_one :eyecatch_image, -> { where image_type: 'eyecatch' }, class_name: 'PostImage', foreign_key: :post_id

  # belongs_to :admin_user
  # belongs_to :guide
  # has_many :tags, through: :taggings
  # has_many :taggings, dependent: :destroy
  has_many :countries, through: :post_target_countries
  # has_many :post_target_countries, dependent: :destroy
  has_many :related_posts, through: :post_related_posts
  has_many :post_related_posts, dependent: :destroy

  scope :published, -> { where('publish_date <= ?', Time.zone.today) }

  CATEGORIES = {
    'Tour'      => 'tour',
    'Knowhow'   => 'knowhow',
    'News'      => 'news',
    'Interview' => 'interview'
  }.freeze

  def self.ransackable_attributes(auth_object = nil)
    ["category", "content", "created_at", "guide_id", "has_form", "id", "is_public", "is_recommend", "keywords", "language_code", "meta_description", "publish_date", "slug", "title", "updated_at"]
  end

end