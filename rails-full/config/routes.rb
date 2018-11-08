Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to    => "collections#index"

  scope "collections" do
    get   ""                        => "collections#index",    :as => "collections"
    get   "new"                     => "collections#new",      :as => "collections_new"
    post  "create"                  => "collections#create",   :as => "collections_create"
    get   "edit/:collectionId"      => "collections#edit",     :as => "collections_edit"
    post  "update/:collectionId"    => "collections#update",   :as => "collections_update"
    get   "delete/:collectionId"    => "collections#delete",   :as => "collections_delete"

    scope ":collectionId/items" do
      get   ""                      => "items#index",    :as => "items"
      get   "new"                   => "items#new",      :as => "items_new"
      post  "create"                => "items#create",   :as => "items_create"
      get   "edit/:itemId"          => "items#edit",     :as => "items_edit"
      post  "update/:itemId"        => "items#update",   :as => "items_update"
      get   "delete/:itemId"        => "items#delete",   :as => "items_delete"
    end
  end

end
