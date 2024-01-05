# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_01_05_122024) do
  create_table "about_sekais", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "member_number"
    t.string "member_number_as_of"
    t.string "pv"
    t.string "pv_as_of"
    t.string "inquiries_number"
    t.string "inquiries_number_as_of"
    t.string "countries_number"
    t.string "countries_number_as_of"
    t.string "properties_number"
    t.string "properties_number_as_of"
    t.text "malaysia_properties"
    t.text "cambodia_properties"
    t.text "thailand_properties"
    t.string "total_asset"
    t.string "malaysia_asset"
    t.string "malaysia_asset_as_of"
    t.string "malaysia_contracts"
    t.string "cambodia_asset"
    t.string "cambodia_asset_as_of"
    t.string "cambodia_contracts"
    t.string "other_asset"
    t.string "other_asset_as_of"
    t.string "other_contracts"
    t.string "total_sale_agent"
    t.string "total_sale_people"
    t.string "total_sale_as_of"
    t.string "top_page_number_of_properties_listed"
    t.string "top_page_number_of_customers"
    t.string "top_page_number_of_contracts"
    t.string "graph_image_url"
    t.string "graph_image_url_mobile"
    t.string "top_page_post_ids"
    t.string "about_sekai_3_image_url"
    t.string "about_sekai_3_image_url_mobile"
  end

  create_table "admin_users", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "login_name", default: "", null: false
    t.string "password_digest", default: "", null: false
    t.string "role", default: "", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["login_name"], name: "index_admin_users_on_login_name"
    t.index ["role"], name: "index_admin_users_on_role"
  end

  create_table "building_descriptions", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "building_id"
    t.string "language_code"
    t.text "content"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id", "language_code"], name: "index_building_descriptions_on_building_id_and_language_code", unique: true
    t.index ["building_id"], name: "index_building_descriptions_on_building_id"
    t.index ["language_code"], name: "index_building_descriptions_on_language_code"
  end

  create_table "building_facilities", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "building_id"
    t.integer "facility_id"
    t.text "remarks"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id", "facility_id"], name: "index_building_facilities_on_building_id_and_facility_id", unique: true
    t.index ["building_id"], name: "index_building_facilities_on_building_id"
    t.index ["facility_id"], name: "index_building_facilities_on_facility_id"
  end

  create_table "building_images", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "building_id", null: false
    t.string "file", null: false
    t.string "url"
    t.string "category", null: false
    t.string "region"
    t.string "bucket"
    t.string "access_key"
    t.text "source_url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id"], name: "index_building_images_on_building_id"
    t.index ["category"], name: "index_building_images_on_category"
  end

  create_table "building_points", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "building_id"
    t.string "language_code"
    t.text "content"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id", "language_code"], name: "index_building_points_on_building_id_and_language_code", unique: true
    t.index ["building_id"], name: "index_building_points_on_building_id"
    t.index ["language_code"], name: "index_building_points_on_language_code"
  end

  create_table "building_stations", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "building_id", null: false
    t.integer "station_id", null: false
    t.integer "distance"
    t.integer "minutes_to_walk"
    t.integer "display_order"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id"], name: "index_building_stations_on_building_id"
    t.index ["station_id"], name: "index_building_stations_on_station_id"
  end

  create_table "buildings", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "country_id"
    t.integer "prefecture_id"
    t.integer "city_id"
    t.integer "subarea_id"
    t.integer "street_id"
    t.string "source", default: ""
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.boolean "project", default: false
    t.string "building_type"
    t.integer "building_type_mid"
    t.integer "foundation"
    t.integer "number_of_floors"
    t.integer "basement_floors"
    t.integer "number_of_units"
    t.integer "constructed_at"
    t.text "constructed_at_display_en"
    t.text "constructed_at_display_ja"
    t.text "constructed_at_display_zh_cn"
    t.text "constructed_at_display_zh_tw"
    t.string "postal_code"
    t.text "address"
    t.decimal "building_area_sqm", precision: 8, scale: 2
    t.decimal "building_area_sqft", precision: 9, scale: 2
    t.decimal "building_coverage_ratio", precision: 6, scale: 2
    t.decimal "floor_area_ratio", precision: 6, scale: 2
    t.decimal "latitude", precision: 18, scale: 15
    t.decimal "longitude", precision: 18, scale: 15
    t.string "slug"
    t.string "building_csv_id", default: ""
    t.text "access_en"
    t.text "access_ja"
    t.text "access_zh_cn"
    t.text "access_zh_tw"
    t.string "floor_guide_url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "deleted_at", precision: nil
    t.index ["building_csv_id"], name: "index_buildings_on_building_csv_id"
    t.index ["building_type"], name: "index_buildings_on_building_type"
    t.index ["constructed_at"], name: "index_buildings_on_constructed_at"
    t.index ["country_id"], name: "index_buildings_on_country_id"
    t.index ["deleted_at"], name: "index_buildings_on_deleted_at"
    t.index ["name_en"], name: "index_buildings_on_name_en"
    t.index ["name_ja"], name: "index_buildings_on_name_ja"
    t.index ["name_zh_cn"], name: "index_buildings_on_name_zh_cn"
    t.index ["slug"], name: "index_buildings_on_slug"
  end

  create_table "cities", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "prefecture_id", null: false
    t.string "name_en", null: false
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.boolean "is_major", default: false
    t.text "description_en"
    t.text "description_ja"
    t.text "description_zh_cn"
    t.text "description_zh_tw"
    t.decimal "latitude", precision: 18, scale: 15
    t.decimal "longitude", precision: 18, scale: 15
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["is_major"], name: "index_cities_on_is_major"
    t.index ["name_en"], name: "index_cities_on_name_en"
    t.index ["prefecture_id"], name: "index_cities_on_prefecture_id"
  end

  create_table "contract_documents", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "contract_user_id"
    t.string "name"
    t.string "file"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "memo"
  end

  create_table "contract_folders", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "contract_user_id"
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "contract_groups", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "display_name"
  end

  create_table "contract_post_attachments", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "contract_post_id"
    t.string "attachment"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "contract_post_confirmations", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "contract_user_id"
    t.integer "contract_post_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "contract_posts", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.text "title"
    t.text "content", size: :medium
    t.datetime "publish_date", precision: nil
    t.boolean "is_public", default: true
    t.integer "contract_group_id"
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "attachments"
  end

  create_table "contract_user_groups", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "contract_user_id"
    t.integer "contract_group_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "contract_user_notifications", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "contract_user_id"
    t.string "title"
    t.text "content"
    t.boolean "is_seen"
    t.string "url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "source_type"
    t.integer "source_id"
  end

  create_table "contract_users", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "login_id", default: "", null: false
    t.string "password_digest", default: "", null: false
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "address"
    t.string "birthday"
    t.string "picture_url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "countries", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "country_code"
    t.boolean "active", default: false, null: false
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.text "description_en"
    t.text "description_ja"
    t.text "description_zh_cn"
    t.text "description_zh_tw"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["active"], name: "index_countries_on_active"
    t.index ["country_code"], name: "index_countries_on_country_code"
  end

  create_table "developer_images", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "developer_id", null: false
    t.string "file", null: false
    t.string "url"
    t.string "region"
    t.string "bucket"
    t.string "access_key"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["developer_id"], name: "index_developer_images_on_developer_id"
  end

  create_table "developer_users", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "developer_id"
    t.string "name"
    t.string "tel"
    t.string "email"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["developer_id"], name: "index_developer_users_on_developer_id"
  end

  create_table "developers", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.string "company_type", default: ""
    t.integer "country_id"
    t.text "address"
    t.string "tel"
    t.string "email"
    t.boolean "listed_company"
    t.string "notary_license_number"
    t.text "description_en"
    t.text "description_ja"
    t.text "description_zh_cn"
    t.text "description_zh_tw"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["company_type"], name: "index_developers_on_company_type"
    t.index ["country_id"], name: "index_developers_on_country_id"
  end

  create_table "display_images", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.integer "building_id"
    t.integer "property_image_id"
    t.integer "building_image_id"
    t.integer "display_order"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id"], name: "index_display_images_on_building_id"
    t.index ["display_order"], name: "index_display_images_on_display_order"
    t.index ["property_id"], name: "index_display_images_on_property_id"
  end

  create_table "facilities", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.string "group"
    t.integer "category"
    t.boolean "for_search", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["group"], name: "index_facilities_on_group"
  end

  create_table "favorites", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "user_id"
    t.integer "property_id"
    t.integer "building_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["building_id"], name: "index_favorites_on_building_id"
    t.index ["property_id"], name: "index_favorites_on_property_id"
    t.index ["user_id", "property_id", "building_id"], name: "index_favorites_on_user_id_and_property_id_and_building_id", unique: true
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "feature_page_images", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "feature_page_id"
    t.string "image_type"
    t.string "file"
    t.string "url"
    t.string "region"
    t.string "bucket"
    t.string "access_key"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["feature_page_id"], name: "index_feature_page_images_on_feature_page_id"
  end

  create_table "feature_page_selects", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "feature_page_id"
    t.integer "property_id"
    t.integer "project_id"
    t.integer "order_no"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["feature_page_id"], name: "index_feature_page_selects_on_feature_page_id"
    t.index ["order_no"], name: "index_feature_page_selects_on_order_no"
  end

  create_table "feature_pages", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "language"
    t.boolean "is_public", default: false, null: false
    t.integer "display_order"
    t.string "title"
    t.text "content", size: :medium
    t.string "slug"
    t.text "keywords"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["display_order"], name: "index_feature_pages_on_display_order"
    t.index ["language", "display_order"], name: "index_feature_pages_on_language_and_display_order", unique: true
    t.index ["language"], name: "index_feature_pages_on_language"
  end

  create_table "floor_plans", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id", null: false
    t.string "name", default: ""
    t.string "unit_number", default: ""
    t.boolean "multiple_properties", default: false, null: false
    t.decimal "price", precision: 20, scale: 4
    t.decimal "price_min", precision: 20, scale: 4
    t.decimal "price_max", precision: 20, scale: 4
    t.boolean "price_not_determined", default: false
    t.decimal "yield_rate", precision: 6, scale: 2
    t.integer "number_of_bedrooms"
    t.integer "number_of_bathrooms"
    t.decimal "square_meter", precision: 8, scale: 2
    t.decimal "square_feet", precision: 9, scale: 2
    t.decimal "balcony_size_sqm", precision: 8, scale: 2
    t.decimal "balcony_size_sqft", precision: 9, scale: 2
    t.string "direction"
    t.decimal "management_fee", precision: 20, scale: 4
    t.decimal "maintenance_fee", precision: 20, scale: 4
    t.decimal "parking_fee_min", precision: 20, scale: 4
    t.decimal "parking_fee_max", precision: 20, scale: 4
    t.string "atbb_number"
    t.text "memo"
    t.string "csv_property_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "deleted_at", precision: nil
    t.index ["deleted_at"], name: "index_floor_plans_on_deleted_at"
    t.index ["number_of_bathrooms"], name: "index_floor_plans_on_number_of_bathrooms"
    t.index ["number_of_bedrooms"], name: "index_floor_plans_on_number_of_bedrooms"
    t.index ["property_id"], name: "index_floor_plans_on_property_id"
    t.index ["square_feet"], name: "index_floor_plans_on_square_feet"
    t.index ["square_meter"], name: "index_floor_plans_on_square_meter"
    t.index ["yield_rate"], name: "index_floor_plans_on_yield_rate"
  end

  create_table "glossaries", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "admin_user_id"
    t.string "title"
    t.text "content"
    t.string "language_code"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "phonetic"
  end

  create_table "guides", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "locale"
    t.string "url"
    t.string "label"
    t.string "main_title"
    t.text "subtitle"
    t.text "description"
    t.string "guide_url"
    t.text "image_url"
    t.string "image_url_thumbnail"
    t.string "image_url_thumbnail_webp"
    t.string "post_image_url"
    t.string "post_image_url_webp"
    t.string "post_image_url_mobile"
    t.string "video_url"
    t.integer "order"
    t.boolean "show"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "guide_type"
    t.boolean "recommended"
    t.text "country"
    t.boolean "show_back_popup"
    t.boolean "show_details_table"
    t.text "area"
    t.text "price"
    t.text "location"
    t.text "nearest_station"
    t.text "scheduled_for_completed"
    t.text "number_of_floors"
    t.text "number_of_rooms"
    t.text "room_type"
    t.text "size"
    t.text "shared_facilities"
    t.text "surrounding_environment"
    t.text "comment"
    t.index ["locale"], name: "index_guides_on_locale"
  end

  create_table "imports", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "admin_user_id"
    t.integer "partner_id"
    t.string "import_type"
    t.string "status"
    t.string "filename"
    t.string "org_filename"
    t.text "message"
    t.datetime "completed_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["admin_user_id"], name: "index_imports_on_admin_user_id"
    t.index ["import_type"], name: "index_imports_on_import_type"
  end

  create_table "information", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.text "content_en"
    t.text "content_ja"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.date "information_date"
  end

  create_table "inquiries", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "user_id"
    t.integer "property_id"
    t.integer "building_id"
    t.integer "seminar_id"
    t.string "inquiry_type"
    t.string "document"
    t.text "content"
    t.string "email"
    t.string "name"
    t.string "furigana"
    t.string "nationality"
    t.string "residence"
    t.string "area_of_interest"
    t.integer "tel_country_code"
    t.string "tel"
    t.string "category"
    t.text "url_from"
    t.text "google_id"
    t.text "chikyu_id"
    t.string "inquiry_email_id", default: ""
    t.string "budget", default: ""
    t.string "asset"
    t.string "asset_cash"
    t.string "asset_securities"
    t.string "asset_real_estate"
    t.string "asset_crypto"
    t.string "asset_others"
    t.string "occupation"
    t.string "payment_method", default: ""
    t.string "cv_source", default: ""
    t.string "utm_source", default: ""
    t.string "utm_medium", default: ""
    t.string "utm_campaign", default: ""
    t.string "utm_term", default: ""
    t.string "utm_content", default: ""
    t.string "utm_creative", default: ""
    t.string "desktop_mobile", default: ""
    t.string "expected_purchase_date"
    t.string "plan_to_visit_japan"
    t.string "communication_method"
    t.string "visa_status"
    t.string "employment_type"
    t.string "years_in_japan"
    t.text "address"
    t.text "seminar_name"
    t.text "remarks"
    t.text "seminar_content"
    t.datetime "seminar_date", precision: nil
    t.string "seminar_date_text"
    t.string "seminar_participate_method"
    t.boolean "lp_chat_email_send_status"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "read_at", precision: nil
    t.datetime "deleted_at", precision: nil
    t.string "ip_address"
    t.string "ip_city"
    t.text "first_landing_page"
    t.string "occupation_industry"
    t.string "company_scale"
    t.string "annual_income"
    t.string "total_asset_including_real_estate"
    t.integer "seminar_schedule_id"
    t.index ["building_id"], name: "index_inquiries_on_building_id"
    t.index ["category"], name: "index_inquiries_on_category"
    t.index ["deleted_at"], name: "index_inquiries_on_deleted_at"
    t.index ["email"], name: "index_inquiries_on_email"
    t.index ["nationality"], name: "index_inquiries_on_nationality"
    t.index ["property_id"], name: "index_inquiries_on_property_id"
    t.index ["residence"], name: "index_inquiries_on_residence"
    t.index ["seminar_id"], name: "index_inquiries_on_seminar_id"
    t.index ["user_id"], name: "index_inquiries_on_user_id"
  end

  create_table "inquiry_emails", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "inquiry_type"
    t.string "email"
    t.string "name"
    t.string "tel"
    t.string "budget"
    t.string "payment_method"
    t.string "first_cv_source", default: ""
    t.string "last_cv_source", default: ""
    t.integer "total_inquiries", default: 1
    t.boolean "high_quality", default: false
    t.boolean "guide_download", default: false
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.datetime "last_created_at", precision: nil
    t.index ["email"], name: "index_inquiry_emails_on_email", unique: true
  end

  create_table "lp_chats", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "url", null: false
    t.string "thanks_page_url", null: false
    t.text "title"
    t.text "description"
    t.string "version", default: "1"
    t.string "email_subject"
    t.text "email_title"
    t.text "seminar_content"
    t.string "email_template"
    t.text "download_url"
    t.text "bg_image"
    t.string "bg_color"
    t.text "mobile_bg_image"
    t.text "title_color"
    t.text "icon_image"
    t.string "footer_type"
    t.string "stepper_type"
    t.text "seminar_date_options"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "mode_prices", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.decimal "price", precision: 20, scale: 4
    t.integer "units"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["property_id"], name: "index_mode_prices_on_property_id"
  end

  create_table "organizers", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "other_costs", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.decimal "cost_min", precision: 20, scale: 4
    t.decimal "cost_max", precision: 20, scale: 4
    t.text "remarks_en"
    t.text "remarks_ja"
    t.text "remarks_zh_cn"
    t.text "remarks_zh_tw"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["property_id"], name: "index_other_costs_on_property_id"
  end

  create_table "partners", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "login_id", default: "", null: false
    t.string "password_digest", default: "", null: false
    t.string "source", default: ""
    t.string "company_name"
    t.string "person_name"
    t.text "remarks"
    t.string "locale"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["login_id"], name: "index_partners_on_login_id"
  end

  create_table "post_images", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "post_id"
    t.integer "seminar_id"
    t.string "image_type"
    t.boolean "is_primary", default: false
    t.boolean "is_thumbnail", default: false
    t.string "file"
    t.string "url"
    t.string "region"
    t.string "bucket"
    t.string "access_key"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["post_id"], name: "index_post_images_on_post_id"
    t.index ["seminar_id"], name: "index_post_images_on_seminar_id"
  end

  create_table "post_related_posts", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "post_id"
    t.integer "related_post_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["post_id", "related_post_id"], name: "index_post_related_posts_on_post_id_and_related_post_id", unique: true
    t.index ["post_id"], name: "index_post_related_posts_on_post_id"
    t.index ["related_post_id"], name: "index_post_related_posts_on_related_post_id"
  end

  create_table "post_target_countries", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "post_id"
    t.integer "seminar_id"
    t.integer "country_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["country_id"], name: "index_post_target_countries_on_country_id"
    t.index ["post_id", "country_id"], name: "index_post_target_countries_on_post_id_and_country_id", unique: true
    t.index ["post_id"], name: "index_post_target_countries_on_post_id"
    t.index ["seminar_id", "country_id"], name: "index_post_target_countries_on_seminar_id_and_country_id", unique: true
    t.index ["seminar_id"], name: "index_post_target_countries_on_seminar_id"
  end

  create_table "postal_codes", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "postal_code", null: false
    t.integer "country_id"
    t.integer "prefecture_id"
    t.integer "city_id"
    t.integer "subarea_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["city_id"], name: "index_postal_codes_on_city_id"
    t.index ["country_id"], name: "index_postal_codes_on_country_id"
    t.index ["postal_code"], name: "index_postal_codes_on_postal_code"
    t.index ["prefecture_id"], name: "index_postal_codes_on_prefecture_id"
    t.index ["subarea_id"], name: "index_postal_codes_on_subarea_id"
  end

  create_table "posts", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "admin_user_id"
    t.integer "guide_id"
    t.text "title"
    t.text "content", size: :medium
    t.datetime "publish_date", precision: nil
    t.string "language_code"
    t.string "category"
    t.string "slug", default: ""
    t.text "keywords"
    t.boolean "has_form", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "deleted_at", precision: nil
    t.boolean "is_recommend"
    t.text "meta_description"
    t.boolean "is_public", default: true
    t.index ["admin_user_id"], name: "index_posts_on_admin_user_id"
    t.index ["category"], name: "index_posts_on_category"
    t.index ["deleted_at"], name: "index_posts_on_deleted_at"
    t.index ["language_code"], name: "index_posts_on_language_code"
  end

  create_table "prefectures", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "country_id"
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.boolean "is_major", default: false
    t.text "description_en"
    t.text "description_ja"
    t.text "description_zh_cn"
    t.text "description_zh_tw"
    t.decimal "latitude", precision: 18, scale: 15
    t.decimal "longitude", precision: 18, scale: 15
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["country_id"], name: "index_prefectures_on_country_id"
    t.index ["is_major"], name: "index_prefectures_on_is_major"
    t.index ["name_en"], name: "index_prefectures_on_name_en"
  end

  create_table "properties", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "building_id", null: false
    t.string "source", default: ""
    t.string "name", default: ""
    t.string "unit_number"
    t.boolean "multiple_properties", default: false, null: false
    t.decimal "price", precision: 20, scale: 4
    t.decimal "price_min", precision: 20, scale: 4
    t.decimal "price_max", precision: 20, scale: 4
    t.decimal "average_price", precision: 20, scale: 4
    t.boolean "price_not_determined", default: false
    t.decimal "yield_rate", precision: 6, scale: 2
    t.string "ownership", default: ""
    t.integer "number_of_bedrooms"
    t.integer "number_of_bathrooms"
    t.bigint "floor"
    t.decimal "square_meter", precision: 8, scale: 2
    t.decimal "square_feet", precision: 9, scale: 2
    t.string "occupied_area_show_value"
    t.string "atbb_number", default: ""
    t.text "memo"
    t.boolean "sold", default: false, null: false
    t.boolean "show_to_jpn", default: true
    t.boolean "immediate_move_in", default: false
    t.date "expected_move_in_at"
    t.integer "expected_move_in_period", unsigned: true
    t.boolean "is_public", default: false
    t.datetime "public_until", precision: nil
    t.boolean "newly_built", default: false
    t.string "occupancy", default: ""
    t.boolean "owner_change", default: false
    t.string "direction", default: ""
    t.decimal "management_fee", precision: 20, scale: 4
    t.decimal "management_fee_max", precision: 20, scale: 4
    t.decimal "management_fee_min", precision: 20, scale: 4
    t.decimal "maintenance_fee", precision: 20, scale: 4
    t.decimal "maintenance_fee_max", precision: 20, scale: 4
    t.decimal "maintenance_fee_min", precision: 20, scale: 4
    t.decimal "parking_fee_min", precision: 20, scale: 4
    t.decimal "parking_fee_max", precision: 20, scale: 4
    t.integer "developer_user_id"
    t.string "csv_property_id"
    t.integer "main_image_id"
    t.string "main_image_type"
    t.integer "main_image_position"
    t.integer "priority", default: 0, null: false
    t.boolean "mode_price_hyphen", default: false, null: false
    t.boolean "is_advertiser_bb", default: true
    t.string "advertiser_name_en"
    t.string "advertiser_name_ja"
    t.string "advertiser_name_zh_cn"
    t.string "advertiser_name_zh_tw"
    t.text "advertiser_address_en"
    t.text "advertiser_address_ja"
    t.text "advertiser_address_zh_cn"
    t.text "advertiser_address_zh_tw"
    t.string "advertiser_tel"
    t.string "notary_license_number"
    t.string "affiliated_organization_name_en"
    t.string "affiliated_organization_name_ja"
    t.string "affiliated_organization_name_zh_cn"
    t.string "affiliated_organization_name_zh_tw"
    t.integer "type_of_agreement"
    t.string "organizer_name_en"
    t.string "organizer_name_ja"
    t.string "organizer_name_zh_cn"
    t.string "organizer_name_zh_tw"
    t.integer "units_for_sell"
    t.decimal "site_area_sqm", precision: 8, scale: 2
    t.decimal "site_area_min_sqm", precision: 8, scale: 2
    t.decimal "site_area_max_sqm", precision: 8, scale: 2
    t.integer "zoning"
    t.decimal "balcony_size_sqm", precision: 8, scale: 2
    t.decimal "balcony_size_sqft", precision: 9, scale: 2
    t.integer "area_measurement_method"
    t.boolean "has_management_association"
    t.integer "management_operation"
    t.integer "management_situation"
    t.text "construction_conf_num_en"
    t.text "construction_conf_num_ja"
    t.text "construction_conf_num_zh_cn"
    t.text "construction_conf_num_zh_tw"
    t.integer "leasehold_type"
    t.datetime "leasehold_until", precision: nil
    t.decimal "land_rent_fee", precision: 20, scale: 4
    t.boolean "needs_land_right_fee"
    t.boolean "needs_land_right_guarantee"
    t.boolean "needs_land_right_deposit"
    t.decimal "land_area_sqft", precision: 9, scale: 2
    t.decimal "private_road_area_sqft", precision: 9, scale: 2
    t.text "info_source_en"
    t.text "info_source_ja"
    t.text "info_source_zh_cn"
    t.text "info_source_zh_tw"
    t.integer "translation_status", default: 0
    t.string "layout_type"
    t.string "video_url"
    t.integer "guide_id"
    t.integer "score"
    t.boolean "is_rent", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "deleted_at", precision: nil
    t.string "land_status"
    t.text "source_url"
    t.index ["average_price"], name: "index_properties_on_average_price"
    t.index ["building_id"], name: "index_properties_on_building_id"
    t.index ["csv_property_id"], name: "index_properties_on_csv_property_id"
    t.index ["deleted_at"], name: "index_properties_on_deleted_at"
    t.index ["developer_user_id"], name: "index_properties_on_developer_user_id"
    t.index ["floor"], name: "index_properties_on_floor"
    t.index ["number_of_bathrooms", "average_price"], name: "index_properties_on_number_of_bathrooms_and_average_price"
    t.index ["number_of_bathrooms", "square_meter"], name: "index_properties_on_number_of_bathrooms_and_square_meter"
    t.index ["number_of_bathrooms", "updated_at"], name: "index_properties_on_number_of_bathrooms_and_updated_at"
    t.index ["number_of_bathrooms", "yield_rate"], name: "index_properties_on_number_of_bathrooms_and_yield_rate"
    t.index ["number_of_bedrooms", "average_price"], name: "index_properties_on_number_of_bedrooms_and_average_price"
    t.index ["number_of_bedrooms", "square_meter"], name: "index_properties_on_number_of_bedrooms_and_square_meter"
    t.index ["number_of_bedrooms", "updated_at"], name: "index_properties_on_number_of_bedrooms_and_updated_at"
    t.index ["number_of_bedrooms", "yield_rate"], name: "index_properties_on_number_of_bedrooms_and_yield_rate"
    t.index ["number_of_bedrooms"], name: "index_properties_on_number_of_bedrooms"
    t.index ["price"], name: "index_properties_on_price"
    t.index ["price_max"], name: "index_properties_on_price_max"
    t.index ["price_min"], name: "index_properties_on_price_min"
    t.index ["priority", "updated_at"], name: "index_properties_on_priority_and_updated_at"
    t.index ["priority"], name: "index_properties_on_priority"
    t.index ["source"], name: "index_properties_on_source"
    t.index ["square_meter"], name: "index_properties_on_square_meter"
    t.index ["updated_at"], name: "index_properties_on_updated_at"
    t.index ["yield_rate"], name: "index_properties_on_yield_rate"
  end

  create_table "property_descriptions", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.string "language_code"
    t.text "content"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["language_code"], name: "index_property_descriptions_on_language_code"
    t.index ["property_id", "language_code"], name: "index_property_descriptions_on_property_id_and_language_code", unique: true
    t.index ["property_id"], name: "index_property_descriptions_on_property_id"
  end

  create_table "property_developers", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.integer "developer_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["developer_id"], name: "index_property_developers_on_developer_id"
    t.index ["property_id", "developer_id"], name: "index_property_developers_on_property_id_and_developer_id", unique: true
    t.index ["property_id"], name: "index_property_developers_on_property_id"
  end

  create_table "property_facilities", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.integer "facility_id"
    t.text "remarks"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["facility_id"], name: "index_property_facilities_on_facility_id"
    t.index ["property_id", "facility_id"], name: "index_property_facilities_on_property_id_and_facility_id", unique: true
    t.index ["property_id"], name: "index_property_facilities_on_property_id"
  end

  create_table "property_images", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.integer "floor_plan_id"
    t.string "file"
    t.string "url"
    t.string "category"
    t.string "region"
    t.string "bucket"
    t.string "access_key"
    t.text "source_url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["category"], name: "index_property_images_on_category"
    t.index ["floor_plan_id"], name: "index_property_images_on_floor_plan_id"
    t.index ["property_id"], name: "index_property_images_on_property_id"
  end

  create_table "property_points", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.string "language_code"
    t.text "content"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["language_code"], name: "index_property_points_on_language_code"
    t.index ["property_id", "language_code"], name: "index_property_points_on_property_id_and_language_code", unique: true
    t.index ["property_id"], name: "index_property_points_on_property_id"
  end

  create_table "property_searches", charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.decimal "price_max_usd", precision: 20, scale: 4
    t.decimal "price_min_usd", precision: 20, scale: 4
    t.decimal "price_max_jpy", precision: 20, scale: 4
    t.decimal "price_min_jpy", precision: 20, scale: 4
    t.decimal "square_meter_max", precision: 8, scale: 2
    t.decimal "square_meter_min", precision: 8, scale: 2
    t.date "constructed_at"
    t.integer "bedrooms_max"
    t.integer "bedrooms_min"
    t.string "title_ja"
    t.string "title_en"
    t.integer "country_id"
    t.integer "city_id"
    t.integer "prefecture_id"
    t.string "searchable_type", null: false
    t.bigint "searchable_id", null: false
    t.decimal "yield_rate_max", precision: 6, scale: 2
    t.decimal "yield_rate_min", precision: 6, scale: 2
    t.integer "building_type_mid"
    t.integer "score"
    t.integer "priority"
    t.boolean "show_to_jpn"
    t.boolean "is_rent"
    t.boolean "sold"
    t.datetime "data_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_property_searches_on_city_id"
    t.index ["country_id"], name: "index_property_searches_on_country_id"
    t.index ["prefecture_id"], name: "index_property_searches_on_prefecture_id"
    t.index ["searchable_type", "searchable_id"], name: "index_property_searches_on_searchable"
  end

  create_table "search_conditions", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.boolean "project", default: false
    t.string "country_code"
    t.integer "country_id"
    t.integer "prefecture_id"
    t.integer "city_id"
    t.integer "subarea_id"
    t.integer "street_id"
    t.string "currency_code"
    t.decimal "price_min", precision: 20, scale: 4
    t.decimal "price_max", precision: 20, scale: 4
    t.boolean "price_not_determined", default: false
    t.decimal "yield_rate_min", precision: 6, scale: 2
    t.decimal "yield_rate_max", precision: 6, scale: 2
    t.text "search_word"
    t.integer "bedrooms"
    t.integer "bathrooms"
    t.decimal "width_min", precision: 8, scale: 2
    t.decimal "width_max", precision: 8, scale: 2
    t.integer "floor_min"
    t.integer "floor_max"
    t.string "facility_ids"
    t.text "query_string"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["country_id"], name: "index_search_conditions_on_country_id"
    t.index ["project"], name: "index_search_conditions_on_project"
    t.index ["user_id"], name: "index_search_conditions_on_user_id"
  end

  create_table "seminar_email_lists", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "url_from"
    t.datetime "date_start", precision: nil
    t.datetime "date_finish", precision: nil
    t.string "place"
    t.boolean "active", default: true, null: false
    t.boolean "send_thanks", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["email"], name: "index_seminar_email_lists_on_email"
    t.index ["name"], name: "index_seminar_email_lists_on_name"
  end

  create_table "seminar_schedules", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "seminar_id", null: false
    t.datetime "start_at", precision: nil
    t.datetime "finish_at", precision: nil
    t.datetime "close_at", precision: nil
    t.integer "remaining_slot"
    t.string "content"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["seminar_id"], name: "index_seminar_schedules_on_seminar_id"
  end

  create_table "seminars", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "admin_user_id"
    t.integer "partner_id"
    t.integer "organizer_id"
    t.text "title"
    t.text "summary"
    t.text "content", size: :medium
    t.text "seminar_email_content"
    t.datetime "publish_date", precision: nil
    t.string "language_code"
    t.string "speaker_name", default: ""
    t.text "speaker_detail"
    t.integer "fee"
    t.string "currency_code"
    t.text "fee_remarks"
    t.text "time_remarks"
    t.string "slug", default: ""
    t.text "keywords"
    t.string "venue", default: ""
    t.string "venue_name", default: ""
    t.string "venue_address", default: ""
    t.text "venue_access"
    t.text "venue_link"
    t.integer "capacity"
    t.boolean "has_form", default: false, null: false
    t.string "zoho_form_id", default: "c53c941b-a643-4e17-be06-4854caba2cc3"
    t.integer "form_pattern", default: 1
    t.integer "remaining_slot"
    t.datetime "start_at", precision: nil
    t.datetime "finish_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["admin_user_id"], name: "index_seminars_on_admin_user_id"
    t.index ["finish_at"], name: "index_seminars_on_finish_at"
    t.index ["language_code"], name: "index_seminars_on_language_code"
    t.index ["organizer_id"], name: "index_seminars_on_organizer_id"
    t.index ["partner_id"], name: "index_seminars_on_partner_id"
    t.index ["start_at"], name: "index_seminars_on_start_at"
  end

  create_table "short_urls", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.text "original_url"
    t.string "short_url"
    t.integer "clicks", default: 0
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "sources", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.boolean "is_overseas", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "spams", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.integer "admin_user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["admin_user_id"], name: "index_spams_on_admin_user_id"
    t.index ["email"], name: "index_spams_on_email", unique: true
  end

  create_table "special_interviews", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "url"
    t.string "image_url"
    t.boolean "active", default: true, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "file"
    t.string "residence_name"
    t.string "customer_name"
    t.index ["title"], name: "index_special_interviews_on_title"
  end

  create_table "stations", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.string "line_name_en"
    t.string "line_name_ja"
    t.string "line_name_zh_cn"
    t.string "line_name_zh_tw"
    t.integer "country_id"
    t.string "hash_value"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "frk_id"
    t.index ["country_id"], name: "index_stations_on_country_id"
    t.index ["hash_value"], name: "index_stations_on_hash_value"
  end

  create_table "streets", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "subarea_id", null: false
    t.string "name_en", null: false
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["name_en"], name: "index_streets_on_name_en"
    t.index ["subarea_id"], name: "index_streets_on_subarea_id"
  end

  create_table "subareas", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "city_id", null: false
    t.string "name_en", null: false
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.decimal "latitude", precision: 18, scale: 15
    t.decimal "longitude", precision: 18, scale: 15
    t.string "postal_code"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["city_id"], name: "index_subareas_on_city_id"
    t.index ["name_en"], name: "index_subareas_on_name_en"
    t.index ["postal_code"], name: "index_subareas_on_postal_code"
  end

  create_table "taggings", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "tag_id"
    t.integer "property_id"
    t.integer "project_id"
    t.integer "post_id"
    t.integer "seminar_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["post_id"], name: "index_taggings_on_post_id"
    t.index ["project_id"], name: "index_taggings_on_project_id"
    t.index ["property_id"], name: "index_taggings_on_property_id"
    t.index ["seminar_id"], name: "index_taggings_on_seminar_id"
    t.index ["tag_id", "post_id"], name: "index_taggings_on_tag_id_and_post_id", unique: true
    t.index ["tag_id", "project_id"], name: "index_taggings_on_tag_id_and_project_id", unique: true
    t.index ["tag_id", "property_id"], name: "index_taggings_on_tag_id_and_property_id", unique: true
    t.index ["tag_id", "seminar_id"], name: "index_taggings_on_tag_id_and_seminar_id", unique: true
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name_en"
    t.string "name_ja"
    t.string "name_zh_cn"
    t.string "name_zh_tw"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "top_properties", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.integer "property_id"
    t.string "region"
    t.integer "place", default: 0
    t.integer "order"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "lp_url"
    t.index ["region"], name: "index_top_properties_on_region"
  end

  create_table "users", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "nationality"
    t.string "residence"
    t.string "language"
    t.integer "tel_country_code"
    t.string "tel"
    t.string "email", default: "", null: false
    t.string "budget"
    t.string "payment_method"
    t.string "expected_purchase_date"
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at", precision: nil
    t.datetime "confirmation_sent_at", precision: nil
    t.string "unconfirmed_email"
    t.string "provider"
    t.string "uid"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "deleted_at", precision: nil
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["deleted_at"], name: "index_users_on_deleted_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["nationality"], name: "index_users_on_nationality"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["residence"], name: "index_users_on_residence"
  end

  create_table "versions", id: :integer, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", options: "ENGINE=InnoDB ROW_FORMAT=DYNAMIC", force: :cascade do |t|
    t.string "item_type", null: false
    t.integer "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object", size: :long
    t.datetime "created_at", precision: nil
    t.index ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"
  end

  add_foreign_key "property_searches", "cities"
  add_foreign_key "property_searches", "countries"
  add_foreign_key "property_searches", "prefectures"
end
