class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render 'api/sessions/show'
    else
      render json: ["lolol"], status: 401
    end
  end

  def destroy
    if current_user.nil?
      render json: ["user not found"], status: 404
    else
      logout
      render json: {}
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
