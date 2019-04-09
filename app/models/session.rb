class Session < ApplicationRecord
  belongs_to :user
  has_many :exercise_sets
end
