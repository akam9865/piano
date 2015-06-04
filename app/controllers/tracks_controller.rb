class TracksController < ApplicationController
  def index
    @tracks = Track.all
    
    render json: @tracks
  end
  
  def create
    @track = Track.new(track_params)
    @track.save
    render json: @track
  end
  
  def destroy
    @track = Track.find(params[:id])
    @track.delete
    
    render json: @track
  end
  
  private
  
  def track_params
    params.permit(:roll, :title)
  end
end
