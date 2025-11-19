import { createRouter, createWebHistory } from 'vue-router'

// Importar tus vistas
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects.vue'
import Tasks from '@/views/Tasks.vue'
import Team from '@/views/Team.vue'
import Analytics from '@/views/Analytics.vue'
import Settings from '@/views/Settings.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/tasks', name: 'Tasks', component: Tasks },
  { path: '/team', name: 'Team', component: Team },
  { path: '/analytics', name: 'Analytics', component: Analytics },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/:catchAll(.*)', redirect: '/' } // redirige rutas desconocidas
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
