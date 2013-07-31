class Api::VersionsController < ApplicationController

  respond_to :json

  def create
    part = Part.find(params[:version].delete(:part_id))
    respond_with(:api, part.cut_version!)
  end

end
