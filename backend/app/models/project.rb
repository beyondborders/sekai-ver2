class Project < Building

  default_scope -> { where(project: true) }

  has_one :property, foreign_key: :building_id, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :taggings, dependent: :destroy

  def floor_plans
    prop = property || properties.first
    prop.floor_plans if prop
  end

  def bedrooms_min
    floor_plans.map(&:number_of_bedrooms).compact.min if floor_plans
  end

  def bedrooms_max
    floor_plans.map(&:number_of_bedrooms).compact.max if floor_plans
  end

  def square_meter_max
    floor_plans.map(&:square_meter).compact.max if floor_plans
  end

  def square_meter_min
    floor_plans.map(&:square_meter).compact.min if floor_plans
  end

  def price_max
    return property.price_max if property_price_max_and_min_exist?
    fp_all_prices.max
  end

  def price_min
    return property.price_min if property_price_max_and_min_exist?
    fp_all_prices.min
  end

  def property_price_max_and_min_exist?
    (property.price_max.present? && property.price_max.to_i > 0) \
    || (property.price_min.present? && property.price_min.to_i > 0)
  end

  def fp_all_prices
    return unless floor_plans
    prices = floor_plans.map(&:price)
    price_maxs = floor_plans.map(&:price_max)
    price_mins = floor_plans.map(&:price_min)
    prices.concat(price_maxs).concat(price_mins).compact
  end

  def converted_price_min(target_currency='JPY')
    base_currency = get_currency
    return nil if (price_min.blank? or base_currency.blank?)
    CurrencyConverterService.new(base_currency).convert(price_min,target_currency)
  end

  def converted_price_max(target_currency='JPY')
    base_currency = get_currency
    return nil if (price_max.blank? or base_currency.blank?)
    CurrencyConverterService.new(base_currency).convert(price_max,target_currency)
  end

end