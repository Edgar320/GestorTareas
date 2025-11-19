<script setup>
import { useAppStore } from '@/store/app'
import { getStatusColor, getActivityIcon } from '@/utils/helpers'

const store = useAppStore()
</script>

<template>
  <div class="view">
    <div class="view-header">
      <div>
        <h1>Dashboard</h1>
        <p class="subtitle">Bienvenido de vuelta, aquí está un resumen de tu trabajo</p>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">📁</div>
        <div class="stat-info">
          <div class="stat-label">Total Proyectos</div>
          <div class="stat-value">{{ store.stats.totalProjects }}</div>
          <div class="stat-change positive">+2 este mes</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">👥</div>
        <div class="stat-info">
          <div class="stat-label">Usuarios Activos</div>
          <div class="stat-value">{{ store.stats.activeUsers.toLocaleString() }}</div>
          <div class="stat-change positive">+{{ store.stats.growth }}%</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">💰</div>
        <div class="stat-info">
          <div class="stat-label">Ingresos</div>
          <div class="stat-value">${{ store.stats.revenue.toLocaleString() }}</div>
          <div class="stat-change positive">+12% vs mes anterior</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">✅</div>
        <div class="stat-info">
          <div class="stat-label">Tareas Completadas</div>
          <div class="stat-value">{{ store.completedTasks }}/{{ store.tasks.length }}</div>
          <div class="stat-change">
            {{ Math.round((store.completedTasks/store.tasks.length)*100) }}% completado
          </div>
        </div>
      </div>
    </div>

    <!-- Projects and Activity -->
    <div class="dashboard-grid">
      <div class="card large">
        <div class="card-header">
          <h3>Proyectos Recientes</h3>
          <button class="btn-text">Ver todos</button>
        </div>

        <div class="projects-list">
          <div v-for="project in store.projects.slice(0, 4)" :key="project.id" class="project-item">
            <div class="project-info">
              <div class="project-name">{{ project.name }}</div>
              <div class="project-meta">
                <span class="project-team">👥 {{ project.team }} miembros</span>
                <span class="project-deadline">📅 {{ project.deadline }}</span>
              </div>
            </div>

            <div class="project-progress">
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: project.progress + '%', background: getStatusColor(project.status) }"
                ></div>
              </div>
              <span class="progress-text">{{ project.progress }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>Actividad Reciente</h3>
        </div>

        <div class="activity-list">
          <div v-for="activity in store.activities.slice(0, 5)" :key="activity.id" class="activity-item">
            <span class="activity-icon">{{ getActivityIcon(activity.type) }}</span>

            <div class="activity-content">
              <div class="activity-text">
                <strong>{{ activity.user }}</strong> {{ activity.action }} 
                <em>{{ activity.item }}</em>
              </div>
              <div class="activity-time">{{ activity.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped src="@/assets/styles/main.css"></style>
