class Workout < ApplicationRecord
    belongs_to :user
    has_many :exercise_sets, dependent: :destroy

    accepts_nested_attributes_for :exercise_sets, allow_destroy: true
end