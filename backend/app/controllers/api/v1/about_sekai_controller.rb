module Api
  module V1
  
    class AboutSekaiController < ApiController

      def index
        @sekai = AboutSekai.first
      end

    end
  end
end