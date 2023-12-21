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

  def managements
    developers.where(company_type: 'management')
  end

  def sellers
    developers.where(company_type: 'seller')
  end

end