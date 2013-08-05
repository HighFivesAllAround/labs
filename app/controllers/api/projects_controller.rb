class Api::ProjectsController < ApiController

  respond_to :json

  def index
    respond_with(:api, Project.all)
  end

  def show
    respond_with(:api, Project.find(params[:id]))
  end

  def create
    respond_with(:api, Project.create(project_params).merge(user: current_user))
  end


  private

  def project_params
    params.require(:project).permit(:name)
  end

end
