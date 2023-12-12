class Tagging < ApplicationRecord
  # belongs_to :property, optional: true
  # belongs_to :project, optional: true
  belongs_to :post, optional: true
  belongs_to :seminar, optional: true
  belongs_to :tag

  validates_with Validator::Tagging
  validates :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: [:property_id, :project_id, :post_id, :seminar_id] }
end
