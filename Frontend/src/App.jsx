import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import WhyUs from './components/whychooseus'; 
import LeadForm from './components/LeadForm';
import WhatsAppButton from './components/WhatsApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-poppins flex flex-col">
        
        {/* Navbar hamesha top par rahega */}
        <Navbar />

        {/* Main content area jahan pages change honge */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            
            <Route path="/why-us" element={<WhyUs />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<LeadForm />} />
          </Routes>
        </main>
        <WhatsAppButton />
        {/* Footer hamesha bottom par rahega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;