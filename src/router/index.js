import Vue from 'vue'
import VueRouter from 'vue-router'
import CarsList from "../components/CarsList.vue";
import AddCar from "../components/AddCar.vue";
import Car from "../components/Car.vue";
import Panier from "../components/Panier.vue";
import CarPanier from "../components/CarPanier.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "cars",
        alias: "/cars",
        component: CarsList,
        children: [
            {
                path: "/car/",
                name: "car-details",
                component: Car,
                props: true
            },

        ]
    },
    {
        path: "/add",
        name: "add",
        component: AddCar
    },
    {
        path: "/panier",
        name: "panier",
        component: Panier
    },
    {
        path: "/carPanier",
        name: "carPanier",
        component: CarPanier
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
