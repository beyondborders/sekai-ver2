class Post < ApplicationRecord

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

  scope :published, -> { where('publish_date <= ?', Time.zone.today)}
  scope :order_desc, -> { order('publish_date DESC') }
  scope :language, -> (locale) { where(language_code: locale) }

  scope :tag_related_posts, ->(post,limit) {
    published.where(language_code: post.language_code)
    .joins(:tags).where(tags: { id: post.tag_ids }).where.not(id: post.id)
    .or(Post.published.where(language_code: post.language_code)).order(created_at: :desc)
    .distinct.limit(limit)
  }

  enum category: { tour: 'tour', knowhow: 'knowhow', news: 'news', interview: 'interview' }

  # def tag_related_posts(limit=10)
  #   posts = Post.published.where(language_code: language_code)
  #   .joins(:tags).where(tags: { id: tag_ids }).where.not(id: id)
  #   .distinct.limit(10)
  #   if posts.size < 10
  #     posts.merge(Post.published.where(language_code: language_code)
  #     .joins(:tags).where.not(id: id)
  #     .distinct.limit(10-posts.size))
  #   end
  #   posts.all
  # end

  def self.ransackable_attributes(auth_object = nil)
    ["category", "content", "created_at", "guide_id", "has_form", "id", "is_public", "is_recommend", "keywords", "language_code", "meta_description", "publish_date", "slug", "title", "updated_at"]
  end

  def self.ransackable_associations(auth_object = nil)
    ["countries", "related_posts", "taggings", "tags"]
  end

end