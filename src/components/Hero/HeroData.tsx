
export interface HeroProduct {
  id: string
  label: string
  line1: string
  line2: string
  logo?: string
  initials: string
}

export const HERO_PRODUCTS: HeroProduct[] = [
  {
    id: 'crm',
    label: 'CRM',
    line1: 'Build Stronger',
    line2: 'Customer Relationships',
    initials: 'CRM',
  },
  {
    id: 'hrms',
    label: 'HRMS',
    line1: 'Simplify People',
    line2: 'Management',
    initials: 'HR',
  },
  {
    id: 'pos',
    label: 'POS',
    line1: 'Efficient Point',
    line2: 'of Sale Solutions',
    initials: 'POS',
  },
  {
    id: 'sfa',
    label: 'SFA',
    line1: 'Boost Field',
    line2: 'Sales Productivity',
    initials: 'SFA',
  },
  {
    id: 'erp',
    label: 'ERP',
    line1: 'Integrate & Scale',
    line2: 'Your Business',
    initials: 'ERP',
  },
  {
    id: 'ecomm',
    label: 'E-COMM',
    line1: 'Expand Your',
    line2: 'Digital Presence',
    initials: '🛒',
  },
  {
    id: 'mcomm',
    label: 'M-COMM',
    line1: 'Business On',
    line2: 'The Go',
    initials: '🛒',
  },
]

export interface HeroService {
  id: string
  title: string
  text: string
  icon: string
  image?: string
}

export const HERO_SERVICES: HeroService[] = [
  {
    id: 'sw',
    title: 'Software Engineering',
    icon: '⌘',
    text: 'Custom applications, modern websites and scalable digital products built for your business.',
  },
  {
    id: 'data',
    title: 'Data & Intelligence',
    icon: '▥',
    text: 'Transform complex information into clear business insights and smarter decisions.',
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    icon: '☁',
    text: 'Reliable cloud infrastructure and modern deployment strategies.',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: '✱',
    text: 'Intelligent workflows and smarter technology experiences.',
  },
  {
    id: 'consult',
    title: 'Technology Consulting',
    icon: '✦',
    text: 'Smart guidance to help you choose the right technology path.',
  },
  {
    id: 'sec',
    title: 'Cybersecurity',
    icon: '⬡',
    text: 'Security-first solutions to protect your digital assets.',
  },
  {
    id: 'it',
    title: 'IT Support',
    icon: '◎',
    text: 'Practical technical assistance to keep operations running smoothly.',
  },
]

export const HERO_IMAGES = {
  office:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70',
  dashboard:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70',
  poster:
    'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=70',
  planner:
    'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=600&q=70',
}
