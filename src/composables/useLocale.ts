import { ref } from 'vue'

export type Locale = 'en' | 'id'

const locale = ref<Locale>('en')

let initialized = false

export function useLocale() {
  if (!initialized && typeof localStorage !== 'undefined') {
    initialized = true
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored === 'en' || stored === 'id') locale.value = stored
  }

  function setLocale(l: Locale) {
    locale.value = l
    localStorage.setItem('locale', l)
  }

  function toggle() {
    setLocale(locale.value === 'en' ? 'id' : 'en')
  }

  return { locale, setLocale, toggle }
}
