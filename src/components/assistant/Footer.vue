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
  <footer class="sticky bottom-0 bg-black/90 text-white rounded-t-2xl overflow-hidden">
    <nav class="h-20 w-full flex flex-wrap flex-col overflow-x-auto">
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
      <RouterLink class="" to="/">
        <img class="inline m-2 w-16 h-16 rounded-full overflow-hidden" src="https://i.pinimg.com/736x/a1/61/23/a16123245e9686ba1b25bdee679d1ef4.jpg" alt="">
      </RouterLink>
    </nav>
  </footer>
</template>

<style>
</style>