class Developer < ApplicationRecord
  # has_many :developer_users
  has_many :property_developers, dependent: :destroy
  has_many :properties, through: :property_developers
  has_many :developer_images
  belongs_to :country

  scope :type_is, -> (company_type) { where(company_type: company_type) }
  scope :only_sellers, -> { where(company_type: 'seller') }
  scope :only_constructors, -> { where(company_type: 'constructor') }
  scope :only_managements, -> { where(company_type: 'management') }
  scope :order_by_name_en, -> { order(name_en: :asc) }
  
  EMAIL_REGEXP = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  COMPANY_TYPES = {
    'Seller'      => 'seller',
    'Constructor' => 'constructor',
    'Management'  => 'management'
  }.freeze

  validates :name_en, presence: true, length: { maximum: 255, allow_blank: true }
  validates :tel, :email, :name_ja, :name_zh_cn, :name_zh_tw, :notary_license_number,
            allow_blank: true, length: { maximum: 255, allow_blank: true }
  validates :listed_company, allow_blank: true, inclusion: { in: [true, false] }
  validates :email, allow_blank: true, format: { with: EMAIL_REGEXP }
  validates :company_type, presence: true, inclusion: { in: COMPANY_TYPES.values }
  validates :country_id, allow_blank: true, numericality: { only_integer: true }


  # Returns name in subdomain locale. If nil, returns name_en.
  def name(locale=I18n.locale)
    eval("self.name_#{locale}")
  end

  # Returns name in subdomain locale. If nil, returns name_en.
  def description(locale=I18n.locale)
    eval("self.description_#{locale}")
  end

  def seller?
    company_type == 'seller'
  end
end
