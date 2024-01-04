class PropertySearch < ApplicationRecord
  belongs_to :searchable, polymorphic: true

  enum building_type_mid: [:store_type, :store_house, :house_store, :office, :store_office, :office_bldg, :factory, :mansion_condo, :storage, :apartment, :jpn_style_hotel, :hotel, :dormitory, :cottage, :resort, :culture_house, :other_type]
end
