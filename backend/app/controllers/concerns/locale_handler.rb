module LocaleHandler

  def merge_locale
    params[:q] ||= {}
    params[:q].merge!(locale_eq: I18n.locale)
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end