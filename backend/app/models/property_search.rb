class PropertySearch < ApplicationRecord
  belongs_to :country
  belongs_to :city, optional: true
  belongs_to :prefecture, optional: true
  belongs_to :searchable, polymorphic: true

  enum building_type_mid: [:store_type, :store_house, :house_store, :office, :store_office, :office_bldg, :factory, :mansion_condo, :storage, :apartment, :jpn_style_hotel, :hotel, :dormitory, :cottage, :resort, :culture_house, :other_type]

  scope :showable, -> { where(show_to_jpn: true, is_rent: false, sold: false) }
  scope :sort_showable, -> { order(priority: :desc, score: :desc, data_updated_at: :desc) }

  def self.ransackable_attributes(auth_object = nil)
    ["bedrooms_max", "bedrooms_min", "building_type_mid", "city_id", "constructed_at", "country_id", "created_at", "id", "is_rent", "prefecture_id", "price_max", "price_min", "priority", "score", "searchable_id", "searchable_type", "show_to_jpn", "sold", "square_meter_max", "square_meter_min", "title_en", "title_ja", "updated_at", "yield_rate_max", "yield_rate_min"]
  end

  def title(locale = I18n.locale)
    instance_eval("title_#{locale}")
  end

  def price_min(locale = I18n.locale)
    locale_currency = Country.currency_from_locale(locale)
    instance_eval("price_min_#{locale_currency.downcase}") if locale_currency
  end

  def price_max(locale = I18n.locale)
    locale_currency = Country.currency_from_locale(locale)
    instance_eval("price_max_#{locale_currency.downcase}") if locale_currency
  end

end
