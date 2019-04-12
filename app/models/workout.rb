class Workout < ApplicationRecord
    belongs_to :user
    has_many :exercise_sets, dependent: :destroy
end