import React, { useState } from 'react'
import { ArrowRight, Navigation, AlertCircle, Volume2, DollarSign, Wifi, Compass, Sparkles, Menu, X } from 'lucide-react';
import dalada from './assets/Dalada.jpg';
import galle from './assets/galle.jpg';
import sigriya from './assets/Sigiriya.jpeg';
import pol from './assets/Polonnaruwa.jpg';
import pidur from './assets/pidurangala.jpg';



export default function TourismWebsite() {
  // ADDED: State to manage the open/close state of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // ADDED: Close the menu automatically when a link is clicked
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Navigation size={32} />,
      title: "AR Spatial Anchors",
      description: "Navigate with augmented reality markers that pinpoint exact locations of cultural sites and hidden gems across Sri Lanka."
    },
    {
      icon: <AlertCircle size={32} />,
      title: "Poya Day Alerts",
      description: "Smart notifications for Poya days and local holidays so you never miss important cultural celebrations or temple ceremonies."
    },
    {
      icon: <Volume2 size={32} />,
      title: "Voice-First Navigation",
      description: "Hands-free travel guidance in multiple languages. Perfect for when you're driving or exploring on foot."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Real Currency Exchange",
      description: "Live LKR exchange rates and instant currency conversion with zero hidden fees for seamless spending."
    },
    {
      icon: <Wifi size={32} />,
      title: "Cultural Content & Offline Mode",
      description: "Download dress codes, cultural etiquette, and sacred site rules. Access everything offline for uninterrupted exploration."
    }
  ];

  const touristImages = [
    { src: dalada, alt: "Dalada Maligawa Temple" },
    { src: galle, alt: "Galle Fort Lighthouse" },
    { src: sigriya, alt: "Sigiriya Rock Fortress" },
    { src: pol, alt: "Polonnaruwa Ancient City" },
    { src: pidur, alt: "Pidurangala Scenic View" }
  ];

  return (
    <div className="text-gray-900 font-sans" style={{ backgroundColor: '#000000ff' }}>
      <style>{`
      `}</style>
      {/* Navigation */}
      <nav className="relative flex justify-between items-center px-4 md:16 py-4 border-b z-50" style={{ backgroundColor: '#F2F2F2', borderColor: '#262e36' }}>
        <div className="flex items-center gap-3">
          {/* <div className="w-6 h-6 rounded" style={{ backgroundColor: '#102550' }}></div> */}
          <img src="./logo.jpeg" alt="Planora Logo" className="w-10 h-10"/>
          <span className="font-bold text-base" style={{ color: '#102550' }}>Planora</span>
        </div>


        <div className="hidden md:flex gap-10 text-xs font-medium">
          <button onClick={() => scrollToSection('about')} style={{ color: '#102550' }} className="hover:opacity-70 bg-none border-none cursor-pointer font-medium">ABOUT US</button>
          <button onClick={() => scrollToSection('features')} style={{ color: '#102550' }} className="hover:opacity-70 bg-none border-none cursor-pointer font-medium">FEATURES</button>
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">UPGRADE</a>
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">OUR APP</a>
        </div>

        <button className="hidden md:block bg-white border-2 text-xs font-semibold rounded-lg hover:bg-gray-50 px-6 py-2" style={{ borderColor: '#102550', color: '#102550' }}>
          TRY NOW
        </button>
 
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden z-50"
          style={{ color: '#102550' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ADDED: Mobile Menu - Fullscreen overlay
        1. This entire block is new.
        2. 'md:hidden' ensures it only shows on mobile.
        3. 'fixed inset-0' makes it a fullscreen overlay.
        4. 'z-40' places it just below the nav bar (which is z-50).
        5. It only renders if 'isMenuOpen' is true.
      */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: '#F2F2F2' }}>
          <button onClick={() => scrollToSection('about')} className="text-2xl font-bold" style={{ color: '#102550' }}>ABOUT US</button>
          <button onClick={() => scrollToSection('features')} className="text-2xl font-bold" style={{ color: '#102550' }}>FEATURES</button>
          <a href="#" className="text-2xl font-bold" style={{ color: '#102550' }}>UPGRADE</a>
          <a href="#" className="text-2xl font-bold" style={{ color: '#102550' }}>OUR APP</a>
          <button className="bg-white border-2 text-lg font-semibold rounded-lg hover:bg-gray-50 px-8 py-3 mt-4" style={{ borderColor: '#102550', color: '#102550' }}>
            TRY NOW
          </button>
        </div>
      )}
      

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F2F2F2' }}>

        {/* Image Showcase - Professional Grid Layout */}
        <div className="absolute right-2 top-90 md:right-12 md:top-1/2 transform -translate-y-1/2 pointer-events-none">
          <div className="grid grid-cols-2 gap-6 w-96">
            {/* Top Left - Large */}
            <div className="col-span-1 row-span-2">
              <div className="w-full h-80 rounded-2xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition duration-300">
                <img src={touristImages[0].src} alt={touristImages[0].alt} className="w-full h-full object-cover hover:scale-105 transition duration-300 blur-sm md:blur-none" />
              </div>
            </div>


            {/* Top Right */}
            <div>
              <div className="w-full h-40 rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition duration-300">
                <img src={touristImages[1].src} alt={touristImages[1].alt} className="w-full h-full object-cover hover:scale-105 transition duration-300 blur-sm md:blur-none" />
              </div>
            </div>
            
            {/* Middle Right */}
            <div>
              <div className="w-full h-40 rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition duration-300">
                <img src={touristImages[2].src} alt={touristImages[2].alt} className="w-full h-full object-cover hover:scale-105 transition duration-300 blur-sm md:blur-none" />
              </div>
            </div>
            
            {/* Bottom Left */}
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-6">
                <div className="w-full h-36 rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition duration-300">
                  <img src={touristImages[3].src} alt={touristImages[3].alt} className="w-full h-full object-cover hover:scale-105 transition duration-300 blur-sm md:blur-none" />
                </div>
                <div className="w-full h-36 rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition duration-300">
                  <img src={touristImages[4].src} alt={touristImages[4].alt} className="w-full h-full object-cover hover:scale-105 transition duration-300 blur-sm md:blur-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center text-center md:justify-start px-10 md:px-16 md:py-32 max-w-7xl mx-auto h-screen z-10">
          <div className="w-full md:w-1/2 mx-auto md:mx-0">
            <h1 className="text-7xl font-bold leading-tight mb-8" style={{ color: '#102550'}}>
              The Leading<br />Sri Lankan Travel<br />Companion
            </h1>
            <p className="text-base mb-8" style={{ color: '#102550'}}>
              Intelligent Travel Planning for Sri Lanka
            </p>
            <p className="mb-12 text-sm leading-relaxed max-w-md" style={{ color: '#102550'}}>
              Planora uses AI to create personalized itineraries, smart cultural alerts, and immersive experiences tailored to Sri Lanka's unique heritage and climate.
            </p>
            <div className="flex gap-3">
              <button className="text-white px-8 py-3 text-sm font-semibold rounded-lg flex items-center justify-center hover:opacity-90 transition w-fit" style={{ backgroundColor: '#102550' }}>
                CONTACT SALES
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="bg-white border-2 px-8 py-3 text-sm font-semibold rounded-lg hover:bg-gray-50 transition" style={{ borderColor: '#102550', color: '#102550' }}>
                TRY THE PLAYGROUND
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* About Us Section */}
      <section id="about" className="py-24 px-16 relative overflow-hidden" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="mb-4">
              </div>
              <h2 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">
               About US
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Planora revolutionizes travel planning by combining cutting-edge AI with deep cultural insights. Whether you're exploring ancient temples, discovering hidden waterfalls, or immersing yourself in local traditions, we've got you covered.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With features designed specifically for Sri Lanka's unique landscape and culture, Planora transforms how travelers experience the island. From voice-guided journeys to cultural etiquette tips, we ensure every moment is meaningful and respectful.
              </p>
              <div className="flex gap-4">
              </div>
            </div>

            {/* Right Side - Stats/Benefits */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold" style={{ color: '#102550' }}>50K+</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Happy Travelers</h3>
                    <p className="text-gray-600 text-sm">Exploring Sri Lanka with confidence</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold" style={{ color: '#102550' }}>500+</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Destinations Mapped</h3>
                    <p className="text-gray-600 text-sm">Cultural sites and hidden gems</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold" style={{ color: '#102550' }}>3+</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Languages Supported</h3>
                    <p className="text-gray-600 text-sm">Connect with travelers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}


      {/* Features Section - 5 Main Features */}
      <section id="features" className="py-32 px-16 relative overflow-hidden" style={{ backgroundColor: '#F2F2F2' }}>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:border-blue-200">
                <div className="mb-6 text-blue-600 group-hover:scale-110 transition duration-300" style={{ color: '#102550' }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-16 relative overflow-hidden" style={{ backgroundColor: '#102550' }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Sri Lanka?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of travelers using Planora to discover Sri Lanka's rich culture, hidden treasures, and authentic experiences.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-900 px-10 py-4 text-sm font-semibold rounded-lg hover:bg-gray-50 transition flex items-center" style={{ backgroundColor: '#F2F2F2', color: '#102550' }}>
              START YOUR JOURNEY
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 text-sm font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition">
              DOWNLOAD APP
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-800 pt-12">
            <div className="grid grid-cols-5 gap-8 mb-12">
              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Products</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Trip Planning</a></li>
                  <li><a href="#" className="hover:text-white">AI Itineraries</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Features</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Voice Navigation</a></li>
                  <li><a href="#" className="hover:text-white">Offline Mode</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Company</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Support</p>web
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Help</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Legal</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
              <div className="text-4xl font-bold text-white">Planora</div>
              <div className="flex gap-8 text-xs text-gray-500">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
              <p className="text-xs text-gray-600">@Planora 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}