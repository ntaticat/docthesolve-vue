<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
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
  <footer class="sticky bottom-0 bg-black/90 text-white h-auto w-full">
    <nav class="h-[115px] w-full flex flex-wrap flex-col content-center overflow-auto">
      <RouterLink to="/">
        <img class="p-3 inline-block w-[100px] h-[100px] rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink to="/">
        <img class="p-3 inline-block w-[100px] h-[100px] rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
    </nav>
  </footer>
</template>

<style>
</style>