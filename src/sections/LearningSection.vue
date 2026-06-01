<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

const items = [
  {
    title: 'Java & Spring Boot',
    description:
      'Expanding from PHP into the Java ecosystem. Learning Spring Boot to understand enterprise-grade backend architecture and patterns.',
    status: 'In progress',
    statusColor: 'accent',
  },
  {
    title: 'Data Analytics',
    description:
      'Built a personal finance analytics tool in Python to explore data processing, visualization, and basic financial modeling outside of e-commerce.',
    status: 'Personal project',
    statusColor: 'muted',
  },
  {
    title: 'Full-Stack Depth',
    description:
      'Going beyond API-only backend work. Building TravelNest as a complete Laravel 12 application to get more hands-on with full-stack patterns.',
    status: 'Personal project',
    statusColor: 'muted',
  },
]
</script>

<template>
  <section id="learning" class="section" aria-labelledby="learning-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">05 — Beyond Work</p>
        <h2 id="learning-heading" class="learn-heading">What I'm building on.</h2>
        <p class="learn-sub">
          Client work sharpens what you know. Side projects are where I challenge what I don't.
        </p>

        <div class="learn-grid">
          <article v-for="item in items" :key="item.title" class="learn-card">
            <div class="learn-top">
              <span
                class="learn-status"
                :class="item.statusColor === 'accent' ? 'learn-status--accent' : 'learn-status--muted'"
              >
                {{ item.status }}
              </span>
            </div>
            <h3 class="learn-title">{{ item.title }}</h3>
            <p class="learn-desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.learn-heading {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin-bottom: 0.75rem;
  margin-top: 0.375rem;
}

.learn-sub {
  font-size: 0.9375rem;
  color: var(--text-2);
  max-width: 52ch;
  line-height: 1.65;
  margin-bottom: 2rem;
}

.learn-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .learn-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.learn-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.learn-top {
  margin-bottom: 0.25rem;
}

.learn-status {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}

.learn-status--accent {
  background-color: var(--accent-light);
  color: var(--accent);
}

.learn-status--muted {
  background-color: var(--bg-raised);
  color: var(--text-3);
  border: 1px solid var(--border);
}

.learn-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-1);
}

.learn-desc {
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--text-2);
}
</style>
