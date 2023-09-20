<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/agent/Header.vue';
import Footer from '@/components/agent/Footer.vue';
import TicketList from '@/components/agent/TicketList.vue';
import { useSignalR } from '@dreamonkey/vue-signalr';
import Chat from '@/components/shared/Chat.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
    TicketList,
    Chat
  },
  setup() {
    const signalr = useSignalR();

    signalr.on('ReceiveMessage', (message) => {
      console.log("MENSAJE RECIBIDO DE SIGNALR");
      console.log(message);
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
  <div class="">
    <Header />

    <div class="w-full h-full flex flex-wrap justify-center">
      <div class="w-full text-center py-3">
        <h1 class="text-2xl">Tabla de Incidencias | Asistente Técnico</h1>
      </div>

      <!-- <div class="w-3/12"></div> -->
      <div class="w-full md:w-7/12">
        <TicketList />
      </div>
    </div>

    <Footer />
  </div>
  <div class="fixed z-50 top-0 left-0 w-full h-screen bg-black/75 overflow-hidden">
    <div class="p-5 flex flex-wrap justify-center items-center">
      <Chat />
    </div>
  </div>
</template>

<style></style>