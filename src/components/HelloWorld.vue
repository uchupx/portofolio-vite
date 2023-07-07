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
  methods: {
    toRoute(path: string) {
      this.$router.push({ path: path });
    },
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
      <p class="text-xl lg:text-5xl">Hello, I'm Yusuf a <span class="border-b text-5xl leading-tight">Backend Developer</span></p>
      <br>>><button type="button" class="ml-4 py-2 border-b border-transparent hover:border-white transition-all" @click="toRoute('work')">See my works</button>
      <br>>><a href="https://www.linkedin.com/in/yusuf-andriyanto-3a1a25278/"><button type="button" class="ml-4 py-2 border-b border-transparent hover:border-white transition-all text-blue-200">Connect with me on linkedin</button></a>
      <br> <span class="text-xs ml-9 text-gray-500"> Or follow me on </span>
      <!-- <br>>><button type="button" class="px-4 py-3 hover:border-b transition-all">See my works</button> -->
      <div class="text-xs ml-9 mt-2">
        <a href="https://www.instagram.com/uchupxx"><button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black mt-2">Instagram</button></a>
        <a href="https://www.twitter.com/uchupx"><button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black mt-2">Twitter</button></a>
        <a href="https://www.github.com/uchupx"><button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black mt-2">Github</button></a>
        <!-- <button type="button" class="px-4 mr-2 py-3 border hover:bg-white transition-all hover:text-black mt-2">Github</button> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
