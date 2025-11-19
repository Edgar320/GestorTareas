<script setup>
import { useAppStore } from '@/store/app'
import { ref } from 'vue'

const store = useAppStore()

const newProject = ref('')

const addProject = () => {
  if (newProject.value.trim()) {
    store.addProject(newProject.value)
    newProject.value = ''
  }
}
</script>

<template>
  <div class="view">
    <div class="view-header">
      <h1>Proyectos</h1>
      <p class="subtitle">{{ store.projects.length }} proyectos activos</p>
    </div>

    <div class="card project-input-card">
      <input
        v-model="newProject"
        type="text"
        placeholder="Nuevo proyecto..."
        @keyup.enter="addProject"
        class="input-text"
      />

      <button class="btn-primary" @click="addProject">
        Agregar
      </button>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in store.projects"
        :key="project.id"
        class="project-card"
      >
        <h3>{{ project.name }}</h3>

        <div class="project-info">
          <span class="badge">{{ project.tasks }} tareas</span>
          <span class="badge">{{ project.members }} miembros</span>
        </div>

        <button class="btn-secondary full-width">
          Abrir
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-input-card {
  display: flex;
  gap: 10px;
  padding: 20px;
  align-items: center;
}

.input-text {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 1rem;
}

.dark .input-text {
  background: #1e293b;
  border-color: #334155;
  color: #e2e8f0;
}

.projects-grid {
  margin-top: 24px;
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.project-card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.07);
  transition: transform .2s ease;
}

.dark .project-card {
  background: #1e293b;
  box-shadow: 0 6px 14px rgba(0,0,0,0.35);
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-info {
  margin: 14px 0;
  display: flex;
  gap: 10px;
}

.badge {
  padding: 6px 12px;
  border-radius: 12px;
  background: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
}

.dark .badge {
  background: #334155;
  color: #e2e8f0;
}

.full-width {
  width: 100%;
}
</style>
