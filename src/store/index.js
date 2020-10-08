import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        carPanier:[]
    },
    getters: {
         getCars: state => {
            return `${state.carPanier}`
        }
    },
    mutations: {
        ajoutCar(state, car) {
            state.carPanier=car;
            //state.carPanier=Array.from(new Set(state.carPanier));
        }
    },
    actions: {
        majPanier({ commit }, car) {
            commit("ajoutCar", car)
        }
    },
    modules: {}
})
