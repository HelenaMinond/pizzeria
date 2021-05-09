<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">FG5</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/inventario" class="nav-link">Inventario</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/carrito" class="nav-link">Carrito</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ventas" class="nav-link">Ventas</router-link>
            </li>
          </ul>
        </div>
        <p>Tipo de Pizzas: {{ cantidadCarrito }} </p>
        <div @click="$router.push('/carrito')"><i class="fas fa-shopping-cart ms-2"></i></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["cantidadCarrito"]),
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
