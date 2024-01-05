class CreatePropertySearches < ActiveRecord::Migration[7.0]
  def change
    create_table :property_searches do |t|
      t.decimal :price_max_usd, precision: 20, scale: 4
      t.decimal :price_min_usd, precision: 20, scale: 4
      t.decimal :price_max_jpy, precision: 20, scale: 4
      t.decimal :price_min_jpy, precision: 20, scale: 4
      t.decimal :square_meter_max, precision: 8, scale: 2
      t.decimal :square_meter_min, precision: 8, scale: 2
      t.date :constructed_at
      t.integer :bedrooms_max
      t.integer :bedrooms_min
      t.string :title_ja
      t.string :title_en
      t.references :country, foreign_key: true, type: :integer
      t.references :city, foreign_key: true, type: :integer
      t.references :prefecture, foreign_key: true, type: :integer
      t.references :searchable, polymorphic: true, null: false
      t.decimal :yield_rate_max, precision: 6, scale: 2
      t.decimal :yield_rate_min, precision: 6, scale: 2
      t.integer :building_type_mid
      t.integer :score
      t.integer :priority
      t.boolean :show_to_jpn
      t.boolean :is_rent
      t.boolean :sold
      t.datetime :data_updated_at

      t.timestamps
    end
  end
end
