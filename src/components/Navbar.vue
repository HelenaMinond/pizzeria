<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">FG5</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
            <li class="nav-item">
              <router-link to="/crear" class="nav-link">Crear Pizzas</router-link>
            </li>
          </ul>
        </div>
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
