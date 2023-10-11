object false

child(@guides, :object_root => false) do
  attributes :id, :label, :url, :image_url, :image_url_thumbnail_webp
end

node(:_links) do
  partial("pagination/show", :object=>@pagy)
end