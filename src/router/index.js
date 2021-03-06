import Vue from 'vue'
import VueRouter from 'vue-router'
import CarsList from "../components/CarsList.vue";
import AddCar from "../components/AddCar.vue";
import Car from "../components/Car.vue";
import Panier from "../components/Panier.vue";
import Favoris from "../components/Favoris.vue";


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
            {
                path: "/panier/",
                name: "panier",
                component: Panier,
                props: true
            },{
                path: "/favoris/",
                name: "favoris",
                component: Favoris,
                props: true
            }

        ]
    },
    {
        path: "/add",
        name: "add",
        component: AddCar
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
