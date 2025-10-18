<template>
  <div class="font-mono"></div>
  <template v-if="isAdmin.value">
    <Layout/>
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
</template>

<script setup lang="ts">
import {computed, reactive, watchEffect} from 'vue';
import {useRoute} from 'vue-router';
import Layout from "./pages/admin/Layout.vue";

const isAdmin = reactive({value: false});

const route = useRoute();

const routeMeta = computed(() => route.meta);

watchEffect(() => {
  const meta = routeMeta.value;
  isAdmin.value = false;

  if (meta?.adminOnly) {
    isAdmin.value = meta?.adminOnly as boolean;
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

:root {
  font-family: 'JetBrains Mono', monospace;
  background: black;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #047857;
}
</style>