import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AboutDetailSection from './components/AboutDetailSection'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="dark">
      <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white transition-colors duration-200 antialiased selection:bg-primary/30">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <AboutDetailSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
        
        {/* Global background pattern */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-20" 
          style={{
            backgroundImage: 'radial-gradient(#3713ec 0.8px, transparent 0.8px)',
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>
    </div>
  )
}

export default App