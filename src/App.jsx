import { motion } from "framer-motion";
import { Shield, Terminal, Cpu, FolderGit2, ExternalLink } from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#0f172a] text-gray-100 font-inter scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-emerald-400 tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A<span className="text-white">drián GVC</span>
          </motion.a>
          <div className="flex gap-6 text-gray-300 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition">Sobre mí</a>
            <a href="#education" className="hover:text-emerald-400 transition">Formación</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Proyectos</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Adrián Gómez-Valadés Castaño
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Consultor en <span className="text-emerald-400">Ciberseguridad, Sistemas IT</span> y Análisis Forense (DFIR)
        </motion.p>
        <motion.div
          className="flex gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/AdrianGVC-CV.pdf"
            download="AdrianGomezValades-CV.pdf"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition"
          >
            Descargar CV
          </a>
          <a
            href="#contact"
            className="border border-emerald-400/50 hover:bg-emerald-400/10 text-emerald-400 px-6 py-3 rounded-lg transition"
          >
            Contactar
          </a>
        </motion.div>
      </section>

      {/* SOBRE MÍ */}
      <section id="about" className="py-32 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Sobre mí
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Soy un profesional especializado en <span className="text-emerald-400">ciberseguridad informática</span>,
          con formación en administración de sistemas y experiencia en entornos de análisis forense digital.
          Me apasiona la investigación técnica, la defensa de infraestructuras y la mejora continua de la seguridad IT.
        </motion.p>
      </section>

      {/* FORMACIÓN */}
      <section id="education" className="py-32 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Formación
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-emerald-400" />,
                title: "Curso de Especialización en Ciberseguridad Informática — CETI Badajoz",
                year: "2024",
              },
              {
                icon: <Cpu className="h-10 w-10 text-emerald-400" />,
                title: "Administración de Sistemas Informáticos en Red (ASIR)",
                year: "2023",
              },
              {
                icon: <Terminal className="h-10 w-10 text-emerald-400" />,
                title: "Sistemas Microinformáticos y Redes (SMR)",
                year: "2021",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="py-32 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <FolderGit2 className="h-10 w-10 text-emerald-400" />,
              title: "VolatixLab",
              desc: "Repositorio forense con escenarios RAM y disco en español para prácticas con Volatility y Autopsy.",
              link: "https://github.com/adrigomezv01/VolatixLab",
            },
            {
              icon: <ExternalLink className="h-10 w-10 text-emerald-400" />,
              title: "Workflow personalizado SailPoint",
              desc: "Workflow que genera contraseñas y envía credenciales automáticas por correo mediante IdentityIQ.",
              link: "https://github.com/adrigomezv01",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Ver proyecto →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Contacto
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            ¿Buscas un <span className="text-emerald-400 font-medium">consultor en ciberseguridad</span> 
            o colaboración técnica? Escríbeme y te responderé personalmente.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <motion.form
              className="w-full md:w-1/2 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Nombre" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-emerald-400 outline-none" />
              <input type="email" placeholder="Correo electrónico" className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-emerald-400 outline-none" />
              <textarea placeholder="Tu mensaje..." className="w-full mb-6 px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-emerald-400 outline-none resize-none" rows="4"></textarea>
              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold py-3 rounded-lg transition">Enviar mensaje</button>
            </motion.form>

            <motion.div
              className="flex flex-col md:w-1/3 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg mb-6 text-gray-300">También puedes contactarme directamente:</p>
              <a href="mailto:adriangomezvaladesc01@gmail.com" className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 mb-3 transition">
                <i className="fa-solid fa-envelope text-xl"></i> adriangomezvaladesc01@gmail.com
              </a>
              <p className="flex items-center gap-3 text-gray-400 mb-3">
                <i className="fa-solid fa-phone text-emerald-400 text-xl"></i> +34 654 07 98 95
              </p>
              <div className="flex gap-6 mt-6">
                <a href="https://github.com/adrigomezv01" target="_blank" className="text-gray-400 hover:text-emerald-400 text-2xl"><i className="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/adriangomezvalades" target="_blank" className="text-gray-400 hover:text-emerald-400 text-2xl"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-slate-800 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Adrián Gómez-Valadés Castaño —{" "}
        <span className="text-gray-300">Consultor en Ciberseguridad, Sistemas IT y DFIR</span>.<br />
        Desarrollado con <span className="text-emerald-400 font-semibold">React</span> &{" "}
        <span className="text-emerald-400 font-semibold">TailwindCSS</span>.
      </footer>
    </div>
  );
}
