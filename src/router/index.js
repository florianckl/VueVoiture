import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CarsList from "../components/CarsList.vue";
import AddCar from "../components/AddCar.vue";
import SearchCars from "../components/SearchCars.vue";
import Car from "../components/Car.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
        path: "/",
        name: "cars",
        alias: "/cars",
        component: CarsList,
        children: [
            {
                path: "/car/:id",
                name: "car-details",
                component: Car,
                props: true
            }
        ]
    },
    {
        path: "/add",
        name: "add",
        component: AddCar
    },
    {
        path: "/search",
        name: "search",
        component: SearchCars
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
