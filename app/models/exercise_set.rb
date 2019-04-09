class ExerciseSet < ApplicationRecord
  belongs_to :session
  has_one :exercise
  has_many :rep_sets
end
