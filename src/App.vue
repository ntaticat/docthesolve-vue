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
  <div class="relative">
    <RouterView />
  </div>
</template>

<style>
</style>