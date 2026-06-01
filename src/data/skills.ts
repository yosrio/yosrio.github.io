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
    label: 'Frameworks',
    skills: ['Laravel', 'ReactJS'],
  },
  {
    label: 'Languages',
    skills: ['PHP', 'JavaScript', 'SQL'],
  },
  {
    label: 'APIs & Integration',
    skills: ['GraphQL', 'REST API', 'WhatsApp Business API'],
  },
  {
    label: 'Tools & Databases',
    skills: ['MySQL', 'Git', 'Composer'],
  },
]
