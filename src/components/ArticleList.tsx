import AuthorImage from '../assets/abhijith-MK.webp'

interface Article {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
}

const articles: Article[] = [
  { slug: 'off-page-optimization', category: 'SEO', date: 'September 21, 2021', title: 'Off Page Optimization', excerpt: 'Off-page optimization focuses on actions outside your website that help improve search engine rankings, including link building, social bookmarking, blog posting and directory submissions.' },
  { slug: 'supply-chain-digital-transformation', category: 'Digital Marketing', date: 'June 27, 2021', title: 'Supply Chain Digital Transformation – Challenges in Execution', excerpt: 'Organizations are working to reduce their inventory and agile while meeting customer needs. Digital supply chain transformation plays a significant role in this process.' },
  { slug: 'facebook-business-manager', category: 'Digital Marketing', date: 'June 3, 2021', title: 'Facebook Business Manager', excerpt: 'Manage Facebook marketing and advertising accounts, organize business assets, and coordinate campaigns to promote your brand online.' },
  { slug: 'keyword-analysis', category: 'Digital Marketing', date: 'May 25, 2021', title: 'Keyword Analysis', excerpt: 'Analyze relevant search terms and user intent to help build effective content strategies and improve search visibility.' },
  { slug: 'competitive-analysis', category: 'Digital Marketing', date: 'May 20, 2021', title: 'Competitive Analysis', excerpt: 'Evaluate competing websites, keywords and SEO strategies to identify opportunities and make informed decisions.' },
]

const author = {
  name: 'Abhijith M K',
  role: 'CEO & Digital Strategist',
  bio: 'Insights on digital marketing, transformation and strategies for business growth.',
}

export default function ArticleList() {
  return (
    <section id="articles" className="article-section mx-auto w-full max-w-[1680px] px-5 text-left sm:px-8 lg:px-[8%]">
      <h2 className="article-heading text-lg font-bold text-white sm:text-xl xl:text-2xl">Explore the Articles</h2>
      <p className="article-sub mb-5 mt-1 text-[11px] text-slate-400 xl:text-xs">Read more about the concepts, techniques and strategies behind each topic.</p>

      <div className="article-layout grid items-start gap-5 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_340px]">
        <ul className="article-list m-0 flex list-none flex-col gap-3 p-0">
          {articles.map((a) => (
            <li key={a.slug}>
              <a
                href={`#${a.slug}`}
                className="article-item group flex items-center justify-between gap-4 rounded-lg border border-[#1c2b3b] bg-[#0d1825] px-4 py-3.5 text-left no-underline transition-colors hover:border-[#38b8f0]/60 xl:px-5 xl:py-4"
              >
                <div className="article-item__text min-w-0">
                  <span className="article-item__meta text-[9px] text-[#38b8f0] xl:text-[11px]">{a.category} · {a.date}</span>
                  <h3 className="article-item__title mt-0.5 text-[13px] font-bold text-white xl:text-base">{a.title}</h3>
                  <p className="article-item__excerpt mt-1 line-clamp-2 text-[10px] leading-relaxed text-slate-400 xl:text-xs">{a.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <aside className="author-card h-fit rounded-lg border border-[#1c2b3b] bg-[#0d1825] p-4 text-left lg:sticky lg:top-6 xl:p-5">
          <img
            src={AuthorImage}
            alt={author.name}
            className="author-avatar h-14 w-14 rounded-full border border-[#1f3a4a] object-cover xl:h-16 xl:w-16"
          />
          <h3 className="author-name mt-3 text-[13px] font-bold text-white xl:text-base">{author.name}</h3>
          <p className="author-role mt-0.5 text-[10px] text-slate-400 xl:text-xs">{author.role}</p>
          <p className="author-bio mt-3 text-[10px] leading-relaxed text-slate-400 xl:text-xs">{author.bio}</p>
        </aside>
      </div>
    </section>
  )
}