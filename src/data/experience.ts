export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'iCube',
    role: 'Software Engineer',
    period: '2020 – Present',
    location: 'Yogyakarta, Indonesia · Remote',
    description:
      'iCube is an e-commerce technology company delivering Magento and Shopify solutions for brands across Southeast Asia and beyond.',
    highlights: [
      'Developed custom Magento 2 modules for 10+ client projects covering push notifications, order tracking, GraphQL APIs, and affiliate systems.',
      'Architected a cross-platform Channel Service using n8n to synchronize data between Magento, Shopify, and third-party services.',
      'Built WhatsApp Commerce integrations for Loreal and Nivea — connecting Magento backends to WhatsApp Business API with custom order flows.',
      'Developed a custom shipping service dashboard using Laravel and ReactJS, with real-time Shopify checkout integration.',
      'Led data migration and PDF report generation for multi-region client (Indesso/Isensso), including blog customization and ERP connections.',
      'Contributed to multi-platform setups combining Magento, Shopify, and Laravel for brands including Catfootwear and Lesportac.',
    ],
    tech: ['PHP', 'Magento 2', 'Laravel', 'Shopify', 'n8n', 'GraphQL', 'ReactJS', 'MySQL'],
  },
  {
    company: 'JogjaTv',
    role: 'Web Development Intern',
    period: '2020 (3 months)',
    location: 'Yogyakarta, Indonesia',
    description: 'Internship as part of the Informatics undergraduate program.',
    highlights: [
      'Built and maintained internal web tools for the broadcast team.',
      'Gained hands-on experience with full-stack web development in a production environment.',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL'],
  },
]
