class Api::PostsController < ApplicationController

  respond_to :json

  def index
    respond_with(:api, Project.find(params.require(:project_id)).posts.page(params[:page] || 1).per(params[:per_page] || 10))
  end

  def create
    project = Project.find(params[:post].delete(:project_id))
    respond_with(:api, project.posts.create(post_params))
  end

  def destroy
    respond_with(:api, Post.find(params[:id]).destroy)
  end


  private

  def post_params
    params.require(:post).permit(:content, :title, :description, :originalUrl, :thumbnailUrl, :html)
  end

end
