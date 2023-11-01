module LocaleHandler

  def search_locale
    params[:q].merge!(locale: I18n.locale)
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end