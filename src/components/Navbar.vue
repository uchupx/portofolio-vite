<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: String,
  },
});
</script>

<template>
    <div>
    <div class="w-auto flex flex-row items-center border-b mx-10">
      <div class="text-white lg:text-2xl text-1xl lg:w-28 w-16 text-center">
        <span class="hover:font-bold hover:cursor-pointer" @click="$router.go(-1)">&lt;&lt;</span>
      </div>


      <div class="w-full py-3">
        <label class="leading-tight py-5 lg:text-3xl text-2xl capitalize">{{ name }}</label>
      </div>
    </div>
  </div>
</template>