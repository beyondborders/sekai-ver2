module Api
  module V1
  
    class PostsController < ApiController

      before_action :find_post, only: [:show]

      def search
        @q = Post.published.ransack(params[:q])
        @pagy, @posts = paginate(
          @q.result(distinct: true).includes(:post_images, :eyecatch_image)
        )
      end

      def find_post
        @post = Post.published.find(params[:id])
      end

    end
  end
end