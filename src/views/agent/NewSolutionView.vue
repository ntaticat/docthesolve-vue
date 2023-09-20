<script lang="ts">
import { defineComponent } from "vue";
import MarkDownEditor from "../../components/shared/MarkDownEditor.vue";
import Header from "@/components/agent/Header.vue";

export default defineComponent({

  data() {

    return {
      // fromProblemFilter: () => (null || "");
    };
  },

  mounted() {
    // if ("from" in this.$route.query) {
    //   this.fromProblemFilter = this.$route.query.from;
    // }
  },
  components: { MarkDownEditor, Header }
});
</script>

<template>
  <Header />
  <h1 class="py-3 text-center">Registrar solución</h1>
  <MarkDownEditor />
  <RouterLink class="px-2 py-1 rounded-lg border-2 border-solid border-gray-400" to="/solutions">
    Regresar
  </RouterLink>
</template>

<style lang="">
</style>