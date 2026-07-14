import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "../../components/ui/ParticleBackground";
import { useAuth } from "../../hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCheck,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faRobot,
  faShieldAlt,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faRobot,
    title: "AI Workspace",
    text: "Chat, summarize, and organize work from one dashboard.",
  },
  {
    icon: faShieldAlt,
    title: "Protected Sessions",
    text: "Secure authentication keeps your tools and data private.",
  },
  {
    icon: faBolt,
    title: "Fast Automation",
    text: "Launch everyday productivity flows in seconds.",
  },
];

const stats = [
  ["24/7", "AI help"],
  ["3x", "faster work"],
  ["99%", "uptime"],
];

export default function Login() {
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const formReady = useMemo(
    () => email.trim().length > 0 && password.trim().length > 0,
    [email, password],
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formReady || loading) return;

    const res = await login({ email, password });

    if (res === "Login Success") {
      setShowSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setErrorMsg(res || "Invalid credentials");
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 2200);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <ParticleBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_32%),linear-gradient(135deg,#050505_0%,#17100b_45%,#050505_100%)]" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold tracking-wide sm:text-xl">
            AICare
          </Link>
          <Link
            to="/register"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-orange-400/60 hover:bg-orange-500/15"
          >
            Create account
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-200">
              <FontAwesomeIcon icon={faShieldAlt} />
              Secure AI access
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Smart AI for healthcare and productivity.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base lg:mx-0">
              Log in to continue your AI-powered workspace for chat support,
              document workflows, project utilities, and faster daily decisions.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-orange-300">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur transition hover:border-orange-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-300">
                    <FontAwesomeIcon icon={feature.icon} />
                  </span>
                  <div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="mt-1 text-sm leading-5 text-gray-400">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-orange-950/30 backdrop-blur-xl sm:p-8">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold sm:text-3xl">Welcome back</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Continue where your workspace left off.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm text-gray-300">
                    Email address
                  </span>
                  <span className="relative block">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 pl-10 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                      autoComplete="email"
                      required
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-gray-300">
                    Password
                  </span>
                  <span className="relative block">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 pl-10 pr-11 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShow(!show)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 transition hover:text-white"
                      aria-label={show ? "Hide password" : "Show password"}
                    >
                      <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                    </button>
                  </span>
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                  <label className="flex cursor-pointer items-center gap-2 text-gray-300">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 rounded border-white/20 accent-orange-500"
                    />
                    Remember me
                  </label>
                  <Link
                    to="/register"
                    className="text-orange-300 transition hover:text-orange-200"
                  >
                    Need access?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={!formReady || loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? "Signing in..." : "Login"}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-400" />
                  Includes chat, PDF tools, resume analysis, and automation.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <StatusPopup
            kind="success"
            title="Login successful"
            message="Redirecting to dashboard..."
          />
        )}
        {showError && (
          <StatusPopup kind="error" title="Login failed" message={errorMsg} />
        )}
      </AnimatePresence>
    </main>
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
