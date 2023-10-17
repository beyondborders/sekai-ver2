# encoding: utf-8

class ImageUploader < CarrierWave::Uploader::Base
  # Change the bucket name depends on the model by overriding the initialize method
  def initialize(*)
    super
    self.fog_directory = fog_directory + '-' + model.class.to_s.underscore.tr('_', '-')
    # If you want to change the bucket for the specific model, change like this.
    # if model.is_a?(BuildingImage)
    #   self.fog_directory = "your_fog_directory_name"
    # end
  end

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  # storage :file
  storage :fog unless Rails.env.test?

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    return "#{Rails.root}/spec/support/uploads/tmp" if Rails.env.test?
    # "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    "#{model.id}/"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  process :fix_exif_rotation

  def fix_exif_rotation
    manipulate! do |img|
      img.auto_orient!
      img
    end
  end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  process resize_to_limit: [1200, 1200]
  process :quality => 80

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process :resize_to_fit => [50, 50]
  # end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    "#{secure_token}.#{file.extension}" if original_filename.present?
  end

  protected

  def secure_token
    var = :"@#{mounted_as}_secure_token"
    if Rails.env.test?
      original_filename if original_filename.present?
    else
      model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
    end
  end
end
