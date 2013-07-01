class Api::PartsController < ApplicationController

  respond_to :json

  def show
    respond_with(:api, Part.find(params[:id]))
  end

  def create
    project = Project.find(params[:part].delete(:project_id))
    respond_with(:api, project.parts.create(part_params))
  end

  def update
    part = Part.find(params[:id])
    part.update(params.require(:part).permit(:title))
    respond_with(:api, part)
  end

  def destroy
    respond_with(:api, Part.find(params[:id]).destroy)
  end


  private

  def part_params
    params.require(:part).permit(:title, :content)
  end

end
