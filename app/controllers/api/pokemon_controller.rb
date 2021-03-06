class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.includes(:items).all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    if @pokemon.update_attributes(pokemon_params)
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def pokemon_params
    params.require(:pokemon)
      .permit(:name, :image_url, :poke_type, :attack, :defense, moves: [])
  end
end
