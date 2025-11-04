import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin, ExternalLink,
  ArrowRight, Sun, Moon, Shield, Cpu, Terminal, Lock, MessageCircle
} from "lucide-react";

/* ---------- Componentes base ---------- */
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative scroll-mt-24 py-20">
    <div className="relative mx-auto max-w-6xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }} viewport={{ once: true }}
          className="mt-2 text-textSecondary"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Card = ({ children }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 280, damping: 24 }}
    className="rounded-2xl border border-borderColor bg-cardBg shadow-elevate p-6"
  >
    {children}
  </motion.div>
);

/* ---------- App ---------- */
export default function App() {
  const now = new Date().getFullYear();
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);

  // loader simple y elegante
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const skills = [
    { icon: <Shield className="h-5 w-5 text-accent" />, title: "Ciberseguridad", desc: "Defensa, hardening y gobierno." },
    { icon: <Terminal className="h-5 w-5 text-accent" />, title: "DFIR / Forense", desc: "Volatility, Autopsy, cadena de custodia." },
    { icon: <Cpu className="h-5 w-5 text-accent" />, title: "Sistemas & Redes", desc: "Linux/Windows, networking, firewalls." },
    { icon: <Lock className="h-5 w-5 text-accent" />, title: "IAM (SailPoint)", desc: "IdentityIQ, workflows y automatización." },
  ];

  const projects = [
    {
      name: "VolatixLab",
      desc: "Laboratorio forense en español: evidencias RAM y Disco para DFIR con Volatility & Autopsy.",
      link: "https://github.com/adrigomezv01/VolatixLab",
      tags: ["DFIR", "Forense", "Open Source"],
    },
    {
      name: "Workflow IAM – SailPoint",
      desc: "IdentityIQ: creación de usuarios, generación de contraseñas y notificación automática.",
      link: "mailto:adriangomezvaladesc01@gmail.com?subject=Info%20Workflow%20SailPoint",
      tags: ["IAM", "Automatización", "Java/Beanshell"],
    },
  ];

  // Formación ordenada por relevancia
  const education = [
    "Curso de Especialización en Ciberseguridad Informática — CETI (Badajoz)",
    "Bootcamp de Identidad Digital (SailPoint IdentityIQ) — STEMDO Mérida",
    "Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)",
    "Técnico en Sistemas Microinformáticos y Redes (SMR)",
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-bgPrimary text-textPrimary grid place-items-center">
        <div className="text-center">
          <motion.div
            initial={{ rotate: 0 }} animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="mx-auto mb-3 h-10 w-10 rounded-full border-2 border-accent/40 border-t-accent"
          />
          <p className="font-mono text-textSecondary">Iniciando adriangvc.com...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgPrimary text-textPrimary">
      {/* Fondo animado sutil */}
      <div className="grid-net" />

      {/* Banner disponibilidad */}
      <div className="w-full bg-banner text-banner">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between">
          <span>💼 Disponible para oportunidades en Ciberseguridad & IT Systems</span>
          <a
            href="mailto:adriangomezvaladesc01@gmail.com"
            className="rounded-md bg-accent text-black px-3 py-1 font-medium hover:brightness-110"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-borderColor bg-bgHeader/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            Adrián <span className="text-accent">GVC</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-textSecondary">
            <a href="#about" className="hover:text-accent">Sobre mí</a>
            <a href="#skills" className="hover:text-accent">Habilidades</a>
            <a href="#projects" className="hover:text-accent">Proyectos</a>
            <a href="#education" className="hover:text-accent">Formación</a>
            <a href="#contact" className="hover:text-accent">Contacto</a>
            <a
              href="/AdrianGVC-CV.pdf"
              download="AdrianGVC-CV.pdf"
              className="hover:text-accent"
            >
              CV
            </a>
            <button
              onClick={() => setDark(v => !v)}
              className="ml-2 flex items-center justify-center rounded-full p-2 border border-borderColor hover:border-accent/50 transition"
              aria-label="Cambiar tema"
            >
              {dark ? <Sun className="h-5 w-5 text-accent" /> : <Moon className="h-5 w-5 text-accent" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-accent font-mono mb-3 tracking-wide">
            _Cybersecurity · Systems · DFIR
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Adrián GVC
          </h1>
          <p className="mt-4 text-xl text-textSecondary">
            Consultor en Ciberseguridad, Sistemas IT y Análisis Forense (DFIR)
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-black hover:brightness-110"
            >
              Ver proyectos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:adriangomezvaladesc01@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-borderColor px-5 py-2.5 hover:bg-chip/20"
            >
              Contactar por email
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-textSecondary text-sm">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Badajoz, España</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> adriangomezvaladesc01@gmail.com</span>
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +34 654 07 98 95</span>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <Section
        id="about"
        title="Sobre mí"
        subtitle="Perfil profesional orientado a entornos corporativos"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-textSecondary leading-relaxed text-lg">
            Profesional de ciberseguridad con base en sistemas y redes. Experiencia práctica en
            DFIR (Volatility, Autopsy), gestión de identidades (SailPoint), hardening y procedimientos
            corporativos. Documentación clara, automatización eficiente y foco en resultados verificables.
          </p>
          <Card>
            <h3 className="font-semibold text-textPrimary">Lo que aporto</h3>
            <ul className="mt-3 space-y-2 text-textSecondary">
              <li>• Mentalidad de ingeniería: reproducibilidad y evidencias.</li>
              <li>• Orientación a procesos: playbooks y mejora continua.</li>
              <li>• Comunicación clara: informes técnicos y de negocio.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Habilidades */}
      <Section id="skills" title="Habilidades" subtitle="Competencias técnicas clave">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                {s.icon}
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-textSecondary mt-1">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Proyectos */}
      <Section id="projects" title="Proyectos destacados" subtitle="Casos prácticos y repositorios técnicos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card key={i}>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-textSecondary">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <span key={j} className="rounded-md border border-borderColor bg-chip px-2 py-1 text-xs text-textSecondary">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} className="inline-flex items-center gap-2 mt-5 text-accent hover:opacity-90">
                Ver proyecto <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Formación (ordenada por relevancia) */}
      <Section id="education" title="Formación y certificaciones" subtitle="De mayor a menor relevancia">
        <div className="space-y-4">
          {education.map((e, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-borderColor bg-cardBg p-4">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-textSecondary">{e}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto — rediseñado */}
      <Section id="contact" title="Contacto" subtitle="¿Hablamos de un proyecto o colaboración?">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-textSecondary">Respuesta rápida y profesional</p>
              </div>
            </div>
            <a
              href="mailto:adriangomezvaladesc01@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-borderColor px-3 py-2 hover:bg-chip/20"
            >
              Enviar correo
            </a>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-accent" />
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <p className="text-sm text-textSecondary">Conecta conmigo</p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/adri%C3%A1n-g%C3%B3mez-valad%C3%A9s-casta%C3%B1o-917784332/"
              target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-borderColor px-3 py-2 hover:bg-chip/20"
            >
              Ir a LinkedIn
            </a>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-accent" />
              <div>
                <h4 className="font-semibold">GitHub</h4>
                <p className="text-sm text-textSecondary">Repos y código</p>
              </div>
            </div>
            <a
              href="https://github.com/adrigomezv01"
              target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-borderColor px-3 py-2 hover:bg-chip/20"
            >
              Ver GitHub
            </a>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-accent" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-textSecondary">Escríbeme directamente</p>
              </div>
            </div>
            <a
              href="https://wa.me/34654079895?text=Hola%20Adri%C3%A1n%2C%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactar%20contigo."
              target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-borderColor px-3 py-2 hover:bg-chip/20"
            >
              Abrir chat
            </a>
          </Card>
        </div>
      </Section>

      {/* Footer con firma animada */}
      <footer className="border-t border-borderColor bg-bgHeader py-8 text-center">
        <p className="text-textSecondary mb-1">
          © {now} Adrián GVC — Ciberseguridad & IT Systems
        </p>
        <motion.p
          initial={{ opacity: 0.6 }} animate={{ opacity: [0.6, 1, 0.85, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="font-mono text-accent"
        >
          Diseñado y desarrollado por Adrián GVC
        </motion.p>
      </footer>
    </div>
  );
}
