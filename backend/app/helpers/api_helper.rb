module ApiHelper

  def paginate(result)
    pagy(result, items: params[:page_count])
  end

  
  def currency_format_jp(value)
    return '' if value.nil? || value.infinite?
      
    unit = "万円"
    if (value / 100_000_000) >= 1
        front_value = (value / 100_000_000).floor.to_s + "億"
        value = value % 100_000_000
    end
    
    value = value / 10_000
    formatted_value = number_to_currency(value, unit: unit, precision: 0, format: '%n%u')
      
    front_value.to_s + formatted_value
  end
  
  
end