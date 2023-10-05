object @sekai
attributes :member_number, :member_number_as_of, :pv, :pv_as_of, :inquiries_number, :inquiries_number_as_of, :countries_number, :countries_number_as_of, :properties_number, :properties_number_as_of, :malaysia_properties, :cambodia_properties, :thailand_properties, :total_asset, :malaysia_asset, :malaysia_asset_as_of, :malaysia_contracts, :cambodia_asset, :cambodia_asset_as_of, :cambodia_contracts, :other_asset, :other_asset_as_of, :other_contracts, :total_sale_agent, :total_sale_people, :total_sale_as_of, :top_page_number_of_properties_listed, :top_page_number_of_customers, :top_page_number_of_contracts, :graph_image_url, :graph_image_url_mobile, :top_page_post_ids, :about_sekai_3_image_url, :about_sekai_3_image_url_mobile

node(:posts) do |sekai|
  sekai.top_page_posts.map do |post|
    {
      id: post.id,
      category: post.category,
      title: post.title,
      eyecatch_image: post.eyecatch_image.try(:url),
      publish_date: post.publish_date.strftime('%Y-%m-%d'),
    }
  end
end