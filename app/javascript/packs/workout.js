/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.getElementById('workout-form')
//   const app = new Vue({
//     el,
//     render: h => h(App)
//   })

//   console.log(app)
// })


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var element = document.getElementById('workout-form')

  if (element != null) {
    var workout = gon.workout

    const app = new Vue({
      el: element,
      data: () => {
        return {
          workout: workout
        }
      },
      methods: {
        addExercise: function() {
          workout.exercise_sets_attributes.push({
            id: null,
            name: "",
            _destroy: null,
            rep_sets_attributes: [{}]
          })
        },
        addSet: function(exercise) {
          exercise.rep_sets_attributes.push({
            id: null,
            weight: 0.0,
            reps: 0,
            _destroy: null
          })
        },
        save: function(event) {
          if (gon.id == null) {
            this.$http.post('/workouts', {workout: workout})
            .then(response => {
              Turbolinks.visit('/workouts')
              return
            }).catch((err) => {
              console.log(err)
              return
            })
          } else {
            this.$http.patch('/workouts/' + gon.id, {workout: workout})
            .then(response => {
              Turbolinks.visit('/workouts')
              return
            }).catch((err) => {
              console.log(err)
              return
            })
          }
        },
        removeExercise: function(index) {
          this.workout.exercise_sets_attributes.splice(index, 1)
        },
        removeSet: function(exercise, index) {
          exercise.rep_sets_attributes.splice(index, 1)
        }
      }
    })
  }
})
