class CreateRepSets < ActiveRecord::Migration[6.0]
  def change
    create_table :rep_sets do |t|
      t.float :weight
      t.integer :reps
      t.references :exercise_set, foreign_key: true

      t.timestamps
    end
  end
end
