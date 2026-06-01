<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import TechStackSection from '@/sections/TechStackSection.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'
import LearningSection from '@/sections/LearningSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
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
      <LearningSection />
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

.skip-link:focus {
  top: 0;
}
</style>
