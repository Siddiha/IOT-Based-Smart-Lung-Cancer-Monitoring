import React, { useState } from 'react'
import { ArrowRight, Heart, Bell, BookOpen, Zap, Database, Menu, X, TrendingUp } from 'lucide-react';

export default function HealthMonitoringWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Heart size={32} />,
      title: "Continuous Monitoring",
      description: "Real-time tracking of vital signs including oxygen saturation, heart rate, respiratory rate, and body temperature 24/7."
    },
    {
      icon: <Bell size={32} />,
      title: "Real-Time Alerts",
      description: "Instant notifications to patients and healthcare providers when critical health changes are detected for immediate response."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Educational Resources",
      description: "Evidence-based information about lung cancer management, symptom recognition, and wellness strategies for informed patient care."
    },
    {
      icon: <Zap size={32} />,
      title: "AI Agent Support",
      description: "Intelligent AI assistant provides personalized health insights, medication reminders, and 24/7 health guidance support."
    },
    {
      icon: <Database size={32} />,
      title: "Health Records Integration",
      description: "Comprehensive health data repository securely storing patient records, trends, and historical monitoring data for clinical reference."
    }
  ];

  const stats = [
    { icon: <Heart size={24} />, label: "Blood Oxygen", value: "98", unit: "%", progress: 98 },
    { icon: <TrendingUp size={24} />, label: "Heart Rate", value: "72", unit: "BPM", progress: 72 },
    { icon: <Zap size={24} />, label: "Body Temp", value: "37.2", unit: "°C", progress: 93 },
    { icon: <Bell size={24} />, label: "Status", value: "Live", unit: "(1m)", progress: 100 }
  ];

  const challenges = [
    {
      title: "Lack of Continuous Monitoring",
      description: "Current lung cancer care relies on periodic check-ups, missing critical health changes between appointments.",
      stat: "Early Detection"
    },
    {
      title: "Rising Mortality Rates",
      description: "Globally, lung cancer mortality continues to rise despite medical advancements, with many cases preventable with early detection.",
      stat: "Preventable with Monitoring"
    },
    {
      title: "Underserved Communities",
      description: "Remote and underserved communities face significant barriers to accessing quality lung cancer care and monitoring services.",
      stat: "Limited Access"
    }
  ];

  return (
    <div className="text-gray-900 font-sans" style={{ backgroundColor: '#ffffff' }}>
      <style>{`
        .glassmorphism-banner {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(135, 206, 250, 0.4);
          box-shadow: 0 8px 32px rgba(0, 102, 204, 0.12);
        }
        .component-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #0066cc, transparent);
          margin: 20px 0;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative flex justify-between items-center px-4 md:px-16 py-5 border-b z-50" style={{ backgroundColor: '#f8f9fa', borderColor: '#e0e0e0' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded" style={{ backgroundColor: '#0066cc' }}>
            <div className="w-full h-full flex items-center justify-center font-bold text-white text-lg">A</div>
          </div>
          <span className="font-bold text-lg" style={{ color: '#0066cc' }}>Airea</span>
        </div>

        <div className="hidden md:flex gap-12 text-sm font-semibold">
          <button onClick={() => scrollToSection('about')} style={{ color: '#333333' }} className="hover:text-blue-600 transition bg-none border-none cursor-pointer">FEATURES</button>
          <button onClick={() => scrollToSection('components')} style={{ color: '#333333' }} className="hover:text-blue-600 transition bg-none border-none cursor-pointer">SYSTEM</button>
          <button onClick={() => scrollToSection('features')} style={{ color: '#333333' }} className="hover:text-blue-600 transition bg-none border-none cursor-pointer">HOW IT WORKS</button>
          <a href="#" style={{ color: '#333333' }} className="hover:text-blue-600 transition">CONTACT</a>
        </div>

        <button className="hidden md:block text-white px-8 py-2 text-sm font-semibold rounded-full hover:opacity-90 transition" style={{ backgroundColor: '#0066cc' }}>
          GET STARTED
        </button>
 
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden"
          style={{ color: '#0066cc' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: '#f8f9fa' }}>
          <button onClick={() => scrollToSection('about')} className="text-2xl font-bold" style={{ color: '#0066cc' }}>FEATURES</button>
          <button onClick={() => scrollToSection('components')} className="text-2xl font-bold" style={{ color: '#0066cc' }}>SYSTEM</button>
          <button onClick={() => scrollToSection('features')} className="text-2xl font-bold" style={{ color: '#0066cc' }}>HOW IT WORKS</button>
          <a href="#" className="text-2xl font-bold" style={{ color: '#0066cc' }}>CONTACT</a>
          <button className="text-white px-8 py-3 text-lg font-semibold rounded-full mt-4" style={{ backgroundColor: '#0066cc' }}>
            GET STARTED
          </button>
        </div>
      )}
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at top right, #0066cc, transparent), radial-gradient(circle at bottom left, #00aa66, transparent)' }}></div>
        
        <div className="relative flex items-center justify-center text-center px-6 md:px-16 max-w-7xl mx-auto w-full z-10">
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: '#000000' }}>
              Airea –<br />
              <span style={{ color: '#0066cc' }}>Smart Lung Cancer</span><br />
              <span style={{ color: '#0066cc' }}>Monitoring System</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: '#333333' }}>
              A Cutting-Edge Solution for Patient Health & Well-being
            </p>
            <p className="mb-12 text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Advanced remote monitoring, intelligent alerts, and comprehensive health management for lung cancer patients with secure data integration and AI-powered support.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="text-white px-8 py-3 text-sm font-semibold rounded-full flex items-center justify-center hover:opacity-90 transition" style={{ backgroundColor: '#0066cc' }}>
                GET STARTED NOW
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="text-white border-2 px-8 py-3 text-sm font-semibold rounded-full hover:bg-gray-100 transition" style={{ borderColor: '#0066cc', color: '#0066cc' }}>
                LEARN HOW IT WORKS
              </button>
            </div>

            {/* Live Monitoring Stats */}
            <div className="mt-16">
              <p className="text-gray-600 text-sm mb-6 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00cc99' }}></span>
                Live Monitoring Stats
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 border shadow-md hover:shadow-lg transition" style={{ borderColor: '#e0e0e0' }}>
                    <div className="flex items-center gap-2 mb-3" style={{ color: '#ff9900' }}>
                      {stat.icon}
                    </div>
                    <p className="text-gray-600 text-xs mb-2">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold" style={{ color: '#0066cc' }}>{stat.value}</span>
                      <span className="text-sm text-gray-500">{stat.unit}</span>
                    </div>
                    <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all" style={{ width: `${stat.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components Banner */}
      <section id="components" className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: '#e6f2ff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0066cc' }}>System Architecture</h2>
            <div className="component-line"></div>
            <p className="text-lg" style={{ color: '#4a90e2' }}>Three-Layer Solution for Complete Patient Care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wearable IoT Device */}
            <div className="glassmorphism-banner rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0066cc' }}>
                  <Zap size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#0066cc' }}>Wearable IoT Device</h3>
              <div className="component-line"></div>
              <p className="text-gray-700 text-center mb-6">Advanced sensor technology for continuous health monitoring</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  SpO2 Pulse Oximeter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Digital Thermometer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Motion Sensors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Real-time Data Transmission
                </li>
              </ul>
            </div>

            {/* Mobile App for Patients */}
            <div className="glassmorphism-banner rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0066cc' }}>
                  <Heart size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#0066cc' }}>Mobile App for Patients</h3>
              <div className="component-line"></div>
              <p className="text-gray-700 text-center mb-6">Intuitive interface for personal health management</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Real-time Vital Display
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Health Notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Educational Content
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  AI Health Assistant
                </li>
              </ul>
            </div>

            {/* Mobile App for Doctors */}
            <div className="glassmorphism-banner rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0066cc' }}>
                  <Database size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#0066cc' }}>Mobile App for Doctors</h3>
              <div className="component-line"></div>
              <p className="text-gray-700 text-center mb-6">Comprehensive patient management dashboard</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Multi-Patient Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Clinical Reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Alert Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0066cc' }}></span>
                  Historical Analytics
                </li>
              </ul>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="component-line"></div>
            </div>
            <div className="text-center">
              <div className="component-line"></div>
            </div>
            <div className="text-center">
              <div className="component-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section id="about" className="py-24 px-6 md:px-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Challenges */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#0066cc' }}>The Challenge</h2>
              <div className="space-y-10">
                {challenges.map((challenge, idx) => (
                  <div key={idx} className="border-l-4 pl-6" style={{ borderColor: '#0066cc' }}>
                    <h3 className="text-lg font-bold mb-3" style={{ color: '#333333' }}>{challenge.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{challenge.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#0066cc' }}>
                      {challenge.stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Statistics */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border" style={{ borderColor: '#e0e0e0' }}>
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#0066cc' }}>Lung Cancer Impact</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-semibold">Annual Cases</span>
                      <span className="text-2xl font-bold" style={{ color: '#0066cc' }}>2.1M</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '85%' }}></div>
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
                      <span className="text-2xl font-bold" style={{ color: '#00cc99' }}>3 in 10</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-md border" style={{ borderColor: '#e0e0e0' }}>
                  <p className="text-gray-600 text-xs mb-2">Global Mortality</p>
                  <p className="text-3xl font-bold" style={{ color: '#0066cc' }}>1.8M</p>
                  <p className="text-xs text-gray-500 mt-1">Annual deaths</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md border" style={{ borderColor: '#e0e0e0' }}>
                  <p className="text-gray-600 text-xs mb-2">5-Year Survival</p>
                  <p className="text-3xl font-bold" style={{ color: '#00cc99' }}>21%</p>
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
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#0066cc' }}>Powerful Features</h2>
            <p className="text-lg text-gray-600">Comprehensive health monitoring and patient support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-xl p-8 border shadow-md hover:shadow-xl transition duration-300" style={{ borderColor: '#e0e0e0' }}>
                <div className="mb-6 group-hover:scale-110 transition duration-300" style={{ color: '#0066cc' }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#333333' }}>{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#0066cc' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Patient Care?</h2>
          <p className="text-blue-100 text-lg mb-10">Join healthcare institutions using Airea to provide exceptional continuous monitoring and support for lung cancer patients worldwide.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 text-sm font-semibold rounded-full hover:bg-gray-100 transition flex items-center justify-center" style={{ backgroundColor: '#ffffff', color: '#0066cc' }}>
              START YOUR TRIAL
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 text-sm font-semibold rounded-full hover:bg-white hover:text-blue-900 transition">
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
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Features</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Real-Time Alerts</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">AI Support</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Company</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Support</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-6 text-xs uppercase tracking-wider">Legal</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-gray-900 transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition">Terms</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold" style={{ color: '#0066cc' }}>Airea</div>
              <div className="flex gap-8 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-900 transition">LinkedIn</a>
                <a href="#" className="hover:text-gray-900 transition">Twitter</a>
                <a href="#" className="hover:text-gray-900 transition">Email</a>
              </div>
              <p className="text-xs text-gray-600">©Airea 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}