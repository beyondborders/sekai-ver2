object false
node(:property_materials) do
  group_by_country(:id, :label, :url, :image_url, :image_url_thumbnail_webp)
end

node(:_links) do
  partial("pagination/show", :object=>@pagy)
end