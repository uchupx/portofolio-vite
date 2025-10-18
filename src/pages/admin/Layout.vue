<script setup lang="ts">
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-vue-next';
</script>

<template>
  <div class="font-mono bg-black text-green-500 min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900/50 p-4 border-r border-green-900 flex-shrink-0 flex flex-col">
      <div class="mb-8">
        <h1 class="text-xl font-bold text-white">admin@portfolio:~$</h1>
        <p class="text-sm text-green-700">Control Panel</p>
      </div>
      <nav class="flex-grow">
        <ul>
          <li>
            <router-link to="/admin/dashboard" class="flex items-center px-4 py-2 border border-transparent  hover:text-green-500 transition-colors hover:border-green-500" active-class="bg-green-500 text-black">
              <LayoutDashboard class="h-5 w-5 mr-3" />
              Dashboard
            </router-link>
          </li>
          <li class="mt-2">
            <router-link to="/admin/blogs" class="flex items-center px-4 py-2 border border-transparent   hover:text-green-500 transition-colors hover:border-green-500" active-class="bg-green-500 text-black">
              <FileText class="h-5 w-5 mr-3" />
              Blogs
            </router-link>
          </li>
          <li class="mt-2">
            <router-link to="/admin/settings" class="flex items-center px-4 py-2  border border-transparent hover:text-green-500 transition-colors hover:border-green-500" active-class="bg-green-500 text-black">
              <Settings class="h-5 w-5 mr-3" />
              Settings
            </router-link>
          </li>
        </ul>
      </nav>
      <div>
        <router-link to="/login" class="flex items-center px-4 py-2  hover:bg-red-500 hover:text-black transition-colors">
          <LogOut class="h-5 w-5 mr-3" />
          Logout
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow p-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
/* You can add any component-specific styles here if needed */
</style>