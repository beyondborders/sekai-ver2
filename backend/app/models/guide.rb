class Guide < ApplicationRecord

  enum guide_type: [:library, :property_material]

  scope :active, -> { where(show: true) }

  def guide?
    guide_type == 'library'
  end

  def self.ransackable_attributes(auth_object = nil)
    ["area", "comment", "country", "created_at", "label", "locale", "location", "main_title", "nearest_station", "number_of_floors", "number_of_rooms", "order", "price", "recommended", "room_type", "scheduled_for_completed", "shared_facilities", "show", "show_back_popup", "show_details_table", "size", "subtitle", "surrounding_environment", "updated_at"]
  end

end
