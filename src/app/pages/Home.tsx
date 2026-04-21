import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Programs } from "../components/Programs";
import { Impact } from "../components/Impact";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Chatbot } from "../components/Chatbot";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}