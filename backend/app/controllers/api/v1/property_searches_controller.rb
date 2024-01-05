module Api
  module V1

    class PropertySearchesController < ApiController

      def search
        @q = PropertySearch.showable.sort_showable.ransack(params[:q])
        @pagy, @properties = paginate(
          @q.result(distinct: true)
        )
      end

    end
  end
end
