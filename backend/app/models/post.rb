class Post < ApplicationRecord

  default_scope { where(deleted_at: nil) }

  has_many :post_images
  has_one :eyecatch_image, -> { eyecatch }, class_name: 'PostImage'

  # belongs_to :admin_user
  belongs_to :guide
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :post_target_countries, dependent: :destroy
  has_many :countries, through: :post_target_countries
  has_many :post_related_posts, dependent: :destroy
  has_many :related_posts, through: :post_related_posts

  scope :published, -> { where('is_public = true AND publish_date <= ?', Time.zone.today)}
  scope :order_desc, -> { order('publish_date DESC') }
  scope :language, -> (locale) { where(language_code: locale) }

  enum category: { tour: 'tour', knowhow: 'knowhow', news: 'news', interview: 'interview' }

  def tag_related_posts(limit=6)
    tag_post_ids = Post.published.order_desc.joins(:tags).where(language_code: language_code, category: category, tags: { id: tag_ids }).where.not(id: id).distinct.limit(limit).pluck(:id)
    if tag_post_ids.length < limit
      tag_post_ids.concat(Post.published.order_desc.where(language_code: language_code, category: category).where.not(id: tag_post_ids.push(id)).distinct.limit(limit-tag_post_ids.length).pluck(:id))
    end
    Post.where(id: tag_post_ids).in_order_of(:id, tag_post_ids)
  end

  def self.ransackable_attributes(auth_object = nil)
    ["category", "content", "created_at", "guide_id", "has_form", "id", "is_public", "is_recommend", "keywords", "language_code", "meta_description", "publish_date", "slug", "title", "updated_at"]
  end

  def self.ransackable_associations(auth_object = nil)
    ["countries", "related_posts", "taggings", "tags"]
  end

end