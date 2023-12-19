class PropertyDeveloper < ApplicationRecord
  belongs_to :property
  belongs_to :developer

  validates :developer_id, uniqueness: { scope: :property_id }
  validates :developer_id, presence: true, numericality: { only_integer: true }
end
