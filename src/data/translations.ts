export type Locale = 'en' | 'id'

export interface Trans {
  nav: { about: string; stack: string; experience: string; projects: string; contact: string }
  hero: {
    eyebrow: string
    tagline: string
    cta_projects: string
    status_label: string
    status: { role: string; company: string; experience: string; location: string }
  }
  about: {
    label: string
    heading: string
    fact_role: string
    fact_location: string
    fact_education: string
    thesis: string
  }
  stack: { label: string; heading: string; sub: string }
  experience: { label: string; heading: string; new_role: string }
  projects: {
    label: string
    heading: string
    sub: string
    empty: string
    client: string
    internal: string
    show_more: (n: number) => string
    show_less: string
    count: (n: number) => string
  }
  contact: {
    label: string
    heading: string
    body: string
    built: string
    labels: { email: string; whatsapp: string; github: string; linkedin: string }
  }
}

export const translations: Record<Locale, Trans> = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Based in Jakarta Barat, Indonesia',
      tagline: 'Building reliable backend systems for e-commerce.',
      cta_projects: 'View Projects',
      status_label: 'Fullstack Engineer · PT Vita Shopindo',
      status: { role: 'Role', company: 'Company', experience: 'Experience', location: 'Location' },
    },
    about: {
      label: '01 — About',
      heading: 'A backend engineer who cares about the whole system.',
      fact_role: 'Current Role',
      fact_location: 'Location',
      fact_education: 'Education',
      thesis: 'Thesis',
    },
    stack: {
      label: '02 — Stack',
      heading: 'Tools I work with.',
      sub: 'Five years in e-commerce backend work has solidified my core toolkit. The frontend skills are newer — brought on by the transition to fullstack engineering at PT Vita Shopindo.',
    },
    experience: {
      label: '03 — Experience',
      heading: "Where I've worked.",
      new_role: 'Just getting started — details coming soon.',
    },
    projects: {
      label: '04 — Projects',
      heading: 'Work by company.',
      sub: "Projects I've worked on, grouped by employer.",
      empty: 'Projects coming soon.',
      client: 'Client',
      internal: 'Internal',
      show_more: (n) => `Show ${n} more`,
      show_less: 'Show less',
      count: (n) => `${n} project${n > 1 ? 's' : ''}`,
    },
    contact: {
      label: '05 — Contact',
      heading: "Let's talk.",
      body: "Whether it's a backend engineering role, a freelance project, or just a question — I read every message and respond within a day or two.",
      built: 'Built with Vue 3 + Tailwind CSS.',
      labels: { email: 'Email', whatsapp: 'WhatsApp', github: 'GitHub', linkedin: 'LinkedIn' },
    },
  },

  id: {
    nav: {
      about: 'Tentang',
      stack: 'Tech Stack',
      experience: 'Pengalaman',
      projects: 'Proyek',
      contact: 'Kontak',
    },
    hero: {
      eyebrow: 'Berlokasi di Jakarta Barat, Indonesia',
      tagline: 'Membangun backend yang solid untuk e-commerce.',
      cta_projects: 'Lihat Proyek',
      status_label: 'Fullstack Engineer · PT Vita Shopindo',
      status: { role: 'Jabatan', company: 'Perusahaan', experience: 'Pengalaman', location: 'Lokasi' },
    },
    about: {
      label: '01 — Tentang Saya',
      heading: 'Fokus pada sistemnya, bukan sekadar kodenya.',
      fact_role: 'Jabatan Saat Ini',
      fact_location: 'Lokasi',
      fact_education: 'Pendidikan',
      thesis: 'Skripsi',
    },
    stack: {
      label: '02 — Tech Stack',
      heading: 'Yang saya gunakan sehari-hari.',
      sub: 'Lima tahun di backend e-commerce membentuk toolkit utama saya. Skill frontend-nya lebih baru — hadir seiring transisi ke fullstack di PT Vita Shopindo.',
    },
    experience: {
      label: '03 — Pengalaman',
      heading: 'Perjalanan karir.',
      new_role: 'Baru mulai — detail segera menyusul.',
    },
    projects: {
      label: '04 — Proyek',
      heading: 'Proyek per perusahaan.',
      sub: 'Proyek yang pernah saya kerjakan, dikelompokkan berdasarkan perusahaan.',
      empty: 'Segera hadir.',
      client: 'Klien',
      internal: 'Internal',
      show_more: (n) => `Lihat ${n} lainnya`,
      show_less: 'Sembunyikan',
      count: (n) => `${n} proyek`,
    },
    contact: {
      label: '05 — Kontak',
      heading: 'Mari terhubung.',
      body: 'Baik itu peluang kerja, proyek freelance, maupun sekadar pertanyaan — saya membaca setiap pesan dan biasanya merespons dalam satu-dua hari.',
      built: 'Dibangun dengan Vue 3 + Tailwind CSS.',
      labels: { email: 'Email', whatsapp: 'WhatsApp', github: 'GitHub', linkedin: 'LinkedIn' },
    },
  },
}
