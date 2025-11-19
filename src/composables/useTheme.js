import { watch } from 'vue'
import { useAppStore } from '@/store/app'

export function useTheme() {
  const store = useAppStore()

  watch(
    () => store.darkMode,
    (val) => {
      if (val) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    { immediate: true }
  )

  return {
    darkMode: store.darkMode,
    toggleDarkMode: store.toggleDarkMode
  }
}
