<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    toRoute(link: string) {
      window.location.href = link;
    },
  },
});
</script>

<template>
   <div class="md:container mx-auto px-5 flex flex-row items-center gap-3 pt-10">
    <div class="text-white lg:text-4xl text-2xl lg:w-28 w-16  text-center"> >> </div>
    <div class="border-b w-full py-3"><span class="leading-tight py-5 lg:text-5xl text-4xl">Works</span></div>
   </div>
   <div class="">
    <div class="flex flex-col gap-2 flex-wrap px-5 mt-5">
      <div class="border border-dashed w-full p-3 hover:border-solid" @click="toRoute('https://github.com/uchupx/saceri-chatbot')">
        > <span class="ml-2 font-bold ">Saceri Chatbot</span> 
        <br> <span class="ml-5 font-light ">Typescript</span>
        <div class="h-20 mt-2">
          <p class="line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div class="border border-dashed w-full p-3 hover:border-solid" @click="toRoute('https://github.com/uchupx/electron-tata-usaha')">
        > <span class="ml-2 font-bold ">School Administration</span> 
        <br> <span class="ml-5 font-light ">Typescript</span>
        <br>
        <div class="h-20 mt-2">
          <p class="line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div class="border border-dashed w-full p-3 hover:border-solid">
        > <span class="ml-2 font-bold ">Sidewalk Backend</span><span> - Private repo</span> 
        <br> <span class="ml-5 font-light ">Golang</span>
        <br>
        <div class="h-20 mt-2">
          <p class="line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
   </div>
</template>