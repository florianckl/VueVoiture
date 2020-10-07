import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        carPanier:[]
    },
    getters: {
        getId: state => {
            return `${state.carPanier}`
        }
    },
    mutations: {
        ajoutCar(state, car) {
            state.carPanierId.push(car);
        }
    },
    actions: {
        majPanier({ commit }, car) {
            commit("ajoutCar", car)
        }
    },
    modules: {}
})
