import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import AnnaGeorge from "./pages/anna-george";
import AnjaliRohan from "./pages/anjali-rohan";
import Fathimarizwan from "./pages/fathima-rizwan";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <About />
        <Projects />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anna-george" element={<AnnaGeorge />} />
      <Route path="/anjali-rohan" element={<AnjaliRohan />} />
      <Route path="/fathima-rizwan" element={<Fathimarizwan />} />
    </Routes>
  );
}