import Vue from 'vue'
import VueRouter from 'vue-router'
import CarsList from "../components/CarsList.vue";
import AddCar from "../components/AddCar.vue";
import SearchCars from "../components/SearchCars.vue";
import Car from "../components/Car.vue";

Vue.use(VueRouter)

const routes = [
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
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
