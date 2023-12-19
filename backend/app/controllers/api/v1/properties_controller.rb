module Api
  module V1
  
    class PropertiesController < ApiController

      before_action :find_property, only: [:show]

      private

      def find_property
        @property = Property.find(params[:id])
      end

    end
  end
end