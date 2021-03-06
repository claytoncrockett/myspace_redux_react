class Api::PostsController < ApplicationController

  before_action :set_post, only: [:update, :destroy]

  def index
    render json: Post.all
  end

  def create
    post = current_user.posts.create(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end

  end

  def update
    if @post.update(post_params)
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:body, :user_id)
  end
end
