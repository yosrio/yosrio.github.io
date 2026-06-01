<script setup lang="ts">
import { watch } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import TechStackSection from '@/sections/TechStackSection.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import { useLocale } from '@/composables/useLocale'

const { locale } = useLocale()

const meta = {
  en: {
    title: 'Yos Rio Puraga — Fullstack Engineer',
    description:
      'Fullstack engineer with 5+ years building e-commerce backends. Experienced in PHP, Laravel, Golang, Magento 2, Shopify, Vue, and Nuxt. Based in Jakarta Barat, Indonesia.',
  },
  id: {
    title: 'Yos Rio Puraga — Fullstack Engineer',
    description:
      'Fullstack engineer dengan 5+ tahun pengalaman di backend e-commerce. Berpengalaman di PHP, Laravel, Golang, Magento 2, Shopify, Vue, dan Nuxt. Berlokasi di Jakarta Barat, Indonesia.',
  },
}

watch(
  locale,
  (l) => {
    document.title = meta[l].title
    document.documentElement.lang = l

    const setMeta = (sel: string, content: string) =>
      document.querySelector(sel)?.setAttribute('content', content)

    setMeta('meta[name="description"]', meta[l].description)
    setMeta('meta[property="og:description"]', meta[l].description)
    setMeta('meta[property="og:locale"]', l === 'id' ? 'id_ID' : 'en_US')
  },
  { immediate: true },
)
</script>

<template>
  <div class="app">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <NavBar />
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  background-color: var(--accent);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: top 0.15s ease;
}
.skip-link:focus { top: 0; }
</style>
