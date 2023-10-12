module Api::V1::PropertyMaterialsHelper

  # def group_by_country(*columns)
  #   result = {}
  #   @property_materials.group_by(&:country).each do |country, materials|
  #     result[country] = materials.map do |material|
  #       material.as_json(only: columns)
  #     end
  #   end
  #   result
  # end

  def group_by_country(*columns) 
    @property_materials.group_by(&:country).transform_values do |materials| 
      materials.map { |material| material.as_json(only: columns) } 
    end 
  end
  
end