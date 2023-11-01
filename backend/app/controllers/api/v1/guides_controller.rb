module Api
  module V1

    class GuidesController < ApiController

      before_action :merge_locale, only: [:search]

      def search
        @q = Guide.library.active.ransack(params[:q])
        @pagy, @guides = paginate(
          @q.result(distinct: true)
        )
      end

      def show_by_url
        @guide = Guide.active.find_by!(url: params[:url])
      end

    end

  end
end