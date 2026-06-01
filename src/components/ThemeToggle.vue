<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    class="theme-btn p-2 rounded-md transition-colors duration-150"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    @click="toggle"
  >
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 scale-75 rotate-45"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition-all duration-150"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-to-class="opacity-0 scale-75 -rotate-45"
      mode="out-in"
    >
      <Moon v-if="theme === 'light'" :size="16" key="moon" />
      <Sun v-else :size="16" key="sun" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-btn {
  color: var(--text-2);
}

.theme-btn:hover {
  color: var(--text-1);
  background-color: var(--bg-raised);
}
</style>
