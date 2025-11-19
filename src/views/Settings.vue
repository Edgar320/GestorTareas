<!-- ============================================
 📁 src/views/Settings.vue
============================================= -->
<script setup>
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

<template>
  <div class="view settings-view">

    <!-- HEADER -->
    <div class="view-header">
      <h1>Configuración</h1>
      <p class="subtitle">Personaliza tu experiencia de uso</p>
    </div>

    <!-- GRID PRINCIPAL -->
    <div class="settings-grid">

      <!-- APARIENCIA -->
      <div class="settings-card">
        <h3>Apariencia</h3>

        <div class="setting-item">
          <div class="setting-text">
            <div class="setting-label">Modo oscuro</div>
            <div class="setting-description">Activa o desactiva el tema oscuro</div>
          </div>

          <label class="switch">
  <input 
    type="checkbox" 
    v-model="store.darkMode" 
  />
  <span class="slider"></span>
</label>
        </div>

        <div class="divider"></div>

        <div class="setting-item">
          <div class="setting-text">
            <div class="setting-label">Animaciones</div>
            <div class="setting-description">Mostrar animaciones en la interfaz</div>
          </div>

          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <!-- NOTIFICACIONES -->
      <div class="settings-card">
        <h3>Notificaciones</h3>

        <div class="setting-item">
          <div class="setting-text">
            <div class="setting-label">Notificaciones de escritorio</div>
            <div class="setting-description">Permitir alertas en tu dispositivo</div>
          </div>

          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>

        <div class="divider"></div>

        <div class="setting-item">
          <div class="setting-text">
            <div class="setting-label">Resumen diario</div>
            <div class="setting-description">Enviar notificación diaria de progreso</div>
          </div>

          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <!-- SEGURIDAD -->
      <div class="settings-card">
        <h3>Seguridad</h3>

        <div class="setting-item">
          <div class="setting-text">
            <div class="setting-label">Autenticación 2FA</div>
            <div class="setting-description">Mayor seguridad para tu cuenta</div>
          </div>

          <button class="btn-secondary">Configurar</button>
        </div>

        <div class="divider"></div>

        <div class="setting-item">
          <div class="setting-text">
            <div class="setting-label">Sesiones activas</div>
            <div class="setting-description">Ver y cerrar sesiones abiertas</div>
          </div>

          <button class="btn-secondary">Administrar</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* GRID PRINCIPAL */
.settings-grid {
  display: grid;
  gap: 28px;
  margin-top: 25px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

/* CARD */
.settings-card {
  background: var(--card-bg, #ffffff);
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.07);
  transition: transform .25s ease;
}

.dark .settings-card {
  background: #1e293b;
  box-shadow: 0 8px 18px rgba(0,0,0,0.4);
}

.settings-card:hover {
  transform: translateY(-4px);
}

.settings-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
}

/* SETTING ITEM */
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
}

.setting-text {
  max-width: 70%;
}

.setting-label {
  font-size: 1rem;
  font-weight: 600;
}

.setting-description {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 4px;
}

/* DIVIDER */
.divider {
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin: 8px 0;
}

.dark .divider {
  border-color: #334155;
}

/* SWITCH MODERNO */
.switch {
  position: relative;
  width: 46px;
  height: 24px;
  display: inline-block;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: #cbd5e1;
  border-radius: 24px;
  transition: .3s;
}

.slider::before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: .3s;
}

.switch input:checked + .slider {
  background: #6366f1;
}

.switch input:checked + .slider::before {
  transform: translateX(22px);
}

/* BUTTONS */
.btn-secondary {
  padding: 8px 14px;
  background: #e5e7eb;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn-secondary:hover {
  background: #d1d5db;
}

.dark .btn-secondary {
  background: #334155;
  color: #e2e8f0;
}

.dark .btn-secondary:hover {
  background: #475569;
}
</style>
