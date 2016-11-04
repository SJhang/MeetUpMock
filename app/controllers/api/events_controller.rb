class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_message, status: 402
    end
  end

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    render "api/events/show"
  end

  def update
  end

  def edit
  end

  def event_params
    params.require(:event).permit(:title, :description, :date, :lat, :lng)
  end
end
