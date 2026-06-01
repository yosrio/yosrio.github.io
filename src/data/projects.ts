export interface Project {
  id: string
  name: string
  highlights: string[]
  tech: string[]
  type: 'external' | 'internal'
  github?: string
}

export const iCubeProjects: Project[] = [
  {
    id: 'lottemart',
    name: 'Lottemart Apps',
    highlights: [
      'Implemented push notifications from backend to frontend',
    ],
    tech: ['PHP', 'Magento 2'],
    type: 'external',
  },
  {
    id: 'kiehberg',
    name: 'Kiehberg (India & Germany)',
    highlights: [
      'Installed and configured required modules',
      'Migrated data from Magento 1 to Magento 2',
      'Implemented order tracking feature',
      'Customised PDP to display tier pricing table and handle conditional logic',
      'Customised sales order backoffice to display custom fields',
    ],
    tech: ['PHP', 'Magento 2'],
    type: 'external',
  },
  {
    id: 'focus-nusantara',
    name: 'Focus Nusantara',
    highlights: [
      'Built GraphQL affiliate, free item promo, and related features',
      'Implemented workshop/event management in the backoffice',
      'Created custom email templates',
      'Investigated and fixed checkout error when product price is 0',
    ],
    tech: ['PHP', 'Magento 2', 'GraphQL'],
    type: 'external',
  },
  {
    id: 'csa',
    name: 'CSA',
    highlights: [
      'Added validation to prevent zero-price products from entering cart',
      'Implemented PDP/PLP advanced shipping rate and price calculation',
      'Built GraphQL endpoints for quotation, credit limit, and related features',
      'Investigated and fixed Xendit payment gateway module issues',
    ],
    tech: ['PHP', 'Magento 2', 'GraphQL'],
    type: 'external',
  },
  {
    id: 'indesso',
    name: 'Indesso / Isensso',
    highlights: [
      'Migrated data from the previous site to the new platform',
      'Customised the blog page',
      'Built PDF report generation feature',
    ],
    tech: ['PHP', 'Magento 2'],
    type: 'external',
  },
  {
    id: 'loreal',
    name: "L'Oréal WaCommerce",
    highlights: [
      'Assisted with bulk data import into Magento',
      'Set up WhatsApp Business account for development',
      'Integrated product catalogue with Facebook Business Manager (FBM)',
      'Built REST APIs for third-party product, stock, and order sync to WhatsApp',
    ],
    tech: ['PHP', 'Magento 2', 'WhatsApp Business API', 'REST API'],
    type: 'external',
  },
  {
    id: 'planet-gadget',
    name: 'Planet Gadget',
    highlights: [
      'Updated and maintained existing features',
      'Built REST APIs for various required functionalities',
      'Fixed flash sale module issues',
      'Developed ERP–Magento integration module',
    ],
    tech: ['PHP', 'Magento 2', 'REST API'],
    type: 'external',
  },
  {
    id: 'channel-service',
    name: 'Channel Service',
    highlights: [
      'Designed the database architecture',
      'Built middleware for cross-platform integration (products, stock, orders)',
      'Implemented a queue system to handle long-running sync operations',
    ],
    tech: ['n8n', 'MySQL'],
    type: 'internal',
  },
  {
    id: 'shipping-service',
    name: 'Shipping Service Shopify App',
    highlights: [
      'Designed the database architecture',
      'Built a dashboard and configuration panel embedded in Shopify Admin as a custom app',
      'Implemented CRUD operations for managing shipping data',
      'Added custom shipping methods to the Shopify checkout flow',
      'Built shipping method selection logic',
    ],
    tech: ['Shopify', 'Laravel', 'ReactJS', 'MySQL'],
    type: 'internal',
  },
  {
    id: 'catfootwear',
    name: 'Catfootwear',
    highlights: [
      'Integrated product and stock data from Magento to Shopify via n8n',
      'Customised order sync back to Magento',
      'Redirected checkout to iCube custom checkout',
      'Fixed slow integration performance issues',
    ],
    tech: ['PHP', 'Magento 2', 'Shopify', 'JavaScript', 'Laravel', 'n8n'],
    type: 'external',
  },
  {
    id: 'lesportac',
    name: 'Lesportac',
    highlights: [
      'Integrated product and stock data from Magento to Shopify via n8n',
      'Customised order sync back to Magento',
      'Redirected checkout to iCube custom checkout',
    ],
    tech: ['PHP', 'Magento 2', 'Shopify', 'JavaScript', 'Laravel', 'n8n'],
    type: 'external',
  },
  {
    id: 'nivea',
    name: 'Nivea WaCommerce',
    highlights: [
      'Assisted with bulk data import into Magento',
      'Set up WhatsApp Business account for development',
      'Integrated product catalogue with Facebook Business Manager (FBM)',
      'Built REST APIs for product, stock, and order sync to WhatsApp',
      'Developed Laravel middleware for Magento-to-WhatsApp integration',
      'Implemented iCube custom checkout flow',
      'Configured n8n as order integration middleware',
    ],
    tech: ['PHP', 'Magento 2', 'WhatsApp Business API', 'Laravel', 'n8n', 'REST API'],
    type: 'external',
  },
  {
    id: 'thermos',
    name: 'Thermos',
    highlights: [
      'Assisted with middleware installation for product, order, and stock sync',
    ],
    tech: ['PHP', 'Magento 2', 'Shopify', 'Laravel'],
    type: 'external',
  },
  {
    id: 'melawai',
    name: 'Melawai',
    highlights: [
      'Migrated POS/RMS features from the legacy system to the new platform',
    ],
    tech: ['PHP', 'Magento 2'],
    type: 'external',
  },
]

export const personalProjects: Project[] = []
