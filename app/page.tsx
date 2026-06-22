import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Architecture from "@/components/Architecture";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <CaseStudies />
        <Architecture />
        <Timeline />
        <Skills />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
