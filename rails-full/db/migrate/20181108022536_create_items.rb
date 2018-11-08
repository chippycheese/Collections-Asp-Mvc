class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items, id: false do |t|
      t.primary_key :ItemId
      t.string      :Name
      t.decimal     :Price
      t.boolean     :Collected
      t.boolean     :Active
    end
    add_reference :items, :collection
    rename_column :items, :collection_id, :CollectionId
  end
end
