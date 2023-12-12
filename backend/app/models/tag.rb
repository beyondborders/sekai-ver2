class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  # has_many :properties, through: :taggings
  # has_many :projects, through: :taggings
  has_many :posts, through: :taggings

  validates :at_least_one_name, presence: true

  def name(locale=I18n.locale)
    instance_eval("name_#{locale}")
  end

  def self.ransackable_attributes(auth_object = nil)
    ["id","name_ja", "name_en"]
  end

  private

  def at_least_one_name
    name_en.present? || name_ja.present? || name_zh_cn.present? || name_zh_tw.present?
  end
end
