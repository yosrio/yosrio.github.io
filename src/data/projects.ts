export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  type: 'client' | 'personal'
  github?: string
  highlight?: string
}

export const featuredProjects: Project[] = [
  {
    id: 'wacommerce',
    name: 'WhatsApp Commerce Integration',
    description:
      'End-to-end WhatsApp commerce middleware built for Loreal and Nivea. Connects Magento 2 backends to the WhatsApp Business API, enabling customers to browse, order, and track shipments entirely through WhatsApp. Includes data import pipelines, FBM integration, and a Laravel-based middleware layer.',
    tech: ['PHP', 'Magento 2', 'Laravel', 'WhatsApp API', 'REST API', 'MySQL'],
    type: 'client',
    highlight: 'Loreal & Nivea',
  },
  {
    id: 'shipping-service',
    name: 'Custom Shipping Service',
    description:
      'Internal shipping dashboard and checkout integration for a Shopify-based client. Built a Laravel backend to handle custom shipping logic, rate calculations, and a ReactJS dashboard for operations teams to manage fulfillment rules.',
    tech: ['Laravel', 'Shopify API', 'ReactJS', 'PHP', 'REST API'],
    type: 'client',
    highlight: 'Internal Tool',
  },
  {
    id: 'channel-service',
    name: 'Channel Service Middleware',
    description:
      'Internal middleware platform using n8n to orchestrate data sync across Magento, Shopify, and external services. Handles product catalog sync, stock updates, and order routing across multiple e-commerce channels from a single workflow engine.',
    tech: ['n8n', 'MySQL', 'REST API', 'Webhook'],
    type: 'client',
    highlight: 'Cross-platform',
  },
]

export const personalProjects: Project[] = [
  {
    id: 'travelnest',
    name: 'TravelNest',
    description:
      'A personal travel planner and tracker built with Laravel 12. Features trip planning with itineraries, budget tracking, and a packing checklist. Built to explore the latest Laravel features and practice building complete applications end-to-end.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    type: 'personal',
    github: 'https://github.com/yosrio/TravelNest',
  },
  {
    id: 'finance-manager',
    name: 'Personal Finance Manager',
    description:
      'A personal finance management application for tracking income, expenses, and financial goals. Built to solve a real personal need and as a platform for practicing JavaScript application architecture.',
    tech: ['JavaScript', 'PHP', 'MySQL'],
    type: 'personal',
    github: 'https://github.com/yosrio/personal-finance-manager',
  },
  {
    id: 'laravel-starter',
    name: 'Laravel Starter Kit',
    description:
      'An opinionated starter template for Laravel projects with pre-configured authentication, common middleware, and a clean project structure. Saves setup time for new Laravel-based projects.',
    tech: ['Laravel', 'PHP', 'JavaScript'],
    type: 'personal',
    github: 'https://github.com/yosrio/LaravelStarterKit',
  },
]
