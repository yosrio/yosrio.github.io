<script setup lang="ts">
import { ref, computed } from 'vue'
import { Mail } from '@lucide/vue'
import { personal } from '@/data/personal'
import { useReveal } from '@/composables/useReveal'
import { useLocale } from '@/composables/useLocale'
import { translations } from '@/data/translations'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconWhatsapp from '@/components/icons/IconWhatsapp.vue'
import type { Component } from 'vue'

type LabelKey = 'email' | 'whatsapp' | 'github' | 'github_alt' | 'linkedin'
type Mode = 'email' | 'whatsapp'

interface ContactLink {
  key: LabelKey
  value: string
  href: string
  icon: Component
  external: boolean
}

const { el, visible } = useReveal()
const { locale } = useLocale()
const t = computed(() => translations[locale.value])

// Form state
const mode = ref<Mode>('email')
const senderEmail = ref('')
const senderName = ref('')
const message = ref('')
const sent = ref(false)

function send() {
  const msg = message.value.trim()
  if (!msg) return

  if (mode.value === 'email') {
    const subject = encodeURIComponent(`Message from ${senderEmail.value}`)
    const body = encodeURIComponent(msg)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`)
  } else {
    const greeting =
      locale.value === 'id'
        ? `Halo, nama saya ${senderName.value}.\n\n${msg}`
        : `Hi, I'm ${senderName.value}.\n\n${msg}`
    window.open(`${personal.whatsapp}?text=${encodeURIComponent(greeting)}`)
  }

  senderEmail.value = ''
  senderName.value = ''
  message.value = ''
  sent.value = true
  setTimeout(() => { sent.value = false }, 3000)
}

const canSend = computed(() => {
  if (!message.value.trim()) return false
  if (mode.value === 'email') return !!senderEmail.value.trim()
  return !!senderName.value.trim()
})

const links: ContactLink[] = [
  { key: 'email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail, external: false },
  { key: 'whatsapp', value: personal.whatsapp_display, href: personal.whatsapp, icon: IconWhatsapp, external: true },
  { key: 'github', value: 'github.com/yosrio', href: personal.github, icon: IconGithub, external: true },
  { key: 'github_alt', value: 'github.com/yosrioid', href: personal.github_alt, icon: IconGithub, external: true },
  { key: 'linkedin', value: 'linkedin.com/in/yos-rio', href: personal.linkedin, icon: IconLinkedin, external: true },
]
</script>

<template>
  <section id="contact" class="section" aria-labelledby="contact-heading">
    <div class="section-inner">
      <div ref="el" :class="['reveal', visible && 'visible']">
        <p class="section-label">{{ t.contact.label }}</p>

        <div class="contact-grid">
          <!-- Left: heading + links -->
          <div class="contact-left">
            <h2 id="contact-heading" class="contact-heading">{{ t.contact.heading }}</h2>
            <p class="contact-body">{{ t.contact.body }}</p>

            <div class="contact-links" role="list" aria-label="Contact methods">
              <a
                v-for="link in links"
                :key="link.key"
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="contact-item"
                role="listitem"
              >
                <div class="contact-icon-wrap" aria-hidden="true">
                  <component :is="link.icon" :size="16" />
                </div>
                <div class="contact-item-text">
                  <span class="contact-item-label">{{ t.contact.labels[link.key] }}</span>
                  <span class="contact-item-value">{{ link.value }}</span>
                </div>
                <svg class="contact-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right: form -->
          <div class="contact-form-wrap">
            <!-- Mode toggle -->
            <div class="mode-toggle" role="group" aria-label="Contact method">
              <button
                class="mode-btn"
                :class="{ 'mode-btn--active': mode === 'email' }"
                @click="mode = 'email'"
              >
                <Mail :size="13" aria-hidden="true" />
                Email
              </button>
              <button
                class="mode-btn"
                :class="{ 'mode-btn--active': mode === 'whatsapp' }"
                @click="mode = 'whatsapp'"
              >
                <IconWhatsapp :size="13" aria-hidden="true" />
                WhatsApp
              </button>
            </div>

            <form class="contact-form" @submit.prevent="send" novalidate>
              <!-- Email field -->
              <Transition name="field" mode="out-in">
                <div v-if="mode === 'email'" class="form-group" key="email-field">
                  <label class="form-label" for="sender-email">
                    {{ t.contact.form.label_email }}
                  </label>
                  <input
                    id="sender-email"
                    v-model="senderEmail"
                    type="email"
                    class="form-input"
                    :placeholder="t.contact.form.placeholder_email"
                    autocomplete="email"
                  />
                </div>

                <!-- Name field -->
                <div v-else class="form-group" key="name-field">
                  <label class="form-label" for="sender-name">
                    {{ t.contact.form.label_name }}
                  </label>
                  <input
                    id="sender-name"
                    v-model="senderName"
                    type="text"
                    class="form-input"
                    :placeholder="t.contact.form.placeholder_name"
                    autocomplete="name"
                  />
                </div>
              </Transition>

              <!-- Message -->
              <div class="form-group">
                <label class="form-label" for="message">
                  {{ t.contact.form.label_message }}
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  class="form-input form-textarea"
                  :placeholder="t.contact.form.placeholder_message"
                  rows="4"
                />
              </div>

              <!-- Success -->
              <Transition name="fade">
                <div v-if="sent" class="form-success" role="status">
                  <span>✓</span>
                  {{ mode === 'email' ? t.contact.form.note_email : t.contact.form.note_wa }}
                </div>
              </Transition>

              <!-- Submit -->
              <div class="form-footer">
                <p class="form-note">
                  {{ mode === 'email' ? t.contact.form.note_email : t.contact.form.note_wa }}
                </p>
                <button type="submit" class="form-submit" :disabled="!canSend">
                  <Mail v-if="mode === 'email'" :size="14" aria-hidden="true" />
                  <IconWhatsapp v-else :size="14" aria-hidden="true" />
                  {{ mode === 'email' ? t.contact.form.send_email : t.contact.form.send_wa }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="section-inner">
        <div class="footer-inner">
          <p class="footer-text">{{ t.contact.built }}</p>
          <p class="footer-copy">© {{ new Date().getFullYear() }} {{ personal.name }}</p>
        </div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }
}

/* Left */
.contact-heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  color: var(--text-1);
  margin-bottom: 0.75rem;
  line-height: 1.1;
}

.contact-body {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-2);
  margin-bottom: 1.5rem;
}

.contact-links { display: flex; flex-direction: column; gap: 0.5rem; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.625rem;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-item:hover {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.contact-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 0.375rem;
  background-color: var(--bg-raised);
  color: var(--accent);
  flex-shrink: 0;
}

.contact-item-text { flex: 1; display: flex; flex-direction: column; gap: 0.05rem; }

.contact-item-label {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.contact-item-value { font-size: 0.8125rem; font-weight: 500; color: var(--text-1); }

.contact-arrow { color: var(--text-3); flex-shrink: 0; transition: color 0.15s ease, transform 0.15s ease; }
.contact-item:hover .contact-arrow { color: var(--accent); transform: translate(1px, -1px); }

/* Form */
.contact-form-wrap {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 0.875rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Mode toggle */
.mode-toggle {
  display: flex;
  gap: 0.375rem;
  background-color: var(--bg-raised);
  border-radius: 0.5rem;
  padding: 0.25rem;
}

.mode-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.4rem 0.75rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  color: var(--text-3);
  cursor: pointer;
  transition: all 0.15s ease;
}

.mode-btn--active {
  background-color: var(--bg-surface);
  color: var(--text-1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Form fields */
.contact-form { display: flex; flex-direction: column; gap: 1rem; }

.form-group { display: flex; flex-direction: column; gap: 0.375rem; }

.form-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-2);
}

.form-input {
  background-color: var(--bg-raised);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  color: var(--text-1);
  font-family: var(--font-sans);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  width: 100%;
  outline: none;
}

.form-input::placeholder { color: var(--text-3); }

.form-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.form-textarea { resize: vertical; min-height: 100px; }

/* Footer */
.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.form-note {
  font-size: 0.75rem;
  color: var(--text-3);
}

.form-submit {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background-color: var(--accent);
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.5rem 1.125rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.15s ease;
  white-space: nowrap;
}

.form-submit:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
.form-submit:disabled { opacity: 0.4; cursor: not-allowed; }

/* Success */
.form-success {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #16a34a;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  padding: 0.5rem 0.875rem;
}

.dark .form-success {
  color: #4ade80;
  background-color: #052e16;
  border-color: #166534;
}

/* Field transition */
.field-enter-active, .field-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.field-enter-from { opacity: 0; transform: translateY(-4px); }
.field-leave-to { opacity: 0; transform: translateY(4px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Site footer */
.site-footer { margin-top: 4rem; padding-top: 1.5rem; border-top: 1px solid var(--border-faint); }

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  text-align: center;
  padding-block: 1.5rem;
}

@media (min-width: 480px) {
  .footer-inner { flex-direction: row; justify-content: space-between; text-align: left; }
}

.footer-text, .footer-copy { font-size: 0.8125rem; color: var(--text-3); }
</style>
