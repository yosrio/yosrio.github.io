export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  location_id?: string
  description: string
  description_id?: string
  highlights: string[]
  highlights_id?: string[]
  tech: string[]
  current: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: 'PT Vita Shopindo',
    role: 'Fullstack Engineer',
    period: 'Jun 2026 – Present',
    location: 'Jakarta Barat, Indonesia · WFO',
    location_id: 'Jakarta Barat, Indonesia · WFO',
    description: '',
    highlights: [],
    tech: [],
    current: true,
  },
  {
    company: 'iCube',
    role: 'Software Engineer',
    period: 'Aug 2020 – May 2026 · 5 yrs 9 mos',
    location: 'Yogyakarta, Indonesia · Remote',
    location_id: 'Yogyakarta, Indonesia · Remote',
    description: 'iCube is an e-commerce technology company delivering Magento and Shopify solutions for brands across Southeast Asia and beyond.',
    description_id: 'iCube adalah perusahaan teknologi e-commerce yang menyediakan solusi Magento dan Shopify untuk merek-merek di Asia Tenggara dan sekitarnya.',
    highlights: [
      "Developed custom Magento 2 modules for 10+ client projects — push notifications, order tracking, GraphQL APIs, and affiliate systems.",
      "Architected an internal Channel Service using n8n to synchronise products, stock, and orders across Magento, Shopify, and third-party platforms.",
      "Built WhatsApp Commerce integrations for L'Oréal and Nivea, connecting Magento backends to the WhatsApp Business API with custom order flows.",
      "Developed a custom Shopify shipping app (Laravel + ReactJS) embedded in the Shopify Admin as a custom app.",
      "Handled data migrations, PDF report generation, and ERP integrations for multiple clients.",
    ],
    highlights_id: [
      "Mengembangkan modul Magento 2 kustom untuk 10+ proyek klien — push notification, pelacakan pesanan, GraphQL API, dan sistem afiliasi.",
      "Merancang Channel Service internal menggunakan n8n untuk menyinkronkan produk, stok, dan pesanan antara Magento, Shopify, dan platform pihak ketiga.",
      "Membangun integrasi WhatsApp Commerce untuk L'Oréal dan Nivea, menghubungkan backend Magento ke WhatsApp Business API dengan alur pesanan kustom.",
      "Mengembangkan aplikasi Shopify untuk pengiriman kustom (Laravel + ReactJS) yang tertanam di Shopify Admin sebagai custom app.",
      "Menangani migrasi data, pembuatan laporan PDF, dan integrasi ERP untuk berbagai klien.",
    ],
    tech: ['PHP', 'Magento 2', 'Laravel', 'Shopify', 'n8n', 'GraphQL', 'ReactJS', 'MySQL'],
    current: false,
  },
  {
    company: 'JogjaTv',
    role: 'Web Development Intern',
    period: '2019 · 3 mos',
    location: 'Yogyakarta, Indonesia',
    description: 'Internship as part of the Informatics undergraduate programme at Universitas Sanata Dharma.',
    description_id: 'Magang sebagai bagian dari program sarjana Informatika di Universitas Sanata Dharma.',
    highlights: [
      'Built an internal web-based correspondence system from design to deployment.',
    ],
    highlights_id: [
      'Membangun sistem surat menyurat berbasis web internal dari desain hingga deployment.',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL'],
    current: false,
  },
]
