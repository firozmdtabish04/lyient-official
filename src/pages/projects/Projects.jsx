import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Activity,
  ArrowRight,
  Calendar,
  Code,
  ExternalLink,
  Filter,
  Layers,
  Search,
  Sparkles,
  Star,
  Target,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

const projects = [
  {
    title: "AI Core Platform",
    description:
      "AI-powered ecosystem with chatbot, PDF summarizer, resume analyzer, and automation tools.",
    longDescription:
      "A central AI workspace designed to bring useful student and developer tools into one product experience. It focuses on fast task completion, clean navigation, and practical AI workflows.",
    link: "https://lyient-official.vercel.app/",
    github: "#",
    tech: ["React", "Spring Boot", "AI"],
    category: "AI",
    status: "Production",
    timeline: "2026",
    impact: "Unified 4+ AI workflows",
    featured: true,
    accent: "from-sky-300 via-orange-300 to-emerald-300",
    metrics: ["Chatbot", "PDF tools", "Resume AI"],
    highlights: [
      "Multi-tool AI dashboard",
      "Responsive productivity interface",
      "Backend-ready architecture",
    ],
  },
  {
    title: "Student Need Hub",
    description:
      "All-in-one student platform with productivity tools, resources, and utilities.",
    longDescription:
      "A student-first platform that collects helpful academic tools and resources in one place, with fast access patterns for repeated daily usage.",
    link: "https://student-need-hub.vercel.app/",
    github: "#",
    tech: ["React", "Tailwind"],
    category: "Productivity",
    status: "Live",
    timeline: "2026",
    impact: "Student utility suite",
    accent: "from-emerald-300 via-sky-300 to-cyan-200",
    metrics: ["Utilities", "Resources", "Fast UI"],
    highlights: [
      "Mobile-friendly student tools",
      "Resource-focused navigation",
      "Clean Tailwind component system",
    ],
  },
  {
    title: "Lyient App",
    description: "Scalable web app with modern UI/UX and optimized performance.",
    longDescription:
      "A modern web application focused on smooth UI interactions, API-ready structure, and a scalable frontend foundation.",
    link: "https://lyient-ruby.vercel.app/",
    github: "#",
    tech: ["React", "API"],
    category: "Web App",
    status: "Live",
    timeline: "2025",
    impact: "Optimized web UX",
    accent: "from-fuchsia-300 via-sky-300 to-indigo-300",
    metrics: ["API", "UX", "Scale"],
    highlights: [
      "Reusable page structure",
      "Performance-minded interface",
      "Modern responsive screens",
    ],
  },
  {
    title: "Healthcare Management",
    description:
      "End-to-end healthcare system for patient records, scheduling, and workflows.",
    longDescription:
      "A healthcare workflow product for organizing patient operations, scheduling, and record-oriented tasks with a professional interface.",
    link: "https://healthcaremanage.vercel.app/",
    github: "#",
    tech: ["Spring Boot", "MySQL"],
    category: "Healthcare",
    status: "Production",
    timeline: "2026",
    impact: "Operational healthcare flows",
    featured: true,
    accent: "from-orange-300 via-red-300 to-rose-300",
    metrics: ["Patients", "Scheduling", "Records"],
    highlights: [
      "Healthcare workflow modeling",
      "Database-backed architecture",
      "Patient and schedule modules",
    ],
  },
  {
    title: "Tech Blog Website",
    description:
      "Clean blogging platform with modern design and dynamic content rendering.",
    longDescription:
      "A content-focused web experience for publishing technical writing with a clear layout and readable article presentation.",
    link: "https://tech-blog-website-d12e.vercel.app/",
    github: "#",
    tech: ["React", "Node"],
    category: "Content",
    status: "Live",
    timeline: "2025",
    impact: "Technical content hub",
    accent: "from-amber-200 via-orange-300 to-sky-300",
    metrics: ["Blog", "Node", "Content"],
    highlights: [
      "Readable article layout",
      "Dynamic rendering approach",
      "Clean content hierarchy",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with animations, projects showcase, and responsive UI.",
    longDescription:
      "A personal brand website built around motion, project presentation, and responsive browsing across devices.",
    link: "https://rani-firoz.vercel.app/",
    github: "#",
    tech: ["React", "Framer Motion"],
    category: "Portfolio",
    status: "Live",
    timeline: "2025",
    impact: "Animated portfolio",
    accent: "from-violet-300 via-sky-300 to-teal-200",
    metrics: ["Motion", "Brand", "Showcase"],
    highlights: [
      "Animated page transitions",
      "Project-first presentation",
      "Responsive personal branding",
    ],
  },
  {
    title: "LyfeTech Platform",
    description:
      "Innovative tech platform focused on performance, UI, and scalability.",
    longDescription:
      "A full-stack oriented platform concept emphasizing scalable structure, polished screens, and product-ready frontend patterns.",
    link: "https://lyfetech.vercel.app/",
    github: "#",
    tech: ["Full Stack"],
    category: "Web App",
    status: "Live",
    timeline: "2025",
    impact: "Scalable platform UI",
    accent: "from-lime-200 via-sky-300 to-orange-200",
    metrics: ["Full Stack", "UI", "Scale"],
    highlights: [
      "Platform-style layout",
      "Scalable component patterns",
      "Performance-focused structure",
    ],
  },
];

const categories = ["All", ...new Set(projects.map((project) => project.category))];
const featuredProject = projects.find((project) => project.featured) || projects[0];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 14, scale: 0.98 },
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const cursorX = useMotionValue(-240);
  const cursorY = useMotionValue(-240);
  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 24 });

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === "All" || project.category === activeCategory;
      const searchMatch =
        !search ||
        [
          project.title,
          project.description,
          project.category,
          project.status,
          ...project.tech,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const featured = projects.filter((project) => project.featured).length;
  const techCount = new Set(projects.flatMap((project) => project.tech)).size;

  const handlePointerMove = (event) => {
    cursorX.set(event.clientX - 160);
    cursorY.set(event.clientY - 160);
  };

  return (
    <main
      onPointerMove={handlePointerMove}
      className="uniform-page min-h-screen px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="uniform-grid" />
      <div className="uniform-glow" />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed left-0 top-0 z-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed left-10 top-10 z-0 h-36 w-36 rounded-full bg-orange-200/25 blur-2xl"
      />
      <ParticlesBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm backdrop-blur">
            <Sparkles size={14} />
            Project showcase
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Built projects with real product intent.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore AI tools, healthcare systems, student platforms, and
            polished web apps with responsive interfaces and practical features.
          </p>
        </motion.section>

        <section className="mt-8 grid gap-3 sm:grid-cols-4">
          {[
            [projects.length, "Total projects"],
            [featured, "Featured builds"],
            [categories.length - 1, "Categories"],
            [techCount, "Technologies"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-sky-700">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </motion.div>
          ))}
        </section>

        <FeaturedProject
          project={featuredProject}
          onOpen={() => setSelectedProject(featuredProject)}
        />

        <section className="sticky top-0 z-20 -mx-4 mt-8 border-y border-slate-200 bg-white px-4 py-4 shadow-sm sm:mx-0 sm:rounded-2xl sm:border">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-sm">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </label>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
                <Filter size={16} />
                Filter
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? "text-black"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-slate-950"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.span
                      layoutId="project-category"
                      className="absolute inset-0 rounded-full bg-sky-500"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      activeCategory === category ? "text-white" : ""
                    }`}
                  >
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <motion.section layout className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.section>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold">No projects found</h2>
            <p className="mt-2 text-sm text-slate-500">
              Try a different keyword or switch back to all categories.
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function FeaturedProject({ project, onOpen }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="relative mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] lg:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-orange-400 to-emerald-400" />
      <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="p-5 sm:p-7 lg:p-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700 shadow-sm">
          <Star size={14} fill="currentColor" />
          Featured build
        </span>
        <h2 className="mt-5 text-2xl font-bold sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          {project.longDescription}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-3 shadow-sm"
            >
              <p className="text-sm font-semibold text-sky-700">{metric}</p>
              <p className="mt-1 text-xs text-slate-500">Core module</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onOpen}
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700"
          >
            View case study
            <ArrowRight size={16} />
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Live preview
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <ProjectPreview project={project} large />
    </motion.section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.32, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_60px_rgba(14,165,233,0.16)]"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent} opacity-80 transition group-hover:opacity-100`} />
      <div className="absolute -right-14 -top-14 h-28 w-28 rounded-full bg-sky-200/50 blur-2xl transition group-hover:bg-orange-200/70" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-6 top-16 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      </div>

      <div className="relative z-10 mb-4 flex items-start justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <Code size={13} />
            {project.category}
          </span>
          <h2 className="mt-3 text-xl font-semibold leading-snug">
            {project.title}
          </h2>
        </div>
        {project.featured && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 shadow-sm">
            <Star size={17} fill="currentColor" />
          </span>
        )}
      </div>

      <p className="relative z-10 text-sm leading-6 text-slate-600">
        {project.description}
      </p>

      <div className="relative z-10 mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
        <InfoPill icon={Activity} label={project.status} />
        <InfoPill icon={Calendar} label={project.timeline} />
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-sky-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-auto grid grid-cols-2 gap-3 pt-6">
        <button
          onClick={onOpen}
          className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700"
        >
          Details
          <Layers size={16} />
        </button>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
        >
          Live
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/55 px-4 py-4 backdrop-blur-md sm:items-center"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-white/95 p-4 backdrop-blur sm:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Case study
            </p>
            <h2 className="mt-1 text-xl font-bold sm:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[calc(92vh-73px)] overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <ProjectPreview project={project} />

            <div className="bg-white p-5 sm:p-7">
              <p className="text-sm leading-6 text-slate-600">
                {project.longDescription}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <InfoBox icon={Activity} title="Status" value={project.status} />
                <InfoBox
                  icon={Calendar}
                  title="Timeline"
                  value={project.timeline}
                />
                <InfoBox icon={Target} title="Impact" value={project.impact} />
              </div>

              <div className="mt-7">
                <h3 className="font-semibold text-slate-950">Highlights</h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Sparkles
                        size={16}
                        className="mt-0.5 shrink-0 text-sky-600"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h3 className="font-semibold text-slate-950">Tech stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-sky-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700"
                >
                  Open live project
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  View code
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ProjectPreview({ project, large = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-950 p-5 ${
        large ? "min-h-[360px] lg:min-h-full" : "min-h-[300px]"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative flex h-full min-h-[260px] flex-col rounded-2xl border border-white/15 bg-black/35 p-4 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-300">
            {project.status}
          </span>
        </div>

        <div className="grid flex-1 gap-4 pt-5 md:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-3">
            {project.metrics.map((metric) => (
              <div
                key={metric}
                className="h-10 rounded-xl border border-white/10 bg-white/10 p-3"
              >
                <div className="h-2 w-3/4 rounded-full bg-white/45" />
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-inner shadow-black/40">
            <div
              className={`mb-4 h-24 rounded-xl bg-gradient-to-r ${project.accent} shadow-lg shadow-black/20`}
            />
            <div className="space-y-3">
              <div className="h-3 w-4/5 rounded-full bg-white/35" />
              <div className="h-3 w-2/3 rounded-full bg-white/20" />
              <div className="h-3 w-5/6 rounded-full bg-white/20" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {project.tech.map((tech) => (
                <div
                  key={tech}
                  className="h-8 rounded-lg border border-white/10 bg-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoPill({ icon: Icon, label }) {
  return (
    <span className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <Icon size={14} className="text-sky-600" />
      {label}
    </span>
  );
}

function InfoBox({ icon: Icon, title, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <Icon size={18} className="text-sky-600" />
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">
        {title}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-950">{value}</p>
    </div>
  );
}

export default Projects;
