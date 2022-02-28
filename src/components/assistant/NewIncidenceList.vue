<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NewIncidenceItem from './NewIncidenceItem.vue';

const incidenceArr = [1,1,1,1,1,1,1];

onMounted(() => {
})

</script>

<template>
  <ul class="">
    <NewIncidenceItem v-for="(item, index) in incidenceArr" :key="index"></NewIncidenceItem>
  </ul>
</template>

<style>
</style>