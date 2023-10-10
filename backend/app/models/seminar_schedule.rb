class SeminarSchedule < ApplicationRecord
  belongs_to :seminar
  
  scope :active, -> { where('start_at >= ?', Time.zone.today) }
  scope :by_closest_date, lambda {
    order(Arel.sql("CASE WHEN seminar_schedules.start_at > NOW() THEN 0 ELSE 1 END ASC, CASE WHEN seminar_schedules.start_at <= NOW() THEN seminar_schedules.start_at END DESC"))
  }

  def disabled?
    start_at.nil? || start_at < Time.zone.now || remaining_slot.nil? || remaining_slot <= 0 || (close_at.present? && close_at < Time.zone.now)
  end

  def seminar_start_end
    return '' if start_at.blank? || finish_at.blank?
    "#{start_at.strftime('%Y %B-%d ( %a ) %H:%M')} ~ #{finish_at.strftime('%H:%M')}"
  end
end
