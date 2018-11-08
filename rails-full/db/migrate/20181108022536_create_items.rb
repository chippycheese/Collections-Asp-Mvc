class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items, id: false do |t|
      t.primary_key :ItemId
      t.string      :Name,        :null=> false
      t.decimal     :Price,       :null=> false, :default => 0
      t.boolean     :Collected,   :null=> false, :default => false
      t.boolean     :Active,      :null=> false, :default => true
    end
    add_reference :items, :collection
    rename_column :items, :collection_id, :CollectionId
  end
end
