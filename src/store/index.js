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
        ajoutCar(state, id) {
            state.carPanier.push(id);
        }
    },
    actions: {
        majPanier({ commit }, id) {
            commit("ajoutCar", id)
        }
    },
    modules: {}
})
