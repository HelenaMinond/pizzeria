import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { db } from "../../firebase";

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
      //Productos con stock mayor a cero.
      const productos = state.productos.filter(pizza => pizza.stock > 0);
      return !productos ? [] : productos;
    },
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
      //Variables
      const agregar = payload.id;
      const cantidad = 1;
      const nombre = payload.nombre;
      const precio = payload.precio;
      const subtotal = precio * cantidad;
      //Función
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
        //Iteración de carrito
        const venta = state.carrito.map(obj => {
          const obj2 = {
            id: obj.id,
            nombre: obj.nombre,
            precioSubtotal: obj.subtotal,
            cantidadVendida: obj.cantidad,
          }
          return obj2;
        })
        state.ventas = state.ventas.concat(venta); //Mostrar todas las ventas realizadas al clickear botón comprar
        //Iteración de productos
        state.productos.forEach(producto => {
          const id = producto.id;
          state.carrito.forEach(pizza => {
            if(pizza.id === id) {
              producto.stock = producto.stock - pizza.cantidad;
            }
          })
        })
      }
      state.carrito = []; //Limpieza de carrito cuando se clickea botón comprar
    },
    // Mutación para guardar API en Firebase
    guardarPizzasEnDB(state) {
      setTimeout(() => {
        try {
          const productos = state.productos;
          productos.forEach(async (producto) => {
            await db.collection("pizzas").add(producto)
          })
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    },
    agregarNuevaPizza(state, payload) {
      // Validación de que ID no exista, si efectivamente no existe ejecutará el push
      const existe = state.productos.find(pizza => pizza.id === payload.id);
      if (!existe) state.productos.push(payload);
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
      } catch (error) {
        console.log(error);
      }
    },
    // Acción para mofificar la data en Firebase
    // async setDataPizzasDB({ commit }) { 
    //   commit("guardarPizzasEnDB")
    // },
    async crearNuevaPizza({ commit }, payload) {
      const pizza = payload;
      if (!pizza) return;
      // Actualizar state
      commit("agregarNuevaPizza", pizza);
      // Actualizar Firebase
      // Terea: Encontrar error del siguiente try catch
          // try {
          //    // Validación de que ID no exista
          //   const req = await db.collection("pizza").get();
          //   req.docs.forEach(obj => {
          //     const pizzaFirebase = obj.data();
          //     const idFirebase = pizzaFirebase.id;
          //     if(!idFirebase === pizza.id) return; // esto si id no existe
          //     await db.collection("pizzas").add(pizza); // esto si id si existe
          //   })
          // } catch (error) {
          //   console.log(error);
      await db.collection("pizzas").add(pizza)
    },
    async borrarPizzas({ commit }, payload) {
      commit("");
      console.log(payload);
      await db.collection("pizzas").doc("DHQduUtDge6GpfrWGFNz").delete();
    },
  },
});

//Desafio:
//1. Traer la data de la API
//2. Guardar solo 1 vez la data de la API en Firebase (cargarla solo una vez, hacer validación si se quiere)
// 2.1. Hacer un get de la data de Firebase para obtenerla (si quiere puede guardarla en arreglo productos o crear otra variable, con el fin de obtener ID de documentos)
//3. Crear interfaz (formulario) para crear nuevas pizzas.
// 3.1 Añadir ingredintes e imagenes (puede ser cualquier imagen)
// 3.2. Validaciones:
//  3.2.1. Que el ID no exista previamente tanto en Vuex (state) como en Firebase
//4. Añadir a la tabla un botón de eliminar pizza (todo el registro)
// 4.1. Pasar el ID de firebase para eliminar el documento
// 4.2. validar que la pizza exista previamente
//5. Opcional: Actuliazcion de stock de la pizza
