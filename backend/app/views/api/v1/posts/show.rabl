object @post => :post

attributes :id, :title, :content, :publish_date, :language_code, :category, :slug, :keywords, :is_recommend

node(:publish_date){|c| c.publish_date&.strftime("%Y年%m月%d日") }

child(:post_images, :object_root => false) do
  attributes :id, :url
end

child(:countries, :object_root => false) do
  attributes :id, :country_code, :name
end

child(:related_posts, :object_root => false) do
  attributes :id, :title, :publish_date, :language_code, :category

  node(:content) {|post| strip_tags(post.content.to_s.truncate(300)).squish }

  child({eyecatch_image: :eyecatch_image}, {:object_root => false}) {
    attributes :id, :url
  }
end