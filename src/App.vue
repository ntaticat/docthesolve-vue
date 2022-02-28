<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />
  
  <header>
    <h1 class="text-4xl">DocTheSolve</h1>
    <!-- Menu de navegación -->
    <nav>
      <RouterLink class="inline mx-2 text-gray-500" to="/">Inicio</RouterLink>
      <RouterLink class="inline mx-2 text-gray-500" to="/incidences">Tabla de Incidencias</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
</style>
