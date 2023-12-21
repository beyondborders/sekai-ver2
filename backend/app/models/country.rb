class Country < ApplicationRecord

  has_many :posts, through: :post_target_countries
  has_many :post_target_countries, dependent: :destroy

  scope :active, -> { where(active: true) }

  validates :country_code, presence: true, length: { is: 3 }
  validates :name_en, presence: true, length: { maximum: 255, allow_blank: true }
  validates :name_ja, :name_zh_cn, :name_zh_tw, length: { maximum: 255, allow_blank: true }
  validates :description_en, :description_ja, :description_zh_cn, :description_zh_tw,
            allow_blank: true, length: { maximum: 65_535 }

  OVERIDE_CURRENCY_CODES = {
    'KHM' => 'USD',
    'MNG' => 'JPY',
    'ARA' => 'AED'
  }

  def self.ransackable_attributes(auth_object = nil)
    ["country_code", "name_en"]
  end

  def name(locale = I18n.locale)
    instance_eval("name_#{locale}")
  end

  def currency_code
    OVERIDE_CURRENCY_CODES.dig(country_code) || ISO3166::Country.find_country_by_alpha3(country_code)&.currency_code
  end

end