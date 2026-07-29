export type TopicOption = 'personal-health' | 'research' | 'other'

export const HEALTH_SUBTOPICS = [
  'diabetes',
  'cholesterol',
  'diet',
  'stress',
  'anxiety',
  'depression',
  'sleep',
  'weight loss',
  'supplements',
  'fitness',
  "women's health",
  'pregnancy',
  'child care',
  'period',
  'hormonal imbalances',
  'cancer',
  'hair loss',
  'sexual problems',
] as const

export const RESEARCH_SUBTOPICS = [
  'Neurodegenerative Diseases',
  'Mental Health and Psychiatric Disorders',
  'Cardiovascular Disease',
  'Cancer Therapies and Innovations',
  'Diabetes and Metabolic Disorders',
  'Infectious Diseases and Vaccine Development',
  'Genomics and Precision Medicine',
  'Antibiotic Resistance',
  'Regenerative Medicine',
  'Autoimmune Disorders',
  'Public Health',
  'Obesity and Weight Management',
  'Aging and Longevity Research',
  'Respiratory Diseases',
] as const

export function getSubtopicsForTopic(topic: TopicOption): readonly string[] {
  if (topic === 'personal-health') return HEALTH_SUBTOPICS
  if (topic === 'research') return RESEARCH_SUBTOPICS
  return []
}

export function getSubtopicsTitle(topic: TopicOption): string {
  if (topic === 'personal-health') {
    return 'Which health topics are you interested in?'
  }
  if (topic === 'research') {
    return 'Which research topics are you interested in?'
  }
  return ''
}
