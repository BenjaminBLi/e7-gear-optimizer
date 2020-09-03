
require 'json'
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(params.require(:user).permit(:username,:password))

    session[:user_id] = @user.id.to_str
    redirect_to '/welcome'
  end
end
