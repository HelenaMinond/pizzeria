<template>
  <div id="app">
      <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["obtenerData" /*, "setDataPizzasDB"*/]),
  },
  created () {
    this.obtenerData();
    // this.setDataPizzasDB();
  },
};
</script>

<style lang="scss">
div {
  font-family: 'Courgette', cursive;
}
</style>
