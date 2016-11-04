class Api::GroupsController < ApplicationController
  def index
    @groups = Group.all
    # if params[:search] && !params[:search].empty?
    #   @groups = @groups.where(
    #     [
    #       'name LIKE :query OR description LIKE :query',
    #       {searchQuery: "%#{params[:search]}%" }
    #     ]
    #   )
    # end
  end

  def show
    @group = Group.find(params[:id])
  end

  def create
    @group = Group.new
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render "api/groups/show"
    else
      render json: @group.errors.full_message, status: 401
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def destroy
    group = Group.find(params[:id])
    group.destroy
    render "api/groups/index"
  end

  def search_params
    params.permit(:name, :description)
  end

  def group_params
    params.require(:group).permit(:name, :description, :city, :state)
  end
end
