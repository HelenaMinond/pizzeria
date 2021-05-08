import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [],
  },
  mutations: {
    cargarData(state, payload) {
      state.pizzas = payload;
    },
  },
  actions: {
    async obtenerData({ commit }) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        const request = await axios(url);
        const pizzas = request.data;
        commit("cargarData", pizzas)
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
