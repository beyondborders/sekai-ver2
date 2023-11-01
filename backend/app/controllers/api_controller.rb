class ApiController < ActionController::API

  include ExceptionHandler
  include Response
  include LocaleHandler
  include Pagy::Backend
  include ApiHelper

  before_action :set_locale

end
