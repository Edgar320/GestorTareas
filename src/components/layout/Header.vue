<template>
  <header
    class="w-full bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex items-center justify-between text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <!-- Left side: Menu + Search -->
    <div class="flex items-center space-x-4">
      <!-- Toggle Sidebar -->
      <button
        @click="toggleSidebar"
        class="text-2xl p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <!-- Search Bar -->
      <div
        class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 transition focus-within:ring-2 focus-within:ring-indigo-400"
      >
        <span class="text-gray-400 dark:text-gray-300 mr-2 text-lg">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar proyectos, tareas, personas..."
          class="bg-transparent outline-none text-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 w-64"
        />
      </div>
    </div>

    <!-- Right side: Notifications + Messages + User -->
    <div class="flex items-center space-x-4">
      <!-- Notifications -->
      <button
        class="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
        @click="toggleNotifications"
        aria-label="Notifications"
      >
        🔔
        <span
          v-if="notifications > 0"
          class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5"
        >
          {{ notifications }}
        </span>
      </button>

      <!-- Messages -->
      <button
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
        aria-label="Messages"
      >
        💬
      </button>

      <!-- User Avatar + Dropdown -->
      <div class="relative">
        <img
          src="https://ui-avatars.com/api/?name=User"
          class="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-200 dark:border-gray-600 hover:ring-2 hover:ring-indigo-300 transition"
          @click="toggleMenu"
          alt="User Avatar"
        />

        <div
          v-if="menuOpen"
          class="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg p-2 border border-gray-200 dark:border-gray-600 transition duration-200"
        >
          <button
            class="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition duration-150"
            @click="goToProfile"
          >
            Perfil
          </button>
          <button
            class="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition duration-150"
            @click="goToSettings"
          >
            Configuración
          </button>
          <button
            class="w-full text-left px-3 py-2 hover:bg-red-50 dark:hover:bg-red-600 rounded-md text-red-500 font-semibold transition duration-150"
            @click="logout"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app'

const store = useAppStore()

const menuOpen = ref(false)
const notifications = ref(3)
const searchQuery = ref('')

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function toggleNotifications() {
  alert('No hay notificaciones nuevas.')
}

function toggleSidebar() {
  store.sidebarOpen = !store.sidebarOpen
}

function goToProfile() {
  store.activeView = 'profile'
}

function goToSettings() {
  store.activeView = 'settings'
}

function logout() {
  alert('Sesión cerrada.')
}
</script>

<style scoped>
header {
  transition: all 0.3s ease-in-out;
}

input::placeholder {
  /* Tailwind placeholder se encarga, pero dejamos fallback */
  color: #9ca3af;
}
</style>
