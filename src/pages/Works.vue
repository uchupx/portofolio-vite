<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    toRoute(path: string) {
      this.$router.push({ path: path });
    },
  },
});
</script>

<template>
   <div class="md:container mx-auto px-5 flex flex-row items-center gap-3 pt-10">
    <div class="text-white lg:text-4xl text-2xl lg:w-28 w-16  text-center"> >> </div>
    <div class="border-b w-full py-3"><span class="leading-tight py-5 lg:text-5xl text-4xl">Works</span></div>
   </div>
</template>