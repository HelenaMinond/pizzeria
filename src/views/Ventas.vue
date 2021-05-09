<template>
  <div class="container">
    <!-- Titulo -->
    <div class="row">
      <div class="col-12">
        <h1 class="mt-5 mb-4 pt-4 text-center">Ventas de Productos</h1>
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
              <th scope="col">Cantidad Vendida</th>
            </tr>
          </thead>
          <!-- Contenido tabla cuando NO hay inventario -->
          <tbody v-if="ventas && ventas.length === 0">
            <tr>
              <td class="text-center" colspan="5">Aún no hay ventas realizadas</td>
            </tr>
          </tbody>
          <!-- Contenido tabla cuando SI hay inventario -->
          <tbody v-else>
            <!-- Contenido tabla -->
            <tr v-for="(val, i) in ventas" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ val.id }}</td>
              <td class="text-capitalize">{{ val.nombre }}</td>
              <td>${{ val.precioSubtotal }}</td>
              <td>{{ val.cantidadVendida }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Final tabla -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ventas",
  computed: {
    ...mapState(["ventas"]),
  },
}
</script>