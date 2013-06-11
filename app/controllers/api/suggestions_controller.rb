class Api::SuggestionsController < ApplicationController

  respond_to :json

  def create
    part = Part.find(params[:suggestion].delete(:part_id))
    suggestion = part.suggestions.create(params[:suggestion])

    respond_with(:api, suggestion)
  end

  def destroy
    respond_with(:api, Suggestion.find(params[:id]).destroy)
  end

end
