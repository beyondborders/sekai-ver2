module Api
  module V1

    class SeminarsController < ApiController

      # before_action :find_seminar, only: [:show, :struct_data, :meta_tags]

      def search
        @q = Seminar.by_closest_date.language(I18n.locale).ransack(params[:q])
        @pagy, @seminars = paginate(
          @q.result(distinct: true).includes(:eyecatch_images)
        )
      end

    end

  end
end