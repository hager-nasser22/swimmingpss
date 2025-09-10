import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
// import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';
import SiteNavbar from './components/SiteNavbar';
import ProjectsSlider from './components/ProjectsSlider';
// import StatsSection from './components/StatsSection';
// import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProjectsSlider />
      <ServicesSection/>
      {/* <StatsSection /> */}
      <ProductsSection />
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}

export default App;
