class DisplayImage < ApplicationRecord
  belongs_to :building
  belongs_to :property
  belongs_to :property_image
  belongs_to :building_image

  scope :display_order, -> { order(display_order: :asc) }

  validates :property_id, :building_id, :property_image_id, :building_image_id,
            allow_blank: true, numericality: { only_integer: true }
  validates :display_order,
            presence: true, numericality: { only_integer: true }
  validates :property_image_id,
            uniqueness: { scope: [:property_id, :building_image_id] }

  def image
    property_image_id ? property_image : building_image
  end
end
