class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections, id: false do |t|
      t.primary_key :CollectionId
      t.string      :Name
      t.integer     :Collected
      t.integer     :Total
      t.boolean     :Active
    end
  end
end
