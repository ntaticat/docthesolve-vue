<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue';
import AssistantChat from '../../components/assistant/AssistantChat.vue';

let soluciones = [1, 1, 1, 1, 1];

const id = 1;

onMounted(() => {
})

</script>

<template>
  <div class="relative w-full h-auto flex flex-wrap justify-center">
    <!-- Titulo -->
    <div class="w-full h-auto text-center py-3">
      <h1 class="text-2xl">Incidencia #{{id}} | Asistente Técnico</h1>
    </div>

    <!-- Incidencia -->
    <div class="w-7/12 h-auto">
      <div class="w-full border-2 border-solid border-gray-300">
        <!-- Nombre -->
        <div class="w-full p-3">
          <div class="w-full py-3 flex flex-wrap justify-between items-baseline">
            <strong>Titulo de la Incidencia que registra la persona que reporta</strong>
          </div>
          <hr class="w-full border-b-2 border-solid border-gray-200" />
        </div>
        <!-- Descripcion -->
        <div class="w-full p-3">
          <div class="w-full mb-3 text-justify">
            <p>Información detallada del problema...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
              consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
              Dolor, dolore perferendis!
            </p>
          </div>
          <div class="w-full mb-3 text-justify">
            <p>Información detallada del problema...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
              consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
              Dolor, dolore perferendis!
            </p>
          </div>
        </div>
        <!-- Posibles soluciones -->
        <div class="w-full p-3">
          <h3 class="mb-3">Soluciones</h3>
          <div v-for="(item, index) in soluciones" :key="index">
            <div class="p-3 border-2 border-solid border-gray-200">
              <div class>
                <p>Llegar</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod voluptatum fugit in molestiae. Illo maxime corrupti minima ullam ipsum. Nostrum quas fuga repellat minus expedita magni excepturi similique ratione?</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Redactar solucion -->
        <div class="w-full p-3"></div>
      </div>
    </div>

    <!-- Secundario -->
    <div class="sticky top-0 w-3/12 h-screen">
      <AssistantChat />
      <RouterLink class="w-full py-2 bg-gray-200 flex justify-center" to="/incidences">
        <div>
          <div class="sticky w-full">
            Regresar
            <i class="fas fa-arrow-left"></i>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
</style>