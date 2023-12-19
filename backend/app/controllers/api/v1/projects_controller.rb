module Api
  module V1
  
    class ProjectsController < ApiController

      before_action :find_project, only: [:show]

      def show
        @property = @project.property
      end

      private

      def find_project
        @project = Project.find(params[:id])
      end

    end
  end
end