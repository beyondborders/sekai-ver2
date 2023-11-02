class PostRelatedPost < ApplicationRecord
  belongs_to :post
  belongs_to :related_post, class_name: "Post"
  
  validates :post_id, presence: true
  validates :related_post_id, presence: true
  validates :related_post_id, uniqueness: { scope: [:post_id, :related_post_id] }
  validate  :related_post_id_must_be_different

  private

  def related_post_id_must_be_different
    if self.post_id == self.related_post_id
      errors.add(:base, "post_id and related_post_id must be different")
    end
  end
end
