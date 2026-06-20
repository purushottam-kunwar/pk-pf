import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import Architecture from "@/components/Architecture";
import Timeline from "@/components/Timeline";
import Terminal from "@/components/Terminal";
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
        <Stories />
        <Architecture />
        <Timeline />
        <Terminal />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
