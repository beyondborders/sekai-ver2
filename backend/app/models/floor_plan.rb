class FloorPlan < ApplicationRecord

  has_many :property_images
  belongs_to :property

  # validates_with MustHavePriceValidator
  # validates_with ParkingFeeValidator
  # validates_with FloorPlanValidator
  validates :property_id, presence: true, numericality: { only_integer: true }
  validates :price, :price_min, :price_max,
            allow_blank: true, numericality: { greater_than_or_equal_to: 0, less_than: 10_000_000_000_000_000 }
  validates :price_not_determined, :multiple_properties, inclusion: { in: [true, false] }
  validates :yield_rate, allow_blank: true, numericality: { greater_than_or_equal_to: 0, less_than: 10_000 }
  validates :number_of_bedrooms, :number_of_bathrooms, allow_blank: true, numericality: { only_integer: true }
  validates :name, presence: true, length: { maximum: 255 }
  validates :square_meter, presence: true, numericality: { greater_than_or_equal_to: 0, less_than: 1_000_000 }
  validates :balcony_size_sqm, allow_blank: true, numericality: { greater_than_or_equal_to: 0, less_than: 1_000_000 }
  validates :balcony_size_sqft, allow_blank: true, numericality: { greater_than_or_equal_to: 0, less_than: 10_000_000 }
  validates :square_feet, presence: true, numericality: { greater_than_or_equal_to: 0, less_than: 10_000_000 }
  validates :direction, allow_blank: true, inclusion: { in: Property::DIRECTIONS }
  validates :management_fee, :maintenance_fee, :parking_fee_min, :parking_fee_max,
            allow_blank: true, numericality: { greater_than_or_equal_to: 0, less_than: 10_000_000_000_000_000 }
  validates :atbb_number, :csv_property_id, length: { maximum: 255, allow_blank: true }

  def project
    property.project if property
  end

  def currency_code
    project.currency_code if project
  end

end
