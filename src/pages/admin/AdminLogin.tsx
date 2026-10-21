import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";

const ADMIN_EMAIL = "admin@iiiqbets.com";
const ADMIN_PASSWORD = "Admin@123";

interface LoginForm {
  email: string;
  password: string;
}

const SCOPED_CSS = `
.iliq-admin-login{
  width:100%;
  min-height:calc(100vh - 160px);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:64px 16px;
  margin:-2rem;            /* cancel App.js main padding */
  background:
    radial-gradient(1200px 600px at 15% 10%, rgba(91,99,230,0.18), transparent 60%),
    radial-gradient(900px 500px at 90% 90%, rgba(240,45,115,0.15), transparent 60%),
    #070b16;
  color:#fff;
  text-align:left;
  font-family:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  box-sizing:border-box;
}
.iliq-admin-login *,
.iliq-admin-login *::before,
.iliq-admin-login *::after{ box-sizing:border-box; }

.iliq-admin-login h1,
.iliq-admin-login p{ text-align:left; margin:0; }
.iliq-admin-login h1{
  color:#ffffff;
  font-family:inherit;
  font-weight:800;
  letter-spacing:-0.02em;
}

.iliq-admin-login input{
  font-family:inherit;
  margin:0;
  text-align:left;
  width:100%;
}
.iliq-admin-login button{
  font-family:inherit;
  border:0;
  margin:0;
}
.iliq-admin-login .iliq-admin-submit{
  color:#fff;
  background-color:transparent;
  background-image:linear-gradient(90deg,#5b63e6 0%,#f02d73 100%);
  outline:none;
  cursor:pointer;
}
.iliq-admin-login .iliq-admin-submit:hover{ filter:brightness(1.1); }
.iliq-admin-login .iliq-admin-submit:active{ transform:scale(0.99); }
.iliq-admin-login .iliq-admin-ghost{
  color:#b4bdd6;
  background:#131a2c;
  border:1px solid #232c45;
  cursor:pointer;
}
.iliq-admin-login .iliq-admin-ghost:hover{
  background:#1a2340;
  color:#ffffff;
}
`;

const inputClass =
  "iliq-admin-input h-12 w-full rounded-xl border border-[#1f2842] bg-[#0a0e1b] pl-11 pr-11 text-sm text-slate-200 placeholder:text-[#4d566b] outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    if (
      form.email.trim().toLowerCase() === ADMIN_EMAIL &&
      form.password === ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("admin_logged_in", "true");
      sessionStorage.setItem("admin_email", form.email.trim());
      navigate("/admin/contacts", { replace: true });
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="iliq-admin-login">
      <style>{SCOPED_CSS}</style>

      <div className="w-full max-w-md">
        {/* Brand */}
        {/* <div className="mb-6 flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5b63e6] to-[#f02d73] text-sm font-extrabold text-white shadow-[0_10px_30px_-8px_rgba(240,45,115,0.55)]">
            iiQ
          </span>
          <div>
            <p className="text-base font-extrabold text-white leading-tight">
              iiQbets
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9aa3b8]">
              Admin Console
            </p>
          </div>
        </div> */}

        {/* Card */}
        <div className="rounded-3xl border border-[#222b42] bg-gradient-to-b from-[#141b2d] to-[#0f1526] p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)] sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0559b]">
            Admin Panel
          </p>
          <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-[26px]">
            Welcome back
          </h1>
          <p className="mt-1.5 text-xs leading-relaxed text-[#9aa3b8]">
            Sign in to review contact submissions and manage enquiries.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-7 flex flex-col gap-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-xs font-medium text-slate-100"
              >
                Email Address
              </label>
              <div className="relative">
                <FiMail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7491]"
                  aria-hidden="true"
                />
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@iliqbets.com"
                  autoComplete="username"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="admin-password"
                  className="block text-xs font-medium text-slate-100"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="iliq-admin-ghost flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <>
                      <FiEyeOff className="h-3 w-3" /> Hide
                    </>
                  ) : (
                    <>
                      <FiEye className="h-3 w-3" /> Show
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <FiLock
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7491]"
                  aria-hidden="true"
                />
                <input
                  id="admin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className={inputClass}
                />
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-300"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="iliq-admin-submit h-11 w-full rounded-xl text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(240,45,115,0.55)]"
            >
              Sign In
            </button>
          </form>

          {/* <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#1f2842]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6b7491]">
              Restricted Access
            </span>
            <span className="h-px flex-1 bg-[#1f2842]" />
          </div>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-[#6b7491]">
            Only authorized iiQbets staff may access this panel.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;