<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      reporteVer: false
    }
  },
  methods: {
    toggleReporteVer() {
      this.reporteVer = !this.reporteVer;
    }
  }
})
</script>

<template>
  <li class="w-full border-2 border-solid border-gray-300 overflow-hidden rounded-lg last:mb-0 mb-3">
    <!-- Titulo y numero de reporte -->
    <div class="w-full p-3">
      <div class="w-full py-3 flex flex-wrap justify-between items-baseline">
        <strong>Titulo de la Incidencia que registra la persona que reporta</strong>
        <small class="bg-green-600 text-gray-100 px-2 py-1 rounded-lg">reporte #123</small>
      </div>
      <hr class="w-full border-b-2 border-solid border-gray-200" />
    </div>
    <!-- Descripción corta -->
    <div v-if="!reporteVer">
      <div class="w-full p-3 text-center">
        <p>Descripción breve del reporte...</p>
      </div>
      <button button class="w-full py-2 bg-gray-200" v-on:click="toggleReporteVer">
        Ver más información
        <i class="fas fa-arrow-down"></i>
      </button>
    </div>
    <!-- Descripción y botón para realizar acción -->
    <div v-if="reporteVer">
      <div class="w-full p-3">
        <div class="w-full mb-3 text-justify">
          <p>Información detallada del problema...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
            consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
            Dolor, dolore perferendis!
          </p>
        </div>
        <div class="w-full flex justify-start">
          <RouterLink to="/tickets/1" class="px-2 py-1 bg-gray-700 text-gray-100 rounded-lg">Ver reporte</RouterLink>
        </div>
      </div>
      <button v-on:click="toggleReporteVer" class="w-full py-2 bg-gray-200">
        Mostrar menos
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  </li>
</template>

<style></style>