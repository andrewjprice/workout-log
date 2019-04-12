# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(email: "user@mail.com", password: "12341234", password_confirmation: "12341234")
workout = Workout.create(title: "A", date: Date.today, user_id: user.id)
exercise_set = ExerciseSet.create(name: "Bench Press", workout_id: workout.id)
first_set = RepSet.create(weight: 150.0, reps: 10, exercise_set_id: exercise_set.id)
second_set = RepSet.create(weight: 200.0, reps: 8, exercise_set_id: exercise_set.id)

