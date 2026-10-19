import React from 'react';
import {
  Gem,
  LayoutGrid,
  ShoppingCart,
  Smartphone,
  Presentation,
  Monitor,
  Users,
  ArrowRight,
} from 'lucide-react';

// --- Types ---
interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  footerText: string;
  icon: React.ElementType;
}

// --- Data ---
const products: Product[] = [
  {
    id: '01 / 07',
    category: 'RETAIL MANAGEMENT',
    title: 'Jewellery Management',
    description:
      'Manage jewellery inventory, sales, billing, stock tracking, and day-to-day store operations efficiently.',
    footerText: 'Smart Jewellery Solutions',
    icon: Gem,
  },
  {
    id: '02 / 07',
    category: 'ENTERPRISE MANAGEMENT',
    title: 'ERP Solutions',
    description:
      'Connect inventory, accounting, procurement, orders, and business workflows through one platform.',
    footerText: 'Unified Business Control',
    icon: LayoutGrid,
  },
  {
    id: '03 / 07',
    category: 'ONLINE COMMERCE',
    title: 'E-Commerce',
    description:
      'Build a seamless online shopping experience with product catalogs, order management, and digital sales.',
    footerText: 'Grow Your Online Store',
    icon: ShoppingCart,
  },
  {
    id: '04 / 07',
    category: 'MOBILE COMMERCE',
    title: 'M-Commerce',
    description:
      'Enable customers to explore products, place orders, and engage with your business through mobile devices.',
    footerText: 'Business On The Go',
    icon: Smartphone,
  },
  {
    id: '05 / 07',
    category: 'FIELD SALES AUTOMATION',
    title: 'SFA Solutions',
    description:
      'Support sales teams with customer management, field activity tracking, order capture, and sales reporting.',
    footerText: 'Empower Sales Teams',
    icon: Presentation,
  },
  {
    id: '06 / 07',
    category: 'POINT OF SALE',
    title: 'POS Systems',
    description:
      'Simplify checkout, billing, payments, and stock updates for faster and more organized retail transactions.',
    footerText: 'Faster Retail Operations',
    icon: Monitor,
  },
  {
    id: '07 / 07',
    category: 'CUSTOMER RELATIONSHIPS',
    title: 'CRM Solutions',
    description:
      'Organize customer information, sales leads, follow-ups, and communication to build stronger relationships.',
    footerText: 'Build Better Relationships',
    icon: Users,
  },
];

const ProductCollection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B0B0F] text-white py-4 px-4 font-sans">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-1.5 mb-8">
        <span className="text-[8px] md:text-[9px] font-bold tracking-[0.18em] text-[#22D3EE] uppercase">
          IIIQBETS · Enterprise Solutions
        </span>
        <h1 className="text-2xl md:text-[28px] font-extrabold tracking-tight text-white uppercase leading-none">
          Product Collection
        </h1>
      </div>

      {/* ================= GRID ================= */}
      <div className="md:pl-[34px] md:pr-[13px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-5 flex flex-col justify-between min-h-[250px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                {/* Teal glow toward bottom/right */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.12),transparent_65%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0e3a40]/10 to-[#0e3a40]/25" />

                <div className="relative">
                  {/* Card header */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md border border-[#22D3EE]/70 bg-[#22D3EE]/10 flex items-center justify-center">
                        <span className="text-[7px] font-extrabold text-[#22D3EE] leading-none">IQ</span>
                      </div>
                      <span className="text-[8px] font-extrabold text-white tracking-wider uppercase">
                        IIIQBETS
                      </span>
                      <span className="text-[6px] text-gray-400 uppercase tracking-[0.15em] ml-1 font-semibold">
                        Business Solutions
                      </span>
                    </div>
                    <span className="text-[8px] text-gray-500 tracking-wider">{product.id}</span>
                  </div>

                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                    <Icon className="w-6 h-6 text-[#22D3EE]" strokeWidth={1.25} />
                  </div>

                  {/* Text */}
                  <span className="text-[7px] font-bold tracking-[0.18em] uppercase block mb-1.5 text-[#22D3EE]">
                    {product.category}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-[10px] leading-relaxed mb-5">
                    {product.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative flex justify-between items-center border-t border-white/10 pt-3 mt-auto">
                  <span className="text-[8px] text-gray-400">{product.footerText}</span>
                  <button className="w-6 h-6 rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-black transition-all duration-300">
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;