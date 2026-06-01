<script setup lang="ts">
import { computed } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDown, FileText, ChevronDown } from '@lucide/vue'
import { personal } from '@/data/personal'
import { useLocale } from '@/composables/useLocale'
import { translations } from '@/data/translations'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'

const base = import.meta.env.BASE_URL
const cvOpen = ref(false)
const cvRef = ref<HTMLElement | null>(null)

function toggleCv() { cvOpen.value = !cvOpen.value }
function closeCv() { cvOpen.value = false }

function onOutsideClick(e: MouseEvent) {
  if (cvRef.value && !cvRef.value.contains(e.target as Node)) {
    cvOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onOutsideClick, true))
onUnmounted(() => document.removeEventListener('click', onOutsideClick, true))

const { locale } = useLocale()
const t = computed(() => translations[locale.value])
const bio = computed(() => locale.value === 'id' ? personal.bio_id : personal.bio)
const photoUrl = `${import.meta.env.BASE_URL}photo.jpeg`

function scrollToProjects() {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="min-h-screen flex flex-col justify-center pt-16" aria-label="Introduction">
    <div class="section-inner">
      <div class="hero-grid">
        <!-- Text content -->
        <div class="hero-content">
          <p class="hero-eyebrow">
            <span class="inline-block w-8 h-px align-middle mr-2" style="background-color: var(--accent)" />
            {{ t.hero.eyebrow }}
          </p>

          <h1 class="hero-name">{{ personal.name }}</h1>
          <p class="hero-title">{{ personal.title }}</p>
          <p class="hero-tagline">{{ t.hero.tagline }}</p>
          <p class="hero-bio">{{ bio[0] }}</p>

          <!-- CTAs -->
          <div class="hero-ctas">
            <a href="#projects" class="btn-primary" @click.prevent="scrollToProjects">
              {{ t.hero.cta_projects }}
            </a>
            <div class="flex gap-3 flex-wrap">
              <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="btn-ghost" aria-label="GitHub profile">
                <IconGithub :size="16" /> GitHub
              </a>
              <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="btn-ghost" aria-label="LinkedIn profile">
                <IconLinkedin :size="16" /> LinkedIn
              </a>
              <!-- CV dropdown -->
              <div class="cv-dropdown" ref="cvRef">
                <button class="btn-ghost" aria-haspopup="true" :aria-expanded="cvOpen" @click="toggleCv">
                  <FileText :size="16" /> CV <ChevronDown :size="13" />
                </button>
                <Transition
                  enter-active-class="transition-all duration-150 ease-out"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div v-if="cvOpen" class="cv-menu" role="menu">
                    <a :href="`${base}cv.html`" target="_blank" rel="noopener noreferrer" class="cv-option" role="menuitem" @click="closeCv">
                      <span class="cv-option-title">ATS-Friendly</span>
                      <span class="cv-option-sub">Clean text, parser-safe</span>
                    </a>
                    <a :href="`${base}cv-creative.html`" target="_blank" rel="noopener noreferrer" class="cv-option" role="menuitem" @click="closeCv">
                      <span class="cv-option-title">Creative</span>
                      <span class="cv-option-sub">Sidebar design with photo</span>
                    </a>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column: photo + status card -->
        <aside class="hero-aside" aria-label="Profile and status">
          <div class="photo-wrap">
            <img
              :src="photoUrl"
              :alt="`${personal.name} profile photo`"
              class="profile-photo"
              width="280"
              height="280"
              loading="eager"
            />
          </div>

          <div class="status-card">
            <div class="status-current">
              <span class="status-dot" aria-hidden="true" />
              <span class="status-text">{{ t.hero.status_label }}</span>
            </div>
            <dl class="status-list">
              <div class="status-row">
                <dt>{{ t.hero.status.role }}</dt>
                <dd>Fullstack Engineer</dd>
              </div>
              <div class="status-row">
                <dt>{{ t.hero.status.company }}</dt>
                <dd>PT Vita Shopindo</dd>
              </div>
              <div class="status-row">
                <dt>{{ t.hero.status.experience }}</dt>
                <dd>5+ years</dd>
              </div>
              <div class="status-row">
                <dt>{{ t.hero.status.location }}</dt>
                <dd>Jakarta Barat</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <div class="scroll-hint" aria-hidden="true">
        <ArrowDown :size="16" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: start;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr 280px;
    gap: 4rem;
    align-items: center;
  }
}

.photo-wrap { display: flex; justify-content: center; }
@media (min-width: 768px) { .photo-wrap { justify-content: stretch; } }

.profile-photo {
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: center 25%;
  border-radius: 0.875rem;
  border: 2px solid var(--border);
  display: block;
}

@media (min-width: 768px) {
  .profile-photo { width: 100%; height: 220px; }
}

.hero-aside { display: flex; flex-direction: column; gap: 1rem; }

.hero-eyebrow {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-3);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
}

.hero-name {
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--text-1);
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 1rem;
  font-family: var(--font-mono);
}

.hero-tagline {
  font-size: clamp(1.05rem, 2.5vw, 1.25rem);
  font-weight: 500;
  color: var(--text-2);
  line-height: 1.4;
  margin-bottom: 1.25rem;
}

.hero-bio {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-2);
  max-width: 52ch;
  margin-bottom: 2rem;
}

.hero-ctas { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; }

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--accent);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--text-2);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background-color: var(--bg-surface);
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}

.btn-ghost:hover { color: var(--text-1); border-color: var(--accent); transform: translateY(-1px); }

.status-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
}

.status-current {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-faint);
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent);
  flex-shrink: 0;
}

.status-text { font-size: 0.75rem; font-weight: 500; color: var(--text-2); }

.status-list { display: flex; flex-direction: column; gap: 0.6rem; }

.status-row { display: flex; justify-content: space-between; align-items: baseline; font-size: 0.8125rem; }
.status-row dt { color: var(--text-3); font-weight: 400; }
.status-row dd { color: var(--text-1); font-weight: 500; text-align: right; }

/* CV dropdown */
.cv-dropdown { position: relative; }

.cv-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.625rem;
  padding: 0.375rem;
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  z-index: 50;
}

.cv-option {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0.5rem 0.625rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.12s ease;
}

.cv-option:hover { background-color: var(--bg-raised); }
.cv-option-title { font-size: 0.8125rem; font-weight: 600; color: var(--text-1); }
.cv-option-sub { font-size: 0.6875rem; color: var(--text-3); }

.scroll-hint { display: flex; justify-content: center; color: var(--text-3); animation: bounce 2s ease infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
</style>
