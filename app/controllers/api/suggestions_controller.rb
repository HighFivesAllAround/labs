class Api::SuggestionsController < ApplicationController

  respond_to :json

  def create
    part = Part.find(params[:suggestion].delete(:part_id))
    suggestion = part.suggestions.create(suggestion_params)

    respond_with(:api, suggestion)
  end

  def destroy
    respond_with(:api, Suggestion.find(params[:id]).destroy)
  end


  private

  def suggestion_params
    params.require(:suggestion).permit(:content)
  end

end
