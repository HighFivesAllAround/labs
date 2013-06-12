class Api::PartsController < ApplicationController

  respond_to :json

  def index
    respond_with(:api, Part.all)
  end

  def show
    respond_with(:api, Part.find(params[:id]))
  end

  def create
    project = Project.find(params[:part].delete(:project_id))
    respond_with(:api, project.parts.create(part_params))
  end

  def destroy
    respond_with(:api, Part.find(params[:id]).destroy)
  end


  private

  def part_params
    params.require(:part).permit(:title, :content)
  end

end
