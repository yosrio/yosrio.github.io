export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Platforms',
    skills: ['Magento 2', 'Shopify', 'n8n'],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'Golang', 'Laravel'],
  },
  {
    label: 'Frontend',
    skills: ['Vue', 'Nuxt', 'ReactJS', 'JavaScript'],
  },
  {
    label: 'APIs & Integration',
    skills: ['GraphQL', 'REST API', 'WhatsApp Business API'],
  },
  {
    label: 'Databases & Tools',
    skills: ['MySQL', 'Git', 'Composer'],
  },
]
