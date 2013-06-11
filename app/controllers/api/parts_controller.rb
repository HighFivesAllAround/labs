class Api::PartsController < ApplicationController

  respond_to :json

  def index
    respond_with(:api, Part.all)
  end

  def show
    respond_with(:api, Part.find(params[:id]))
  end

  def create
    respond_with(:api, Part.create(params[:part]))
  end

  def destroy
    respond_with(:api, Part.find(params[:id]).destroy)
  end

end
