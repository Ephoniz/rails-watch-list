class List < ApplicationRecord
  has_many :bookmarks
  has_many :movies, through: :bookmarks, dependent: :destroy

  validates :image_url, presence: true
  validates :name, presence: true, uniqueness: true
end
