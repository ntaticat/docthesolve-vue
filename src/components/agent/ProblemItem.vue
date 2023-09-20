<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
    }
  },
  methods: {
  }
})
</script>

<template>
  <div class="w-full border-2 border-solid border-gray-300">
    <!-- Titulo y numero de reporte -->
    <div class="w-full px-3 pt-3">
      <div class="w-full pb-3 flex flex-nowrap justify-between items-center">
        <RouterLink to="/problems/1">
          <strong class="text-lg"># Nombre del problema</strong>
        </RouterLink>
        <div class="w-auto flex flex-nowrap">
          <div class="bg-gray-600 text-gray-100 ml-2 text-center rounded-md px-2 py-1">
            <p class="text-sm font-bold leading-tight">3</p>
            <p class="text-xs leading-none">soluciones</p>
          </div>
          <div class="bg-red-600 text-gray-100 ml-2 text-center rounded-md px-2 py-1">
            <p class="text-sm font-bold leading-tight">3</p>
            <p class="text-xs leading-none">reportes</p>
          </div>
        </div>
      </div>
      <hr class="w-full border-b-2 border-solid border-gray-200" />
    </div>
    <!-- Descripción y botón para realizar acción -->
    <div>
      <div class="w-full p-3">
        <div class="w-full mb-3 text-justify">
          <div class="mb-3">
            <span class="text-xs leading-none bg-emerald-600 text-gray-100 mr-2 rounded-md px-2 py-1">reportes</span>
            <span class="text-xs leading-none bg-emerald-600 text-gray-100 mr-2 rounded-md px-2 py-1">reportes</span>
            <span class="text-xs leading-none bg-emerald-600 text-gray-100 mr-2 rounded-md px-2 py-1">reportes</span>
            <span class="text-xs leading-none bg-emerald-600 text-gray-100 mr-2 rounded-md px-2 py-1">reportes</span>
            <span class="text-xs leading-none bg-emerald-600 text-gray-100 mr-2 rounded-md px-2 py-1">reportes</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
            consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
            Dolor, dolore perferendis!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>