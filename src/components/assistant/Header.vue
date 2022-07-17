<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import ProblemItem from './ProblemItem.vue';

export default defineComponent({
  components: { ProblemItem },
  data() {
    return {
      problemsArr: [1, 1, 1, 1, 1, 1, 1]
    }
  }
})

</script>

<template>
  <header class="bg-black/90 text-white">
    <h1 class="text-4xl pt-2">DocTheSolve</h1>
    <!-- Menu de navegación -->
    <nav class="py-2">
      <RouterLink class="inline mx-2 text-gray-300" to="/">Inicio</RouterLink>
      <RouterLink class="inline mx-2 text-gray-300" to="/incidences">Incidencias</RouterLink>
      <RouterLink class="inline mx-2 text-gray-300" to="/problems">Problemas</RouterLink>
      <RouterLink class="inline mx-2 text-gray-300" to="/solutions">Soluciones</RouterLink>
    </nav>
  </header>
</template>

<style>
</style>