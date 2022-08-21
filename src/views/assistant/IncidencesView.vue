<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/assistant/Header.vue';
import Footer from '@/components/assistant/Footer.vue';
import NewIncidenceList from '@/components/assistant/NewIncidenceList.vue';
import { useSignalR } from '@dreamonkey/vue-signalr';

export default defineComponent({
  components: {
    Header,
    Footer,
    NewIncidenceList
  },
  setup() {
    const signalr = useSignalR();

    signalr.on('ReceiveMessage', (message) => {
      console.log("MENSAJE RECIBIDO DE SIGNALR");
      console.log(message);
      const element = document.getElementById("valor222");

      if (element) {
        element.innerHTML += `
          <h1>${ message.title }</h1>
        `;
      }
    });
  },
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
});
</script>

<template>
  <Header />

  <div class="w-full h-full flex flex-wrap justify-center">
    <div class="w-full text-center py-3">
      <h1 class="text-2xl">Tabla de Incidencias | Asistente Técnico</h1>
    </div>

    <!-- <div class="w-3/12"></div> -->
    <div class="w-full md:w-7/12">
      <div id="valor222"></div>
      <NewIncidenceList />
    </div>

    <!-- Chat -->
    <!-- <div class="hidden lg:block sticky top-0 w-3/12 h-screen">
      <AssistantChat />
    </div> -->
  </div>

  <Footer />
</template>

<style>
</style>