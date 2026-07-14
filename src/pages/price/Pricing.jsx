import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Minus,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    desc: "Basic AI features to explore the platform.",
    usage: "25 AI actions / month",
    features: ["Core tools", "PDF preview", "Community support"],
  },
  {
    name: "Pro",
    monthly: 499,
    yearly: 3999,
    desc: "Best for students, builders, and everyday AI workflows.",
    usage: "Unlimited personal usage",
    features: [
      "All AI tools",
      "Resume analyzer",
      "Priority support",
      "Faster responses",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    monthly: 999,
    yearly: 7999,
    desc: "Advanced features for professionals and small teams.",
    usage: "Team-ready workspace",
    features: [
      "Everything in Pro",
      "Custom AI tools",
      "Dedicated support",
      "Early access",
    ],
  },
];

const comparison = [
  ["AI chatbot", true, true, true],
  ["PDF summarizer", "Limited", true, true],
  ["Resume analyzer", false, true, true],
  ["Custom workflows", false, false, true],
  ["Priority support", false, true, true],
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can move between monthly and yearly billing whenever your workflow changes.",
  },
  {
    q: "Is the Free plan really free?",
    a: "Yes. It is designed for trying core tools before upgrading to higher usage limits.",
  },
  {
    q: "Which plan is best for projects?",
    a: "Pro is the best fit for most students and developers. Premium is better when you need custom tools or dedicated support.",
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const yearlySaving = useMemo(() => {
    const pro = plans.find((plan) => plan.name === "Pro");
    return pro.monthly * 12 - pro.yearly;
  }, []);

  return (
    <main className="uniform-page min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="uniform-grid" />
      <div className="uniform-glow" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
            <Sparkles size={14} />
            Flexible AI plans
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Choose the plan that matches your AI workflow.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Start free, upgrade when you need more usage, faster responses, and
            professional automation features.
          </p>
        </motion.section>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {[
              ["Monthly", false],
              ["Yearly", true],
            ].map(([label, value]) => (
              <button
                key={label}
                onClick={() => setYearly(value)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
                  yearly === value ? "text-white" : "text-slate-600"
                }`}
              >
                {yearly === value && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-sky-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
          <p className="text-sm font-medium text-emerald-700">
            Save up to Rs {yearlySaving} with yearly billing
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const savings = plan.monthly * 12 - plan.yearly;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative flex min-h-[420px] flex-col rounded-2xl border bg-white p-5 shadow-sm transition sm:p-6 ${
                  plan.highlight
                    ? "border-sky-500 shadow-xl shadow-sky-100"
                    : "border-slate-200"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}

                <div className="mb-5">
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                    {plan.desc}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${plan.name}-${price}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-4xl font-bold"
                  >
                    Rs {price}
                    <span className="text-sm font-medium text-slate-500">
                      {yearly ? " /year" : " /month"}
                    </span>
                  </motion.p>
                </AnimatePresence>

                {yearly && savings > 0 ? (
                  <p className="mt-2 text-sm font-medium text-emerald-700">
                    Save Rs {savings} every year
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-slate-500">{plan.usage}</p>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle
                        size={17}
                        className="mt-0.5 shrink-0 text-sky-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-sky-600 text-white shadow-lg shadow-sky-100 hover:bg-sky-700"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </motion.article>
            );
          })}
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
              <ShieldCheck className="text-sky-600" size={20} />
              <h2 className="font-bold">Feature comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-medium">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="px-5 py-3 font-medium">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([feature, free, pro, premium]) => (
                    <tr key={feature} className="border-t border-slate-100">
                      <td className="px-5 py-3 font-medium">{feature}</td>
                      {[free, pro, premium].map((value, index) => (
                        <td key={`${feature}-${index}`} className="px-5 py-3">
                          {value === true ? (
                            <CheckCircle size={17} className="text-emerald-600" />
                          ) : value === false ? (
                            <Minus size={17} className="text-slate-400" />
                          ) : (
                            <span className="text-slate-600">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <HelpCircle className="text-sky-600" size={20} />
              <h2 className="font-bold">Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <button
                  key={faq.q}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-sky-300"
                >
                  <span className="flex items-center justify-between gap-3 font-medium">
                    {faq.q}
                    <Zap
                      size={16}
                      className={`shrink-0 text-sky-600 transition ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pt-3 text-sm leading-6 text-slate-600"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Pricing;
