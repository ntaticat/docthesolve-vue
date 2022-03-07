<script lang="ts">
import { defineComponent } from "vue";
import { marked } from 'marked';

export default defineComponent({
  data() {
    return {
      markdown: "# Hola Mundo"
    }
  },
  computed: {
    markdownToHtml(): string {
      return marked(this.markdown);
    },
  },
  mounted() {
    this.markdown
  }
})

// https://blog.openreplay.com/how-to-parse-and-render-markdown-in-vuejs
</script>

<template>
  <div class="w-full h-screen p-3 flex flex-nowrap items-stretch bg-gray-300">
    <textarea 
      v-model="markdown"
      class="resize-none w-full h-full border-2 border-solid border-gray-400  outline-gray-600"
    ></textarea>
    <div
      v-if="markdown"
      v-html="markdownToHtml"
      class="w-full border-2 border-solid border-gray-500 p-3 prose prose-base"
    ></div>
    <div
      v-if="!markdown"
      class="w-full border-2 border-solid border-gray-500 p-3"
    >Nothing yet...</div>
  </div>
</template>

<style scoped>
</style>