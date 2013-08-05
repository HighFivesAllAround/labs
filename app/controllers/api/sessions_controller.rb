class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(username: params.require(:username))
    if user
      if user.authenticate(params.require(:password))
        session[:user_id] = user.id
        render json: {}
      else
        render json: {}, status: 403
      end
    else
      render json: {}, status: 404
    end
  end

  def destroy
    reset_session
    render json: {}
  end
end
