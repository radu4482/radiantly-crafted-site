import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LowCode from '@/components/LowCode';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <LowCode />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
