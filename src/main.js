import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/AnimalsPage.vue'
import Facts from './components/AnimalFacts.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/facts', component: Facts }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
