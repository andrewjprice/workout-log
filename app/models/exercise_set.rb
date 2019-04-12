class ExerciseSet < ApplicationRecord
  belongs_to :workout
  has_many :rep_sets, dependent: :destroy
end
