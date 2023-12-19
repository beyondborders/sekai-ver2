class BuildingDescription < ApplicationRecord
  belongs_to :building

  scope :locale_is, -> (locale) { where(language_code: locale) }

  # validates :language_code,presence: true, length: { maximum: 5 }, inclusion: { in: IsoCode::LANGUAGES.values }
  validates :language_code,uniqueness: { scope: :building_id }
  # validates_with DescriptionAndPointValidator
end
