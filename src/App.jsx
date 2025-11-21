import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Bell, BookOpen, Zap, Database, Menu, X, Activity, Wifi, BarChart3, Phone, X as XIcon } from 'lucide-react';

export default function AireaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showCallWidget, setShowCallWidget] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const fullText = ' Smart Lung Cancer IoT Detection';
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          isDeleting = true;
          setTimeout(() => {}, 2000);
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(fullText.slice(0, currentIndex));
        } else {
          isDeleting = false;
        }
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Heart size={40} />,
      title: "Real-Time Vital Monitoring",
      description: "Continuous tracking of SpO2, heart rate, respiratory rate, body temperature, and cough patterns 24/7 via advanced IoT sensors."
    },
    {
      icon: <Zap size={40} />,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms analyze patterns to detect early signs of lung cancer with high accuracy and reliability."
    },
    {
      icon: <Bell size={40} />,
      title: "Instant Smart Alerts",
      description: "Immediate notifications to patients and healthcare providers when anomalies are detected for quick intervention and care."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Patient Education",
      description: "Comprehensive resources about lung health, symptoms, and preventive measures for informed patient care and wellness."
    },
    {
      icon: <Database size={40} />,
      title: "Secure Data Management",
      description: "HIPAA-compliant cloud storage with encrypted patient records, analytics, and historical trend analysis for clinical reference."
    }
  ];

  const stats = [
    { icon: <Heart size={24} />, label: "Blood Oxygen", value: "98", unit: "%", progress: 98 },
    { icon: <Activity size={24} />, label: "Heart Rate", value: "72", unit: "BPM", progress: 72 },
    { icon: <Zap size={24} />, label: "Body Temp", value: "36.8", unit: "°C", progress: 92 },
    { icon: <Wifi size={24} />, label: "Device", value: "Live", unit: "(1m)", progress: 100 }
  ];

  const systemComponents = [
    {
      title: "IoT Wearable Sensors",
      icon: <Zap size={32} />,
      items: ["Pulse Oximeter Sensor", "Temperature Monitor", "Respiratory Rate Detector", "Cough Analysis System", "Real-time Data Transmission"]
    },
    {
      title: "Mobile Patient App",
      icon: <Heart size={32} />,
      items: ["Live Health Dashboard", "Alert Notifications", "Health History Tracking", "AI Health Assistant", "Doctor Communication"]
    },
    {
      title: "Doctor Dashboard",
      icon: <BarChart3 size={32} />,
      items: ["Multi-Patient Monitoring", "Clinical Analytics", "Risk Assessment", "Treatment Plans", "Historical Reports"]
    }
  ];

  const challenges = [
    {
      title: "Late Cancer Detection",
      description: "Current methods rely on periodic screenings, missing critical changes between appointments that could be life-saving.",
      stat: "60% of cases detected late"
    },
    {
      title: "High Mortality Rates",
      description: "Lung cancer remains one of the deadliest cancers globally, with early detection being the key to survival.",
      stat: "1.8M annual deaths"
    },
    {
      title: "Healthcare Access Gap",
      description: "Many patients in remote areas lack continuous monitoring and professional medical supervision for early intervention.",
      stat: "Only 25% have access"
    }
  ];

  return (
    <div className="text-gray-900 font-sans" style={{ backgroundColor: '#ffffff' }}>
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          0%, 49% { border-color: #4a9b8e; }
          50%, 100% { border-color: transparent; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(74, 155, 142, 0.3); }
          50% { box-shadow: 0 0 40px rgba(74, 155, 142, 0.6); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px) rotateZ(-5deg); }
          50% { transform: translateY(-30px) rotateZ(-5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .typing-text {
          display: inline;
          border-right: 3px solid #4a9b8e;
          animation: blink 0.7s infinite;
        }
        
        .fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .phone-float {
          animation: phoneFloat 3s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }

        .call-widget-animation {
          animation: slideInUp 0.5s ease-out;
        }

        .call-widget-pulse {
          animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .glassmorphism-banner {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(74, 155, 142, 0.3);
          box-shadow: 0 8px 32px rgba(74, 155, 142, 0.12);
        }
        
        .component-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #4a9b8e, transparent);
          margin: 20px 0;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(74, 155, 142, 0.25);
        }

        .call-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 40;
          max-width: 320px;
        }

        .call-widget-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .call-widget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .call-widget-icon {
          font-size: 32px;
          margin-right: 12px;
        }

        .call-widget-title {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 16px;
        }

        .call-widget-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #ccc;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
          width: 24px;
          height: 24px;
        }

        .call-widget-close:hover {
          color: #999;
        }

        .call-widget-button {
          width: 100%;
          background: #000;
          color: white;
          border: none;
          padding: 14px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .call-widget-button:hover {
          background: #222;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 640px) {
          .call-widget {
            bottom: 20px;
            right: 20px;
            max-width: 280px;
          }

          .call-widget-card {
            padding: 20px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative flex justify-between items-center px-4 md:px-16 py-4 border-b z-50 backdrop-blur-sm" style={{ backgroundColor: '#faf9f7', borderColor: '#e0e0e0' }}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg float-animation flex items-center justify-center text-lg font-bold" style={{ backgroundColor: '#a8d8d8', color: '#4a9b8e' }}>
            🌬️
          </div>
          <span className="font-bold text-lg hidden sm:inline" style={{ color: '#4a9b8e' }}>Airea</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <button onClick={() => scrollToSection('home')} className="hover:text-teal-700 transition bg-none border-none cursor-pointer" style={{ color: '#333333' }}>Home</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-teal-700 transition bg-none border-none cursor-pointer" style={{ color: '#333333' }}>Features</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-teal-700 transition bg-none border-none cursor-pointer" style={{ color: '#333333' }}>About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-teal-700 transition bg-none border-none cursor-pointer" style={{ color: '#333333' }}>Contact us</button>
          <a href="#" className="hover:text-teal-700 transition" style={{ color: '#333333' }}>Privacy</a>
          <a href="#" className="text-2xl hover:opacity-75 transition">📱</a>
        </div>

        <button className="hidden md:block text-white px-6 py-2 text-sm font-semibold rounded-full hover:opacity-90 transition" style={{ backgroundColor: '#4a9b8e' }}>
          JOIN US
        </button>
 
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-lg"
          style={{ color: '#4a9b8e' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(74, 155, 142, 0.95)' }}>
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white">Home</button>
          <button onClick={() => scrollToSection('features')} className="text-2xl font-bold text-white">Features</button>
          <button onClick={() => scrollToSection('about')} className="text-2xl font-bold text-white">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-bold text-white">Contact us</button>
          <a href="#" className="text-2xl font-bold text-white">Privacy</a>
          <button className="text-white px-8 py-3 text-lg font-semibold rounded-full mt-4" style={{ backgroundColor: '#f5ebe0', color: '#4a9b8e' }}>
            JOIN US
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#f5ebe0' }}>
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at top right, #4a9b8e, transparent), radial-gradient(circle at bottom left, #90c9c3, transparent)' }}></div>
        
        <div className="relative flex items-center justify-center text-center px-6 md:px-16 max-w-7xl mx-auto w-full z-10">
          <div className="w-full">
            <div className="mb-6 fadeInUp">
              
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: '#1a1a1a' }}>
              <span className="typing-text">{displayedText}</span>
            </h1>
            
            <p className="text-xl mb-8 slideInRight" style={{ color: '#666666' }}>
              Advanced IoT Monitoring for Early Lung Cancer Detection
            </p>
            
            <p className="mb-12 text-base leading-relaxed max-w-2xl mx-auto fadeInUp" style={{ color: '#666666' }}>
              Real-time wearable IoT sensors combined with AI-powered analytics to detect lung cancer early, providing continuous patient monitoring with instant alerts to healthcare providers.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap fadeInUp">
              <button className="text-white px-8 py-3 text-sm font-semibold rounded-full flex items-center justify-center hover:opacity-90 transition glow-effect" style={{ backgroundColor: '#4a9b8e' }}>
                START MONITORING
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="border-2 px-8 py-3 text-sm font-semibold rounded-full hover:bg-white transition" style={{ borderColor: '#4a9b8e', color: '#4a9b8e' }}>
                LEARN MORE
              </button>
            </div>

            {/* Live Monitoring Stats */}
            <div className="mt-16 fadeInUp">
              <p className="text-sm mb-6 flex items-center justify-center gap-2" style={{ color: '#4a9b8e' }}>
                <span className="w-2 h-2 rounded-full pulse-animation" style={{ backgroundColor: '#4a9b8e' }}></span>
                Live IoT Device Monitoring
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, idx) => (
                  <div key={idx} className="hover-lift bg-white rounded-lg p-6 border shadow-md" style={{ borderColor: '#e0e0e0', backgroundColor: 'rgba(74, 155, 142, 0.05)' }}>
                    <div className="flex items-center gap-2 mb-3" style={{ color: '#4a9b8e' }}>
                      {stat.icon}
                    </div>
                    <p className="text-gray-600 text-xs mb-2">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold" style={{ color: '#4a9b8e' }}>{stat.value}</span>
                      <span className="text-sm text-gray-500">{stat.unit}</span>
                    </div>
                    <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all" style={{ width: `${stat.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a3a3a' }}>How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple to use, powerful in functionality – our smart IoT sensors integrate seamlessly into your daily routine for continuous lung cancer monitoring.</p>
          </div>

          {/* Step Indicators - Clickable */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-20">
            {[
              { num: 1, label: 'Wear' },
              { num: 2, label: 'Connect' },
              { num: 3, label: 'Monitor' },
              { num: 4, label: 'Share' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <button
                  onClick={() => setActiveStep(step.num)}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:shadow-lg cursor-pointer"
                  style={{ 
                    backgroundColor: activeStep === step.num ? '#2d7a6e' : '#e0e0e0',
                    color: activeStep === step.num ? '#ffffff' : '#999999'
                  }}
                >
                  {step.num}
                </button>
                {idx < 3 && <div className="w-8 md:w-12 h-1 mx-2 md:mx-4" style={{ backgroundColor: '#e0e0e0' }}></div>}
              </div>
            ))}
          </div>

          {/* Step Content - Wear */}
          {activeStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl p-8" style={{ backgroundColor: '#f0f7f6' }}>
                <div className="mb-6" style={{ fontSize: '48px' }}>❤️</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#1a3a3a' }}>Wear</h3>
                <p className="text-gray-600 leading-relaxed mb-8">Our ergonomically designed IoT wearable sensor fits comfortably with medical-grade sensors that make gentle contact with your skin. The device adjusts to accommodate your changing body throughout daily activities, providing continuous real-time monitoring of vital signs including heart rate, respiratory rate, and body temperature.</p>
                <button className="px-6 py-2 text-white font-bold rounded-full" style={{ backgroundColor: '#2d7a6e' }}>
                  NEXT STEP
                </button>
              </div>
              <div className="rounded-3xl overflow-hidden h-96" style={{ backgroundColor: '#e0e0e0' }}>
                {/* Placeholder for image */}
              </div>
            </div>
          )}

          {/* Step Content - Connect */}
          {activeStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden h-96 order-last md:order-first" style={{ backgroundColor: '#e0e0e0' }}>
                {/* Placeholder for image */}
              </div>
              <div className="rounded-3xl p-8" style={{ backgroundColor: '#f0f7f6' }}>
                <div className="mb-6" style={{ fontSize: '48px' }}>📱</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#1a3a3a' }}>Connect</h3>
                <p className="text-gray-600 leading-relaxed mb-8">Download our app and connect your wearable via Bluetooth. The connection process is simple and secure. Once connected, the sensor will automatically transmit data to your phone in real-time, even while you're asleep or going about your daily activities. Your data is encrypted and protected.</p>
                <button className="px-6 py-2 text-white font-bold rounded-full" style={{ backgroundColor: '#2d7a6e' }}>
                  NEXT STEP
                </button>
              </div>
            </div>
          )}

          {/* Step Content - Monitor */}
          {activeStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl p-8" style={{ backgroundColor: '#f0f7f6' }}>
                <div className="mb-6" style={{ fontSize: '48px' }}>📊</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#1a3a3a' }}>Monitor</h3>
                <p className="text-gray-600 leading-relaxed mb-8">Through our intuitive app interface, monitor vital health metrics including heart rate, movement patterns, respiratory rate, and temperature. Our AI processes this data to identify patterns and alert you to any changes that might require attention for early lung cancer detection.</p>
                <button className="px-6 py-2 text-white font-bold rounded-full" style={{ backgroundColor: '#2d7a6e' }}>
                  NEXT STEP
                </button>
              </div>
              <div className="rounded-3xl overflow-hidden h-96" style={{ backgroundColor: '#e0e0e0' }}>
                {/* Placeholder for image */}
              </div>
            </div>
          )}

          {/* Step Content - Share */}
          {activeStep === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden h-96 order-last md:order-first" style={{ backgroundColor: '#e0e0e0' }}>
                {/* Placeholder for image */}
              </div>
              <div className="rounded-3xl p-8" style={{ backgroundColor: '#f0f7f6' }}>
                <div className="mb-6" style={{ fontSize: '48px' }}>☁️</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#1a3a3a' }}>Share</h3>
                <p className="text-gray-600 leading-relaxed mb-8">With your permission, health data can be securely shared with your healthcare provider. This allows for more informed decisions during checkups and enables remote monitoring between appointments, creating a more comprehensive approach to preventive lung cancer care.</p>
                <button className="px-6 py-2 text-white font-bold rounded-full" style={{ backgroundColor: '#2d7a6e' }}>
                  START AGAIN
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* The Challenge Section */}
      <section id="about" className="py-24 px-6 md:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#4a9b8e' }}>The Challenge</h2>
              <div className="space-y-10">
                {challenges.map((challenge, idx) => (
                  <div key={idx} className="border-l-4 pl-6 hover-lift" style={{ borderColor: '#4a9b8e' }}>
                    <h3 className="text-lg font-bold mb-3" style={{ color: '#0f1419' }}>{challenge.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{challenge.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#4a9b8e' }}>
                      {challenge.stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border" style={{ borderColor: '#e0e0e0' }}>
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#4a9b8e' }}>Lung Cancer Impact</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-semibold">Annual Cases Worldwide</span>
                      <span className="text-2xl font-bold" style={{ color: '#4a9b8e' }}>2.1M</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-semibold">Preventable with Early Detection</span>
                      <span className="text-2xl font-bold" style={{ color: '#ff9900' }}>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-semibold">Patients with Continuous Monitoring</span>
                      <span className="text-2xl font-bold" style={{ color: '#4a9b8e' }}>3 in 10</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-md border hover-lift" style={{ borderColor: '#e0e0e0' }}>
                  <p className="text-gray-600 text-xs mb-2">Global Mortality</p>
                  <p className="text-3xl font-bold" style={{ color: '#4a9b8e' }}>1.8M</p>
                  <p className="text-xs text-gray-500 mt-1">Annual deaths</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md border hover-lift" style={{ borderColor: '#e0e0e0' }}>
                  <p className="text-gray-600 text-xs mb-2">5-Year Survival Rate</p>
                  <p className="text-3xl font-bold" style={{ color: '#4a9b8e' }}>21%</p>
                  <p className="text-xs text-gray-500 mt-1">All stages combined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 md:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
    
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#1a1a1a' }}> Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Airea empowers healthcare professionals with innovative features that support, guide, and make continuous patient monitoring seamless and effective.</p>
          </div>

          {/* Features Grid - Top Row (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-10 border shadow-lg hover-lift" style={{ borderColor: '#f0f0f0' }}>
                <div className="mb-8 group-hover:scale-110 transition duration-300" style={{ color: '#4a9b8e' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Features Grid - Bottom Row (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(3, 5).map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-10 border shadow-lg hover-lift" style={{ borderColor: '#f0f0f0' }}>
                <div className="mb-8 group-hover:scale-110 transition duration-300" style={{ color: '#4a9b8e' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Replacing Medical Experts */}
      <section id="contact" className="py-32 px-6 md:px-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold" style={{ color: '#1a3a3a' }}>Get in Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#f0f9f8' }}>
                  <span style={{ fontSize: '24px', color: '#4a9b8e' }}>📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-lg font-semibold" style={{ color: '#1a3a3a' }}>(+94)70 363 6366</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#f0f9f8' }}>
                  <span style={{ fontSize: '24px' }}>✉️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-lg font-semibold" style={{ color: '#1a3a3a' }}>amorhealthcarelk@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#f0f9f8' }}>
                  <span style={{ fontSize: '24px' }}>📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-lg font-semibold" style={{ color: '#1a3a3a' }}>435 Galle Rd, Colombo 00300</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition text-gray-700 placeholder-gray-400"
                  style={{ borderColor: '#e5e5e5', backgroundColor: '#f9f9f9' }}
                />
                
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition text-gray-700 placeholder-gray-400"
                  style={{ borderColor: '#e5e5e5', backgroundColor: '#f9f9f9' }}
                />
                
                <textarea 
                  placeholder="Your Message" 
                  rows="6"
                  className="w-full px-6 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition resize-none text-gray-700 placeholder-gray-400"
                  style={{ borderColor: '#e5e5e5', backgroundColor: '#f9f9f9' }}
                ></textarea>
                
                <button 
                  type="submit"
                  className="w-full py-3 text-white font-bold rounded-lg hover:opacity-90 transition uppercase tracking-wide text-sm"
                  style={{ backgroundColor: '#2d7a6e' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#4a9b8e' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Patient Care?</h2>
          <p className="text-blue-50 text-lg mb-10">Join healthcare institutions using Airea to provide continuous IoT-based monitoring and early detection for lung cancer patients worldwide.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-teal-900 px-10 py-4 text-sm font-semibold rounded-full hover:bg-gray-100 transition flex items-center justify-center" style={{ color: '#4a9b8e' }}>
              START FREE TRIAL
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 text-sm font-semibold rounded-full hover:bg-white hover:text-teal-900 transition">
              CONTACT SALES
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-600 py-16 px-6 md:px-16 border-t" style={{ backgroundColor: '#f8f9fa', borderColor: '#e0e0e0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="pt-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Product</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Monitoring System</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Mobile App</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Analytics</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Features</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Real-Time Alerts</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">AI Detection</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Data Security</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Company</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Support</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Documentation</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Legal</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Terms</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">HIPAA</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold" style={{ color: '#4a9b8e' }}>Airea</div>
              <div className="flex gap-8 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-900 transition">LinkedIn</a>
                <a href="#" className="hover:text-gray-900 transition">Twitter</a>
                <a href="#" className="hover:text-gray-900 transition">Email</a>
              </div>
              <p className="text-xs text-gray-600">©Airea 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Call Widget */}
      {showCallWidget && (
        <div className="call-widget call-widget-animation">
          <div className="call-widget-card call-widget-pulse">
            <div className="call-widget-header">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="call-widget-icon">📞</div>
                <span className="call-widget-title">Need help?</span>
              </div>
              <button 
                onClick={() => setShowCallWidget(false)}
                className="call-widget-close"
                aria-label="Close"
              >
                <XIcon size={18} />
              </button>
            </div>
            
            <button className="call-widget-button">
              <Phone size={18} />
              Start a call
            </button>
          </div>
        </div>
      )}
    </div>
  );
}