<script lang="ts">
import { ITicket } from '@/data/data.interfaces';
import { defineComponent } from 'vue';
import TicketItem from './TicketItem.vue';

export default defineComponent({
  components: {
    TicketItem
  },
  data() {
    return {
      ticketList: [] as ITicket[]
    }
  },
  async created() {
    try {
      const result = await fetch("http://localhost:5217/api/tickets");

      if (result.status == 200) {
        const data: ITicket[] = await result.json();
        this.ticketList = [...data];
      }

    } catch (error) {
      console.error("Error:", error);
    }
  },
  methods: {
  }
});
</script>

<template>
  <ul class="p-3">
    <TicketItem v-for="(item, index) in ticketList" :key="item.ticketId" />
  </ul>
</template>

<style></style>