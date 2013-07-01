class Api::PostsController < ApplicationController

  respond_to :json

  def create
    project = Project.find(params[:post].delete(:project_id))
    respond_with(:api, project.posts.create(post_params))
  end

  def destroy
    respond_with(:api, Post.find(params[:id]).destroy)
  end


  private

  def post_params
    params.require(:post).permit(:content)
  end

end
