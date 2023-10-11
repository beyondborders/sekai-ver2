module Api
  module V1

    class GuidesController < ApiController

      def search
        @q = Guide.library.active.ransack(params[:q])
        @pagy, @guides = paginate(
          @q.result(distinct: true)
        )
      end

    end

  end
end