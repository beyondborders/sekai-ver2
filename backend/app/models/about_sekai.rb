class AboutSekai < ApplicationRecord

  def top_page_posts
    Post.where(id: top_page_post_ids.to_s.split(',')).limit(3)
  end
end