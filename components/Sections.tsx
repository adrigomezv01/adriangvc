"use client";

import { motion, type MotionProps } from "framer-motion";
import {
  skills,
  experience,
  projects,
  certifications,
  education,
  personalInfo,
} from "@/lib/data";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono text-[#4F8EF7] uppercase tracking-widest mb-2">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#F0F0F5]">{title}</h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <SectionTitle label="01 · about" title="Professional Profile" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div {...fadeUp} className="space-y-4 text-[#8888A0] leading-relaxed">
          <p>
            {"Junior cybersecurity professional with a comprehensive technical background "}
            <span className="text-[#F0F0F5]">{"SMR · ASIR · CETI Specialization"}</span>
            {" and real hands-on experience implementing "}
            <span className="text-[#4F8EF7]">{"SailPoint IdentityIQ"}</span>
            {" in an enterprise consulting environment."}
          </p>
          <p>
            {"My primary focus is "}
            <span className="text-[#F0F0F5]">{"Identity & Access Management and Cloud Security"}</span>
            {" on the Microsoft Azure ecosystem, complemented by digital forensics through "}
            <span className="text-[#4F8EF7]">{"VolatixLab"}</span>
            {", my personal DFIR lab powered by Volatility 3 and Autopsy."}
          </p>
          <p>
            {"Looking for my first stable position as a "}
            <span className="text-[#F0F0F5]">{"Junior IAM Consultant or Cybersecurity Analyst"}</span>
            {" in a technology consultancy. Immediately available, open to relocation."}
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="space-y-0">
          {[
            { label: "Location", value: personalInfo.location },
            { label: "Availability", value: "Immediate · Open to relocation" },
            { label: "Primary focus", value: "IAM / SailPoint / Azure" },
            { label: "Secondary focus", value: "DFIR / Blue Team / Forensics" },
            { label: "Certifications", value: "SC-900 · AZ-900 · AZ-500 in progress" },
            { label: "Languages", value: "Spanish (native) · English B1-B2 technical" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-start py-3 border-b border-[#1E1E2E] last:border-0">
              <span className="text-xs font-mono text-[#444458] uppercase tracking-wide">{item.label}</span>
              <span className="text-sm text-[#F0F0F5] text-right max-w-[60%]">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp}>
          <SectionTitle label="02 · experience" title="Professional Background" />
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1E1E2E] hidden md:block" />
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" } as MotionProps["transition"]}
                className="group md:pl-8 relative"
              >
                <div className="absolute left-[-4.5px] top-6 w-2.5 h-2.5 rounded-full bg-[#1E1E2E] border border-[#4F8EF760] hidden md:block group-hover:bg-[#4F8EF7] transition-colors duration-300" />
                <div className="p-6 rounded-xl border border-[#1E1E2E] bg-[#16161F] hover:border-[#4F8EF740] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-[#F0F0F5]">{exp.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-[#4F8EF720] bg-[#4F8EF710] text-[#4F8EF7] font-mono">{exp.type}</span>
                      </div>
                      <p className="text-sm text-[#8888A0]">{exp.company}{" · "}{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-[#444458] bg-[#1E1E2E] px-3 py-1 rounded-md">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#8888A0]">
                        <span className="text-[#4F8EF7] mt-0.5 shrink-0">{"›"}</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[#1E1E2E] text-[#8888A0] font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <SectionTitle label="03 · projects" title="Technical Work" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" } as MotionProps["transition"]}
            className="group flex flex-col p-6 rounded-xl border border-[#1E1E2E] bg-[#16161F] hover:border-[#4F8EF740] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8EF740] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-[#F0F0F5] mb-0.5">{project.title}</h3>
                <p className="text-xs font-mono text-[#8888A0]">{project.subtitle}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[#22c55e30] bg-[#22c55e08] text-[#22c55e] font-mono shrink-0">{project.status}</span>
            </div>
            <p className="text-sm text-[#8888A0] leading-relaxed mb-4">{project.description}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {project.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-sm text-[#8888A0]">
                  <span className="text-[#4F8EF7] mt-0.5 shrink-0">{"›"}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[#1E1E2E] text-[#8888A0] font-mono">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4F8EF7] hover:text-white transition-colors duration-200 w-fit">
              {"View project "}
              <span className="transition-transform duration-200 group-hover:translate-x-1">{"→"}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const primarySkills = skills.filter((s) => s.primary);
  const secondarySkills = skills.filter((s) => !s.primary);

  return (
    <section id="skills" className="py-24 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp}>
          <SectionTitle label="04 · skills" title="Technical Stack" />
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {primarySkills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" } as MotionProps["transition"]}
              className="p-5 rounded-xl border border-[#4F8EF740] bg-[#4F8EF708] hover:border-[#4F8EF760] hover:bg-[#4F8EF710] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
                <p className="text-xs font-mono text-[#4F8EF7] uppercase tracking-wider">{"Core expertise"}</p>
              </div>
              <h3 className="text-sm font-semibold text-[#F0F0F5] mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-md font-mono bg-[#4F8EF715] text-[#4F8EF7] border border-[#4F8EF720]">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {secondarySkills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" } as MotionProps["transition"]}
              className="p-5 rounded-xl border border-[#1E1E2E] bg-[#16161F] hover:border-[#4F8EF730] transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-[#8888A0] mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-md font-mono bg-[#1E1E2E] text-[#8888A0]">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const colorMap: Record<string, { card: string; text: string }> = {
    blue: { card: "border-[#4F8EF740] bg-[#4F8EF708] hover:border-[#4F8EF760]", text: "text-[#4F8EF7]" },
    cyan: { card: "border-[#06b6d440] bg-[#06b6d408] hover:border-[#06b6d460]", text: "text-[#06b6d4]" },
    amber: { card: "border-[#f59e0b40] bg-[#f59e0b08] hover:border-[#f59e0b60]", text: "text-[#f59e0b]" },
  };

  return (
    <section id="certifications" className="pt-24 pb-12 max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <SectionTitle label="05 · certifications & education" title="Credentials" />
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {certifications.map((cert, i) => {
          const colors = colorMap[cert.color];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" } as MotionProps["transition"]}
              className={`p-5 rounded-xl border transition-all duration-300 ${colors.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs font-mono text-[#8888A0] mb-1">{cert.issuer}</p>
                  <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2 leading-snug">{cert.name}</h3>
                  <span className={`text-xs font-mono font-bold ${colors.text}`}>{cert.code}</span>
                </div>
                <div className="text-right shrink-0 flex flex-col items-end gap-2">
                  <p className="text-xs font-mono text-[#444458]">{cert.year}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${cert.status === "in-progress" ? "border-[#f59e0b40] bg-[#f59e0b10] text-[#f59e0b]" : "border-[#22c55e40] bg-[#22c55e10] text-[#22c55e]"}`}>
                    {cert.status === "in-progress" ? "In progress" : "Obtained"}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div {...fadeUp}>
        <p className="text-xs font-mono text-[#4F8EF7] uppercase tracking-widest mb-8">{"Academic background"}</p>
      </motion.div>
      <div className="space-y-0">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" } as MotionProps["transition"]}
            className="group flex flex-wrap items-start justify-between gap-4 py-5 border-b border-[#1E1E2E] last:border-0 hover:bg-[#16161F] -mx-4 px-4 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-start gap-4">
              <span className="text-xs font-mono text-[#4F8EF7] mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-200 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-sm font-semibold text-[#F0F0F5] mb-0.5">{edu.title}</h3>
                <p className="text-xs text-[#8888A0]">{edu.institution}{edu.location ? ` · ${edu.location}` : ""}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-[#444458] bg-[#1E1E2E] px-3 py-1 rounded-md self-start">{edu.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp}>
          <SectionTitle label="06 · contact" title="Let's Talk" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-[#8888A0] leading-relaxed">
              {"Available immediately for projects in "}
              <span className="text-[#F0F0F5]">{"IAM, Cloud Security or DFIR"}</span>
              {". If you're looking for a junior profile with real SailPoint IdentityIQ experience and the drive to contribute from day one — reach out."}
            </p>
            <p className="text-[#8888A0] leading-relaxed">
              {"Open to technology consultancies, digital transformation projects, and opportunities requiring national or international mobility."}
            </p>
            <div className="pt-2">
              <a href="/cv-adrian-gomez-valades.pdf" download className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-[#4F8EF760] bg-[#4F8EF710] text-[#4F8EF7] text-sm font-mono hover:bg-[#4F8EF720] hover:border-[#4F8EF7] hover:text-white transition-all duration-200 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-y-0.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {"Download CV — PDF"}
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-3">
            {[
              { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/adriangvc", href: personalInfo.linkedin },
              { label: "GitHub", value: "github.com/adrigomezv01", href: personalInfo.github },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-[#1E1E2E] bg-[#16161F] hover:border-[#4F8EF740] hover:bg-[#1a1a27] transition-all duration-300 group">
                <span className="text-xs font-mono text-[#444458] uppercase tracking-wide">{item.label}</span>
                <span className="text-sm text-[#8888A0] group-hover:text-[#4F8EF7] transition-colors duration-200 flex items-center gap-1.5">
                  {item.value}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">{"→"}</span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-[#1E1E2E]">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-mono text-[#444458]">
          {"adriangvc.com · "}{new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/adriangvc/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#444458] hover:text-[#4F8EF7] transition-colors duration-200">{"LinkedIn"}</a>
          <a href="https://github.com/adrigomezv01" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#444458] hover:text-[#4F8EF7] transition-colors duration-200">{"GitHub"}</a>
          <a href="#" className="text-xs font-mono text-[#444458] hover:text-[#4F8EF7] transition-colors duration-200">{"↑ Top"}</a>
        </div>
      </div>
    </footer>
  );
}
