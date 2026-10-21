import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { IconType } from "react-icons";
import { FiMapPin, FiMail, FiChevronDown } from "react-icons/fi";
import {
  FaBuilding,
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* API config                                                          */
/* Set VITE_API_BASE_URL in your .env, e.g.                           */
/*   VITE_API_BASE_URL=http://localhost:5000                           */
/* ------------------------------------------------------------------ */
const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  "http://localhost:5000";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  enquiry: string;
  message: string;
}

interface ContactInfoItem {
  id: string;
  title: string;
  lines: string[];
  icon: IconType;
  wrapClass: string; // background + border of the icon tile
  iconClass: string; // icon colour
}

interface SocialItem {
  id: string;
  label: string;
  href: string;
  icon: IconType;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
const CONTACT_INFO: ContactInfoItem[] = [
  {
    id: "address",
    title: "Our Address",
    lines: [
      "Skyline Beverly Park # D 402,",
      "Amruthahalli Main Road,",
      "Amruthahalli, Bangalore – 560092",
    ],
    icon: FiMapPin,
    wrapClass: "bg-[#1b2048] border-[#2d3470]",
    iconClass: "text-[#8b93f7]",
  },
  {
    id: "dev-center",
    title: "Development Center",
    lines: ["iliqbets, 12th Main,", "JP Nagar, Mysore 570008"],
    icon: FaBuilding,
    wrapClass: "bg-[#35183a] border-[#552656]",
    iconClass: "text-[#f0559b]",
  },
  {
    id: "email",
    title: "Email Address",
    lines: ["contact@iliqbets.com"],
    icon: FiMail,
    wrapClass: "bg-[#10302f] border-[#1b4a47]",
    iconClass: "text-[#34d3a0]",
  },
  {
    id: "phone",
    title: "Phone Number",
    lines: ["+91 80411 19030"],
    icon: FaPhoneAlt,
    wrapClass: "bg-[#2b2430] border-[#473a3f]",
    iconClass: "text-[#f59e42]",
  },
];

const SOCIALS: SocialItem[] = [
  { id: "linkedin", label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { id: "facebook", label: "Facebook", href: "#", icon: FaFacebookF },
  { id: "instagram", label: "Instagram", href: "#", icon: FaInstagram },
  { id: "youtube", label: "YouTube", href: "#", icon: FaYoutube },
];

const ENQUIRY_TYPES: string[] = [
  "General Enquiry",
  "Support",
  "Sales & Partnerships",
  "Careers",
  "Other",
];

const INITIAL_FORM: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  enquiry: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/* Scoped CSS guard                                                    */
/* Protects the design from global styles (Vite's default index.css /  */
/* App.css: centred text, black headings, button styles, etc.).        */
/* These rules are scoped to .iliq-contact-section only.               */
/* ------------------------------------------------------------------ */
const SCOPED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
.iliq-contact-section{
  width:100%;
  text-align:left;
  font-family:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  color:#fff;
  box-sizing:border-box;
}
.iliq-contact-section *,
.iliq-contact-section *::before,
.iliq-contact-section *::after{ box-sizing:border-box; }

.iliq-contact-section h2,
.iliq-contact-section h3,
.iliq-contact-section p,
.iliq-contact-section ul,
.iliq-contact-section li{ text-align:left; }
.iliq-contact-section ul{ list-style:none; }

/* headings: white, Inter, bold (fixes global h2/h3 colour/font/size overrides).
   NOTE: no margin/padding resets here, so Tailwind spacing utilities keep working. */
.iliq-contact-section h2,
.iliq-contact-section h3{
  color:#ffffff;
  font-family:inherit;
  font-weight:800;
  letter-spacing:-0.02em;
}
.iliq-contact-section .iliq-contact-title{ font-size:28px; line-height:1.15; }
.iliq-contact-section .iliq-contact-info-title{ font-size:24px; line-height:1.3; }
.iliq-contact-section .iliq-contact-card-title{ font-size:20px; line-height:1.2; }
@media (min-width:640px){
  .iliq-contact-section .iliq-contact-title{ font-size:36px; }
  .iliq-contact-section .iliq-contact-info-title{ font-size:28px; }
  .iliq-contact-section .iliq-contact-card-title{ font-size:24px; }
}
@media (min-width:1024px){
  .iliq-contact-section .iliq-contact-title{ font-size:44px; }
}

/* centred heading block */
.iliq-contact-section .iliq-contact-heading,
.iliq-contact-section .iliq-contact-heading h2{ text-align:center; }

/* gradient word */
.iliq-contact-section .iliq-contact-title-accent{
  background-image:linear-gradient(90deg,#8b8ff5 0%,#c26fd0 50%,#f43f7a 100%);
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
  color:transparent;
}

/* eyebrow + note colours */
.iliq-contact-section .iliq-contact-card-eyebrow{ color:#f0447f; }
.iliq-contact-section .iliq-contact-note{ text-align:center; }

/* form controls */
.iliq-contact-section input,
.iliq-contact-section select,
.iliq-contact-section textarea{
  font-family:inherit;
  margin:0;
  text-align:left;
}

/* submit button – neutralise global button styles */
.iliq-contact-section .iliq-contact-submit{
  border:0;
  padding:0;
  border-radius:12px;
  color:#fff;
  background-color:transparent;
  background-image:linear-gradient(90deg,#5b63e6 0%,#f02d73 100%);
  outline:none;
}
.iliq-contact-section .iliq-contact-social-link{ text-decoration:none; }
`;

/* ------------------------------------------------------------------ */
/* Shared field styles                                                 */
/* ------------------------------------------------------------------ */
const labelStyle =
  "iliq-contact-label mb-2 block text-xs font-medium leading-none text-slate-100";

const fieldBase =
  "iliq-contact-field block w-full rounded-xl border border-[#1f2842] bg-[#0a0e1b] px-4 text-xs " +
  "placeholder:text-[#4d566b] outline-none transition " +
  "focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20";

const inputStyle = `${fieldBase} h-11 text-slate-200`;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
const ContactSection = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear stale message as soon as user edits
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (submitting) return;

    // ---- client-side validation ----
    if (!form.firstName.trim()) {
      setStatus({ type: "error", message: "First name is required." });
      return;
    }
    if (!form.email.trim()) {
      setStatus({ type: "error", message: "Email address is required." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!form.message.trim()) {
      setStatus({ type: "error", message: "Message is required." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          mobile: form.mobile.trim(),
          enquiry: form.enquiry,
          message: form.message.trim(),
        }),
      });

      // Gracefully handle non-JSON responses (e.g. proxy errors)
      const contentType = res.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await res.json()
        : { success: res.ok, message: res.statusText };

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully!",
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="iliq-contact-section relative w-full overflow-hidden bg-[#070b16] px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <style>{SCOPED_CSS}</style>

      <div className="iliq-contact-container mx-auto w-full max-w-5xl">
        {/* ---------------- Heading ---------------- */}
        <div className="iliq-contact-heading mb-10 flex flex-col items-center gap-5 sm:mb-12">
          <span className="iliq-contact-badge rounded-full border border-[#5a1f3d] bg-[#1c0f1f] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f0559b]">
            Contact Details
          </span>
          <h2 className="iliq-contact-title flex flex-wrap items-center justify-center gap-x-3 text-center text-[28px] font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            <span>Let&apos;s Start a</span>
            <span className="iliq-contact-title-accent">Conversation</span>
          </h2>
        </div>

        {/* ---------------- Two columns ---------------- */}
        <div className="iliq-contact-grid grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[463fr_511fr] lg:gap-12">
          {/* ===== LEFT (stretches to the card's height) ===== */}
          <div className="iliq-contact-info mx-auto flex h-full w-full max-w-xl flex-col text-left lg:mx-0 lg:max-w-none lg:justify-between lg:pb-1 lg:pt-3">
            <div className="iliq-contact-info-head flex flex-col gap-4">
              <h3 className="iliq-contact-info-title">
                <span className="block">We&apos;d Love to</span>
                <span className="block">Hear From You!</span>
              </h3>

              <p className="iliq-contact-info-text max-w-[420px] text-[13px] leading-relaxed text-[#9aa3b8]">
                Whether you have a question about our services, need support, or want to
                explore new opportunities, we&apos;re just a message away.
              </p>
            </div>

            {/* contact items */}
            <ul className="iliq-contact-list my-8 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-8 lg:my-6 lg:flex lg:flex-col lg:gap-8 lg:pl-4">
              {CONTACT_INFO.map(({ id, title, lines, icon: Icon, wrapClass, iconClass }) => (
                <li
                  key={id}
                  className={`iliq-contact-item iliq-contact-item-${id} flex items-start gap-4`}
                >
                  <span
                    className={`iliq-contact-icon-wrap flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${wrapClass}`}
                  >
                    <Icon className={`iliq-contact-icon h-4 w-4 ${iconClass}`} aria-hidden="true" />
                  </span>

                  <div className="iliq-contact-item-body min-w-0">
                    <p className="iliq-contact-item-title text-sm font-bold leading-tight text-white">
                      {title}
                    </p>
                    <div className="iliq-contact-item-lines mt-2 flex flex-col gap-1">
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="iliq-contact-item-line break-words text-xs leading-relaxed text-[#9aa3b8]"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* social */}
            <div className="iliq-contact-social flex flex-col gap-4 border-t border-[#1a2136] pt-5">
              <p className="iliq-contact-social-title text-xs font-bold text-white lg:pl-4">
                Connect With Us
              </p>
              <div className="iliq-contact-social-list flex flex-wrap gap-3 lg:pl-4">
                {SOCIALS.map(({ id, label, href, icon: Icon }) => (
                  <a
                    key={id}
                    href={href}
                    aria-label={label}
                    className={`iliq-contact-social-link iliq-contact-social-${id} flex h-10 w-10 items-center justify-center rounded-xl border border-[#232c45] bg-[#131a2c] text-[#b4bdd6] transition hover:border-indigo-400/50 hover:bg-[#1a2340] hover:text-white`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT (form card) ===== */}
          <div className="iliq-contact-card mx-auto w-full max-w-xl rounded-3xl border border-[#222b42] bg-gradient-to-b from-[#141b2d] to-[#0f1526] p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:p-8 lg:mx-0 lg:max-w-none">
            <p className="iliq-contact-card-eyebrow text-[10px] font-bold uppercase tracking-[0.14em]">
              Get In Touch
            </p>
            <h3 className="iliq-contact-card-title mt-3 text-xl font-extrabold leading-tight sm:text-2xl">
              Send Us a Message
            </h3>
            <p className="iliq-contact-card-sub mt-2 text-xs text-[#9aa3b8]">
              Fill out the form below and let us know how we can help.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="iliq-contact-form mt-8 flex flex-col gap-5"
            >
              {/* names */}
              <div className="iliq-contact-row grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                <div className="iliq-contact-group">
                  <label htmlFor="iliq-firstName" className={labelStyle}>
                    First Name <span className="text-[#f0447f]">*</span>
                  </label>
                  <input
                    id="iliq-firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className={inputStyle}
                    disabled={submitting}
                  />
                </div>
                <div className="iliq-contact-group">
                  <label htmlFor="iliq-lastName" className={labelStyle}>
                    Last Name
                  </label>
                  <input
                    id="iliq-lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className={inputStyle}
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* email */}
              <div className="iliq-contact-group">
                <label htmlFor="iliq-email" className={labelStyle}>
                  Email Address <span className="text-[#f0447f]">*</span>
                </label>
                <input
                  id="iliq-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputStyle}
                  disabled={submitting}
                />
              </div>

              {/* mobile */}
              <div className="iliq-contact-group">
                <label htmlFor="iliq-mobile" className={labelStyle}>
                  Mobile Number
                </label>
                <input
                  id="iliq-mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 Enter mobile number"
                  className={inputStyle}
                  disabled={submitting}
                />
              </div>

              {/* select */}
              <div className="iliq-contact-group">
                <label htmlFor="iliq-enquiry" className={labelStyle}>
                  How Can We Help?
                </label>
                <div className="iliq-contact-select-wrap relative">
                  <select
                    id="iliq-enquiry"
                    name="enquiry"
                    value={form.enquiry}
                    onChange={handleChange}
                    className={`${fieldBase} h-11 appearance-none pr-10 ${
                      form.enquiry ? "text-slate-200" : "text-[#4d566b]"
                    }`}
                    disabled={submitting}
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#0f1526] text-slate-200">
                        {type}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown
                    className="iliq-contact-select-icon pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#6b7491]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* message */}
              <div className="iliq-contact-group">
                <label htmlFor="iliq-message" className={labelStyle}>
                  Your Message <span className="text-[#f0447f]">*</span>
                </label>
                <textarea
                  id="iliq-message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={`${fieldBase} h-[116px] resize-none py-3 text-slate-200`}
                  disabled={submitting}
                />
              </div>

              {/* status message */}
              {status.type && (
                <p
                  role="alert"
                  className={`iliq-contact-status text-xs font-medium ${
                    status.type === "success"
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* submit */}
              <div className="iliq-contact-actions">
                <button
                  type="submit"
                  disabled={submitting}
                  className="iliq-contact-submit h-11 w-full cursor-pointer text-xs font-semibold shadow-[0_10px_30px_-8px_rgba(240,45,115,0.55)] transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1526] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <p className="iliq-contact-note mt-4 text-[10px] text-[#6b7491]">
                  Your information will be handled with care.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;