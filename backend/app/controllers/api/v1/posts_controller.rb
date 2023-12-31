module Api
  module V1
  
    class PostsController < ApiController

      before_action :find_post, only: [:show]

      def search
        @q = Post.language(I18n.locale).published.order_desc.ransack(params[:q])
        @pagy, @posts = paginate(
          @q.result(distinct: true).includes(:post_images, :eyecatch_image, :tags)
        )
      end

      def show
        @tag_related_posts = @post.tag_related_posts.includes(:post_images, :eyecatch_image)
      end

      private

      def find_post
        @post = Post.published.find(params[:id])
      end

    end
  end
end