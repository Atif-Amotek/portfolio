import { Contact } from "@/components/contact";
import { Experience } from "@/components/experiences";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
