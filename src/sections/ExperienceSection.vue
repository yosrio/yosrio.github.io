<script setup lang="ts">
import { experience } from '@/data/experience'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <section id="experience" class="section" aria-labelledby="experience-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">03 — Experience</p>
        <h2 id="experience-heading" class="exp-heading">Where I've worked.</h2>

        <div class="timeline">
          <article
            v-for="(job, index) in experience"
            :key="index"
            class="timeline-item"
          >
            <!-- Timeline dot -->
            <div class="timeline-dot" :class="{ 'timeline-dot--active': job.current }" aria-hidden="true" />

            <div class="timeline-body">
              <!-- Header -->
              <header class="job-header">
                <div>
                  <h3 class="job-role">{{ job.role }}</h3>
                  <div class="job-meta">
                    <span class="job-company">{{ job.company }}</span>
                    <span class="job-sep" aria-hidden="true">·</span>
                    <span class="job-location">{{ job.location }}</span>
                  </div>
                </div>
                <time class="job-period">{{ job.period }}</time>
              </header>

              <!-- New / empty role -->
              <template v-if="job.highlights.length === 0">
                <p class="job-new">Just getting started — details coming soon.</p>
              </template>

              <!-- Populated role -->
              <template v-else>
                <p v-if="job.description" class="job-desc">{{ job.description }}</p>

                <ul class="highlights" aria-label="Key achievements">
                  <li v-for="(item, i) in job.highlights" :key="i" class="highlight-item">
                    <span class="highlight-bullet" aria-hidden="true">—</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>

                <div v-if="job.tech.length > 0" class="job-tech" aria-label="Technologies used">
                  <span v-for="t in job.tech" :key="t" class="tag">{{ t }}</span>
                </div>
              </template>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-heading {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin-bottom: 2.5rem;
  margin-top: 0.375rem;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 1.75rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 0;
  width: 1px;
  background-color: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: calc(-1.75rem + 2px);
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--border);
  border: 2px solid var(--bg-base);
}

.timeline-dot--active {
  background-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.timeline-body {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

/* Job header */
.job-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.875rem;
}

@media (min-width: 480px) {
  .job-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.job-role {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-1);
  margin-bottom: 0.2rem;
}

.job-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
}

.job-company {
  font-weight: 600;
  color: var(--accent);
}

.job-sep {
  color: var(--text-3);
}

.job-location {
  color: var(--text-3);
}

.job-period {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: 500;
  color: var(--text-3);
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 2px;
}

/* New role placeholder */
.job-new {
  font-size: 0.875rem;
  font-style: italic;
  color: var(--text-3);
}

/* Description */
.job-desc {
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--text-2);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-faint);
}

/* Highlights */
.highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlight-item {
  display: flex;
  gap: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-2);
}

.highlight-bullet {
  color: var(--accent);
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Tech */
.job-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}
</style>
