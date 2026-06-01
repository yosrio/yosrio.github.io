<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from '@lucide/vue'
import { projectGroups } from '@/data/projects'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

const INITIAL_SHOW = 4

const expanded = ref<Record<string, boolean>>({})

function toggle(company: string) {
  expanded.value[company] = !expanded.value[company]
}

function isExpanded(company: string) {
  return !!expanded.value[company]
}
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">04 — Projects</p>
        <h2 id="projects-heading" class="projects-heading">Work by company.</h2>
        <p class="projects-sub">
          Projects I've worked on, grouped by employer.
        </p>

        <div class="company-list">
          <div
            v-for="group in projectGroups"
            :key="group.company"
            class="company-block"
          >
            <!-- Company header -->
            <div class="company-header">
              <div class="company-meta">
                <h3 class="company-name">{{ group.company }}</h3>
                <span class="company-period">{{ group.period }}</span>
              </div>
              <span v-if="group.projects.length > 0" class="project-count">
                {{ group.projects.length }} project{{ group.projects.length > 1 ? 's' : '' }}
              </span>
            </div>

            <!-- Empty state -->
            <div v-if="group.projects.length === 0" class="empty-state">
              <span>Projects coming soon.</span>
            </div>

            <!-- Projects grid -->
            <template v-else>
              <div class="projects-grid">
                <article
                  v-for="(project, idx) in group.projects"
                  v-show="idx < INITIAL_SHOW || isExpanded(group.company)"
                  :key="project.id"
                  class="project-card"
                >
                  <div class="project-header">
                    <h4 class="project-name">{{ project.name }}</h4>
                    <span
                      class="project-type"
                      :class="project.type === 'external' ? 'project-type--external' : 'project-type--internal'"
                    >
                      {{ project.type === 'external' ? 'Client' : 'Internal' }}
                    </span>
                  </div>
                  <ul class="project-highlights">
                    <li v-for="(item, i) in project.highlights" :key="i">
                      <span class="highlight-dash" aria-hidden="true">—</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                  <div class="project-tech">
                    <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
                  </div>
                </article>
              </div>

              <!-- Show more / less button -->
              <button
                v-if="group.projects.length > INITIAL_SHOW"
                class="show-more-btn"
                :aria-expanded="isExpanded(group.company)"
                @click="toggle(group.company)"
              >
                <template v-if="!isExpanded(group.company)">
                  <ChevronDown :size="15" aria-hidden="true" />
                  Show {{ group.projects.length - INITIAL_SHOW }} more
                </template>
                <template v-else>
                  <ChevronUp :size="15" aria-hidden="true" />
                  Show less
                </template>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-heading {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin-bottom: 0.75rem;
  margin-top: 0.375rem;
}

.projects-sub {
  font-size: 0.9375rem;
  color: var(--text-2);
  max-width: 60ch;
  line-height: 1.65;
  margin-bottom: 2rem;
}

/* Company list */
.company-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.company-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Company header */
.company-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.company-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.625rem;
}

.company-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-1);
  letter-spacing: -0.01em;
}

.company-period {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--text-3);
}

.project-count {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-3);
  white-space: nowrap;
  flex-shrink: 0;
}

/* Empty state */
.empty-state {
  background-color: var(--bg-raised);
  border: 1px dashed var(--border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-3);
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Card */
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.project-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-1);
  line-height: 1.3;
}

.project-type {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.45rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 2px;
}

.project-type--external {
  background-color: var(--accent-light);
  color: var(--accent);
}

.project-type--internal {
  background-color: var(--bg-raised);
  color: var(--text-3);
  border: 1px solid var(--border);
}

/* Highlights */
.project-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.project-highlights li {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.55;
  color: var(--text-2);
}

.highlight-dash {
  color: var(--accent);
  font-weight: 600;
  flex-shrink: 0;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-faint);
}

/* Show more button */
.show-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--accent);
  background: none;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  align-self: flex-start;
}

.show-more-btn:hover {
  border-color: var(--accent);
  background-color: var(--accent-light);
}
</style>
