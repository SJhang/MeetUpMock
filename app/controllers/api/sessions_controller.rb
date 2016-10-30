class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render json: 'api/user/show'
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if current_user.nil?
      render json: ["user not found"], status: 404
      return
    end
    logout
    render json: {}
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
