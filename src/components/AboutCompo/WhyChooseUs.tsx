import {
  ShieldCheck,
  Zap,
  Code2,
  TrendingUp,
  Layers3,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Industry Expertise",
    description:
      "Experienced professionals delivering reliable solutions for complex business challenges.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Custom-Built Solutions",
    description:
      "Tailored software and technology strategies aligned with your unique business goals.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Measurable Results",
    description:
      "Data-driven improvements that boost productivity, efficiency, and business performance.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "Future-ready systems designed to grow alongside your organization and evolving needs.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Agile Delivery",
    description:
      "Flexible development processes that adapt quickly to changing priorities and requirements.",
    icon: Zap,
  },
  {
    number: "06",
    title: "Security First",
    description:
      "Robust security practices to protect your systems, data, and digital assets.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Dedicated Support",
    description:
      "Responsive technical assistance and a dependable team whenever your business needs it.",
    icon: MessageCircle,
  },
  {
    number: "08",
    title: "Continuous Innovation",
    description:
      "Modern technologies and forward-thinking strategies that keep your business competitive.",
    icon: Sparkles,
  },
];

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "100+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Technical Support" },
];

/*
  Desktop positions (percent of the container) measured from the screenshot.
  Rows 1 & 4 are inset, rows 2 & 3 sit on the outer edge.
*/
const desktopSlots = [
  "left-[8.2%] top-0", //            01  row 1 left (inset)
  "left-0 top-[25.4%]", //           02  row 2 left (outer)
  "left-0 top-[51.6%]", //           03  row 3 left (outer)
  "left-[8.2%] top-[79%]", //        04  row 4 left (inset)
  "right-[8.2%] top-0", //           05  row 1 right (inset)
  "right-0 top-[25.4%]", //          06  row 2 right (outer)
  "right-0 top-[51.6%]", //          07  row 3 right (outer)
  "right-[8.2%] top-[79%]", //       08  row 4 right (inset)
];

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  const Icon = feature.icon;

  return (
    <article className="group relative flex h-full min-h-[84px] items-start gap-3 rounded-lg border border-[#192936] bg-gradient-to-br from-[#101a27] to-[#0b121d] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d9c0]/40 hover:shadow-[0_8px_30px_rgba(0,217,192,0.08)] lg:gap-3.5 lg:p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#00d9c0]/20 bg-[#00d9c0]/[0.07] text-[#00d9c0] transition-colors group-hover:bg-[#00d9c0]/15 lg:h-9 lg:w-9">
        <Icon size={16} strokeWidth={1.6} />
      </div>

      <div className="min-w-0 flex-1 pr-4">
        <h3 className="text-[11px] font-semibold leading-4 text-white sm:text-xs lg:text-[12px] xl:text-[13px]">
          {feature.title}
        </h3>

        <p className="mt-1.5 text-[10px] leading-[1.6] text-[#8290a3] lg:text-[9.5px] xl:text-[10.5px]">
          {feature.description}
        </p>
      </div>

      <span className="absolute right-3 top-2.5 text-[8px] font-semibold text-[#00d9c0]">
        {feature.number}
      </span>
    </article>
  );
}

function CentralLogo() {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center rounded-full border border-[#00d9c0]/25 bg-[#030711] shadow-[0_0_35px_rgba(0,217,192,0.05)]">
      {/* Inner circle */}
      <div className="absolute inset-[5%] rounded-full border border-[#00d9c0]/10" />

      {/* Soft glow */}
      <div className="absolute inset-[20%] rounded-full bg-[#00d9c0]/[0.035] blur-2xl" />

      <div className="relative z-10 flex flex-col items-center px-3 text-center sm:px-4">
        {/* Technology symbol */}
        <div className="mb-1 flex h-9 items-end gap-1 lg:mb-2 lg:h-11">
          <div className="flex h-8 items-end gap-1 lg:h-10">
            <span className="h-5 w-1.5 bg-[#214578] lg:h-6 lg:w-2" />
            <span className="h-7 w-1.5 bg-[#345aa0] lg:h-9 lg:w-2" />
            <span className="h-6 w-1.5 bg-[#4c4bd1] lg:h-7 lg:w-2" />
          </div>

          <div className="ml-1 flex h-8 items-end gap-1 lg:h-10">
            <span className="h-6 w-1.5 bg-[#193768] lg:h-7 lg:w-2" />
            <span className="h-8 w-1.5 bg-[#284a92] lg:h-10 lg:w-2" />
            <span className="h-5 w-1.5 bg-[#4c4bd1] lg:h-6 lg:w-2" />
          </div>

          <div className="ml-1 flex h-8 w-8 rotate-45 items-center justify-center rounded-lg border-[5px] border-[#ff2035] lg:h-9 lg:w-9">
            <span className="h-2 w-2 rounded-full bg-[#ff2035]" />
          </div>
        </div>

        <p className="text-[6px] font-bold uppercase tracking-[2px] text-[#00e5d0] lg:text-[7px]">
          Your Growth Partner
        </p>

        <h2 className="mt-2 text-[20px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[22px] lg:mt-3 lg:text-[24px] xl:text-[28px]">
          Transform.
          <br />
          Innovate.
          <br />
          <span className="text-[#00d9c0]">Accelerate.</span>
        </h2>

        <p className="mt-2 max-w-[170px] text-[8px] leading-[1.65] text-[#8492a5] lg:mt-3 lg:max-w-[150px] lg:text-[7.5px] xl:max-w-[180px] xl:text-[9px]">
          A smarter approach to digital transformation, built around your
          business and its future.
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <main className=" w-full overflow-hidden bg-[#030711] text-white">
      <section className="relative mx-auto w-full max-w-[1440px] px-4 pb-10 pt-8 sm:px-7 sm:pt-10 lg:px-12 lg:pb-8 lg:pt-8 xl:px-[6.3%]">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#00d9c0]/[0.025] blur-[100px]" />

        {/* Heading */}
        <header className="relative z-10 mb-9 text-center sm:mb-11 lg:mb-12">
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[2.5px] text-[#00e2ce]">
            Why Choose Us
          </p>

          <h1 className="text-[32px] font-extrabold leading-[1.08] tracking-[-1.5px] sm:text-[40px] lg:text-[40px] xl:text-[46px]">
            Your Vision.
            <br />
            <span className="text-[#00d9c0]">Our Technology.</span>
          </h1>
        </header>

        {/* Desktop layout: 4 rows, outer rows inset, middle rows on the edge */}
        <div className="relative mx-auto hidden aspect-[609/335] w-full max-w-[1000px] lg:block">
          {features.map((feature, i) => (
            <div
              key={feature.number}
              className={`absolute h-[21%] w-[33.7%] ${desktopSlots[i]}`}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}

          {/* Centre circle, slightly below true centre like the design */}
          <div className="absolute left-1/2 top-[52.5%] z-10 w-[29.6%] -translate-x-1/2 -translate-y-1/2">
            <CentralLogo />
          </div>
        </div>

        {/* Mobile and tablet layout */}
        <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {features.slice(0, 4).map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}

          <div className="col-span-1 flex justify-center py-5 sm:col-span-2">
            <div className="w-[230px] sm:w-[250px]">
              <CentralLogo />
            </div>
          </div>

          {features.slice(4).map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>

        {/* Statistics */}
        <div className="relative z-10 mx-auto mt-8 grid max-w-[1090px] grid-cols-2 gap-y-6 rounded-lg border border-[#173039] bg-[#0a111b] px-3 py-5 sm:grid-cols-4 sm:gap-y-0 sm:px-4 sm:py-6 lg:mt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[22px] font-bold leading-none tracking-tight text-[#00dfc8] sm:text-[26px] lg:text-[28px]">
                {stat.value}
              </p>

              <p className="mt-2 text-[10px] text-[#8290a3] lg:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="relative z-10 mx-auto mt-5 flex max-w-[1090px] flex-col gap-4 rounded-lg border border-[#183039] bg-gradient-to-r from-[#063333] via-[#08242b] to-[#0d1521] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
          <div>
            <h2 className="text-[13px] font-semibold text-white sm:text-[15px]">
              Ready to transform your business?
            </h2>

            <p className="mt-1 text-[10px] leading-5 text-[#8290a3]">
              Let&apos;s build smarter digital experiences and create
              meaningful impact together.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-10 items-center justify-center gap-6 self-start rounded-md bg-[#00d9c0] px-5 py-2.5 text-[11px] font-bold text-[#03100f] transition-colors hover:bg-[#48f0dc] sm:self-auto"
          >
            Let&apos;s Talk Business
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}