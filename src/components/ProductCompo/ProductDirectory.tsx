import React, { useState } from 'react';
import { Check } from 'lucide-react';

// --- Data ---
const categories = [
  'All Products',
  'JEWELLERY',
  'CRM',
  'HMS',
  'ERP',
  'E Commerce',
  'M Comm',
];

const summary = [
  { label: 'Matching Services', value: '6' },
  { label: 'Categories', value: '8' },
  { label: 'Verified Providers', value: '5' },
  { label: 'Average Rating', value: '4.8 / 5' },
  { label: 'Budget Range', value: '$25–$70/hr' },
];

const fieldBase =
  'w-full h-8 bg-[#1B2430] border border-[#273341] text-[#C9D1D9] text-[9px] rounded-[3px] px-2 outline-none focus:border-[#2DD4BF]/60 transition-colors placeholder:text-[#6B7785]';

const labelBase = 'text-[8px] font-semibold text-white';

const Caret = () => (
  <svg
    className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
    width="6"
    height="4"
    viewBox="0 0 6 4"
    fill="#E5E7EB"
  >
    <path d="M0 0h6L3 4z" />
  </svg>
);

const Select: React.FC<{ options: string[] }> = ({ options }) => (
  <div className="relative">
    <select
      className={`${fieldBase} appearance-none cursor-pointer pr-6`}
      defaultValue={options[0]}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
    <Caret />
  </div>
);

const ProductDirectorysection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-[#0A0D12] text-white py-12 px-4 md:px-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1280px] flex flex-col gap-12">
        {/* ================= TOP HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[22px] md:text-[26px] font-bold tracking-tight text-white leading-tight">
            Browse Products by Category
          </h1>
          <p className="text-[#8B95A1] text-[9px] mt-3 max-w-xl">
            Discover professional services, compare experts, and find the right solutions for your
            business needs.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`min-w-[40px] px-4 h-[15px] md:h-[16px] rounded-full text-[7px] font-medium transition-colors border flex items-center justify-center ${
                    isActive
                      ? 'bg-[#2DD4BF] border-[#2DD4BF] text-[#0A0D12]'
                      : 'bg-[#101820] border-[#1F2A36] text-[#AAB3BD] hover:text-white hover:border-[#34475A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sub-header */}
          <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight mt-10">
            Find the Right Products
          </h2>
          <p className="text-[#8B95A1] text-[8px] mt-3 max-w-2xl">
            Filter by expertise, budget, provider rating, and availability to discover services
            that match your project.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4.25fr)_minmax(0,1fr)] gap-3 items-start">
          {/* ===== FILTERS PANEL ===== */}
          <div className="bg-[#131A23] border border-[#222E3B] rounded-md p-5">
            <h3 className="text-[10px] font-bold text-white mb-4">Products Filters</h3>

            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1 */}
              <div className="grid grid-cols-2 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] gap-2 items-end">
                <div className="flex flex-col gap-1.5">
                  <label className={labelBase}>Keyword</label>
                  <input
                    type="text"
                    placeholder="Search Products, skills, providers..."
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={labelBase}>Service Category</label>
                  <Select options={['All Categories', 'CRM', 'ERP']} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={labelBase}>Provider Type</label>
                  <Select options={['All Providers', 'Agency', 'Freelancer']} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={labelBase}>Minimum Rating</label>
                  <Select options={['Any Rating', '4.5+ Stars', '4.0+ Stars']} />
                </div>

                <button
                  type="reset"
                  className="h-8 px-3 bg-[#1B2430] border border-[#273341] rounded-[3px] text-[9px] font-semibold text-white hover:bg-[#222d3b] transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Row 2: Budget */}
              <div className="grid grid-cols-2 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className={labelBase}>Minimum Budget ($/hr)</label>
                  <input type="number" placeholder="Min price" className={fieldBase} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelBase}>Maximum Budget ($/hr)</label>
                  <input type="number" placeholder="Max price" className={fieldBase} />
                </div>
              </div>

              {/* Row 3: Checkbox + Submit */}
              <div className="flex flex-col gap-2 mt-1">
                <label
                  className="flex items-center gap-2 cursor-pointer w-fit"
                  onClick={(e) => {
                    e.preventDefault();
                    setVerifiedOnly(!verifiedOnly);
                  }}
                >
                  <span
                    className={`w-3 h-3 rounded-[2px] border flex items-center justify-center ${
                      verifiedOnly ? 'bg-white border-white' : 'bg-[#E5E7EB] border-[#E5E7EB]'
                    }`}
                  >
                    {verifiedOnly && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                  </span>
                  <span className="text-[8px] text-[#AAB3BD]">Verified providers only</span>
                </label>

                <button
                  type="submit"
                  className="w-[104px] h-[18px] bg-[#2DD4BF] hover:bg-[#25bfac] text-[#0A0D12] text-[8px] font-bold rounded-[3px] transition-colors"
                >
                  Search Services
                </button>
              </div>
            </form>
          </div>

          {/* ===== SUMMARY PANEL ===== */}
          <div className="bg-[#131A23] border border-[#222E3B] rounded-md p-4 flex flex-col">
            <h3 className="text-[10px] font-bold text-white text-center mb-3">Search Summary</h3>

            <div className="flex flex-col gap-[7px]">
              {summary.map((item) => (
                <div key={item.label} className="flex justify-between items-center text-[7px]">
                  <span className="text-[#8B95A1]">{item.label}</span>
                  <span className="text-[#2DD4BF] font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Results Card */}
            <div className="mt-3 py-3 px-2 rounded-md bg-[#1B2A33] border border-[#26404A] text-center flex flex-col items-center gap-0.5">
              <span className="text-[13px] font-bold text-[#2DD4BF] leading-tight">6 Results</span>
              <span className="text-[6px] text-[#8B95A1]">Matching your search criteria.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDirectorysection;