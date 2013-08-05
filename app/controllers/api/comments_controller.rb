class Api::CommentsController < ApiController

  before_action :setup_commentable, :only => [:create]

  respond_to :json

  def create
    comment = @commentable.comments.create(comment_params.merge(user: current_user))
    respond_with(:api, comment)
  end

  def destroy
    comment = current_user.comments.find(params[:id]).destroy
    respond_with(:api, comment.destroy)
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
