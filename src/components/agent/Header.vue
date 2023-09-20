<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
})

</script>

<template>
  <header class="sticky top-0 left-0 bg-gray-300  text-white">
    <div class="bg-black/90">
      <h1 class="text-4xl pt-2">DocTheSolve</h1>
      <!-- Menu de navegación -->
      <nav class="py-2">
        <RouterLink class="inline mx-2 text-gray-300" to="/">Inicio</RouterLink>
        <RouterLink class="inline mx-2 text-gray-300" to="/tickets">Tickets</RouterLink>
        <RouterLink class="inline mx-2 text-gray-300" to="/problems">Problemas</RouterLink>
        <RouterLink class="inline mx-2 text-gray-300" to="/solutions">Soluciones</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style></style>