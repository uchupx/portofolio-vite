<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleSubmit = () => {
  alert('Login successful! Check the console for credentials.');
  router.push({ name: 'home' });
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-black text-green-500">
    <div class="w-full max-w-md p-8 m-4 space-y-6 lg border border-green-500">
      <h1 class="text-3xl font-bold text-center">Login</h1>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 mt-1 text-gray-100 bg-black border border-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 mt-1 text-gray-100 bg-black border border-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 font-semibold text-white bg-green-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:border-green-500 hover:border"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>