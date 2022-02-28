<script setup lang="ts">
import { ref, onMounted } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

onMounted(() => {
  console.log("Hola Mundo");
})

</script>

<template>
  <div class="about">
    <h1>Hola mundo desde esta página</h1>
    <button @click="increment">Contador es: {{ count }}</button>
  </div>
</template>

<style>
</style>