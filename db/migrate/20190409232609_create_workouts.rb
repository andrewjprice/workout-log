class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.string :title
      t.datetime :date
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
