import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import VueRouter from 'vue-router'
// import Routes from '..src/components/router/index'
import router from './router/index'


// Vue.use(VueRouter);

// const router = new VueRouter({
//   index:Routes
// })


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // router:router
}).$mount('#app')
