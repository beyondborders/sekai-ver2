class Validator::Tagging < ActiveModel::Validator

  def validate(record)
    if record.property_id.present? && record.project_id.present?
      record.errors.add(:base, 
        "Tagging must have one relation with the property ID or the project ID."
      )
    end
  end
end
