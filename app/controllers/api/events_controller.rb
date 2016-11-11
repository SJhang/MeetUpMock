class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_message, status: 402
    end
  end

  def index
    @events = Event.includes(:attendees).all
  end

  def show
    @event = Event.includes(:attendees).find(params[:id])
    @title = @event.title
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    render :show
  end

  def update
    @event = Event.find(params[:id])
    attendee = User.find(params[:event][:attendees][:user][:id])
    if @event.attendees.include?(attendee)
      @event.attendees.delete(attendee)
    else
      @event.attendees << attendee
    end

    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_message, status: 401
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:title, :description, :date, :lat, :lng, :attendees, :start_time, :end_time)
  end
end
