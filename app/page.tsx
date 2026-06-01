import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  About,
  Experience,
  Projects,
  Skills,
  Certifications,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}