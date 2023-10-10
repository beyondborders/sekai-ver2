object false

child(@seminars, :object_root => false) do
  attributes :id, :title, :currency_code, :fee, :slug, :venue_address

  child({eyecatch_images: :eyecatch_images}, {:object_root => false}) {
    attributes :id, :url
  }
end

node(:_links) do
  partial("pagination/show", :object=>@pagy)
end