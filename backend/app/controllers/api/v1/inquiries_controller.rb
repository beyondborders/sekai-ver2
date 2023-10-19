module Api
  module V1
  
    class InquiriesController < ApiController

      def create
        Inquiry.create!(inquiry_params)
      end

      private

      def inquiry_params
        params.require(:inquiry).permit(
          :property_id, :content, :email, :name, :nationality, :residence, :tel, :tel_country_code, :inquiry_type,
          :budget, :payment_method, :url_from, :expected_purchase_date, :plan_to_visit_japan, :communication_method
        )
      end

    end
  end
end