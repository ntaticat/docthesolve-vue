<script lang="ts">
import { defineComponent } from 'vue';
import ProblemItem from './ProblemItem.vue';

export default defineComponent({
  components: { ProblemItem },
  data() {
    return {
      problemsArr: [1, 1, 1, 1, 1, 1, 1]
    }
  }
})

</script>

<template>
  <ul>
    <ProblemItem v-for="(item, index) in problemsArr" :key="index" />
  </ul>
</template>

<style>
</style>