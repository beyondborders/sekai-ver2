class Project < Building

  default_scope -> { where(project: true) }

  has_one :property, foreign_key: :building_id, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :taggings, dependent: :destroy

  scope :only_project, -> { where(project: true) }
  scope :only_public, -> { joins(:property).merge(Property.public_status) }

  def floor_plans
    property.floor_plans if property
  end

end