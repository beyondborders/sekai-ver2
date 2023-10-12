module Api::V1::PropertyMaterialsHelper

  def group_by_country(*columns) 
    @property_materials.group_by(&:country).transform_values do |materials| 
      materials.map { |material| material.as_json(only: columns) } 
    end 
  end

  def recommended(*columns)
    @property_materials.select { |material| material.recommended == true }.map { |material| material.as_json(only: columns) }
  end
  
end