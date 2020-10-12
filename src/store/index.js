import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carFavori:[],
        carPanier:[]
    },
    getters: {
         getCarsFavoris: state => {
            return `${state.carFavori}`
        },
        getCarsPanier: state => {
            return `${state.carPanier}`
        }
    },
    mutations: {
        ajoutCarFavoris(state, id) {
            state.carFavori.push(id)
            //console.log(state.carFavori+"")
            state.carFavori=Array.from(new Set(state.carFavori));
        },
        ajoutCarPanier(state, id) {
            state.carPanier.push(id);
            state.carPanier=Array.from(new Set(state.carPanier));
        }
    },
    actions: {
        carFavori({ commit }, id) {
            commit("ajoutCarFavoris", id)
        },
        carPanier({ commit }, id) {
            commit("ajoutCarPanier", id)
        }
    },
    modules: {}
})
