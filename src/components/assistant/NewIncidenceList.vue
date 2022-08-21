<script lang="ts">
import { defineComponent } from 'vue';
import NewIncidenceItem from './NewIncidenceItem.vue';

interface IIncidence {
  incidenceId: string,
  longDescription: string,
  selectedByAssistant: boolean,
  shortDescription: string,
  solved: boolean,
  title: string,
  watchers: number,
};

export default defineComponent({
  components: {
    NewIncidenceItem,
  },
  data() {
    return {
      incidenceArr: [] as IIncidence[]
    }
  },
  async created() {
    try {
      const result = await fetch("http://localhost:5217/api/incidences");

      if(result.status == 200) {
        const data: IIncidence[] = await result.json();
        this.incidenceArr = [...data];
      }

    } catch (error) {
      console.error("Error:", error);
    }
  },
  methods: {
    addIncidence() {
      
    }
  }
});
</script>

<template>
  <ul class="p-3">
    <NewIncidenceItem v-for="(item, index) in incidenceArr" :key="item.title"></NewIncidenceItem>
  </ul>
</template>

<style>
</style>