import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
    ventas: [],
  },
  getters: {
    cantidadCarrito(state) {
      return state.carrito.length;
    },
    productosFiltrados(state) {
      //Obtener solamente los productos con stock mayor a cero
      const productos = state.productos.filter(pizza => pizza.stock > 0);
      return !productos ? [] : productos;
    },
    //REVISAR - NO FUNCIONA
    totalCarrito(state) {
      const carrito = state.carrito;
      if (carrito.length === 0) return 0;
      const suma = carrito.reduce(((accumulator, pizza) => accumulator + pizza.subtotal), 0);
      return suma;
    },
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
          cantidad,
          nombre,
          precio,
          subtotal,
        };
        state.carrito.push(obj);
      } else {
        finder.cantidad = cantidad + finder.cantidad;
        finder.subtotal = finder.cantidad * precio;
      }
    },
    comprar(state) {
      const respuesta = confirm("Selecciona 'Aceptar' para comprar.");
      if(respuesta) {
        //console.log(respuesta)
        const venta = state.carrito.map(obj => {
          const obj2 = {
            id: obj.id,
            nombre: obj.nombre,
            precioSubtotal: obj.subtotal,
            cantidadVendida: obj.cantidad,
          }
          return obj2;
        })
        state.ventas = venta;

        state.productos.forEach(producto => {
          const id = producto.id;

          state.carrito.forEach(pizza => {
            if(pizza.id === id) {
              producto.stock = producto.stock - pizza.cantidad;
            }
          })
        })
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
