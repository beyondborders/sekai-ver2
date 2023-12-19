class Prefecture < ApplicationRecord

  has_many :buildings
  has_many :cities, dependent: :destroy
  # has_many :post_codes
  belongs_to :country

  scope :order_desc, -> { order('id DESC') }
  scope :major, -> { where(is_major: true) }

  validates :country_id, presence: true, numericality: { only_integer: true }
  validates :name_en, presence: true, length: { maximum: 255, allow_blank: true }
  validates :name_ja, :name_zh_cn, :name_zh_tw, length: { maximum: 255, allow_blank: true }
  validates :is_major, inclusion: { in: [true, false] }
  validates :description_en, :description_ja, :description_zh_cn, :description_zh_tw,
            allow_blank: true, length: { maximum: 65_535 }
  validates :latitude, :longitude,
            allow_blank: true, numericality: { greater_than: -180, less_than: 180 }


  def name(locale = I18n.locale)
    instance_eval("name_#{locale}")
  end

  def japan?
    country.country_code == 'JPN'
  end
end
