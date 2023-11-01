module Api
  module V1

    class PropertyMaterialsController < ApiController
      include PropertyMaterialsHelper

      before_action :merge_locale, only: [:search]

      def search
        @q = Guide.property_material.active.ransack(params[:q])
        @pagy, @property_materials = paginate(
          @q.result(distinct: true)
        )
      end

    end

  end
end