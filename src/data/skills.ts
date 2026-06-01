export interface SkillGroup {
  label: string
  label_id: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Platforms',
    label_id: 'Platform',
    skills: ['Magento 2', 'Shopify', 'n8n'],
  },
  {
    label: 'Backend',
    label_id: 'Backend',
    skills: ['PHP', 'Golang', 'Laravel'],
  },
  {
    label: 'Frontend',
    label_id: 'Frontend',
    skills: ['Vue', 'Nuxt', 'ReactJS', 'JavaScript'],
  },
  {
    label: 'APIs & Integration',
    label_id: 'API & Integrasi',
    skills: ['GraphQL', 'REST API', 'WhatsApp Business API'],
  },
  {
    label: 'Databases & Tools',
    label_id: 'Database & Tools',
    skills: ['MySQL', 'Git', 'Composer'],
  },
]
