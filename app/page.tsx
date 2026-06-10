import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { FutureGoals } from "@/components/FutureGoals";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Program } from "@/components/Program";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf8]">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <FutureGoals />
      <Achievements />
      <Program />
      <Contact />
    </main>
  );
}
