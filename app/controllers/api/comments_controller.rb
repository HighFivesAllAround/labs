class Api::CommentsController < ApplicationController

  before_action :setup_commentable, :only => [:index, :create]

  respond_to :json

  def index
    respond_with(:api, @commentable.comments)
  end

  def create
    comment = @commentable.comments.create(comment_params)
    respond_with(:api, comment)
  end

  def destroy
    respond_with(:api, Comment.find(params[:id]).destroy)
  end


  private

  def setup_commentable
    polymorphic_params = params[:comment].slice(:commentable_id, :commentable_type)
    id = polymorphic_params[:commentable_id]
    type = polymorphic_params[:commentable_type]

    @commentable = type.classify.constantize.find(id)
  end

  def comment_params
    params.require(:comment).permit(:content)
  end

end
