class CollectionsController < ApplicationController

  def index
    @collections = Collection.where(:active => true)
  end

  def new
  end

  def create
    begin
      @collection = Collection.new(collection_params)
      @collection.save!
      redirect_to collections_path
    rescue Exception => e
      redirect_to collections_new_path
    end
  end

  def edit
    @collection = Collection.find(params[:collectionId])
  end

  def update
    begin
      @collection = Collection.find(params[:collectionId])
      @collection.update_attributes(collection_params)
      @collection.save!
      redirect_to collections_path
    rescue Exception => e
      redirect_to collections_new_path
    end
  end

  def delete
    @collection = Collection.find(params[:collectionId])
    @collection.Active = false
    @collection.save!
    redirect_to collections_path
  end

  def collection_params
      params.require(:collection).permit(:Name)
  end

end
