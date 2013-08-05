class Api::PartsController < ApiController

  respond_to :json

  def show
    respond_with(:api, Part.find(params[:id]))
  end

  def create
    project = Project.find(params[:part].delete(:project_id))
    respond_with(:api, project.parts.create(part_params.merge(user: current_user)))
  end

  def update
    part = current_user.parts.find(params[:id])
    part.update(part_params)
    respond_with(:api, part)
  end

  def destroy
    part = current_user.parts.find(params[:id]).destroy
    respond_with(:api, part)
  end


  private

  def part_params
    params.require(:part).permit(:title, :content)
  end

end
