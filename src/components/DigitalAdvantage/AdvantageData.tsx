import type { ReactNode } from 'react'

const I = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

export interface AdvantageCard { no: string; title: string; text: string; icon: ReactNode; tint: string }

export const ADVANTAGE_CARDS: Record<'strategy' | 'technology' | 'integration' | 'growth', AdvantageCard> = {
  strategy: {
    no: '01', title: 'Strategy', tint: 'bg-sky-500/15 text-sky-400',
    text: 'Understand your business, identify opportunities and create the right technology roadmap.',
    icon: <I><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></I>,
  },
  technology: {
    no: '02', title: 'Technology', tint: 'bg-indigo-500/20 text-indigo-300',
    text: 'Build scalable digital products using modern technologies and enterprise-ready architecture.',
    icon: <I><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></I>,
  },
  integration: {
    no: '03', title: 'Integration', tint: 'bg-sky-500/15 text-sky-400',
    text: 'Connect your applications, data and workflows into one intelligent ecosystem.',
    icon: <I><path d="M4 4v16h16" /><path d="m8 15 4-4 3 3 4-5" /></I>,
  },
  growth: {
    no: '04', title: 'Growth', tint: 'bg-violet-500/20 text-violet-300',
    text: 'Continuously optimize your technology environment to support long-term business growth.',
    icon: <I><path d="M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M14 10l-4 4M15 4c3 0 5 2 5 5-2 3-5 5-8 6l-3-3c1-3 3-6 6-8z" /></I>,
  },
}

export const ADVANTAGE_STATS = [
  { value: '20+', label: 'YEARS EXPERIENCE', pos: 'md:left-6 md:top-8' },
  { value: '500+', label: 'CLIENTS SERVED', pos: 'md:right-6 md:top-8' },
  { value: '15+', label: 'INDUSTRIES', pos: 'md:bottom-20 md:left-14' },
  { value: '10+', label: 'TECHNOLOGIES', pos: 'md:bottom-20 md:right-10' },
]

export const ADVANTAGE_FLOW = ['DISCOVER', 'DESIGN', 'DEVELOP', 'SCALE']

export const JOURNEY_STEPS = [
  { no: '01', title: 'Understand Your Business', text: 'Strategy starts with context.', pos: 'left-[12%] top-[87%]' },
  { no: '02', title: 'Design Better Experiences', text: 'Turn ideas into intuitive solutions.', pos: 'left-[28.5%] top-[73%]' },
  { no: '03', title: 'Build With Technology', text: 'Engineering built for scale.', pos: 'left-[44.6%] top-[65%]' },
  { no: '04', title: 'Integrate Everything', text: 'Connect people, systems and data.', pos: 'left-[63.4%] top-[54.6%]' },
  { no: '05', title: 'Scale Your Business', text: 'Technology that grows with you.', pos: 'left-[82.3%] top-[37%]' },
]