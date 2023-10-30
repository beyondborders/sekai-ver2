object @post => :post

attributes :id, :title, :content, :publish_date, :language_code, :category, :slug, :keywords, :is_recommend

node(:publish_date){|c| c.publish_date&.strftime("%Y年%m月%d日") }

child(:post_images, :object_root => false) do
  attributes :id, :url
end