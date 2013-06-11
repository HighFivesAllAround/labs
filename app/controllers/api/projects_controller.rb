class Api::ProjectsController < ApplicationController

  respond_to :json

  def index
    respond_with(:api, Project.all)
  end

  def show
    respond_with(:api, Project.find(params[:id]))
  end

  def create
    respond_with(:api, Project.create(params[:project]))
  end

end
