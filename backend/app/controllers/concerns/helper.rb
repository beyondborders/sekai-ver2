module Helper
  def paginate(result)
    pagy(result, items: params[:page_count])
  end
end