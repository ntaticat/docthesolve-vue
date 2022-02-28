<script setup lang="ts">
import { ref, onMounted } from 'vue';

onMounted(() => {
})

</script>

<template>
  <div class="w-full border-2 border-solid border-gray-200">
    <div
      class="w-full flex flex-nowrap items-center border-b-2 border-solid border-gray-200 py-1 px-2"
    >
      <div class>
        <img
          class="w-14 rounded-full"
          src="https://pbs.twimg.com/media/E00dat2WUAM46L1.jpg"
          alt="Imagen"
        />
      </div>
      <div class="px-2 text-sm w-full">
        <span>Rafael Estrada</span>
      </div>
      <div class>
        <img
          class="w-10 rounded-full"
          src="https://icon-library.com/images/three-line-menu-icon/three-line-menu-icon-11.jpg"
          alt="Imagen"
        />
      </div>
    </div>

    <div class="w-full h-48 overflow-y-auto flex flex-col-reverse">
      <div class="px-2 py-1 w-full h-auto flex flex-wrap justify-end">
        <div
          class="rounded-bl-xl w-3/4 rounded-t-xl py-2 px-3 text-sm h-auto bg-gray-500 text-white"
        >Globo de texto num 1</div>
      </div>
      <div class="px-2 py-1 w-full h-auto flex flex-wrap justify-start">
        <div
          class="rounded-br-xl w-3/4 rounded-t-xl py-2 px-3 text-sm h-auto bg-gray-500 text-white"
        >Globo de texto num 2</div>
      </div>
    </div>

    <div class="w-full flex flex-nowrap border-t-2 border-solid border-gray-200 py-2 px-2">
      <input
        class="w-full rounded-l-full px-2 py-1 border-2 border-solid border-gray-200 text-sm"
        type="text"
        placeholder="escribe aquí..."
      />
      <button class="bg-gray-700 text-white text-sm pl-2 pr-4 py-1 rounded-r-full">
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<style>
</style>