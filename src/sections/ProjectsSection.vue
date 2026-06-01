<script setup lang="ts">
import { iCubeProjects } from '@/data/projects'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

const externalProjects = iCubeProjects.filter((p) => p.type === 'external')
const internalProjects = iCubeProjects.filter((p) => p.type === 'internal')
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">04 — Projects</p>
        <h2 id="projects-heading" class="projects-heading">Work at iCube.</h2>
        <p class="projects-sub">
          Projects delivered as part of the engineering team at iCube — covering client e-commerce
          builds and internal tooling.
        </p>

        <!-- External projects -->
        <div class="sub-label">
          <span>Client Projects</span>
        </div>

        <div class="projects-grid">
          <article
            v-for="project in externalProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-header">
              <h3 class="project-name">{{ project.name }}</h3>
              <span class="project-type project-type--external">External</span>
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

        <!-- Internal projects -->
        <div class="sub-label sub-label--second">
          <span>Internal Tools</span>
        </div>

        <div class="projects-grid">
          <article
            v-for="project in internalProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-header">
              <h3 class="project-name">{{ project.name }}</h3>
              <span class="project-type project-type--internal">Internal</span>
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

.sub-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.sub-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: var(--border);
}

.sub-label span {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
  white-space: nowrap;
}

.sub-label--second {
  margin-top: 2rem;
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
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
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-faint);
}
</style>
