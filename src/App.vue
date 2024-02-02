<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <navbar :hidden="$route.path == '/'" :name="$route.name"></navbar>
  <router-view></router-view>
</template>


<script lang="ts">
import { defineComponent, nextTick } from "vue";
import Navbar from "./components/Navbar.vue";
import router from "./routes";

function title(string: String) {
  string = string.replace("-", " ");
  return string.charAt(0).toUpperCase() + string.slice(1);
}

router.afterEach((to, from) => {
  nextTick(() => {
    document.title = title(to.name!.toString()) || "Home";
  });
});

export default defineComponent({
  name: "App",
  data() {
    return {
      name: "Yusuf Andriyanto",
    };
  },
  components: {
    // HelloWorld,
    Navbar,
  },
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
