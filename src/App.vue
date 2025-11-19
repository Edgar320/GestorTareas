<script setup>
import { useAppStore } from '@/store/app'
import { useTheme } from '@/composables/useTheme'
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'

// Views
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects.vue'
import Tasks from '@/views/Tasks.vue'
import Team from '@/views/Team.vue'
import Analytics from '@/views/Analytics.vue'
import Settings from '@/views/Settings.vue'

const store = useAppStore()
useTheme()
</script>

<template>
  <div :class="['app-container', { dark: store.darkMode }]">
    <Sidebar />
    
    <div class="main-wrapper">
      <Header />
      
      <main class="content">
        <Dashboard v-if="store.activeView === 'dashboard'" />
        <Projects v-else-if="store.activeView === 'projects'" />
        <Tasks v-else-if="store.activeView === 'tasks'" />
        <Team v-else-if="store.activeView === 'team'" />
        <Analytics v-else-if="store.activeView === 'analytics'" />
        <Settings v-else-if="store.activeView === 'settings'" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
  transition: all 0.3s ease;
}

.app-container.dark {
  background: #0f172a;
  color: #e2e8f0;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }
}
</style>