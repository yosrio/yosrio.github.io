<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import { featuredProjects, personalProjects } from '@/data/projects'
import { useReveal } from '@/composables/useReveal'
import IconGithub from '@/components/icons/IconGithub.vue'

const { el, visible } = useReveal()
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">04 — Projects</p>
        <h2 id="projects-heading" class="projects-heading">Selected work.</h2>
        <p class="projects-sub">
          A mix of professional client work (built at iCube) and personal projects.
          Client projects are described at a high level out of respect for confidentiality.
        </p>

        <!-- Client work -->
        <div class="sub-label" aria-label="Section: Professional work">
          <span>Professional</span>
        </div>

        <div class="projects-grid" aria-label="Client projects">
          <article
            v-for="project in featuredProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-top">
              <div>
                <div class="project-badge">{{ project.highlight }}</div>
                <h3 class="project-name">{{ project.name }}</h3>
              </div>
              <ExternalLink :size="14" class="project-ext-icon" aria-hidden="true" />
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tech" aria-label="Technologies">
              <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
            </div>
          </article>
        </div>

        <!-- Personal projects -->
        <div class="sub-label sub-label--personal" aria-label="Section: Personal projects">
          <span>Personal</span>
        </div>

        <div class="projects-grid personal-grid" aria-label="Personal projects">
          <article
            v-for="project in personalProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-top">
              <h3 class="project-name">{{ project.name }}</h3>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-gh-link"
                :aria-label="`View ${project.name} on GitHub`"
              >
                <IconGithub :size="16" />
              </a>
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tech" aria-label="Technologies">
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

.sub-label--personal {
  margin-top: 2.5rem;
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
    grid-template-columns: repeat(3, 1fr);
  }
}

.personal-grid {
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .personal-grid {
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
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
  transform: translateY(-2px);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.project-badge {
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background-color: var(--accent-light);
  border-radius: 0.25rem;
  padding: 0.125rem 0.45rem;
  margin-bottom: 0.35rem;
}

.project-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-1);
  line-height: 1.3;
}

.project-ext-icon {
  color: var(--text-3);
  flex-shrink: 0;
  margin-top: 2px;
}

.project-gh-link {
  color: var(--text-3);
  transition: color 0.15s ease;
  flex-shrink: 0;
}

.project-gh-link:hover {
  color: var(--accent);
}

.project-desc {
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--text-2);
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}
</style>
