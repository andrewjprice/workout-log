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

  var element = document.getElementById('workouts_index')

  if (element != null) {
    var workouts = JSON.parse(element.dataset.workouts)

    const app = new Vue({
      el: element,
      data: () => {
        return {
          workouts: workouts
        }
      },
      methods: {
          deleteWorkout: function(workout) {
            this.$http({
                url: '/workouts/' + workout.id,
                method: 'delete'
            }).then(response => {
              Turbolinks.visit('/workouts')
              return
            }).catch((err) => {
              console.log(err)
              return
            })
          }
      }
    })
  }
})