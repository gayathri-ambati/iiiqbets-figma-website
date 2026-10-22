// import React from 'react';
// import {
//   Gem,
//   LayoutGrid,
//   ShoppingCart,
//   Smartphone,
//   Presentation,
//   Monitor,
//   Users,
//   ArrowRight,
// } from 'lucide-react';

// // --- Types ---
// interface Product {
//   id: string;
//   category: string;
//   title: string;
//   description: string;
//   footerText: string;
//   icon: React.ElementType;
// }

// // --- Data ---
// const products: Product[] = [
//   {
//     id: '01 / 07',
//     category: 'RETAIL MANAGEMENT',
//     title: 'Jewellery Management',
//     description:
//       'Manage jewellery inventory, sales, billing, stock tracking, and day-to-day store operations efficiently.',
//     footerText: 'Smart Jewellery Solutions',
//     icon: Gem,
//   },
//   {
//     id: '02 / 07',
//     category: 'ENTERPRISE MANAGEMENT',
//     title: 'ERP Solutions',
//     description:
//       'Connect inventory, accounting, procurement, orders, and business workflows through one platform.',
//     footerText: 'Unified Business Control',
//     icon: LayoutGrid,
//   },
//   {
//     id: '03 / 07',
//     category: 'ONLINE COMMERCE',
//     title: 'E-Commerce',
//     description:
//       'Build a seamless online shopping experience with product catalogs, order management, and digital sales.',
//     footerText: 'Grow Your Online Store',
//     icon: ShoppingCart,
//   },
//   {
//     id: '04 / 07',
//     category: 'MOBILE COMMERCE',
//     title: 'M-Commerce',
//     description:
//       'Enable customers to explore products, place orders, and engage with your business through mobile devices.',
//     footerText: 'Business On The Go',
//     icon: Smartphone,
//   },
//   {
//     id: '05 / 07',
//     category: 'FIELD SALES AUTOMATION',
//     title: 'SFA Solutions',
//     description:
//       'Support sales teams with customer management, field activity tracking, order capture, and sales reporting.',
//     footerText: 'Empower Sales Teams',
//     icon: Presentation,
//   },
//   {
//     id: '06 / 07',
//     category: 'POINT OF SALE',
//     title: 'POS Systems',
//     description:
//       'Simplify checkout, billing, payments, and stock updates for faster and more organized retail transactions.',
//     footerText: 'Faster Retail Operations',
//     icon: Monitor,
//   },
//   {
//     id: '07 / 07',
//     category: 'CUSTOMER RELATIONSHIPS',
//     title: 'CRM Solutions',
//     description:
//       'Organize customer information, sales leads, follow-ups, and communication to build stronger relationships.',
//     footerText: 'Build Better Relationships',
//     icon: Users,
//   },
// ];

// const ProductCollection: React.FC = () => {
//   return (
//     <section className="relative w-full  bg-[#0B0B0F] text-white py-4 px-4 font-sans">
//       {/* ================= HEADER ================= */}
//       <div className="flex flex-col gap-1.5 mb-8">
//         <span className="text-[8px] md:text-[9px] font-bold tracking-[0.18em] text-[#22D3EE] uppercase">
//           IIIQBETS · Enterprise Solutions
//         </span>
//         <h1 className="text-2xl md:text-[28px] font-extrabold tracking-tight text-white uppercase leading-none">
//           Product Collection
//         </h1>
//       </div>

//       {/* ================= GRID ================= */}
//       <div className="md:pl-[34px] md:pr-[13px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//           {products.map((product) => {
//             const Icon = product.icon;
//             return (
//               <div
//                 key={product.id}
//                 className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-5 flex flex-col justify-between min-h-[250px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
//               >
//                 {/* Teal glow toward bottom/right */}
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.12),transparent_65%)]" />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0e3a40]/10 to-[#0e3a40]/25" />

//                 <div className="relative">
//                   {/* Card header */}
//                   <div className="flex justify-between items-center mb-5">
//                     <div className="flex items-center gap-2">
//                       <div className="w-5 h-5 rounded-md border border-[#22D3EE]/70 bg-[#22D3EE]/10 flex items-center justify-center">
//                         <span className="text-[7px] font-extrabold text-[#22D3EE] leading-none">IQ</span>
//                       </div>
//                       <span className="text-[8px] font-extrabold text-white tracking-wider uppercase">
//                         IIIQBETS
//                       </span>
//                       <span className="text-[6px] text-gray-400 uppercase tracking-[0.15em] ml-1 font-semibold">
//                         Business Solutions
//                       </span>
//                     </div>
//                     <span className="text-[8px] text-gray-500 tracking-wider">{product.id}</span>
//                   </div>

//                   {/* Icon badge */}
//                   <div className="w-14 h-14 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center mb-5 shadow-inner">
//                     <Icon className="w-6 h-6 text-[#22D3EE]" strokeWidth={1.25} />
//                   </div>

//                   {/* Text */}
//                   <span className="text-[7px] font-bold tracking-[0.18em] uppercase block mb-1.5 text-[#22D3EE]">
//                     {product.category}
//                   </span>
//                   <h3 className="text-base font-semibold text-white mb-2">{product.title}</h3>
//                   <p className="text-gray-400 text-[10px] leading-relaxed mb-5">
//                     {product.description}
//                   </p>
//                 </div>

//                 {/* Footer */}
//                 <div className="relative flex justify-between items-center border-t border-white/10 pt-3 mt-auto">
//                   <span className="text-[8px] text-gray-400">{product.footerText}</span>
//                   <button className="w-6 h-6 rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-black transition-all duration-300">
//                     <ArrowRight className="w-3 h-3" />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductCollection;


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
  image: string;
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
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02 / 07',
    category: 'ENTERPRISE MANAGEMENT',
    title: 'ERP Solutions',
    description:
      'Connect inventory, accounting, procurement, orders, and business workflows through one platform.',
    footerText: 'Unified Business Control',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03 / 07',
    category: 'ONLINE COMMERCE',
    title: 'E-Commerce',
    description:
      'Build a seamless online shopping experience with product catalogs, order management, and digital sales.',
    footerText: 'Grow Your Online Store',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '04 / 07',
    category: 'MOBILE COMMERCE',
    title: 'M-Commerce',
    description:
      'Enable customers to explore products, place orders, and engage with your business through mobile devices.',
    footerText: 'Business On The Go',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '05 / 07',
    category: 'FIELD SALES AUTOMATION',
    title: 'SFA Solutions',
    description:
      'Support sales teams with customer management, field activity tracking, order capture, and sales reporting.',
    footerText: 'Empower Sales Teams',
    icon: Presentation,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '06 / 07',
    category: 'POINT OF SALE',
    title: 'POS Systems',
    description:
      'Simplify checkout, billing, payments, and stock updates for faster and more organized retail transactions.',
    footerText: 'Faster Retail Operations',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '07 / 07',
    category: 'CUSTOMER RELATIONSHIPS',
    title: 'CRM Solutions',
    description:
      'Organize customer information, sales leads, follow-ups, and communication to build stronger relationships.',
    footerText: 'Build Better Relationships',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80',
  },
];

const ProductCollection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0B0B0F] text-white py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ================= LEFT SIDE CONTENT ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#22D3EE] uppercase">
                IIIQBETS · Enterprise Solutions
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
                Product<br />Collection
              </h1>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              A comprehensive suite of enterprise solutions built to power retail,
              commerce, and customer relationships. From jewellery management to
              CRM, we cover every business need.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-white/10 rounded-lg p-4 bg-white/[0.03]">
                <div className="text-2xl md:text-3xl font-extrabold text-[#22D3EE]">07+</div>
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">
                  Products
                </div>
              </div>
              <div className="border border-white/10 rounded-lg p-4 bg-white/[0.03]">
                <div className="text-2xl md:text-3xl font-extrabold text-[#22D3EE]">100%</div>
                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">
                  Enterprise Ready
                </div>
              </div>
            </div>

            <button className="group inline-flex items-center gap-3 bg-[#22D3EE] text-black font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white transition-colors duration-300">
              Explore All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* ================= RIGHT SIDE CARDS ================= */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-sm flex shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-[#22D3EE]/40 transition-colors duration-300 min-h-[200px]"
                  >
                    {/* LEFT HALF — Content */}
                    <div className="relative flex flex-col justify-between p-4 md:p-5 w-1/2">
                      {/* Icon badge */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-white/[0.07] border border-white/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#22D3EE]" strokeWidth={1.5} />
                          </div>
                          <span className="text-[8px] text-gray-500 tracking-wider">
                            {product.id}
                          </span>
                        </div>

                        <span className="text-[7px] font-bold tracking-[0.15em] uppercase block mb-1 text-[#22D3EE]">
                          {product.category}
                        </span>
                        <h3 className="text-sm md:text-base font-semibold text-white mb-1.5 leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-center border-t border-white/10 pt-2.5 mt-3">
                        <span className="text-[8px] text-gray-400 truncate pr-2">
                          {product.footerText}
                        </span>
                        <button className="w-5 h-5 rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-black transition-all duration-300 shrink-0">
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>

                    {/* RIGHT HALF — Image */}
                    <div className="relative w-1/2 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Overlay for readability + teal tint */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0B0B0F]/20 to-[#0B0B0F]/80" />
                      <div className="absolute inset-0 bg-[#22D3EE]/10 mix-blend-overlay" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;