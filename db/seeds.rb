# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User
user = User.create(email: "user@mail.com", password: "12341234", password_confirmation: "12341234")
session = Session.create(user_id: user.id, date: Date.today)

# Exercises
bench_press = Exercise.create(name: "Bench Press", description: "flat barbell")
squat = Exercise.create(name: "Squat", description: "barbell")
deadlift = Exercise.create(name: "Deadlift", description: "conventional")

# Bench Press Set
exercise_set = ExerciseSet.create(session_id: session.id, exercise_id: bench_press.id)
rep_one = RepSet.create(weight: 150.0, reps: 10, exercise_set_id: exercise_set.id)
rep_two = RepSet.create(weight: 200.0, reps: 10, exercise_set_id: exercise_set.id)
