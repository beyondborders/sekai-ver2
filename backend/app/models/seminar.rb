class Seminar < ApplicationRecord

  has_many :post_images
  has_many :eyecatch_images, -> { where image_type: 'eyecatch' }, class_name: 'PostImage', foreign_key: :seminar_id
  has_many :seminar_schedules

  scope :by_latest_start, -> {
    # joins(:seminar_schedules).order("seminar_schedules.start_at DESC")
    joins(:seminar_schedules).order(Arel.sql("coalesce(seminar_schedules.start_at, seminars.start_at)").desc)
  }

  scope :by_closest_date, lambda {
    joins(:seminar_schedules).order(Arel.sql("CASE WHEN seminar_schedules.start_at > NOW() THEN 0 ELSE 1 END ASC, CASE WHEN seminar_schedules.start_at <= NOW() THEN seminar_schedules.start_at END DESC"))
  }
  

  def published?
    publish_date <= Time.zone.today
  end

  def finished?
    seminar_latest_finish_at.nil? || seminar_latest_finish_at < Time.zone.now
  end

  def has_slot?
    seminar_schedules.where("remaining_slot > ?",0).exists?
    # seminar_schedules.pluck(:remaining_slot).any? { |remaining_slot| remaining_slot.present? && remaining_slot > 0 }
  end

  def seminar_closest_start_at
    seminar_schedules.where('start_at > ?', Time.zone.now).order('start_at ASC').limit(1).pluck(:start_at).first || start_at
  end

  def seminar_latest_finish_at
    seminar_schedules.order('finish_at DESC').limit(1).pluck(:finish_at).first || finish_at
  end

  def self.ransackable_attributes(auth_object = nil)
    ["capacity", "content", "created_at", "currency_code", "fee", "fee_remarks", "finish_at", "form_pattern", "has_form", "keywords", "language_code", "organizer_id", "partner_id", "publish_date", "remaining_slot", "seminar_email_content", "slug", "speaker_detail", "speaker_name", "start_at", "summary", "time_remarks", "title", "updated_at", "venue", "venue_access", "venue_address", "venue_link", "venue_name", "zoho_form_id"]
  end
  
end
