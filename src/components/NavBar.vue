<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Menu, X } from '@lucide/vue'
import ThemeToggle from './ThemeToggle.vue'
import { useLocale } from '@/composables/useLocale'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { translations } from '@/data/translations'

const { locale, toggle: toggleLocale } = useLocale()
const t = computed(() => translations[locale.value])

const { active } = useScrollSpy(['about', 'stack', 'experience', 'projects', 'contact'])

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = computed(() => [
  { label: t.value.nav.about, href: '#about', id: 'about' },
  { label: t.value.nav.stack, href: '#stack', id: 'stack' },
  { label: t.value.nav.experience, href: '#experience', id: 'experience' },
  { label: t.value.nav.projects, href: '#projects', id: 'projects' },
  { label: t.value.nav.contact, href: '#contact', id: 'contact' },
])

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function handleNavClick(href: string) {
  menuOpen.value = false
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'nav-scrolled' : 'nav-top'"
  >
    <div class="max-w-5xl mx-auto px-6 md:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="font-semibold text-sm tracking-tight" style="color: var(--text-1)" aria-label="Home">
          <span class="font-mono" style="color: var(--accent)">yos</span><span style="color: var(--text-2)">rio</span>
        </a>

        <nav class="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            class="nav-link px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150"
            :class="{ 'nav-link--active': active === link.id }"
            :aria-current="active === link.id ? 'page' : undefined"
            @click.prevent="handleNavClick(link.href)"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center gap-1">
          <button class="lang-btn" :aria-label="`Switch to ${locale === 'en' ? 'Indonesian' : 'English'}`" @click="toggleLocale">
            <span :class="locale === 'en' ? 'lang-active' : 'lang-inactive'">EN</span>
            <span class="lang-sep">|</span>
            <span :class="locale === 'id' ? 'lang-active' : 'lang-inactive'">ID</span>
          </button>
          <ThemeToggle />
          <button
            class="md:hidden p-2 rounded-md nav-link transition-colors"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <X v-if="menuOpen" :size="18" />
            <Menu v-else :size="18" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="md:hidden mobile-menu border-t" style="border-color: var(--border)">
        <nav class="flex flex-col py-3 px-6" aria-label="Mobile navigation">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            class="nav-link py-2.5 text-sm font-medium border-b last:border-b-0 transition-colors"
            :class="{ 'nav-link--active': active === link.id }"
            style="border-color: var(--border-faint)"
            @click.prevent="handleNavClick(link.href)"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-top { background-color: transparent; }

.nav-scrolled {
  background-color: color-mix(in srgb, var(--bg-base) 90%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-faint);
}

.nav-link { color: var(--text-2); }
.nav-link:hover { color: var(--text-1); background-color: var(--bg-raised); }
.nav-link--active { color: var(--text-1) !important; font-weight: 600; }

.mobile-menu {
  background-color: color-mix(in srgb, var(--bg-base) 95%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-2);
  transition: border-color 0.15s ease;
}
.lang-btn:hover { border-color: var(--accent); }
.lang-active { color: var(--accent); }
.lang-inactive { color: var(--text-3); }
.lang-sep { color: var(--border); }
</style>
