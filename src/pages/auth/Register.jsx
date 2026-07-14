import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TypingText from "../../components/ui/TypingText";
import { useAuth } from "../../hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faBriefcase,
  faCheck,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faRocket,
  faShieldAlt,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const benefits = [
  {
    icon: faShieldAlt,
    title: "Secure account",
    text: "Protected access for your AI tools and project workspace.",
  },
  {
    icon: faBolt,
    title: "Fast setup",
    text: "Create your account and start using productivity flows quickly.",
  },
  {
    icon: faRocket,
    title: "Built to grow",
    text: "Upgrade from simple AI tasks to advanced automation later.",
  },
];

const roles = ["Student", "Developer", "Professional", "Team"];

export default function Register() {
  const [strength, setStrength] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const passwordChecks = useMemo(
    () => [
      ["At least 6 characters", password.length >= 6],
      ["One uppercase letter", /[A-Z]/.test(password)],
      ["One number", /[0-9]/.test(password)],
      ["One special character", /[^A-Za-z0-9]/.test(password)],
    ],
    [password],
  );

  const passwordScore = passwordChecks.filter(([, passed]) => passed).length;
  const passwordsMatch =
    confirmPassword.length === 0 || password === confirmPassword;

  const formReady =
    name.trim().length > 1 &&
    email.trim().length > 3 &&
    passwordScore >= 2 &&
    password === confirmPassword &&
    acceptedTerms;

  const checkPasswordStrength = (value) => {
    let score = 0;

    if (value.length >= 6) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (!value) return "";
    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    return "Strong";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formReady || loading) return;

    const res = await register({ name, email, password });

    if (res.toLowerCase().includes("success")) {
      setShowSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1600);
    } else {
      setErrorMsg(res || "Registration failed");
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 2400);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <ParticleBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_30%),linear-gradient(135deg,#050505_0%,#17100b_48%,#050505_100%)]" />
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold tracking-wide sm:text-xl">
            AICare
          </Link>
          <Link
            to="/login"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-orange-400/60 hover:bg-orange-500/15"
          >
            Login
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-200">
              <FontAwesomeIcon icon={faRocket} />
              Start your workspace
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Create an account for smarter AI work.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base lg:mx-0">
              Build faster with chat assistance, resume tools, PDF workflows,
              and automation features designed for daily productivity.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-left backdrop-blur transition hover:border-orange-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-300">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </span>
                  <div>
                    <h2 className="font-semibold">{benefit.title}</h2>
                    <p className="mt-1 text-sm leading-5 text-gray-400">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
              <p className="text-sm text-gray-300">Developed by</p>
              <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                <span className="text-orange-300">
                  <TypingText texts={["Tabish Firoz", "Abhilipsa Pati"]} />
                </span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto w-full max-w-lg"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-orange-950/30 backdrop-blur-xl sm:p-7">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Create account
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Join AICare and unlock your AI workspace.
                </p>
              </div>

              <button
                type="button"
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-orange-50"
              >
                <FontAwesomeIcon icon={faGoogle} />
                Continue with Google
              </button>

              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/15" />
                <span className="text-xs uppercase tracking-[0.18em] text-gray-400">
                  or
                </span>
                <div className="h-px flex-1 bg-white/15" />
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" icon={faUser}>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="auth-input"
                      autoComplete="name"
                      required
                    />
                  </Field>

                  <Field label="I am a" icon={faBriefcase}>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="auth-input appearance-none"
                    >
                      {roles.map((item) => (
                        <option key={item} value={item} className="text-black">
                          {item}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Email address" icon={faEnvelope}>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    autoComplete="email"
                    required
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <PasswordField
                    label="Password"
                    value={password}
                    show={show}
                    onToggle={() => setShow(!show)}
                    onChange={(value) => {
                      setPassword(value);
                      setStrength(checkPasswordStrength(value));
                    }}
                    autoComplete="new-password"
                  />

                  <PasswordField
                    label="Confirm"
                    value={confirmPassword}
                    show={showConfirm}
                    onToggle={() => setShowConfirm(!showConfirm)}
                    onChange={setConfirmPassword}
                    autoComplete="new-password"
                  />
                </div>

                {password && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span
                        className={`text-sm font-semibold ${
                          strength === "Strong"
                            ? "text-green-300"
                            : strength === "Medium"
                              ? "text-yellow-300"
                              : "text-red-300"
                        }`}
                      >
                        {strength} password
                      </span>
                      {!passwordsMatch && (
                        <span className="text-xs text-red-300">
                          Passwords do not match
                        </span>
                      )}
                    </div>

                    <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full transition-all duration-300 ${
                          passwordScore <= 1
                            ? "w-1/4 bg-red-500"
                            : passwordScore <= 3
                              ? "w-3/4 bg-yellow-400"
                              : "w-full bg-green-500"
                        }`}
                      />
                    </div>

                    <ul className="grid gap-2 text-xs text-gray-400 sm:grid-cols-2">
                      {passwordChecks.map(([label, passed]) => (
                        <li
                          key={label}
                          className={`flex items-center gap-2 ${
                            passed ? "text-green-300" : ""
                          }`}
                        >
                          <FontAwesomeIcon icon={faCheck} />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/20 accent-orange-500"
                  />
                  <span>
                    I agree to receive account updates and accept the AICare
                    workspace terms.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!formReady || loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? "Creating account..." : "Register"}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-300">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-300 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <StatusPopup
            kind="success"
            title="Account created"
            message="Redirecting to login..."
          />
        )}
        {showError && (
          <StatusPopup
            kind="error"
            title="Registration failed"
            message={errorMsg}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function Field({ label, icon, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-gray-300">{label}</span>
      <span className="relative block">
        <FontAwesomeIcon
          icon={icon}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        {children}
      </span>
    </label>
  );
}

function PasswordField({
  label,
  value,
  show,
  onToggle,
  onChange,
  autoComplete,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-gray-300">{label}</span>
      <span className="relative block">
        <FontAwesomeIcon
          icon={faLock}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type={show ? "text" : "password"}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="auth-input pr-11"
          autoComplete={autoComplete}
          required
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 transition hover:text-white"
          aria-label={show ? "Hide password" : "Show password"}
        >
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </span>
    </label>
  );
}

function StatusPopup({ kind, title, message }) {
  const isSuccess = kind === "success";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        className={`relative w-full max-w-xs overflow-hidden rounded-2xl border p-6 text-center shadow-2xl backdrop-blur-xl ${
          isSuccess
            ? "border-orange-400/25 bg-white/10 shadow-orange-950/40"
            : "border-red-400/25 bg-red-950/40 shadow-red-950/40"
        }`}
      >
        <div
          className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl text-white ${
            isSuccess
              ? "bg-gradient-to-br from-orange-500 to-red-500"
              : "bg-gradient-to-br from-red-500 to-red-700"
          }`}
        >
          <FontAwesomeIcon icon={isSuccess ? faCheck : faTriangleExclamation} />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-gray-300">{message}</p>
        {isSuccess && (
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 animate-progress" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
