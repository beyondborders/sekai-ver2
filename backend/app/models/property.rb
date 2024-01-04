class Property < ApplicationRecord

  default_scope { where(deleted_at: nil) }

  belongs_to :building
  belongs_to :project, -> { where(project: true) }, foreign_key: :building_id
  has_many :property_developers, dependent: :destroy
  has_many :developers, through: :property_developers
  has_many :floor_plans, dependent: :destroy

  # enum type_of_agreement: [:seller, :agency, :exclusive_right_to_sell, :exclusive_agency, :open_listing, :listing]
  # enum zoning: [:cat_1_low_res, :cat_2_low_res, :cat_1_mid_high_res, :cat_2_mid_high_res, :cat_1_res, :cat_2_res, :quasi_res_zone, :comm_neighbor_zone, :comm_zone, :quasi_comm_zone, :industrial_zone, :exclusive_industrial, :not_specified_zone]
  # enum area_measurement_method: [:wall_included, :wall_excluded]
  # enum management_operation: [:independence, :partially_commissioned, :commisioned]
  # enum management_situation: [:always_on_duty, :day_shift, :patrol, :self, :unknown]
  enum leasehold_type: [:former_superficies_right, :former_right_of_lease, :general_superficies,
                        :fixed_term_superficies, :general_right_of_lease, :fixed_term_right_of_lease]
  enum expected_move_in_period: [:beginning, :mid, :end]
  # enum translation_status: [:no_need, :not_yet, :completed, :recheck]

  DIRECTIONS = %w(north northeast east southeast south southwest west northwest).freeze

  scope :public_status, -> { where(is_public: true) }
  scope :exclude_project, -> { joins(:building).merge(Building.exclude_project) }

  def managements
    developers.where(company_type: 'management')
  end

  def sellers
    developers.where(company_type: 'seller')
  end

  def bedrooms_min
    floor_plans.map(&:number_of_bedrooms).compact.min
  end

  def bedrooms_max
    floor_plans.map(&:number_of_bedrooms).compact.max
  end

  def square_meter_max
    floor_plans.map(&:square_meter).compact.max
  end

  def square_meter_min
    floor_plans.map(&:square_meter).compact.min
  end

  def price_max_all
    return price_max if property_price_max_and_min_exist?
    fp_all_prices.max
  end

  def price_min_all
    return price_min if property_price_max_and_min_exist?
    fp_all_prices.min
  end

  def yield_rate_max
    floor_plans.map(&:yield_rate).compact.max
  end

  def yield_rate_min
    floor_plans.map(&:yield_rate).compact.min
  end

  def property_price_max_and_min_exist?
    (price_max.present? && price_max.to_i > 0) || (price_min.present? && price_min.to_i > 0)
  end

  def fp_all_prices
    return unless floor_plans
    prices = floor_plans.map(&:price)
    price_maxs = floor_plans.map(&:price_max)
    price_mins = floor_plans.map(&:price_min)
    prices.concat(price_maxs).concat(price_mins).compact
  end

  def converted_price_min(target_currency='JPY')
    base_currency = building.get_currency
    return nil if (price_min_all.blank? or base_currency.blank?)
    CurrencyConverterService.new(base_currency).convert(price_min_all,target_currency)
  end

  def converted_price_max(target_currency='JPY')
    base_currency = building.get_currency
    return nil if (price_max_all.blank? or base_currency.blank?)
    CurrencyConverterService.new(base_currency).convert(price_max_all,target_currency)
  end

end