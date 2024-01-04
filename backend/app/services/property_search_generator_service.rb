class PropertySearchGeneratorService

  def initialize
  end

  def add_all
    Project.only_public.limit(1).each do |project|
      add_project(project)
    end
    # Property.public_status.exclude_project.all.each do |property|
    #   add_project(property)
    # end
  end

  def add_project(project)
    property         = project.property
    PropertySearch.find_or_initialize_by(searchable_id: project.id, searchable_type: "Project").update(
      title_en: project.name_en,
      title_ja: project.name_ja,
      constructed_at: constructed_date(project),
      country_id: project.country_id,
      city_id: project.city_id,
      prefecture_id: project.prefecture_id,
      building_type_mid: project.building_type_mid,
      price_max: property.price_max,
      price_min: property.price_min,
      square_meter_max: property.square_meter_max,
      square_meter_min: property.square_meter_min,
      yield_rate_max: property.yield_rate_max,
      yield_rate_min: property.yield_rate_min,
      bedrooms_max: property.bedrooms_max,
      bedrooms_min: property.bedrooms_min,
      score: property.score,
      priority: property.priority,
      show_to_jpn: property.show_to_jpn,
      is_rent: property.is_rent,
      sold: property.sold
    )
  end

  def add_property(property)
  end

  def constructed_date(project)
    date_string = project.constructed_at.to_s
    year = date_string[0..3]; month = date_string[4..5]
    if (year.present? && month.present?)
      Date.new(year.to_i, month.to_i)
    elsif year.present?
      Date.new(year.to_i)
    else
      nil
    end
  end
end
