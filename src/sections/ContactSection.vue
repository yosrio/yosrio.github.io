<script setup lang="ts">
import { Mail } from '@lucide/vue'
import { personal } from '@/data/personal'
import { useReveal } from '@/composables/useReveal'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import type { Component } from 'vue'

const { el, visible } = useReveal()

const links: { label: string; value: string; href: string; icon: Component; external: boolean }[] = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/yosrio',
    href: personal.github,
    icon: IconGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yos-rio',
    href: personal.linkedin,
    icon: IconLinkedin,
    external: true,
  },
]
</script>

<template>
  <section id="contact" class="section" aria-labelledby="contact-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">06 — Contact</p>

        <div class="contact-inner">
          <div class="contact-text">
            <h2 id="contact-heading" class="contact-heading">Let's talk.</h2>
            <p class="contact-body">
              Whether it's a backend engineering role, a freelance project, or just a question — I read
              every message and respond within a day or two.
            </p>
          </div>

          <div class="contact-links" role="list" aria-label="Contact methods">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="contact-item"
              role="listitem"
            >
              <div class="contact-icon-wrap" aria-hidden="true">
                <component :is="link.icon" :size="18" />
              </div>
              <div class="contact-item-text">
                <span class="contact-item-label">{{ link.label }}</span>
                <span class="contact-item-value">{{ link.value }}</span>
              </div>
              <svg
                class="contact-arrow"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="section-inner">
        <div class="footer-inner">
          <p class="footer-text">
            Built with Vue 3 + Tailwind CSS.
          </p>
          <p class="footer-copy">
            © {{ new Date().getFullYear() }} {{ personal.name }}
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 640px) {
  .contact-inner {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
  }
}

.contact-heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  color: var(--text-1);
  margin-bottom: 1rem;
  line-height: 1.1;
}

.contact-body {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-2);
  max-width: 42ch;
}

/* Links */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.125rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
  group: true;
}

.contact-item:hover {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
  transform: translateX(2px);
}

.contact-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.5rem;
  background-color: var(--bg-raised);
  color: var(--accent);
  flex-shrink: 0;
}

.contact-item-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.contact-item-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.contact-item-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-1);
}

.contact-arrow {
  color: var(--text-3);
  flex-shrink: 0;
  transition: color 0.15s ease, transform 0.15s ease;
}

.contact-item:hover .contact-arrow {
  color: var(--accent);
  transform: translate(1px, -1px);
}

/* Footer */
.site-footer {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-faint);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  text-align: center;
  padding-block: 1.5rem;
}

@media (min-width: 480px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-text,
.footer-copy {
  font-size: 0.8125rem;
  color: var(--text-3);
}
</style>
