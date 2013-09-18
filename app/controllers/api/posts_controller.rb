class Api::PostsController < ApiController

  respond_to :json

  def index
    project = Project.find(params.require(:project_id))
    page = (params[:page] || 1).to_i
    per = params[:per_page] || 10
    posts = project.posts.order(created_at: :desc).page(page).per(per)

    render :json => posts, :meta => { :total_pages => posts.total_pages, :page => page }
  end

  def create
    project = Project.find(params[:post].delete(:project_id))
    respond_with(:api, project.posts.create(post_params.merge(user: current_user)))
  end

  def destroy
    part = current_user.posts.find(params[:id]).destroy
    respond_with(:api, part)
  end


  private

  def post_params
    params.require(:post).permit(:content, :title, :description, :originalUrl, :thumbnailUrl, :html)
  end

end
