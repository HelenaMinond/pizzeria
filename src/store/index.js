import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
  },
  getters: {
    cantidadCarrito(state) {
      return state.carrito.length;
    },
    productosFiltrados(state) {
      //Obtener solamente los productos con stock mayor a cero
      const productos = state.productos.filter(pizza => pizza.stock > 0);
      return !productos ? [] : productos;
    }
  },
  mutations: {
    cargarData(state, payload) {
      state.productos = payload;
    },

    agregarPizza(state, payload) {
      const agregar = payload.id;
      const cantidad = 1;
      const nombre = payload.nombre;
      const precio = payload.precio;
      const subtotal = precio * cantidad;

      const finder = state.carrito.find((obj) => obj.id === agregar);

      if (!finder) {
        const obj = {
          id: agregar,
          cantidad: cantidad,
          nombre: nombre,
          precio: precio,
          subtotal: subtotal,
        };
        state.carrito.push(obj);
      } else {
        finder.cantidad = cantidad + finder.cantidad;
        finder.subtotal = finder.cantidad * precio;
      }
    },

  },
  actions: {
    async obtenerData({ commit }) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        const request = await axios(url);
        const pizzas = request.data;

        const pizzasStock = pizzas.map((obj) => {
          obj.stock = 10;
          return obj;
        })

        commit("cargarData", pizzasStock)
        //console.log(request);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
