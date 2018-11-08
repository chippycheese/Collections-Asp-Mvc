class ItemsController < ApplicationController

  def index
    @collection = Collection.find(params[:collectionId])
    @items = Item.where(:CollectionId => params[:collectionId]).where(:Active => true)
  end

  def new
  end

  def create
    begin
      @item = Item.new(item_params)
      @item.CollectionId = params[:collectionId]
      @item.save!

      update_collection(params[:collectionId])

      redirect_to items_path(@item.CollectionId)
    rescue Exception => e
      redirect_to items_new_path(params[:collectionId])
    end
  end

  def edit
    @item = Item.find(params[:itemId])
  end

  def update
    begin
      @item = Item.find(params[:itemId])
      @item.update_attributes(item_params)
      @item.save!

      update_collection(params[:collectionId])

      redirect_to items_path(@item.CollectionId)
    rescue Exception => e
      redirect_to items_new_path(params[:collectionId])
    end
  end

  def delete
    @item = Item.find(params[:itemId])
    @item.Active = false
    @item.save!
    update_collection(params[:collectionId])
    redirect_to items_path(@item.CollectionId)
  end

  def item_params
    params.require(:item).permit(:Name, :Price, :Collected)
  end

  def update_collection(collectionId)
    collection = Collection.find(collectionId)
    items = Item.where(:CollectionId => params[:collectionId]).where(:Active => true)
    
    collection.Total = items.size
    collection.Collected = items.where(:collected => true).size
    collection.save!
  end
  
end
