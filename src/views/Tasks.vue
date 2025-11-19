<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app'
import { getPriorityColor } from '@/utils/helpers'

const store = useAppStore()
const newTaskTitle = ref('')
const newTaskPriority = ref('media')

const handleAddTask = () => {
  if (newTaskTitle.value.trim()) {
    store.addTask(newTaskTitle.value, newTaskPriority.value)
    newTaskTitle.value = ''
  }
}
</script>

<template>
  <div class="view">
    <div class="view-header">
      <div>
        <h1>Tareas</h1>
        <p class="subtitle">{{ store.pendingTasks }} tareas pendientes</p>
      </div>
    </div>

    <div class="card">
      <div class="task-input-group">
        <input 
          v-model="newTaskTitle" 
          @keyup.enter="handleAddTask"
          type="text" 
          placeholder="Añadir nueva tarea..."
          class="task-input"
        >
        <select v-model="newTaskPriority" class="task-select">
          <option value="alta">Alta prioridad</option>
          <option value="media">Media prioridad</option>
          <option value="baja">Baja prioridad</option>
        </select>
        <button @click="handleAddTask" class="btn-primary">Agregar</button>
      </div>

      <div class="tasks-list">
        <div 
          v-for="task in store.tasks" 
          :key="task.id" 
          :class="['task-row', { completed: task.completed }]"
        >
          <input 
            type="checkbox" 
            :checked="task.completed"
            @change="store.toggleTask(task.id)"
            class="task-checkbox"
          >
          <div class="task-content">
            <div class="task-title">{{ task.title }}</div>
            <div class="task-meta">
              <span class="task-assignee">👤 {{ task.assignee }}</span>
            </div>
          </div>
          <span 
            class="priority-badge-small" 
            :style="{ background: getPriorityColor(task.priority) }"
          >
            {{ task.priority }}
          </span>
          <button @click="store.deleteTask(task.id)" class="btn-icon delete">🗑️</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/main.css"></style>
