<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NewIncidenceList from '../../components/assistant/NewIncidenceList.vue';
import AssistantChat from '../../components/assistant/AssistantChat.vue';

onMounted(() => {
})

</script>

<template>
  <div class="w-full h-full flex flex-wrap justify-center">
    <div class="w-full text-center py-3">
      <h1 class="text-2xl">Tabla de Incidencias | Asistente Técnico</h1>
    </div>

    <!-- <div class="w-3/12"></div> -->
    <div class="w-7/12">
      <NewIncidenceList />
    </div>

    <!-- Chat -->
    <div class="sticky top-0 w-3/12 h-screen">
      <AssistantChat />
    </div>
  </div>
</template>

<style>
</style>