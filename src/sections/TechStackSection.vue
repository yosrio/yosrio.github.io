<script setup lang="ts">
import { skillGroups } from '@/data/skills'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <section id="stack" class="section" aria-labelledby="stack-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">02 — Stack</p>
        <h2 id="stack-heading" class="stack-heading">Tools I work with.</h2>
        <p class="stack-sub">
          Four years in e-commerce backend work has solidified my core toolkit.
          The "Currently Learning" group is where I'm actively building new depth.
        </p>

        <div class="stack-grid">
          <div
            v-for="group in skillGroups"
            :key="group.label"
            class="stack-group"
            :class="{ 'stack-group--learning': group.label === 'Currently Learning' }"
          >
            <h3 class="group-label">{{ group.label }}</h3>
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

.stack-group--learning {
  border-color: var(--accent);
  background-color: var(--accent-light);
}

.group-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 0.75rem;
}

.stack-group--learning .group-label {
  color: var(--accent);
}

.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
