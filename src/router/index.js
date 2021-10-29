// import hello from './components/hello.vue';
// import Todo_app from './components/Todo_app.vue';

// export default [
//      { path:'/', component:hello},
//      { path:'/', component:Todo_app}
// ]

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import DashboardHome from '../views/Dashboard/DashboardHome.vue' //first way to import
// import UserDashboard from '../views/Dashboard/UserDashboard.vue' 

Vue.use(VueRouter)

const routes = [
     {
          path: '/',
          name: 'home',
          component: Home
     },
     {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about' */ '../views/About/About.vue'),
          children: [
          {
               path: 'enyata-say',
               name: 'enyata-say',
               component: () => import(/* webpackChunkName: "about' */ '../views/About/Enyata.vue'),
          },
          ],
     },
     {
          path: '/contact',
          name: 'contact',
          component: () => import(/* webpackChunkName: "about' */ '../views/Contact.vue')
     },
     // {
     //      path: '/dashboard',
     //      name: 'Dashboard',
     //      //route level code splitting
     //      //this generates a seperate chunk[about.[hash].js] for this route
     //      //which is lazy-loaded when the route is visited
     //      component: () => import(/* webpackChunkName: "about' */ '../views/Dashboard/index.vue'),
     //      children:[
     //           {
     //                path: 'dashboard-home',
     //                name: 'dashboard-home',
     //                component: () => import(/* webpackChunkName: "about' */ '../views/Dashboard/DashboardHome.vue'),
     //           },
     //           {
     //                path: 'user-dashboard',
     //                name: 'user-dashboard',
     //                component: () => import(/* webpackChunkName: "about' */ '../views/Dashboard/UserDashboard.vue'),
     //                children: [
     //                     {
     //                          path: ':id',
     //                          name: 'single-user',
     //                          component: () => import(/* webpackChunkName: "about' */ '../views/Dashboard/SingleUser.vue'),
     //                     }
     //                ]
     //           },
     //      ]
     // },
     // {
     //      path: '*',
     //      name: '404',
     //      component: () => import(/* webpackChunkName: "about' */ '../views/404.vue'),
     // },
     // {
     //      path: '/user-*',
     //      name: '404',
     //      component: () => import(/* webpackChunkName: "about' */ '../views/User404.vue'),
     // },
]

const router = new VueRouter ({
     mode: 'history',
     base: process.env.BASE_URL,
     routes
})

export default router