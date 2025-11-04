import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Shield,
  Terminal,
  Cpu,
  FolderGit2,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function App() {
  // Estado del formulario
  const [status, setStatus] = useState({ sent: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xldoykww", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ sent: true, error: false });
        form.reset();

        // Oculta el mensaje tras 5 segundos
        setTimeout(() => setStatus({ sent: false, error: false }), 5000);
      } else {
        throw new Error("Error al enviar");
      }
    } catch {
      setStatus({ sent: false, error: true });
      setTimeout(() => setStatus({ sent: false, error: false }), 5000);
    }
  };

  return (
    <div className="bg-[#0a0f1a] text-white min-h-screen">
      {/* NAVBAR */}
      <header className="border-b border-emerald-500/20 sticky top-0 backdrop-blur-lg z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#" className="text-2xl font-bold text-emerald-400">
            Adrián GVC
          </a>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-400 transition">
              Sobre mí
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition">
              Proyectos
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contáctame
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Adrián Gómez-Valadés Castaño
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-emerald-400 mb-6"
        >
          Consultor en Ciberseguridad, Sistemas IT y Análisis Forense (DFIR)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4"
        >
          <a
            href="mailto:adriangomezvaladesc01@gmail.com"
            className="px-6 py-3 bg-emerald-500 rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Contactar
          </a>

          <a
            href="/AdrianGVC-CV.pdf"
            download="AdrianGomezValades-CV.pdf"
            className="px-6 py-3 border border-emerald-400/40 rounded-lg font-semibold hover:bg-emerald-400/10 transition flex items-center gap-2"
          >
            Descargar CV <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">Sobre mí</h2>
        <p className="text-zinc-300 leading-relaxed">
          Soy técnico en <b>Administración de Sistemas Informáticos en Red (ASIR)</b>,{" "}
          <b>Sistemas Microinformáticos y Redes (SMR)</b> y especializado en{" "}
          <b>Ciberseguridad Informática (CETI Badajoz)</b>.  
          Actualmente desarrollo mi carrera en el ámbito de la{" "}
          <b>seguridad ofensiva y defensiva</b>, con especial interés en el{" "}
          <b>análisis forense digital (DFIR)</b> y la respuesta ante incidentes.
        </p>

        <div className="mt-10 flex flex-wrap gap-6 text-zinc-400">
          <div className="flex items-center gap-3">
            <Shield className="text-emerald-400 w-6 h-6" /> Seguridad informática
          </div>
          <div className="flex items-center gap-3">
            <Terminal className="text-emerald-400 w-6 h-6" /> Análisis forense (DFIR)
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="text-emerald-400 w-6 h-6" /> Sistemas IT
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6 bg-[#0d1421]">
        <h2 className="text-3xl font-bold mb-8 text-emerald-400">Proyectos destacados</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-xl border border-emerald-400/20 p-6 bg-[#101829]"
          >
            <FolderGit2 className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">VolatixLab</h3>
            <p className="text-zinc-400 mb-4">
              Repositorio de escenarios forenses en español con evidencias RAM y disco para practicar análisis con Volatility y Autopsy.
            </p>
            <a
              href="https://github.com/adrigomezv01/VolatixLab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
            >
              Ver en GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Proyecto 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-xl border border-emerald-400/20 p-6 bg-[#101829]"
          >
            <FolderGit2 className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Workflow automatizado en SailPoint
            </h3>
            <p className="text-zinc-400 mb-4">
              Creación de un flujo de trabajo personalizado en IdentityIQ que genera contraseñas automáticas y notifica a los nuevos usuarios por correo.
            </p>
            <a
              href="mailto:adriangomezvaladesc01@gmail.com?subject=Info%20sobre%20Workflow%20SailPoint"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
            >
              Solicitar detalles <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">Contáctame</h2>
          <p className="text-zinc-400 mb-10">
            Si quieres hablar sobre ciberseguridad, proyectos o colaboraciones, rellena el formulario y te responderé lo antes posible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full rounded-xl bg-[#121826] p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="w-full rounded-xl bg-[#121826] p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              rows="5"
              className="w-full rounded-xl bg-[#121826] p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600 transition-all duration-200"
            >
              Enviar mensaje
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Mensaje de éxito o error */}
          {status.sent && (
            <div className="mt-6 flex justify-center items-center gap-2 text-emerald-400 font-medium">
              <CheckCircle2 className="w-5 h-5" /> ¡Mensaje enviado correctamente!
            </div>
          )}
          {status.error && (
            <div className="mt-6 flex justify-center items-center gap-2 text-red-400 font-medium">
              <XCircle className="w-5 h-5" /> Error al enviar el mensaje. Inténtalo de nuevo.
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-400/10 py-10 text-center text-zinc-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/adrigomezv01" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/adri%C3%A1n-g%C3%B3mez-valad%C3%A9s-casta%C3%B1o-917784332/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
          <a href="mailto:adriangomezvaladesc01@gmail.com">
            <Mail className="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} Adrián Gómez-Valadés Castaño — Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
