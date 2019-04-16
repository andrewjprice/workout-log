class ExerciseSet < ApplicationRecord
  belongs_to :workout
  has_many :rep_sets, dependent: :destroy

  accepts_nested_attributes_for :rep_sets, allow_destroy: true
end
