<script setup>
import { useAppStore } from '@/store/app'

const store = useAppStore()

const menuItems = [
  { id: 'dashboard', icon: '📊', label: 'Dashboard' },
  { id: 'projects', icon: '📁', label: 'Proyectos' },
  { id: 'tasks', icon: '✅', label: 'Tareas' },
  { id: 'team', icon: '👥', label: 'Equipo' },
  { id: 'analytics', icon: '📈', label: 'Analytics' },
  { id: 'settings', icon: '⚙️', label: 'Configuración' }
]
</script>

<template>
  <aside :class="['sidebar', { collapsed: !store.sidebarOpen, dark: store.darkMode }]">
    <!-- Sidebar Header / Logo -->
    <div class="sidebar-header">
      <div class="logo">
        <span class="logo-icon">🚀</span>
        <span v-if="store.sidebarOpen" class="logo-text">TaskFlow Pro</span>
      </div>
    </div>

    <!-- Sidebar Navigation -->
    <nav class="sidebar-nav">
      <button 
        v-for="item in menuItems"
        :key="item.id"
        @click="store.setActiveView(item.id)"
        :class="['nav-item', { active: store.activeView === item.id }]"
        :title="!store.sidebarOpen ? item.label : ''"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span v-if="store.sidebarOpen" class="nav-label">{{ item.label }}</span>
      </button>
    </nav>

    <!-- Sidebar Footer / Theme Toggle -->
    <div class="sidebar-footer">
      <button class="theme-toggle-sidebar" @click="store.toggleDarkMode">
        <span>{{ store.darkMode ? '☀️' : '🌙' }}</span>
        <span v-if="store.sidebarOpen">{{ store.darkMode ? 'Claro' : 'Oscuro' }}</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar.dark {
  background: #1e293b;
  border-color: #334155;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.sidebar.dark .sidebar-header {
  border-color: #334155;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.logo-icon {
  font-size: 2rem;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0.5rem;
}

.nav-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  background: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
  text-align: left;
}

.nav-item:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.sidebar.dark .nav-item:hover {
  background: #334155;
  color: #e2e8f0;
}

.nav-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.nav-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
}

.sidebar.dark .sidebar-footer {
  border-color: #334155;
}

.theme-toggle-sidebar {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.sidebar.dark .theme-toggle-sidebar {
  background: #334155;
  color: #e2e8f0;
}

.theme-toggle-sidebar:hover {
  transform: translateY(-2px);
}
</style>
