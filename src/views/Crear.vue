<template>
  <div class="container pt-5">
    <div class="row pt-4">
      <div class="col-12">
        <!-- Título -->
        <h1 class="text-center">Crear Pizzas</h1>
        <!-- Formulario -->
        <form>
          <!-- ID -->
          <div class="mb-3">
            <label class="form-label">ID</label>
            <input type="text" class="form-control" v-model="pizza.id">
          </div>
          <!-- Nombre -->
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="pizza.name">
          </div>
          <!-- Descripción -->
          <div class="mb-3">
            <label class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="pizza.desc">
          </div>
          <!-- Precio -->
          <div class="mb-3">
            <label class="form-label">Precio</label>
            <input type="text" class="form-control" v-model="pizza.price">
          </div>
          <!-- Imagen -->
          <div class="mb-3">
            <label class="form-label">Imagen</label>
            <input type="text" class="form-control">
          </div>
          <!-- Ingredientes -->
          <div class="mb-3">
            <label class="form-label">Ingredientes</label>
            <input type="text" class="form-control">
          </div>
        </form>
        <!-- Botón -->
        <button @click="crearPizza" class="btn btn-success mb-3">Crear Pizza</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Crear",
  data() {
    return {
      pizza: {
        id: "",
        name: "",
        desc: "",
        price: "",
      }
    }
  },
  methods: {
    ...mapActions(["crearNuevaPizza"]),
    crearPizza() {
      // Con esta función se pasa información ingresada por formulario al store
      const pizza = this.pizza;
      if (!pizza.id || !pizza.name || !pizza.desc || !pizza.price) return; //Si faltan los datos, no hará nada, también se puede colocar un alert que falta completar con dato solicitado
      this.crearNuevaPizza(pizza)
    },
  },
}
</script>