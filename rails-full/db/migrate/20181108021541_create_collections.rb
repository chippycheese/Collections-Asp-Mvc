class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections, id: false do |t|
      t.primary_key :CollectionId
      t.string      :Name,          :null=> false
      t.integer     :Collected,     :null=> false, :default => 0
      t.integer     :Total,         :null=> false, :default => 0
      t.boolean     :Active,        :null=> false, :default => true
    end
  end
end
