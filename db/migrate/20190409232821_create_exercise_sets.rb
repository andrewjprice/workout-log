class CreateExerciseSets < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_sets do |t|
      t.string :name
      t.references :workout, foreign_key: true

      t.timestamps
    end
  end
end
