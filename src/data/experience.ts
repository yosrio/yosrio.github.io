export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  tech: string[]
  current: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: 'PT Vita Shopindo',
    role: 'Software Engineer',
    period: 'Jun 2026 – Present',
    location: 'Indonesia · Remote',
    description: '',
    highlights: [],
    tech: [],
    current: true,
  },
  {
    company: 'iCube',
    role: 'Software Engineer',
    period: 'Jan 2020 – May 2026 · 6 yrs 5 mos',
    location: 'Yogyakarta, Indonesia · Remote',
    description:
      'iCube is an e-commerce technology company delivering Magento and Shopify solutions for brands across Southeast Asia and beyond.',
    highlights: [
      'Developed custom Magento 2 modules for 10+ client projects — push notifications, order tracking, GraphQL APIs, and affiliate systems.',
      'Architected an internal Channel Service using n8n to synchronise products, stock, and orders across Magento, Shopify, and third-party platforms.',
      'Built WhatsApp Commerce integrations for L\'Oréal and Nivea, connecting Magento backends to the WhatsApp Business API with custom order flows.',
      'Developed a custom Shopify shipping app (Laravel + ReactJS) embedded in the Shopify Admin as a custom app.',
      'Handled data migrations, PDF report generation, and ERP integrations for multiple clients.',
    ],
    tech: ['PHP', 'Magento 2', 'Laravel', 'Shopify', 'n8n', 'GraphQL', 'ReactJS', 'MySQL'],
    current: false,
  },
  {
    company: 'JogjaTv',
    role: 'Web Development Intern',
    period: '2020 · 3 mos',
    location: 'Yogyakarta, Indonesia',
    description: 'Internship as part of the Informatics undergraduate programme at Universitas Sanata Dharma.',
    highlights: [
      'Built an internal web-based correspondence system from design to deployment.',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL'],
    current: false,
  },
]
