class Guide < ApplicationRecord

  enum guide_type: [:library, :property_material]

  scope :active, -> { where(show: true).order(order: :desc) }

  def guide?
    guide_type == 'library'
  end
end
