"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Shield,
  Brain,
  Cpu,
  Award,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

// ==========================
// CONFIG — Edit these fields
// ==========================
const PROFILE = {
  name: "Kunal Anand",
  tagline: "Data Science × Cybersecurity | Competitive Programmer",
  bio: `Engineering student building AI-powered tools that solve real problems. Focused on the DS x Cybersecurity intersection and disciplined problem solving via competitive programming. Currently in 4th semester (≈664 days to graduation).`,
  resumeUrl:
    "https://drive.google.com/file/d/1IaOs47NJ4v7kY-s1bYJ4toH_Mh-o4s1W/view?usp=drivesdk", // TODO: replace with your resume link (e.g., Google Drive or GitHub)
  email: "kunal.anand639@gmail.com", // TODO: replace with your email
  linkedin: "https://www.linkedin.com/in/kunal-anand-entertainingwar110/", // TODO: replace
  github: "https://github.com/kunal639",
};

const SKILLS = {
  languages: ["Python", "C++", "Java", "JavaScript"],
  libraries: [
    "Pandas",
    "Tkinter",
    "Regex",
    "JSON",
    "ydata-profiling",
    "React (basics)",
    "Framer Motion",
  ],
  tools: [
    "Git/GitHub",
    "Postman (API Fundamentals Student Expert)",
    "Jupyter",
    "AbuseIPDB API",
  ],
  domains: [
    "Data Science",
    "Machine Learning",
    "AI for Cybersecurity",
    "Competitive Programming",
  ],
};

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  highlights?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Smart Jupyter Launcher with AI Features",
    subtitle:
      "Desktop app to launch, manage, and summarize notebooks with GitHub integration",
    description:
      "Tkinter + CustomTkinter GUI that launches Jupyter, manages project paths via JSON, checks requirements compatibility, clones GitHub repos, and summarizes notebooks using a HuggingFace model.",
    tech: [
      "Python",
      "Tkinter",
      "JSON",
      "subprocess",
      "HuggingFace",
      "ydata-profiling",
    ],
    links: {
      github: "https://github.com/kunal639/Jupyter-Workflow-Automation-v1.0",
    },
    highlights: [
      "One-click launch for Jupyter Notebook/Lab from saved workspaces",
      "Requirements checker + version diagnostics",
      "Auto-summarization of notebooks for quick reviews",
    ],
  },
  {
    title: "Jupyter Workflow Automation v2.0 (Ongoing)",
    subtitle:
      "Productionizing the launcher with version tracking and robust error handling",
    description:
      "Upgrading the launcher with better dependency resolution, compatibility checks, and user-friendly diagnostics to make it robust for external users.",
    tech: ["Python", "Tkinter", "Pandas", "Regex", "CLI"],
    links: {
      github: "https://github.com/kunal639/Jupyter-Workflow-Automation-v1.0", // same repo for now
    },
    highlights: [
      "Version tracking of installed libraries",
      "Improved error reporting and UX",
      "Planned plugin-style modules",
    ],
  },
  {
    title: "Malicious Domain/IP Checker",
    subtitle: "Quick threat lookups using AbuseIPDB to flag risky indicators",
    description:
      "CLI/Script that queries AbuseIPDB to assess IPs/domains for potential abuse, enabling rapid triage in security workflows.",
    tech: ["Python", "Requests", "AbuseIPDB", "JSON"],
    links: {
      github: "#", // TODO: add repo link if public
    },
    highlights: [
      "Batch and single-lookups",
      "Simple risk signal for fast judgment",
    ],
  },
  {
    title: "Emotion Detection (Yuvakriti)",
    subtitle:
      "Face detection–based emotion classifier; selected for state-level event",
    description:
      "Built an emotion detection pipeline using classical CV + basic ML; showcased at the Yuvakriti youth festival (state level).",
    tech: ["OpenCV", "Python", "ML"],
    links: {
      github: "#", // TODO: add repo/demo link if available
    },
    highlights: [
      "Lightweight pipeline, real-time capable",
      "State-level selection at Yuvakriti",
    ],
  },
];

// ==========================
// UI Helpers
// ==========================
type LucideIconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon?: LucideIconType;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center gap-3">
          {Icon && (
            <div className="rounded-2xl bg-gray-100 p-2 shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="rounded-2xl shadow-sm transition-shadow hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.subtitle ? (
                    <p className="mt-1 text-sm text-gray-600">
                      {project.subtitle}
                    </p>
                  ) : null}
                </div>
                <div className="shrink-0 flex gap-2">
                  {project.links?.github && project.links.github !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl bg-transparent"
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.links?.demo && (
                    <Button asChild className="rounded-xl">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-gray-800">
                {project.description}
              </p>

              {project.highlights?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-700">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-xl">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ==========================
// App Component
// ==========================
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#skills" className="hover:opacity-70">
              Skills
            </a>
            <a href="#projects" className="hover:opacity-70">
              Projects
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
            {PROFILE.resumeUrl !== "#" && (
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                Resume
              </a>
            )}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="rounded-xl bg-transparent"
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
              <Shield className="h-4 w-4" /> AI for Cybersecurity
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-lg text-gray-700 md:text-xl">
              {PROFILE.tagline}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-gray-800">
              {PROFILE.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {PROFILE.resumeUrl !== "#" && (
                <Button asChild className="rounded-xl">
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award className="mr-2 h-4 w-4" /> View Resume
                  </a>
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                className="rounded-xl bg-transparent"
              >
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Contact
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl bg-transparent"
              >
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 font-medium">
                      <Brain className="h-4 w-4" /> Focus
                    </div>
                    <p className="mt-2 text-gray-700">DS × Cybersecurity</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 font-medium">
                      <Cpu className="h-4 w-4" /> Strength
                    </div>
                    <p className="mt-2 text-gray-700">End‑to‑end builder</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 font-medium">
                      <Award className="h-4 w-4" /> Credentials
                    </div>
                    <p className="mt-2 text-gray-700">
                      Postman API Student Expert
                    </p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="h-4 w-4" /> Semester
                    </div>
                    <p className="mt-2 text-gray-700">4th (≈664 days left)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About Me" icon={Shield}>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="leading-relaxed text-gray-800">
              I love building practical tools that people can actually use. My
              current focus is applying data science and ML to security
              problems—threat intel signals, faster triage, and developer‑first
              tooling. I prefer disciplined execution over perfect theory.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="flex flex-wrap gap-2">
              {SKILLS.domains.map((d) => (
                <Badge key={d} variant="secondary" className="rounded-xl">
                  {d}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" icon={Brain}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {SKILLS.languages.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-xl">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold">Libraries & Frameworks</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {SKILLS.libraries.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-xl">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {SKILLS.tools.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-xl">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" icon={Cpu}>
        <div className="grid gap-6 md:gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" icon={Mail}>
        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center md:gap-6">
            <div>
              <h3 className="text-lg font-semibold">Let’s talk</h3>
              <p className="mt-1 text-gray-700">
                Open to internships, collaborations, and impactful DS ×
                Cybersecurity work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="rounded-xl bg-transparent"
              >
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl bg-transparent"
              >
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild className="rounded-xl">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React,
          Tailwind, shadcn/ui, and discipline.
        </div>
      </footer>
    </div>
  );
}
