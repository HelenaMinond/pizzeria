<template>
  <div class="container">
    <div class="row">

      <!-- Titulo -->
      <div class="col-12">
        <h1>Frontendnini a la G5</h1>
      </div>
      <!-- Final Titulo -->

      <!-- Cards -->
      <div class="col-12">
        <div class="row">
          <!-- Card -->
          <div class="col-4" v-for="val in pizzas" :key="val.name">
            <div class="card">
              <!-- Imagen -->
              <img :src="val.img" class="card-img-top" alt="Imagen Pizza">
              <!-- Nombre, descripción, ingredintes, precio y boton-->
              <div class="card-body">
                <!-- Nombre -->
                <h5 class="card-title text-capitalize">{{ val.name }}</h5>
                <!-- Descripción -->
                <p class="card-text">{{ val.desc }}</p>
                <!-- Ingredientes -->
                <p>Ingredientes:</p>
                <ul>
                  <li class="text-capitalize" v-for="(el, i) in val.ing" :key="i">{{ el.name }}</li>
                </ul>
                <!-- Precio -->
                <p>Precio: ${{ val.price }}</p>
                <!-- Boton -->
                <div class="row">
                  <div class="col-6">
                    <input class="w-100 h-100" type="text">
                  </div>
                  <div class="col-6">
                    <a href="#" class="btn btn-primary">Agregar</a>
                  </div>
                </div>
              </div>
              <!-- Final Nombre, descripción, ingredintes, precio y boton -->
            </div>
          </div>
          <!-- Final Card -->
        </div>
      </div>
      <!-- Final Cards -->

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["pizzas"])
  },
  methods: {
    ...mapActions(["obtenerData"])
  },
  created () {
    this.obtenerData();
  },
}
</script>

<style>

</style>