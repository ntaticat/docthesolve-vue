<script lang="ts">
import { defineComponent } from "vue";
import { marked } from 'marked';

export default defineComponent({
  data() {
    return {
      markdown: ""
    }
  },
  computed: {
    markdownToHtml(): string {
      return marked(this.markdown);
    },
  },
  mounted() {
    this.markdown = "# Hola Mundo";
  }
})

// https://blog.openreplay.com/how-to-parse-and-render-markdown-in-vuejs
</script>

<template>
  <div class="w-full h-auto lg:h-screen flex flex-wrap lg:flex-nowrap content-start lg:items-stretch">
    <textarea 
      v-model="markdown"
      class="resize-none w-full h-[50vh] lg:h-full p-1  mx-3 border-2 border-solid border-gray-400 outline-gray-600"
    ></textarea>
    <div
      v-if="markdown"
      v-html="markdownToHtml"
      class="w-full h-auto p-3 prose prose-sm max-w-none"
    ></div>
    <div
      v-if="!markdown"
      class="w-full h-auto p-3 prose prose-sm max-w-none"
    >Nada escrito aún...</div>
  </div>
</template>

<style scoped>
</style>