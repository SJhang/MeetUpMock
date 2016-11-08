class Api::GroupsController < ApplicationController
  def index
    @groups = Group.includes(:members).all
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
    @group = Group.includes(:members).find_by(id: params[:id])
    @title = @group.name
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      render :show
    else
      render @group.errors.full_message, status: 402
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render :show
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
    render :show
  end

  private

  def search_params
    params.permit(:name, :description)
  end

  def group_params
    params.require(:group).permit(:name, :description, :city, :state, :organizer_id)
  end
end
