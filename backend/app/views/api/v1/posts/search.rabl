object false

child(@posts, :object_root => false) do
  attributes :id, :title, :content, :publish_date, :language_code, :category

  node(:content) {|post| strip_tags(post.content.to_s.truncate(300)).squish }

  child({eyecatch_image: :eyecatch_image}, {:object_root => false}) {
    attributes :id, :url
  }
end

node(:_links) do
  partial("pagination/show", :object=>@pagy)
end