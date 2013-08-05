class Api::SuggestionsController < ApiController

  respond_to :json

  def create
    part = Part.find(params[:suggestion].delete(:part_id))
    suggestion = part.suggestions.create(suggestion_params.merge(user: current_user))

    respond_with(:api, suggestion)
  end

  def destroy
    suggestion = current_user.suggestions.find(params[:id]).destroy
    respond_with(:api, suggestion)
  end


  private

  def suggestion_params
    params.require(:suggestion).permit(:content)
  end

end
