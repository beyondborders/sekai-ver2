object false

child({@project => :project}, {:object_root => false}) do
  attributes :id, :name, :address, :building_type, :number_of_floors, :number_of_units, :description

  node(:latitude){|o| o.latitude.to_f }
  node(:longitude){|o| o.longitude.to_f }

  node(:constructed_at){|o| o.constructed_year }
  node(:country){|o| o.country.try(:name) }
  node(:country_en){|o| o.country.try(:name_en) }
  node(:prefecture){|o| o.prefecture.try(:name_en) }
  node(:prefecture_en){|o| o.prefecture.try(:name) }
  node(:city){|o| o.city.try(:name_en) }
  node(:city_en){|o| o.city.try(:name_en) }
  node(:image_urls){|o| o.images.map(&:url) }
end

child({@property => :property}, {:object_root => false}) do
  node(:price){|o| "#{currency_format_jp(o.converted_price_min)}~#{currency_format_jp(o.converted_price_max)}"}
  node(:square_meter){|o| "#{o.square_meter_min}~#{o.square_meter_max}" }
  node(:yield_rate){|o| "#{o.yield_rate_min}~#{o.yield_rate_max}" }
  node(:number_of_bedrooms){|o| "#{o.bedrooms_min}~#{o.bedrooms_max}" }
  attributes :ownership, :video_url, :expected_move_in_period, :immediate_move_in
  node(:expected_move_in_year){|o| o.expected_move_in_at.try(:year)}
  node(:expected_move_in_month){|o| o.expected_move_in_at.try(:month)}
  node(:management){|o| o.managements.map(&:name)}

  child({@property.sellers => :sellers}, {:object_root => false}) do
    attributes :name, :description
    node(:image_url){|o| o.developer_images.first.try(:url) }
  end

  child({@property.floor_plans => :floor_plans}, {:object_root => false}) do
    attributes :name, :number_of_bedrooms, :square_meter
    node(:image_url){|o| o.property_images.first.try(:url) }
  end
end









# object @project => :project


# attributes :id, :name, :address, :latitude, :longitude, :building_type, :number_of_floors, :number_of_units

# node(:price){|o| "#{currency_format_jp(o.price_min)}~#{currency_format_jp(o.price_max)}"}
# node(:constructed_at){|o| o.constructed_year }
# node(:square_meter){|o| "#{o.square_meter_min}~#{o.square_meter_max}" }
# node(:number_of_bedrooms){|o| "#{o.bedrooms_min}~#{o.bedrooms_max}" }
# node(:country){|o| o.country.try(:name) }
# node(:country_en){|o| o.country.try(:name_en) }
# node(:prefecture){|o| o.prefecture.try(:name_en) }
# node(:prefecture_en){|o| o.prefecture.try(:name) }
# node(:city){|o| o.city.try(:name_en) }
# node(:city_en){|o| o.city.try(:name_en) }
# node(:image_urls){|o| o.images.map(&:url) }

# node(:ownership){|o| o.property.ownership}
# node(:video_url){|o| o.property.video_url}
# node(:expected_move_in_period){|o| o.property.expected_move_in_period}
# node(:expected_move_in_year){|o| o.property.expected_move_in_at.try(:year)}
# node(:expected_move_in_month){|o| o.property.expected_move_in_at.try(:month)}
# node(:management){|o| o.property.managements.map(&:name)}
# node(:immediate_move_in){|o| o.property.immediate_move_in}

# child({@project.property.sellers => :sellers}, :object_root => false) do
#   attributes :name, :description
#   node(:image_url){|o| o.developer_images.first.try(:url) }
# end

# child({@project.property.floor_plans => :floor_plans}, :object_root => false) do
#   attributes :name, :number_of_bedrooms, :square_meter
#   node(:image_url){|o| o.property_images.first.try(:url) }
# end

# attributes :description
