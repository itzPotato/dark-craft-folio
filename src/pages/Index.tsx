import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-14">
        <Hero />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
