<template>
  <div class="container">
    <!-- Titulo -->
    <div class="row">
      <div class="col-12">
        <h1 class="mt-5 mb-4 pt-4 text-center">Inventario de Productos</h1>
      </div>
    </div>
    <!-- Final titulo -->
    <!-- Tabla -->
    <div class="row">
      <div class="col-12">
        <table class="table">
          <!-- Titulares tabla -->
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <!-- Contenido tabla cuando NO hay inventario -->
          <tbody v-if="productos && productos.length === 0">
            <tr>
              <td class="text-center" colspan="5">Sin productos en el inventario</td>
            </tr>
          </tbody>
          <!-- Contenido tabla cuando SI hay inventario -->
          <tbody v-else>
            <!-- Contenido tabla -->
            <tr v-for="(val, i) in productos" :key="i" :style="val.stock === 0 ? 'backgroundColor:red' : ''">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ val.id }}</td>
              <td class="text-capitalize">{{ val.name }}</td>
              <td>${{ val.price }}</td>
              <td>{{ val.stock }}</td>
              <td><button @click="borrarPizza(val.id)" class="btn btn-warning">Borrar Registro</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Final tabla -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Inventario",
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapActions(["borrarPizzas"]),
    borrarPizza(id) {
      this.borrarPizzas(id);
    }
  },
}
</script>