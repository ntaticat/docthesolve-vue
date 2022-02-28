<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Chat from '../shared/Chat.vue';

onMounted(() => {
})

</script>

<template>
  <div class="w-full border-2 border-solid border-gray-300">
    <div class="w-full p-3">
      <div class="w-full py-3 flex flex-wrap justify-between items-baseline">
        <strong>Chat</strong>
      </div>
      <hr class="w-full border-b-2 border-solid border-gray-200" />
    </div>

    <div class="w-full p-3">
      <Chat />
    </div>
  </div>
</template>

<style>
</style>