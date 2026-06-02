"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const roles = [
  "IAM Consultant",
  "Cybersecurity Analyst",
  "DFIR Specialist",
  "Blue Team Operator",
  "SailPoint Engineer",
];

function TypewriterRole() {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[current];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < role.length) {
      t = setTimeout(() => setText(role.slice(0, text.length + 1)), 75);
    } else if (!deleting && text.length === role.length) {
      t = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 38);
    } else {
      setDeleting(false);
      setCurrent((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, current]);

  return (
    <span className="text-[#5B8DEF]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const f = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: "easeOut" as const },
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,#5B8DEF18,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_60%,#7C6FF710,transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080810] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Mobile photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden flex justify-center mb-10"
            >
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-[#5B8DEF20] shadow-xl">
                <Image
                  src="/avatar.jpeg"
                  alt="Adrian Gomez-Valades"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 15%" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/60 to-transparent" />
              </div>
            </motion.div>

            {/* Available badge */}
            <motion.div {...f(0.1)} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#22c55e20] bg-[#22c55e08] mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              <span className="text-xs text-[#22c55e] font-medium tracking-wide">
                {"Available for immediate hire"}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...f(0.15)} className="text-5xl sm:text-6xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.0] mb-5">
              <span className="text-[#EEEEF5] block">{"Adrian"}</span>
              <span className="text-[#EEEEF5] block">{"Gomez\u2011Valades"}</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div {...f(0.2)} className="text-xl sm:text-2xl font-light text-[#9090A8] mb-7 h-8">
              {mounted && <TypewriterRole />}
            </motion.div>

            {/* Divider */}
            <motion.div {...f(0.25)} className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#5B8DEF]" />
              <span className="text-xs text-[#44445A] font-mono uppercase tracking-[0.2em]">
                {"IAM · DFIR · Azure Security"}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p {...f(0.3)} className="text-[#9090A8] text-base leading-relaxed mb-10 max-w-lg">
              {"Specialized in "}
              <span className="text-[#EEEEF5] font-medium">{"Identity & Access Management"}</span>
              {" and digital forensics. Real hands-on experience with "}
              <span className="text-[#5B8DEF] font-medium">{"SailPoint IdentityIQ"}</span>
              {" on a live enterprise project. Microsoft SC\u2011900 & AZ\u2011900 certified."}
            </motion.p>

            {/* CTAs */}
            <motion.div {...f(0.35)} className="flex flex-wrap gap-3 mb-12">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-[#5B8DEF] text-white text-sm font-semibold hover:bg-[#4a7de0] active:scale-[0.98] transition-all duration-200 shadow-[0_0_32px_#5B8DEF35]">
                {"Get in touch"}
              </a>
              <a href="/cv-adrian-gomez-valades.pdf" download className="px-6 py-3 rounded-xl border border-[#5B8DEF35] text-[#5B8DEF] text-sm font-semibold hover:bg-[#5B8DEF0D] active:scale-[0.98] transition-all duration-200">
                {"Download CV"}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-[#1A1A2E] text-[#9090A8] text-sm font-medium hover:border-[#5B8DEF30] hover:text-[#EEEEF5] transition-all duration-200">
                {"LinkedIn"}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-[#1A1A2E] text-[#9090A8] text-sm font-medium hover:border-[#5B8DEF30] hover:text-[#EEEEF5] transition-all duration-200">
                {"GitHub"}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...f(0.4)} className="flex flex-wrap gap-10">
              {[
                { value: "SailPoint IIQ", label: "Real enterprise experience" },
                { value: "SC-900 · AZ-900", label: "Microsoft certifications" },
                { value: "VolatixLab", label: "Personal DFIR laboratory" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-mono font-semibold text-[#5B8DEF] mb-1">{s.value}</p>
                  <p className="text-xs text-[#44445A]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#5B8DEF30] to-[#7C6FF720] blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#5B8DEF20] shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: "115%" }}>
                  <Image
                    src="/avatar.jpeg"
                    alt="Adrian Gomez-Valades"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#5B8DEF15]">
                    <p className="text-sm font-semibold text-[#EEEEF5]">{"Adrian Gomez-Valades"}</p>
                    <p className="text-xs text-[#9090A8] font-mono mt-0.5">{"Junior IAM & Cybersecurity"}</p>
                  </div>
                </div>
              </div>

              {/* Badges — static, no infinite animation */}
              <div className="absolute -left-6 top-10 px-3.5 py-2.5 rounded-xl border border-[#5B8DEF25] bg-[#080810]/90 backdrop-blur-md shadow-xl">
                <p className="text-xs font-mono font-semibold text-[#5B8DEF]">{"SailPoint IIQ"}</p>
                <p className="text-[10px] text-[#44445A] mt-0.5">{"Real experience"}</p>
              </div>
              <div className="absolute -right-6 bottom-24 px-3.5 py-2.5 rounded-xl border border-[#22c55e20] bg-[#080810]/90 backdrop-blur-md shadow-xl">
                <p className="text-xs font-mono font-semibold text-[#22c55e]">{"SC-900 / AZ-900"}</p>
                <p className="text-[10px] text-[#44445A] mt-0.5">{"Microsoft certified"}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — static */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-[#44445A] tracking-widest uppercase">{"scroll"}</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#5B8DEF60] to-transparent" />
      </motion.div>
    </section>
  );
}
