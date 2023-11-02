class PostTargetCountry < ApplicationRecord
  belongs_to :post
  belongs_to :seminar
  belongs_to :country

  validates :country_id, presence: true
  validates :country_id, uniqueness: { scope: [:post_id, :seminar_id] }
end