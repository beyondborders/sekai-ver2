class ApiController < ActionController::API

  include ExceptionHandler
  include Response
  include Pagy::Backend
  include ApiHelper

end
