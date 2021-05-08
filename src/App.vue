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
    ...mapActions(["obtenerData"]),
  },
  created () {
    this.obtenerData();
  },
};
</script>


<style lang="scss">

</style>
