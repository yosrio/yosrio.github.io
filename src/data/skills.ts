export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['PHP', 'JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    label: 'Frameworks',
    skills: ['Magento 2', 'Laravel', 'ReactJS'],
  },
  {
    label: 'Platforms',
    skills: ['Shopify', 'n8n'],
  },
  {
    label: 'APIs & Integration',
    skills: ['GraphQL', 'REST API', 'WhatsApp API', 'Webhook'],
  },
  {
    label: 'Databases & Tools',
    skills: ['MySQL', 'Git', 'Docker', 'Composer'],
  },
  {
    label: 'Currently Learning',
    skills: ['Java', 'Spring Boot'],
  },
]
