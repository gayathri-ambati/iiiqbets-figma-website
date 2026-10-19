import { useMemo, useState } from 'react'
import HeroSection from '../components/ServiceCompo/HeroSection'
import CategorySection from '../components/ServiceCompo/CategorySection'
import FilterSection from '../components/ServiceCompo/FilterSection'
import AvailableSection from '../components/ServiceCompo/AvailableSection'
import type { ServiceItem, Filters } from '../components/ServiceCompo/ServiceShared'

/* ------------------------------------------------------------------ */
/*  Data + filter logic  (shared types live in serviceShared.tsx)      */
/* ------------------------------------------------------------------ */

const SERVICES: ServiceItem[] = [
  { id: 1, title: 'Website & Application Development', desc: 'Build responsive websites, business applications and tailored digital experiences.', category: 'Web Development', tag: 'SOFTWARE & IT', badge: 'TECHNOLOGY', minRate: 25, maxRate: 70, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Agency', rating: 4.9, verified: true },
  { id: 2, title: 'Product UI/UX Design', desc: 'Research-led interface design, prototypes and design systems for web and mobile.', category: 'UI/UX Design', tag: 'DESIGN', badge: 'CREATIVE', minRate: 30, maxRate: 60, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Agency', rating: 4.8, verified: true },
  { id: 3, title: 'Digital Marketing Campaigns', desc: 'Plan, launch and measure paid and organic campaigns across every channel.', category: 'Digital Marketing', tag: 'MARKETING', badge: 'GROWTH', minRate: 25, maxRate: 55, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Freelancer', rating: 4.7, verified: false },
  { id: 4, title: 'Search Engine Optimization', desc: 'Technical audits, keyword strategy and content fixes that lift organic traffic.', category: 'SEO', tag: 'MARKETING', badge: 'GROWTH', minRate: 25, maxRate: 50, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Freelancer', rating: 4.8, verified: true },
  { id: 5, title: 'Data Analytics & Dashboards', desc: 'Turn raw business data into clear dashboards and decision-ready reports.', category: 'Data Analytics', tag: 'DATA', badge: 'TECHNOLOGY', minRate: 40, maxRate: 70, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Agency', rating: 4.9, verified: true },
  { id: 6, title: 'Website Content Writing', desc: 'Clear, on-brand copy for websites, product pages and campaigns.', category: 'Content Writing', tag: 'CONTENT', badge: 'CREATIVE', minRate: 25, maxRate: 45, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Freelancer', rating: 4.6, verified: true },
  { id: 7, title: 'E-commerce Store Development', desc: 'Launch fast, secure online stores with payments, catalogues and analytics.', category: 'Web Development', tag: 'SOFTWARE & IT', badge: 'TECHNOLOGY', minRate: 35, maxRate: 70, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Agency', rating: 4.8, verified: true },
  { id: 8, title: 'Mobile App Prototyping', desc: 'Interactive prototypes that validate your app idea before development.', category: 'UI/UX Design', tag: 'DESIGN', badge: 'CREATIVE', minRate: 30, maxRate: 65, provider: 'iiQbets', location: 'Karnataka, INDIA', providerType: 'Freelancer', rating: 4.7, verified: false },
]

const DEFAULT_FILTERS: Filters = {
  keyword: '',
  category: 'All Categories',
  providerType: 'All Providers',
  minRating: 0,
  minBudget: '',
  maxBudget: '',
  verifiedOnly: false,
}

function applyFilters(list: ServiceItem[], f: Filters): ServiceItem[] {
  const q = f.keyword.trim().toLowerCase()
  const min = f.minBudget === '' ? null : Number(f.minBudget)
  const max = f.maxBudget === '' ? null : Number(f.maxBudget)
  return list.filter((s) => {
    if (q && !`${s.title} ${s.desc} ${s.provider} ${s.category}`.toLowerCase().includes(q)) return false
    if (f.category !== 'All Categories' && s.category !== f.category) return false
    if (f.providerType !== 'All Providers' && s.providerType !== f.providerType) return false
    if (s.rating < f.minRating) return false
    if (min !== null && s.maxRate < min) return false
    if (max !== null && s.minRate > max) return false
    if (f.verifiedOnly && !s.verified) return false
    return true
  })
}

/* ------------------------------------------------------------------ */
/*  Page (main) - same pattern as About.tsx: one <main>, many sections */
/*  1 HeroSection  2 CategorySection  3 FilterSection  4 AvailableSection */
/* ------------------------------------------------------------------ */

export default function Service() {
  const [draft, setDraft] = useState<Filters>(DEFAULT_FILTERS)
  const [applied, setApplied] = useState<Filters>(DEFAULT_FILTERS)

  const results = useMemo(() => applyFilters(SERVICES, applied), [applied])

  const search = () => setApplied(draft)
  const reset = () => {
    setDraft(DEFAULT_FILTERS)
    setApplied(DEFAULT_FILTERS)
  }
  const pickCategory = (c: Filters['category']) => {
    const next = { ...draft, category: c }
    setDraft(next)
    setApplied({ ...applied, category: c })
  }

  return (
    // -m-8 cancels the main padding set in App.tsx so sections run edge to edge
    <main className="-m-8 min-h-screen overflow-x-hidden bg-[#0d0b0e] font-[family-name:Inter,Manrope,system-ui,sans-serif] text-white">
      <HeroSection />
      <CategorySection active={applied.category} onSelect={pickCategory} />
      <FilterSection draft={draft} setDraft={setDraft} onSearch={search} onReset={reset} results={results} />
      <AvailableSection items={results} />
    </main>
  )
}