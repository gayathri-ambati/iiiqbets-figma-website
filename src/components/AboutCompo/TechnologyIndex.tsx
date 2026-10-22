
// import {
//   Layers3,
//   Sparkles,
//   Cpu,
// } from "lucide-react";

// const expertise = [
//   { name: "Mobile Development", percentage: 70 },
//   { name: "Data Analytics", percentage: 90 },
//   { name: "AI / ML", percentage: 60 },
// ];

// export default function TechnologyIndex() {
//   return (
//     <main className=" w-full overflow-hidden bg-[#030711] text-white">
//       <section className="relative mx-auto flex  w-full max-w-[1440px] items-center px-5 py-12 sm:px-8 md:px-12 lg:px-[8.5%] lg:py-16">
//         {/* Background glow */}
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[120px]" />

//         <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
//           {/* LEFT CONTENT */}
//           <div className="mx-auto w-full max-w-[500px] lg:mx-0">
//             <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#4edcff] sm:text-[11px]">
//               Technology Index
//             </p>

//             <h1 className="max-w-[440px] text-[37px] font-bold leading-[1.12] tracking-[-1.7px] sm:text-[46px] lg:text-[40px] xl:text-[48px]">
//               Improve and
//               <br />
//               Innovate with
//               <br />
//               <span className="bg-gradient-to-r from-[#43dcf5] via-[#5ca8ff] to-[#a477ff] bg-clip-text text-transparent">
//                 Tech Trends.
//               </span>
//             </h1>

//             <p className="mt-5 max-w-[390px] text-[12px] leading-[1.8] text-[#a1aabd] sm:text-[13px]">
//               We hire and build your own remote dedicated development
//               teams tailored to your specific needs, helping your business
//               grow with innovative digital solutions.
//             </p>

//             {/* Expertise Card */}
//             <div className="mt-6 rounded-[13px] border border-white/[0.09] bg-gradient-to-br from-[#10151f] to-[#0b0f18] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.16)] sm:p-5">
//               <div className="mb-5 flex items-center justify-between">
//                 <h2 className="text-[12px] font-semibold text-white sm:text-[13px]">
//                   Our Expertise
//                 </h2>
//                 <span className="text-[8px] font-medium uppercase tracking-wide text-[#737e94]">
//                   Tech Stack
//                 </span>
//               </div>

//               <div className="space-y-[17px]">
//                 {expertise.map((item) => (
//                   <div key={item.name}>
//                     <div className="mb-[7px] flex items-center justify-between">
//                       <span className="text-[10px] font-medium text-[#e0e5ef] sm:text-[11px]">
//                         {item.name}
//                       </span>
//                       <span className="text-[10px] font-semibold text-[#54e3f9] sm:text-[11px]">
//                         {item.percentage}%
//                       </span>
//                     </div>

//                     <div
//                       className="h-[3px] w-full overflow-hidden rounded-full bg-[#202c49]"
//                       role="progressbar"
//                       aria-label={item.name}
//                       aria-valuenow={item.percentage}
//                       aria-valuemin={0}
//                       aria-valuemax={100}
//                     >
//                       <div
//                         className="h-full rounded-full bg-gradient-to-r from-[#d5e5ff] to-[#bdc9dc]"
//                         style={{ width: `${item.percentage}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT TECHNOLOGY ILLUSTRATION */}
//           <div className="relative mx-auto flex w-full max-w-[470px] items-center justify-center py-8 sm:py-10 lg:py-0">
//             <div className="relative aspect-square w-full max-w-[390px] sm:max-w-[420px]">
//               {/* Concentric circles */}
//               <div className="absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#233149]/80" />

//               <div className="absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1c2b43]/80" />

//               <div className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1b293e]/70" />

//               {/* Ambient glow */}
//               <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#174eff]/10 blur-[55px]" />

//               {/* Main gradient frame */}
//               <div className="absolute left-1/2 top-1/2 h-[43%] w-[43%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#36dafa] via-[#3669fa] to-[#a345ff] p-[6px]">
//                 <div className="flex h-full w-full items-center justify-center bg-[#0d1428]">
//                   {/* Layered technology icon */}
//                   <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
//                     <Layers3
//                       className="absolute h-[76px] w-[76px] text-[#4bdcf7] sm:h-[88px] sm:w-[88px]"
//                       strokeWidth={1.1}
//                     />

//                     <svg
//                       viewBox="0 0 100 100"
//                       className="absolute h-[90px] w-[90px] sm:h-[105px] sm:w-[105px]"
//                       fill="none"
//                       aria-label="Layered technology symbol"
//                       role="img"
//                     >
//                       <path
//                         d="M20 50 L50 67 L80 50"
//                         stroke="#F4F7FF"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M20 65 L50 82 L80 65"
//                         stroke="#9C83FF"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Innovation label */}
//               <div className="absolute left-0 top-[23%] z-10 flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#293957] bg-[#11203a] px-3 py-2.5 shadow-lg sm:left-[-2%]">
//                 <Sparkles className="h-3 w-3 shrink-0 text-white" />
//                 <span className="text-[9px] font-semibold text-white sm:text-[10px]">
//                   Innovation
//                 </span>
//                 <span className="text-[8px] text-[#8c9ab2]">
//                   Ideas into reality
//                 </span>
//               </div>

//               {/* Smart technology label */}
//               <div className="absolute bottom-[22%] right-0 z-10 flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#293957] bg-[#11203a] px-3 py-2.5 shadow-lg sm:right-[-2%]">
//                 <Cpu className="h-3 w-3 shrink-0 text-white" />
//                 <span className="text-[9px] font-semibold text-white sm:text-[10px]">
//                   Smart Technology
//                 </span>
//                 <span className="text-[8px] text-[#8c9ab2]">
//                   Building the future
//                 </span>
//               </div>

//               {/* Floating cyan dots */}
//               <span className="absolute right-[8%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-[#4edcf8] shadow-[0_0_14px_#4edcf8]" />

//               <span className="absolute bottom-[25%] left-[8%] h-2 w-2 animate-pulse rounded-full bg-[#4edcf8] shadow-[0_0_14px_#4edcf8]" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers3, Sparkles, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const expertise = [
  { name: "Mobile Development", percentage: 70 },
  { name: "Data Analytics", percentage: 90 },
  { name: "AI / ML", percentage: 60 },
];

export default function TechnologyIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const illustration = illustrationRef.current;

      if (!section || !illustration) return;

      const circles = gsap.utils.toArray<HTMLElement>(
        ".tech-circle",
        illustration
      );

      const frame = illustration.querySelector(".tech-frame");
      const icon = illustration.querySelector(".tech-icon");
      const innovation = illustration.querySelector(".innovation-label");
      const smartTechnology = illustration.querySelector(
        ".smart-technology-label"
      );
      const dots = gsap.utils.toArray<HTMLElement>(
        ".tech-dot",
        illustration
      );

      // Initial states for the scroll reveal.
      gsap.set(illustration, {
        autoAlpha: 0,
        x: 90,
        scale: 0.92,
      });

      gsap.set(circles, {
        autoAlpha: 0,
        scale: 0.7,
        rotation: -20,
        transformOrigin: "50% 50%",
      });

      gsap.set(frame, {
        autoAlpha: 0,
        scale: 0.55,
        rotation: -12,
        transformOrigin: "50% 50%",
      });

      gsap.set(innovation, {
        autoAlpha: 0,
        x: -55,
      });

      gsap.set(smartTechnology, {
        autoAlpha: 0,
        x: 55,
      });

      gsap.set(dots, {
        autoAlpha: 0,
        scale: 0,
      });

      // Scroll-triggered entrance animation.
      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      entrance
        .to(illustration, {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
        })
        .to(
          circles,
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            duration: 1.15,
            stagger: 0.14,
            ease: "back.out(1.4)",
          },
          "-=0.55"
        )
        .to(
          frame,
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.7"
        )
        .to(
          icon,
          {
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.25"
        )
        .to(
          innovation,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.65"
        )
        .to(
          smartTechnology,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          dots,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.12,
            ease: "back.out(2)",
          },
          "-=0.5"
        );

      // Continuous ambient rotation after the reveal.
      circles.forEach((circle, index) => {
        gsap.to(circle, {
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 32 + index * 8,
          ease: "none",
          repeat: -1,
        });
      });

      // Gentle floating movement for the labels.
      gsap.to(innovation, {
        y: -7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(smartTechnology, {
        y: 7,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle floating cyan particles.
      dots.forEach((dot, index) => {
        gsap.to(dot, {
          y: index % 2 === 0 ? -12 : 12,
          x: index % 2 === 0 ? 5 : -5,
          duration: 1.8 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Subtle breathing glow around the central frame.
      gsap.to(frame, {
        scale: 1.035,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <main className="w-full overflow-hidden bg-[#030711] text-white">
      <section
        ref={sectionRef}
        className="relative mx-auto flex w-full max-w-[1440px] items-center px-5 py-12 sm:px-8 md:px-12 lg:px-[8.5%] lg:py-16"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[120px]" />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="mx-auto w-full max-w-[500px] lg:mx-0">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#4edcff] sm:text-[11px]">
              Technology Index
            </p>

            <h1 className="max-w-[440px] text-[37px] font-bold leading-[1.12] tracking-[-1.7px] sm:text-[46px] lg:text-[40px] xl:text-[48px]">
              Improve and
              <br />
              Innovate with
              <br />
              <span className="bg-gradient-to-r from-[#43dcf5] via-[#5ca8ff] to-[#a477ff] bg-clip-text text-transparent">
                Tech Trends.
              </span>
            </h1>

            <p className="mt-5 max-w-[390px] text-[12px] leading-[1.8] text-[#a1aabd] sm:text-[13px]">
              We hire and build your own remote dedicated development
              teams tailored to your specific needs, helping your business
              grow with innovative digital solutions.
            </p>

            {/* Expertise Card */}
            <div className="mt-6 rounded-[13px] border border-white/[0.09] bg-gradient-to-br from-[#10151f] to-[#0b0f18] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.16)] sm:p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-[12px] font-semibold text-white sm:text-[13px]">
                  Our Expertise
                </h2>
                <span className="text-[8px] font-medium uppercase tracking-wide text-[#737e94]">
                  Tech Stack
                </span>
              </div>

              <div className="space-y-[17px]">
                {expertise.map((item) => (
                  <div key={item.name}>
                    <div className="mb-[7px] flex items-center justify-between">
                      <span className="text-[10px] font-medium text-[#e0e5ef] sm:text-[11px]">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-semibold text-[#54e3f9] sm:text-[11px]">
                        {item.percentage}%
                      </span>
                    </div>

                    <div
                      className="h-[3px] w-full overflow-hidden rounded-full bg-[#202c49]"
                      role="progressbar"
                      aria-label={item.name}
                      aria-valuenow={item.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#d5e5ff] to-[#bdc9dc]"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT TECHNOLOGY ILLUSTRATION */}
          <div className="relative mx-auto flex w-full max-w-[470px] items-center justify-center py-8 sm:py-10 lg:py-0">
            <div
              ref={illustrationRef}
              className="relative aspect-square w-full max-w-[390px] sm:max-w-[420px]"
            >
              {/* Concentric circles */}
              <div className="tech-circle absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#233149]/80" />

              <div className="tech-circle absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1c2b43]/80" />

              <div className="tech-circle absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1b293e]/70" />

              {/* Ambient glow */}
              <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#174eff]/10 blur-[55px]" />

              {/* Main gradient frame */}
              <div className="tech-frame absolute left-1/2 top-1/2 h-[43%] w-[43%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#36dafa] via-[#3669fa] to-[#a345ff] p-[6px]">
                <div className="flex h-full w-full items-center justify-center bg-[#0d1428]">
                  {/* Layered technology icon */}
                  <div className="tech-icon relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                    <Layers3
                      className="absolute h-[76px] w-[76px] text-[#4bdcf7] sm:h-[88px] sm:w-[88px]"
                      strokeWidth={1.1}
                    />

                    <svg
                      viewBox="0 0 100 100"
                      className="absolute h-[90px] w-[90px] sm:h-[105px] sm:w-[105px]"
                      fill="none"
                      aria-label="Layered technology symbol"
                      role="img"
                    >
                      <path
                        d="M20 50 L50 67 L80 50"
                        stroke="#F4F7FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 65 L50 82 L80 65"
                        stroke="#9C83FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Innovation label */}
              <div className="innovation-label absolute left-0 top-[23%] z-10 flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#293957] bg-[#11203a] px-3 py-2.5 shadow-lg sm:left-[-2%]">
                <Sparkles className="h-3 w-3 shrink-0 text-white" />
                <span className="text-[9px] font-semibold text-white sm:text-[10px]">
                  Innovation
                </span>
                <span className="text-[8px] text-[#8c9ab2]">
                  Ideas into reality
                </span>
              </div>

              {/* Smart technology label */}
              <div className="smart-technology-label absolute bottom-[22%] right-0 z-10 flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#293957] bg-[#11203a] px-3 py-2.5 shadow-lg sm:right-[-2%]">
                <Cpu className="h-3 w-3 shrink-0 text-white" />
                <span className="text-[9px] font-semibold text-white sm:text-[10px]">
                  Smart Technology
                </span>
                <span className="text-[8px] text-[#8c9ab2]">
                  Building the future
                </span>
              </div>

              {/* Floating cyan dots */}
              <span className="tech-dot absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-[#4edcf8] shadow-[0_0_14px_#4edcf8]" />

              <span className="tech-dot absolute bottom-[25%] left-[8%] h-2 w-2 rounded-full bg-[#4edcf8] shadow-[0_0_14px_#4edcf8]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
