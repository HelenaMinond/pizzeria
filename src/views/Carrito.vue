<template>
  <div class="container">

    <!-- Titulo -->
    <div class="row">
      <div class="col-12">
        <h1>Carrito de Compras</h1>
      </div>
    </div>
    <!-- Final titulo -->

    <!-- Tabla -->
    <div class="row">
      <div class="col-12">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>

          <tbody v-if="carrito && carrito.length === 0">
            <tr>
              <td colspan="5">Sin productos en el carrito</td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr v-for="(val, i) in carrito" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ val.nombre }}</td>
              <td>{{ val.precio }}</td>
              <td>{{ val.cantidad }}</td>
              <td>{{ val.subtotal }}</td>
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
  name: "Carrito",
  computed: {
    ...mapState(["carrito"]),
  },
}
</script>

<style>

</style>