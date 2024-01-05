object false

child(@properties, :object_root => false) do
  attributes :searchable_id, :searchable_type, :title

  node(:price){|o| "#{currency_format_jp(o.price_min)}~#{currency_format_jp(o.price_max_jpy)}"}
  node(:square_meter){|o| "#{o.square_meter_min}~#{o.square_meter_max}" }
  node(:yield_rate){|o| "#{o.yield_rate_min}~#{o.yield_rate_max}" }
  node(:number_of_bedrooms){|o| "#{o.bedrooms_min}~#{o.bedrooms_max}" }
  node(:constructed_at){|o| o.constructed_at&.strftime("%Y年 %m月") }
  node(:country){|o| o.country&.name }
  node(:prefecture){|o| o.prefecture&.name }
  node(:city){|o| o.city&.name }

end

node(:_links) do
  partial("pagination/show", :object=>@pagy)
end
