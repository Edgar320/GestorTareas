<script setup>
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

<template>
  <div class="view">
    <div class="view-header">
      <div>
        <h1>Equipo</h1>
        <p class="subtitle">{{ store.team.length }} miembros en total</p>
      </div>
      <button class="btn-primary">+ Invitar miembro</button>
    </div>

    <div class="team-grid">
      <div v-for="member in store.team" :key="member.id" class="team-card">
        <div class="team-card-avatar">
          <div class="avatar-large">{{ member.avatar }}</div>
          <span :class="['status-indicator', member.status]"></span>
        </div>
        <h3>{{ member.name }}</h3>
        <p class="team-role">{{ member.role }}</p>

        <div class="team-stats">
          <div class="team-stat">
            <span class="stat-number">{{ member.projects }}</span>
            <span class="stat-label">Proyectos</span>
          </div>
          <div class="team-stat">
            <span class="stat-number">
              {{ member.status === 'online' ? 'En línea' : member.status === 'away' ? 'Ausente' : 'Desconectado' }}
            </span>
            <span class="stat-label">Estado</span>
          </div>
        </div>

        <button class="btn-secondary full-width">Ver perfil</button>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/main.css"></style>
