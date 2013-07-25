class Api::TopicsController < ApplicationController

  respond_to :json

  def create
    part = Part.find(params[:topic].delete(:part_id))
    respond_with(:api, part.reset_topic!(topic_params))
  end


  private

  def topic_params
    params.require(:topic).permit(:content)
  end

end
