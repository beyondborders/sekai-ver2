class Building < ApplicationRecord

  default_scope { where(deleted_at: nil) }

  belongs_to :country
  belongs_to :prefecture
  belongs_to :city
  has_many :building_descriptions, dependent: :destroy
  has_many :building_images, dependent: :destroy
  has_many :building_images_cate_asc, -> { order(category: :asc) }, class_name: "BuildingImage"
  has_many :display_images, -> { order(display_order: :asc) }

  enum building_type_mid: [:store_type, :store_house, :house_store, :office, :store_office, :office_bldg, :factory, :mansion_condo, :storage, :apartment, :jpn_style_hotel, :hotel, :dormitory, :cottage, :resort, :culture_house, :other_type]
  enum foundation: [:wooden, :block, :steel, :rc, :src, :pc, :hpc, :lgs, :others]

  scope :exclude_project, -> { where(project: false) }

  def building_type?(type)
    building_type.try(:downcase) == type.downcase
  end

  def name(locale = I18n.locale)
    instance_eval("name_#{locale}")
  end

  def description(locale = I18n.locale)
    building_descriptions.locale_is(locale).last.try(:content)
  end

  def constructed_year
    constructed_at.to_s[0..3]
  end

  def constructed_month
    constructed_at.to_s[4..5]
  end

  def images
    all_images = display_images.all.map{|i| i.image}
    all_images.concat(
      building_images.where.not(id: all_images.map(&:id)).select(:id, :url).all
    )
  end

  def get_currency
    country.currency_code
  end
end