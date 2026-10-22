
// const technologyImages = [
//   {
//     src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=85",
//     alt: "Laptop keyboard and computer technology",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85",
//     alt: "Data analytics dashboard",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85",
//     alt: "Professional working with technology",
//   },
// ];

// export default function Herosection() {
//   return (
//     <main className=" bg-[#100d0e] p-0 sm:p-4">
//       <section className="relative isolate flex min-h-[650px] w-full flex-col justify-between overflow-hidden rounded-b-[24px] bg-[#061116] sm:min-h-[470px] sm:rounded-[24px] md:min-h-[500px] lg:min-h-[520px] lg:flex-row">
//         {/* Background image */}
//         <img
//           src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=90"
//           alt=""
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061116] via-[#061116]/80 to-[#061116]/20" />

//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00191e]/80 via-transparent to-[#071015]/40" />

//         {/* Left content */}
//         <div className="relative z-10 flex w-full flex-col items-start justify-center px-6 pb-8 pt-16 sm:px-8 sm:py-12 md:w-[65%] md:px-10 lg:w-[62%] lg:px-12 lg:py-14">
//          <h1 className="max-w-[460px] text-[36px] font-extrabold leading-[1.02] tracking-[-1.5px] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-[42px] md:text-[46px] lg:text-[50px]">
//             Your Partner
//             <br />
//             in Progress
//         </h1>

//           <p className="mt-4 max-w-[360px] text-[12px] font-normal leading-[1.7] text-gray-300 sm:max-w-[390px] sm:text-[13px] md:text-[12px] lg:max-w-[390px]">
//             iiiQbets is the partner of choice for many of the world's
//             leading enterprises, SMEs and technology challengers. We
//             help businesses elevate their value through custom
//             Application Development, Data Analytics, Digital Marketing
//             &amp; Cloud Services.
//           </p>

//           <a
//             href="#services"
//             className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff164f] to-[#ed0067] px-5 py-3 text-[12px] font-bold text-white shadow-lg shadow-pink-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/40 sm:mt-8"
//           >
//             Digital Transformation
//             <span aria-hidden="true">→</span>
//           </a>
//         </div>

//         {/* Right image panel */}
//         <div className="relative z-10 mx-5 mb-6 flex shrink-0 items-center justify-center rounded-[28px] border border-white/10 bg-[#090c14]/90 p-3 shadow-[-12px_0_35px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:mx-8 sm:mb-0 sm:mt-0 sm:ml-auto sm:w-[220px] sm:self-center md:w-[225px] lg:absolute lg:right-0 lg:top-1/2 lg:mr-0 lg:w-[245px] lg:-translate-y-1/2 lg:rounded-l-[30px] lg:rounded-r-none lg:py-5 lg:pl-5 lg:pr-4">
//           <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-1 sm:gap-3">
//             {technologyImages.map((item) => (
//               <div
//                 key={item.alt}
//                 className="group relative h-[90px] overflow-hidden rounded-[17px] bg-[#1c2028] shadow-[0_4px_18px_rgba(0,0,0,0.5)] sm:h-[105px] md:h-[110px] lg:h-[105px]"
//               >
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   loading="lazy"
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




// import { useEffect, useState } from "react";

// const technologySlides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=90",
//     thumbnail:
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=85",
//     alt: "Laptop and computer technology",
//     title: "Your Partner",
//     highlight: "in Progress",
//     description:
//       "iiiQbets is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom Application Development, Data Analytics, Digital Marketing & Cloud Services.",
//     button: "Digital Transformation",
//     tag: "Technology Solutions",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90",
//     thumbnail:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85",
//     alt: "Business intelligence and data analytics dashboard",
//     title: "Turn Data Into",
//     highlight: "Decisions",
//     description:
//       "Transform business data into meaningful insights with advanced analytics and business intelligence. Discover opportunities, understand performance, and make confident decisions that accelerate business growth.",
//     button: "Explore Data Analytics",
//     tag: "Data & Analytics",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90",
//     thumbnail:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85",
//     alt: "Professionals collaborating using digital technology",
//     title: "Innovation That",
//     highlight: "Moves You Forward",
//     description:
//       "Empower your teams with modern digital solutions that simplify workflows, improve collaboration, and enhance productivity. Build a smarter digital future with technology designed around your business.",
//     button: "Discover Our Solutions",
//     tag: "Digital Innovation",
//   },
// ];

// export default function Herosection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setActiveIndex((current) => (current + 1) % technologySlides.length);
//     }, 4000);

//     return () => window.clearInterval(interval);
//   }, []);

//   const activeSlide = technologySlides[activeIndex];

//   return (
//     <main className="bg-[#100d0e] p-0 sm:p-4">
//       <section
//         aria-label="Technology and digital transformation"
//         className="relative isolate min-h-[420px] w-full overflow-hidden bg-[#061116] sm:min-h-[500px] sm:rounded-[20px] lg:min-h-[560px]"
//       >
//         {/* Background images */}
//         {technologySlides.map((slide, index) => (
//           <img
//             key={slide.image}
//             src={slide.image}
//             alt=""
//             aria-hidden="true"
//             className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-opacity duration-1000 ${
//               activeIndex === index ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}

//         {/* Dark overlays for text readability */}
//         <div className="absolute inset-0 -z-10 bg-[#061116]/45" />

//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061116]/95 via-[#061116]/80 to-[#061116]/25" />

//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00191e]/65 via-transparent to-[#071015]/20" />

//         {/* Left content: aligned like your screenshot */}
//         <div
//           key={activeIndex}
//           className="relative z-10 flex min-h-[420px] w-full flex-col items-start justify-start px-6 pb-10 pt-10 animate-[fadeIn_0.6s_ease-out] sm:min-h-[500px] sm:px-10 sm:pt-14 md:max-w-[65%] md:px-12 lg:min-h-[560px] lg:max-w-[62%] lg:justify-center lg:px-16 lg:py-16"
//         >
//           {/* Heading */}
//           <h1 className="max-w-[440px] text-[36px] font-extrabold leading-[1.08] tracking-[-1.2px] text-white sm:text-[44px] md:text-[48px] lg:text-[54px]">
//             {activeSlide.title}
//             <br />
//             {activeSlide.highlight}
//           </h1>

//           {/* Description directly below heading */}
//           <p className="mt-2 max-w-[390px] text-[11px] font-normal leading-[1.55] text-gray-300 sm:mt-3 sm:text-[12px] md:text-[13px]">
//             {activeSlide.description}
//           </p>

//           {/* CTA button */}
//           <a
//             href="#services"
//             className="mt-7 inline-flex min-h-[36px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff164f] to-[#ed0067] px-3 py-2 text-[10px] font-bold text-white shadow-lg shadow-pink-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/40 sm:mt-8 sm:px-4 sm:py-2.5 sm:text-[11px]"
//           >
//             {activeSlide.button}
//             <span aria-hidden="true" className="text-sm">
//               →
//             </span>
//           </a>

//           {/* Simple slide indicators */}
//           <div className="mt-7 flex items-center gap-2.5">
//             {technologySlides.map((slide, index) => (
//               <button
//                 key={slide.tag}
//                 type="button"
//                 aria-label={`Show slide ${index + 1}: ${slide.tag}`}
//                 aria-current={activeIndex === index ? "true" : undefined}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-1.5 rounded-full transition-all duration-500 ${
//                   activeIndex === index
//                     ? "w-8 bg-white"
//                     : "w-5 bg-white/40 hover:bg-white/80"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right-side thumbnails: hidden on small screens */}
//         <div className="absolute right-0 top-1/2 z-10 hidden w-[230px] -translate-y-1/2 border-l border-white/10 bg-[#090c14]/70 p-4 shadow-[-12px_0_35px_rgba(0,0,0,0.3)] backdrop-blur-md md:block lg:w-[260px] lg:p-5">
//           <div className="flex flex-col gap-3">
//             {technologySlides.map((slide, index) => (
//               <button
//                 key={slide.thumbnail}
//                 type="button"
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`View ${slide.tag}`}
//                 aria-pressed={activeIndex === index}
//                 className="group relative h-[90px] overflow-hidden rounded-lg border border-white/10 text-left transition-all duration-300 hover:border-white/40 lg:h-[105px]"
//               >
//                 <img
//                   src={slide.thumbnail}
//                   alt={slide.alt}
//                   loading="lazy"
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//                 <span className="absolute bottom-2 left-2 right-2 truncate text-[9px] font-semibold uppercase tracking-wide text-white lg:text-[10px]">
//                   {slide.tag}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




import { useEffect, useState } from "react";

const technologySlides = [
  {
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=90",
    thumbnail:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=85",
    alt: "Laptop and computer technology",
    title: "Your Partner",
    highlight: "in Progress",
    description:
      "iiiQbets is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom Application Development, Data Analytics, Digital Marketing and Cloud Services.",
    button: "Digital Transformation",
    tag: "Technology Solutions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85",
    alt: "Business intelligence and data analytics dashboard",
    title: "Turn Data Into",
    highlight: "Decisions",
    description:
      "Transform raw business data into meaningful insights with advanced analytics and business intelligence. Discover opportunities, understand performance, and make confident decisions that accelerate your business growth.",
    button: "Explore Data Analytics",
    tag: "Data & Analytics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85",
    alt: "Professionals collaborating using digital technology",
    title: "Innovation That",
    highlight: "Moves You Forward",
    description:
      "Empower your team with modern digital solutions that simplify workflows, improve collaboration, and enhance productivity. We help enterprises and growing businesses build a smarter digital future.",
    button: "Discover Our Solutions",
    tag: "Digital Innovation",
  },
];

export default function Herosection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change slides every four seconds.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % technologySlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = technologySlides[activeIndex];

  return (
    <main className="bg-[#100d0e] p-0 sm:p-4">
      <section
        aria-label="Technology and digital transformation"
        className="relative isolate flex min-h-[680px] w-full flex-col justify-between overflow-hidden rounded-b-[24px] bg-[#061116] sm:min-h-[540px] sm:rounded-[24px] lg:min-h-[560px] lg:flex-row"
      >
        {/* Background image transition */}
        {technologySlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark image overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061116] via-[#061116]/85 to-[#061116]/30" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00191e]/90 via-transparent to-[#071015]/40" />

        {/* Left-side dynamic content */}
        <div
          key={activeIndex}
          className="relative z-10 flex w-full flex-1 flex-col items-start justify-center px-6 pb-8 pt-16 animate-[fadeIn_0.7s_ease-out] sm:px-8 sm:py-12 md:px-10 lg:w-[62%] lg:flex-none lg:px-12 lg:py-14"
        >
          {/* Category label */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white/80 backdrop-blur-md sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            {activeSlide.tag}
          </span>

          {/* Dynamic heading */}
          <h1 className="max-w-[520px] text-[38px] font-extrabold leading-[1.04] tracking-[-1.5px] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-[46px] md:text-[52px] lg:text-[58px]">
            {activeSlide.title}
            <br />
            <span className="bg-gradient-to-r from-[#ff416c] to-[#ff8aab] bg-clip-text text-transparent">
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Dynamic description */}
          <p className="mt-5 max-w-[440px] text-[13px] leading-[1.9] text-gray-300 sm:text-[14px]">
            {activeSlide.description}
          </p>

          {/* Dynamic CTA button */}
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#ff164f] to-[#ed0067] px-6 py-3.5 text-[12px] font-bold text-white shadow-lg shadow-pink-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/40 sm:text-[13px]"
          >
            {activeSlide.button}
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </a>

          {/* Slide indicators */}
          <div className="mt-9 flex items-center gap-3">
            {technologySlides.map((slide, index) => (
              <button
                key={slide.tag}
                type="button"
                aria-label={`Show slide ${index + 1}: ${slide.tag}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-10 bg-white"
                    : "w-5 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}

            <span className="ml-2 text-[10px] tracking-[2px] text-white/60">
              0{activeIndex + 1} / 0{technologySlides.length}
            </span>
          </div>
        </div>

        {/* Right-side image panel */}
        <div className="relative z-10 mx-5 mb-6 flex shrink-0 items-center justify-center rounded-[26px] border border-white/10 bg-[#090c14]/85 p-3 shadow-[-12px_0_35px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mx-8 sm:mb-8 sm:ml-auto sm:w-[300px] md:w-[340px] lg:absolute lg:right-0 lg:top-1/2 lg:mr-0 lg:w-[275px] lg:-translate-y-1/2 lg:rounded-l-[30px] lg:rounded-r-none lg:py-5 lg:pl-5 lg:pr-4 xl:w-[300px]">
          <div className="grid w-full grid-cols-3 gap-2.5 sm:gap-3 lg:grid-cols-1">
            {technologySlides.map((slide, index) => (
              <button
                key={slide.thumbnail}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${slide.tag}`}
                aria-pressed={activeIndex === index}
                className="group relative h-[100px] overflow-hidden rounded-[15px] border border-white/10 text-left transition-all duration-500 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:h-[125px] lg:h-[112px] xl:h-[120px]"
              >
                {/* Thumbnail */}
                <img
                  src={slide.thumbnail}
                  alt={slide.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Thumbnail overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Thumbnail text */}
                <div className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3">
                  <p className="truncate text-[9px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
                    {slide.tag}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

