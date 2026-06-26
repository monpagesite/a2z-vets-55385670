import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import TeamSection from './components/TeamSection';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhySection />
        <TeamSection />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
