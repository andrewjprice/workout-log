class CreateExerciseSets < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_sets do |t|
      t.references :session, foreign_key: true
      t.references :exercise, foreign_key: true
      
      t.timestamps
    end
  end
end
