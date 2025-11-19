export const getStatusColor = (status) => {
  const colors = {
    'En progreso': '#3b82f6',
    'Completado': '#10b981',
    'Planificación': '#f59e0b'
  }
  return colors[status] || '#6b7280'
}

export const getPriorityColor = (priority) => {
  const colors = {
    alta: '#ef4444',
    media: '#f59e0b',
    baja: '#10b981'
  }
  return colors[priority]
}

export const getActivityIcon = (type) => {
  const icons = {
    task: '✅',
    comment: '💬',
    project: '📁',
    update: '🔄',
    file: '📎'
  }
  return icons[type] || '📋'
}