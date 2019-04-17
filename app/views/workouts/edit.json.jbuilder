workout = @workout

json.id workout.id

json.workout do
  json.(workout, :user_id, :title, :date)  
  json.exercise_sets_attributes workout.exercise_sets do |exercise|
    json.(exercise, :id, :name, :_destroy)
    json.rep_sets_attributes exercise.rep_sets do |set|
      json.(set, :id, :weight, :reps)
    end
  end
end
