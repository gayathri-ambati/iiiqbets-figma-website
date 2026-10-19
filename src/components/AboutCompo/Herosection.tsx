
const technologyImages = [
  {
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=85",
    alt: "Laptop keyboard and computer technology",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85",
    alt: "Data analytics dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85",
    alt: "Professional working with technology",
  },
];

export default function Herosection() {
  return (
    <main className=" bg-[#100d0e] p-0 sm:p-4">
      <section className="relative isolate flex min-h-[650px] w-full flex-col justify-between overflow-hidden rounded-b-[24px] bg-[#061116] sm:min-h-[470px] sm:rounded-[24px] md:min-h-[500px] lg:min-h-[520px] lg:flex-row">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061116] via-[#061116]/80 to-[#061116]/20" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00191e]/80 via-transparent to-[#071015]/40" />

        {/* Left content */}
        <div className="relative z-10 flex w-full flex-col items-start justify-center px-6 pb-8 pt-16 sm:px-8 sm:py-12 md:w-[65%] md:px-10 lg:w-[62%] lg:px-12 lg:py-14">
         <h1 className="max-w-[460px] text-[36px] font-extrabold leading-[1.02] tracking-[-1.5px] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-[42px] md:text-[46px] lg:text-[50px]">
            Your Partner
            <br />
            in Progress
        </h1>

          <p className="mt-4 max-w-[360px] text-[12px] font-normal leading-[1.7] text-gray-300 sm:max-w-[390px] sm:text-[13px] md:text-[12px] lg:max-w-[390px]">
            iiiQbets is the partner of choice for many of the world's
            leading enterprises, SMEs and technology challengers. We
            help businesses elevate their value through custom
            Application Development, Data Analytics, Digital Marketing
            &amp; Cloud Services.
          </p>

          <a
            href="#services"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff164f] to-[#ed0067] px-5 py-3 text-[12px] font-bold text-white shadow-lg shadow-pink-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/40 sm:mt-8"
          >
            Digital Transformation
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right image panel */}
        <div className="relative z-10 mx-5 mb-6 flex shrink-0 items-center justify-center rounded-[28px] border border-white/10 bg-[#090c14]/90 p-3 shadow-[-12px_0_35px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:mx-8 sm:mb-0 sm:mt-0 sm:ml-auto sm:w-[220px] sm:self-center md:w-[225px] lg:absolute lg:right-0 lg:top-1/2 lg:mr-0 lg:w-[245px] lg:-translate-y-1/2 lg:rounded-l-[30px] lg:rounded-r-none lg:py-5 lg:pl-5 lg:pr-4">
          <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-1 sm:gap-3">
            {technologyImages.map((item) => (
              <div
                key={item.alt}
                className="group relative h-[90px] overflow-hidden rounded-[17px] bg-[#1c2028] shadow-[0_4px_18px_rgba(0,0,0,0.5)] sm:h-[105px] md:h-[110px] lg:h-[105px]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
