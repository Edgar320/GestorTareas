// src/store/app.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // ============================
  // Estado
  // ============================
  const sidebarOpen = ref(true)
  const activeView = ref('dashboard')
  const darkMode = ref(false)
  const searchQuery = ref('')

  // Stats generales
  const stats = ref({
    totalProjects: 12,
    activeUsers: 1247,
    revenue: 48532,
    growth: 23.5
  })

  // Proyectos
  const projects = ref([
    { id: 1, name: 'Diseño Web Corporativo', status: 'En progreso', progress: 75, team: 4, deadline: '2025-11-20' },
    { id: 2, name: 'App Mobile E-commerce', status: 'Completado', progress: 100, team: 6, deadline: '2025-11-10' },
    { id: 3, name: 'Sistema CRM', status: 'En progreso', progress: 45, team: 5, deadline: '2025-12-01' },
    { id: 4, name: 'Dashboard Analytics', status: 'Planificación', progress: 15, team: 3, deadline: '2025-12-15' },
    { id: 5, name: 'API REST Backend', status: 'En progreso', progress: 60, team: 4, deadline: '2025-11-25' }
  ])

  // Tareas
  const tasks = ref([
    { id: 1, title: 'Revisar código del frontend', priority: 'alta', completed: false, assignee: 'Juan P.' },
    { id: 2, title: 'Actualizar documentación API', priority: 'media', completed: true, assignee: 'María G.' },
    { id: 3, title: 'Testing integración', priority: 'alta', completed: false, assignee: 'Carlos R.' },
    { id: 4, title: 'Optimizar consultas BD', priority: 'media', completed: false, assignee: 'Ana L.' },
    { id: 5, title: 'Deploy a producción', priority: 'baja', completed: true, assignee: 'Luis M.' }
  ])

  // Actividades recientes
  const activities = ref([
    { id: 1, user: 'Juan Pérez', action: 'completó la tarea', item: 'Diseño de mockups', time: 'Hace 5 min', type: 'task' },
    { id: 2, user: 'María García', action: 'comentó en', item: 'Proyecto Web', time: 'Hace 15 min', type: 'comment' },
    { id: 3, user: 'Carlos Ruiz', action: 'creó el proyecto', item: 'App Mobile', time: 'Hace 1 hora', type: 'project' },
    { id: 4, user: 'Ana López', action: 'actualizó', item: 'Documentación API', time: 'Hace 2 horas', type: 'update' },
    { id: 5, user: 'Luis Martínez', action: 'subió archivo', item: 'diseño-final.pdf', time: 'Hace 3 horas', type: 'file' }
  ])

  // Equipo
  const team = ref([
    { id: 1, name: 'Juan Pérez', role: 'Frontend Dev', status: 'online', avatar: '👨‍💻', projects: 3 },
    { id: 2, name: 'María García', role: 'UX Designer', status: 'online', avatar: '👩‍🎨', projects: 4 },
    { id: 3, name: 'Carlos Ruiz', role: 'Backend Dev', status: 'away', avatar: '👨‍💼', projects: 2 },
    { id: 4, name: 'Ana López', role: 'Project Manager', status: 'online', avatar: '👩‍💼', projects: 5 },
    { id: 5, name: 'Luis Martínez', role: 'DevOps', status: 'offline', avatar: '👨‍🔧', projects: 3 }
  ])

  // ============================
  // Computadas
  // ============================
  const pendingTasks = computed(() => tasks.value.filter(t => !t.completed).length)
  const completedTasks = computed(() => tasks.value.filter(t => t.completed).length)

  // ============================
  // Acciones
  // ============================
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light')
  }

  const setActiveView = (view) => {
    activeView.value = view
  }

  const addTask = (title, priority = 'media') => {
    tasks.value.unshift({
      id: Date.now(),
      title,
      priority,
      completed: false,
      assignee: 'Tú'
    })
  }

  const toggleTask = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.completed = !task.completed
  }

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  // ============================
  // Retorno
  // ============================
  return {
    sidebarOpen,
    activeView,
    darkMode,
    searchQuery,
    stats,
    projects,
    tasks,
    activities,
    team,
    pendingTasks,
    completedTasks,
    toggleSidebar,
    toggleDarkMode,
    setActiveView,
    addTask,
    toggleTask,
    deleteTask
  }
})
