<script setup lang="ts">
import { computed } from 'vue'
import { skillGroups } from '@/data/skills'
import { useReveal } from '@/composables/useReveal'
import { useLocale } from '@/composables/useLocale'
import { translations } from '@/data/translations'

const { el, visible } = useReveal()
const { locale } = useLocale()
const t = computed(() => translations[locale.value])
</script>

<template>
  <section id="stack" class="section" aria-labelledby="stack-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">{{ t.stack.label }}</p>
        <h2 id="stack-heading" class="stack-heading">{{ t.stack.heading }}</h2>
        <p class="stack-sub">{{ t.stack.sub }}</p>

        <div class="stack-grid">
          <div v-for="group in skillGroups" :key="group.label" class="stack-group">
            <h3 class="group-label">{{ locale === 'id' ? group.label_id : group.label }}</h3>
            <div class="tags-wrap">
              <span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-heading {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin-bottom: 0.75rem;
  margin-top: 0.375rem;
}

.stack-sub {
  font-size: 0.9375rem;
  color: var(--text-2);
  max-width: 56ch;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.stack-group {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.25rem;
}

.group-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 0.75rem;
}

.tags-wrap { display: flex; flex-wrap: wrap; gap: 0.4rem; }
</style>
