<script setup lang="ts">
import { GraduationCap, Briefcase, MapPin } from '@lucide/vue'
import { personal } from '@/data/personal'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
const photoUrl = `${import.meta.env.BASE_URL}photo.jpeg`
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">01 — About</p>

        <div class="about-grid">
          <div class="about-text">
            <h2 id="about-heading" class="about-heading">
              A backend engineer who<br class="hidden sm:block" />
              cares about the whole system.
            </h2>

            <div class="about-body">
              <p v-for="(paragraph, i) in personal.bio" :key="i">{{ paragraph }}</p>
            </div>
          </div>

          <aside class="about-sidebar" aria-label="Quick facts">
            <!-- Photo -->
            <div class="about-photo-wrap">
              <img
                :src="photoUrl"
                :alt="`${personal.name} profile photo`"
                class="about-photo"
                width="280"
                height="280"
                loading="lazy"
              />
            </div>

            <div class="fact-card">
              <div class="fact-item">
                <Briefcase :size="15" class="fact-icon" aria-hidden="true" />
                <div>
                  <p class="fact-label">Current Role</p>
                  <p class="fact-value">Software Engineer at iCube</p>
                </div>
              </div>

              <div class="fact-item">
                <MapPin :size="15" class="fact-icon" aria-hidden="true" />
                <div>
                  <p class="fact-label">Location</p>
                  <p class="fact-value">{{ personal.location }}</p>
                </div>
              </div>

              <div class="fact-item">
                <GraduationCap :size="15" class="fact-icon" aria-hidden="true" />
                <div>
                  <p class="fact-label">Education</p>
                  <p class="fact-value">{{ personal.education.school }}</p>
                  <p class="fact-sub">{{ personal.education.degree }}, {{ personal.education.years }}</p>
                </div>
              </div>
            </div>

            <div class="thesis-card">
              <p class="thesis-label">Thesis</p>
              <p class="thesis-text">"{{ personal.education.thesis }}"</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 280px;
    gap: 4rem;
    align-items: start;
  }
}

.about-heading {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: var(--text-1);
  margin-bottom: 1.5rem;
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-body p {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--text-2);
}

/* Photo */
.about-photo-wrap {
  display: none;
}

@media (min-width: 768px) {
  .about-photo-wrap {
    display: block;
  }
}

.about-photo {
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center top;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  display: block;
}

/* Sidebar */
.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fact-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fact-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.fact-icon {
  color: var(--accent);
  margin-top: 1px;
  flex-shrink: 0;
}

.fact-label {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  margin-bottom: 0.1rem;
}

.fact-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-1);
}

.fact-sub {
  font-size: 0.8125rem;
  color: var(--text-3);
  margin-top: 0.1rem;
}

.thesis-card {
  background-color: var(--bg-raised);
  border: 1px solid var(--border-faint);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
}

.thesis-label {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  margin-bottom: 0.4rem;
}

.thesis-text {
  font-size: 0.8125rem;
  font-style: italic;
  line-height: 1.55;
  color: var(--text-2);
}
</style>
