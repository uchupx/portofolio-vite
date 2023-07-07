<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // type inference enable
  props: {
    name: String,
    msg: { type: String, required: true },
  },
  data() {
    return {
      count: 1,
    };
  },
  mounted() {
    this.name; // type: string | undefined
    this.msg; // type: string
    this.count; // type: number
  },
});
</script>

<template>
  <div class="flex items-center h-screen p-5">
    <div class="px-10">
      <p class="text-5xl">Hello, I'm Yusuf a <span class="border-b">Backend Developer</span></p>
      <br>>><button type="button" class="ml-4 py-2 border-b border-transparent hover:border-white transition-all">See my works</button>
      <br>>><button type="button" class="ml-4 py-2 border-b border-transparent hover:border-white transition-all text-blue-200">Connect with me on linkedin</button>
      <br> <span class="text-xs ml-9 text-gray-500"> Or follow my social media </span>
      <!-- <br>>><button type="button" class="px-4 py-3 hover:border-b transition-all">See my works</button> -->
      <div class="text-xs ml-9 mt-2">
        <button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black">Instagram</button>
        <button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black">Twitter</button>
        <button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black">Threads</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
