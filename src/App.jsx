import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Heart, Bell, BookOpen, Zap, Database, Menu, X, 
  Activity, Wifi, BarChart3, Phone, X as XIcon, User, Home, 
  Thermometer, Wind, Github, Linkedin, CheckCircle2, Moon, Sun
} from 'lucide-react';

// --- Sub-Component: Scroll Animation Wrapper ---
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-[2000ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {children}
    </div>
  );
};

// --- Sub-Component: Interactive iPhone Screen ---
const InteractivePhoneDemo = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [notification, setNotification] = useState(true);

  const vitals = [
    { label: 'SpO2', value: '98%', icon: <Wind size={16} />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Heart', value: '72 BPM', icon: <Heart size={16} />, color: 'bg-rose-100 text-rose-600' },
    { label: 'Temp', value: '36.8°C', icon: <Thermometer size={16} />, color: 'bg-orange-100 text-orange-600' },
  ];

  // Dynamic classes based on dark mode prop
  const screenBg = isDarkMode ? 'bg-slate-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const subTextColor = isDarkMode ? 'text-slate-400' : 'text-gray-500';
  const cardBg = isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100';
  const navBg = isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100';

  return (
    <div className="phone-container relative mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Phone Frame */}
      <div className="relative bg-gray-900 h-[600px] w-[300px] rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
        <div className={`h-full w-full pt-10 pb-16 px-4 overflow-y-auto no-scrollbar relative transition-colors duration-300 ${screenBg}`}>
          <div className={`flex justify-between items-center mb-6 text-xs font-semibold px-2 ${subTextColor}`}>
            <span>9:41</span>
            <div className="flex gap-1">
              <Wifi size={12} />
              <div className={`w-4 h-2 rounded-sm ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeTab === 'home' && (
              <div className="animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className={`text-xl font-bold ${textColor}`}>Hello, Alex👋🏻</h3>
                    <p className={`text-xs ${subTextColor}`}>Device Connected • Battery 85%</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-teal-500">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-4 text-white mb-6 shadow-lg shadow-teal-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-teal-100 text-xs font-medium">LUNG HEALTH SCORE</span>
                    <Activity size={16} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-1">94<span className="text-lg font-normal opacity-80">/100</span></div>
                  <p className="text-xs text-teal-100">Status: Optimal. No anomalies detected.</p>
                </div>
                <h4 className={`font-bold mb-3 text-sm ${textColor}`}>Live Vitals</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {vitals.map((v, i) => (
                    <div key={i} className={`p-3 rounded-xl border ${cardBg}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${v.color}`}>
                        {v.icon}
                      </div>
                      <div className={`text-lg font-bold ${textColor}`}>{v.value}</div>
                      <div className={`text-xs ${subTextColor}`}>{v.label}</div>
                    </div>
                  ))}
                  <div className={`p-3 rounded-xl border flex flex-col justify-center items-center text-teal-600 cursor-pointer hover:bg-teal-50/10 ${cardBg}`}>
                    <span className="text-xs font-bold">+ More</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'analytics' && (
              <div className="animate-fadeIn">
                <h3 className={`text-xl font-bold mb-6 ${textColor}`}>Weekly Trends</h3>
                <div className={`p-4 rounded-xl border shadow-sm mb-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
                  <div className="flex justify-between mb-4">
                    <span className={`font-semibold text-sm ${textColor}`}>Respiration Rate</span>
                    <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">Normal</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 60, 45, 70, 50, 65, 55].map((h, i) => (
                      <div key={i} className={`w-full rounded-t-sm relative group ${isDarkMode ? 'bg-teal-900/30' : 'bg-teal-100'}`}>
                         <div style={{ height: `${h}%` }} className="bg-teal-500 rounded-t-sm absolute bottom-0 w-full transition-all duration-500"></div>
                      </div>
                    ))}
                  </div>
                  <div className={`flex justify-between mt-2 text-xs ${subTextColor}`}>
                    <span>Mon</span><span>Sun</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-orange-900/20 border-orange-800/50' : 'bg-orange-50 border-orange-100'}`}>
                   <h5 className="font-bold text-orange-600 text-sm mb-1">Cough Analysis</h5>
                   <p className={`text-xs ${isDarkMode ? 'text-orange-400' : 'text-orange-700'}`}>0.2% frequency detected (Very Low)</p>
                </div>
              </div>
            )}
            {activeTab === 'alerts' && (
              <div className="animate-fadeIn">
                <h3 className={`text-xl font-bold mb-6 ${textColor}`}>Notifications</h3>
                {notification && (
                  <div className={`border-l-4 border-teal-500 p-3 mb-3 rounded-r-lg ${isDarkMode ? 'bg-teal-900/30' : 'bg-teal-50'}`}>
                    <div className="flex justify-between">
                      <h5 className={`font-bold text-sm ${isDarkMode ? 'text-teal-300' : 'text-teal-800'}`}>Daily Report Ready</h5>
                      <button onClick={() => setNotification(false)} className="text-teal-400 hover:text-teal-600"><X size={12}/></button>
                    </div>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>Your 24h summary is available for review.</p>
                  </div>
                )}
                <div className="space-y-3">
                  <div className={`flex gap-3 p-3 border rounded-xl shadow-sm opacity-60 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border'}`}>
                    <div className={`p-2 rounded-full h-fit ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}><Zap size={14} className={subTextColor}/></div>
                    <div>
                      <p className={`text-sm font-bold ${textColor}`}>Device Synced</p>
                      <p className={`text-xs ${subTextColor}`}>Yesterday, 10:00 PM</p>
                    </div>
                  </div>
                  <div className={`flex gap-3 p-3 border rounded-xl shadow-sm opacity-60 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border'}`}>
                    <div className={`p-2 rounded-full h-fit ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}><User size={14} className="text-blue-500"/></div>
                    <div>
                      <p className={`text-sm font-bold ${textColor}`}>Dr. Smith viewed data</p>
                      <p className={`text-xs ${subTextColor}`}>Yesterday, 2:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`absolute bottom-0 w-full border-t h-16 flex justify-around items-center px-2 z-10 pb-2 transition-colors duration-300 ${navBg}`}>
          <button onClick={() => setActiveTab('home')} className={`p-2 rounded-full flex flex-col items-center ${activeTab === 'home' ? 'text-teal-600' : subTextColor}`}>
            <Home size={20} />
            <span className="text-[10px] font-medium mt-1">Home</span>
          </button>
          <button onClick={() => setActiveTab('analytics')} className={`p-2 rounded-full flex flex-col items-center ${activeTab === 'analytics' ? 'text-teal-600' : subTextColor}`}>
            <BarChart3 size={20} />
            <span className="text-[10px] font-medium mt-1">Trends</span>
          </button>
          <button onClick={() => setActiveTab('alerts')} className={`p-2 rounded-full flex flex-col items-center ${activeTab === 'alerts' ? 'text-teal-600' : subTextColor}`}>
            <Bell size={20} />
            <span className="text-[10px] font-medium mt-1">Alerts</span>
          </button>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full z-20"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[600px] bg-teal-400 opacity-20 blur-[100px] -z-10 rounded-full"></div>
    </div>
  );
};

// --- Main Website Component ---
export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('Initializing Systems...');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showCallWidget, setShowCallWidget] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const fullText = ' Smart Lung Cancer IoT Detection';
  
  const developers = [
    { name: "Ashfaq", role: "Lead Developer" },
    { name: "Siddiha", role: "AI Research Scientist" },
    { name: "Kaneshwar", role: "IoT Hardware Engineer" },
    { name: "Kirththigan", role: "Frontend Architect" },
    { name: "Mathushihan", role: "Backend Security" },
    { name: "Dharshika", role: "UI/UX Designer" }
  ];

  useEffect(() => {
    const statuses = [
      'Calibrating Sensors...', 
      'Checking Vitals...', 
      'Syncing AI Models...', 
      'Analysis Complete.'
    ];
    let statusIndex = 0;
    const statusInterval = setInterval(() => {
      statusIndex = (statusIndex + 1) % statuses.length;
      setLoadingStatus(statuses[statusIndex]);
    }, 800);
    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(statusInterval);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearInterval(statusInterval);
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timer;
    const type = () => {
      const currentFullText = fullText;
      if (!isDeleting && currentIndex < currentFullText.length) {
        setDisplayedText(currentFullText.slice(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(type, 100);
      } else if (!isDeleting && currentIndex === currentFullText.length) {
        isDeleting = true;
        timer = setTimeout(type, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(currentFullText.slice(0, currentIndex - 1));
        currentIndex--;
        timer = setTimeout(type, 50);
      } else {
        isDeleting = false;
        timer = setTimeout(type, 500);
      }
    };
    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Styles for light/dark mode glass effects
  const glassCardClass = isDarkMode 
    ? "bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-xl shadow-black/20" 
    : "bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-teal-900/5";
    
  const textPrimaryClass = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondaryClass = isDarkMode ? "text-slate-300" : "text-gray-600";

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
    <div className={`font-sans min-h-screen relative overflow-x-hidden transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-gray-900'}`}>
      <style>{`
        @keyframes blink { 0%, 49% { border-color: #4a9b8e; } 50%, 100% { border-color: transparent; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.8; } }
        @keyframes loading { 0% { transform: scaleX(0); } 50% { transform: scaleX(0.5); } 100% { transform: scaleX(1); } }
        @keyframes breathe {
          0%, 100% { transform: scale(0.95); opacity: 0.6; filter: drop-shadow(0 0 5px rgba(45, 212, 191, 0.2)); }
          50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 25px rgba(45, 212, 191, 0.8)); }
        }
        /* FLOWING WAVE ANIMATION */
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        .typing-text { display: inline; border-right: 3px solid #4a9b8e; animation: blink 0.7s infinite; }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 12px 32px rgba(74, 155, 142, 0.15); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- LIVE WAVE BACKGROUND (Dimmed) --- */}
      <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100'}`}>
        {/* Gradients - Reduced opacity for dimmer look */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br transition-all duration-500 ${isDarkMode ? 'from-teal-900/10 to-blue-900/10' : 'from-teal-50/20 to-blue-50/20'}`}></div>
        
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 w-[200%] h-64 opacity-20 animate-wave" style={{ animationDuration: '20s' }}>
           <svg viewBox="0 0 1440 320" className={`w-full h-full fill-current transition-colors duration-500 ${isDarkMode ? 'text-teal-700' : 'text-teal-200'}`} preserveAspectRatio="none">
              <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-64 opacity-10 animate-wave" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
           <svg viewBox="0 0 1440 320" className={`w-full h-full fill-current transition-colors duration-500 ${isDarkMode ? 'text-blue-800' : 'text-blue-200'}`} preserveAspectRatio="none">
              <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
      </div>

      {/* --- SPLASH SCREEN --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-teal-950 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-500 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>
        <div className="relative mb-12 z-10 flex flex-col items-center">
          <div className="w-40 h-40 flex items-center justify-center animate-[breathe_4s_ease-in-out_infinite]">
             <div className="relative w-full h-full flex items-center justify-center">
               <img src="/logo.png" alt="AIREA Logo" className="w-32 h-32 rounded-xl" />
               <div className="absolute inset-0 border-4 border-teal-500/30 rounded-full animate-pulse"></div>
             </div>
          </div>
          
          <p className="text-teal-400/80 text-sm tracking-widest uppercase font-mono z-10 h-6 animate-pulse">
            {loadingStatus}
          </p>
        </div>
        <div className="absolute bottom-10 text-teal-800 text-[10px] tracking-widest uppercase font-semibold">
           v1.0.0 • Secure IoT Connection
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className={`transition-opacity duration-1000 relative z-10 ${loading ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
        
        {/* Navigation - UPDATED: Adapts to Page Theme */}
        <nav className={`fixed w-full top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 shadow-xl ${isDarkMode ? 'bg-slate-900/90 border-slate-700/50' : 'bg-white/80 border-slate-200/60'}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              {/* Logo Container - Adapts to theme */}
              <div className={`w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center shadow-lg border ${isDarkMode ? 'bg-teal-600/20 border-teal-500/30 text-white' : 'bg-teal-100/50 border-teal-200/50 text-teal-700'}`}>
                <img src="/logo.png" alt="AIREA Logo" className="w-12 h-12 rounded-xl"/>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-tight leading-none drop-shadow-sm ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Airea</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>System Online</span>
                </div>
              </div>
            </div>

            {/* Nav Links - Adapt to theme */}
            <div className={`hidden md:flex gap-8 text-sm font-medium items-center ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <button onClick={() => scrollToSection('home')} className={`transition hover:scale-105 ${isDarkMode ? 'hover:text-white' : 'hover:text-teal-600'}`}>Home</button>
              <button onClick={() => scrollToSection('features')} className={`transition hover:scale-105 ${isDarkMode ? 'hover:text-white' : 'hover:text-teal-600'}`}>Features</button>
              <button onClick={() => scrollToSection('about')} className={`transition hover:scale-105 ${isDarkMode ? 'hover:text-white' : 'hover:text-teal-600'}`}>About</button>
              <button onClick={() => scrollToSection('contact')} className={`transition hover:scale-105 ${isDarkMode ? 'hover:text-white' : 'hover:text-teal-600'}`}>Contact</button>
            </div>

            <div className="hidden md:flex gap-4 items-center">
              {/* DARK MODE TOGGLE - Desktop */}
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className={`font-semibold text-sm transition ${isDarkMode ? 'text-white hover:text-teal-200' : 'text-slate-700 hover:text-teal-700'}`}>Login</button>
              {/* GLASS BUTTON */}
              <button className={`backdrop-blur-md border px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${isDarkMode ? 'bg-white/90 border-white/50 text-teal-900 hover:bg-white' : 'bg-teal-600 text-white border-teal-500 hover:bg-teal-700 hover:shadow-teal-200/50 shadow-lg'}`}>
                Get Started
              </button>
            </div>
    
            <div className="flex items-center gap-4 md:hidden">
               {/* DARK MODE TOGGLE - Mobile */}
               <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-slate-700 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isDarkMode ? 'text-white' : 'text-slate-800'}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - UPDATED BACKGROUND */}
        {isMenuOpen && (
          <div className={`md:hidden fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8 ${isDarkMode ? 'bg-slate-950/90' : 'bg-white/95'}`}>
            <button onClick={() => scrollToSection('home')} className={`text-2xl font-bold transition ${isDarkMode ? 'text-white hover:text-teal-200' : 'text-slate-800 hover:text-teal-600'}`}>Home</button>
            <button onClick={() => scrollToSection('features')} className={`text-2xl font-bold transition ${isDarkMode ? 'text-white hover:text-teal-200' : 'text-slate-800 hover:text-teal-600'}`}>Features</button>
            <button onClick={() => scrollToSection('about')} className={`text-2xl font-bold transition ${isDarkMode ? 'text-white hover:text-teal-200' : 'text-slate-800 hover:text-teal-600'}`}>About</button>
            <button onClick={() => scrollToSection('contact')} className={`text-2xl font-bold transition ${isDarkMode ? 'text-white hover:text-teal-200' : 'text-slate-800 hover:text-teal-600'}`}>Contact</button>
            <button className={`px-8 py-3 text-lg font-bold rounded-full transition shadow-lg ${isDarkMode ? 'bg-white text-teal-700 hover:bg-teal-50' : 'bg-teal-600 text-white hover:bg-teal-700'}`}>
              Get Started
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 flex items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <div className="text-center lg:text-left">
              <RevealOnScroll>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border font-semibold text-xs mb-8 shadow-sm ${isDarkMode ? 'bg-slate-800/60 border-slate-600 text-teal-400' : 'bg-white/80 border-teal-100 text-teal-700'}`}>
                  <CheckCircle2 size={14} className="text-teal-500" />
                  New: AI Prediction Model v1.0 Live
                </div>
                <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${textPrimaryClass}`}>
                  <span className="typing-text">{displayedText}</span>
                </h1>
                <p className={`text-xl mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 ${textSecondaryClass}`}>
                  Real-time wearable IoT sensors combined with AI-powered analytics to detect lung cancer early, providing continuous patient monitoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {/* GLASS BUTTONS */}
                  <button className="bg-teal-600/90 backdrop-blur-md border border-teal-500/50 text-white px-8 py-4 text-sm font-bold rounded-full flex items-center justify-center hover:bg-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 hover:-translate-y-1">
                    START MONITORING
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button className={`backdrop-blur-md border px-8 py-4 text-sm font-bold rounded-full transition shadow-sm hover:-translate-y-1 ${isDarkMode ? 'bg-slate-800/40 border-slate-600 text-white hover:bg-slate-700/60' : 'bg-white/40 border-white/60 text-teal-900 hover:bg-white/60'}`}>
                    VIEW DEMO
                  </button>
                </div>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className={`text-sm font-semibold ${textSecondaryClass}`}>TRUSTED BY LEADING CLINICS</div>
                </div>
              </RevealOnScroll>
            </div>
            <div className="flex justify-center perspective-1000 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className={`absolute top-10 -right-4 lg:-right-10 backdrop-blur-xl p-3 rounded-lg shadow-lg z-30 animate-bounce hidden md:block border ${isDarkMode ? 'bg-slate-800/80 border-slate-600' : 'bg-white/80 border-white/40'}`}>
                  <p className="text-xs font-bold text-teal-600">👇 Try clicking the tabs!</p>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 border-b border-r ${isDarkMode ? 'bg-slate-800/80 border-slate-600' : 'bg-white/80 border-white/40'}`}></div>
              </div>
              <InteractivePhoneDemo isDarkMode={isDarkMode} />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textPrimaryClass}`}>How It Works</h2>
                <p className={`text-lg max-w-2xl mx-auto ${textSecondaryClass}`}>Seamless integration into your daily life.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-16 overflow-x-auto pb-4">
                {[{ num: 1, label: 'Wear' }, { num: 2, label: 'Connect' }, { num: 3, label: 'Monitor' }, { num: 4, label: 'Share' }].map((step, idx) => (
                  <div key={idx} className="flex items-center flex-shrink-0">
                    <button
                      onClick={() => setActiveStep(step.num)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all backdrop-blur-sm border ${activeStep === step.num ? 'bg-teal-600/90 text-white border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)] scale-110' : `${isDarkMode ? 'bg-slate-800/60 text-slate-400 border-slate-600' : 'bg-white/60 text-gray-400 border-white/50'} hover:bg-opacity-80 shadow-sm`}`}
                    >
                      {step.num}
                    </button>
                    {idx < 3 && <div className={`w-8 md:w-16 h-1 mx-2 md:mx-4 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200/50'}`}>
                      <div className={`h-full bg-teal-600 rounded-full transition-all duration-500 ${activeStep > step.num ? 'w-full' : 'w-0'}`}></div>
                    </div>}
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-3xl p-8 md:p-12 transition-all duration-500 ${glassCardClass}`}>
                {activeStep === 1 && (
                  <>
                    <div className="animate-fadeIn">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">❤️</div>
                      <h3 className={`text-2xl font-bold mb-4 ${textPrimaryClass}`}>Wear the Device</h3>
                      <p className={`leading-relaxed mb-8 ${textSecondaryClass}`}>Our ergonomically designed IoT wearable sensor fits comfortably. The device adjusts to accommodate your changing body throughout daily activities, providing continuous real-time monitoring of vital signs.</p>
                      <button onClick={() => setActiveStep(2)} className="text-teal-600 font-bold hover:underline">Next Step &rarr;</button>
                    </div>
                    <div className={`rounded-2xl overflow-hidden h-64 md:h-80 animate-fadeIn shadow-inner border ${isDarkMode ? 'bg-slate-800/50 border-slate-600' : 'bg-gray-100/50 border-white/50'}`}>
                      <img src="/patientWearingIoT.png" alt="Wearable Device" className="w-full h-full object-cover"/>
                    </div>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <div className="animate-fadeIn">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">📱</div>
                      <h3 className={`text-2xl font-bold mb-4 ${textPrimaryClass}`}>Connect App</h3>
                      <p className={`leading-relaxed mb-8 ${textSecondaryClass}`}>Download our app and connect your wearable via Bluetooth. Once connected, the sensor transmits data to your phone in real-time. Your data is encrypted and protected.</p>
                      <button onClick={() => setActiveStep(3)} className="text-teal-600 font-bold hover:underline">Next Step &rarr;</button>
                    </div>
                    <div className={`rounded-2xl overflow-hidden h-64 md:h-80 animate-fadeIn shadow-inner border ${isDarkMode ? 'bg-slate-800/50 border-slate-600' : 'bg-gray-100/50 border-white/50'}`}>
                      <img src="/connect.png" alt="Bluetooth Pairing" className="w-full h-full object-cover"/>
                    </div>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <div className="animate-fadeIn">
                      <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">📊</div>
                      <h3 className={`text-2xl font-bold mb-4 ${textPrimaryClass}`}>AI Monitoring</h3>
                      <p className={`leading-relaxed mb-8 ${textSecondaryClass}`}>Our AI processes this data to identify patterns and alert you to any changes that might require attention for early lung cancer detection.</p>
                      <button onClick={() => setActiveStep(4)} className="text-teal-600 font-bold hover:underline">Next Step &rarr;</button>
                    </div>
                    <div className={`rounded-2xl overflow-hidden h-64 md:h-80 animate-fadeIn shadow-inner border ${isDarkMode ? 'bg-slate-800/50 border-slate-600' : 'bg-gray-100/50 border-white/50'}`}>
                      <img src="/patientLookingAtHisPhone.png" alt="Data Dashboard" className="w-full h-full object-cover"/>
                    </div>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <div className="animate-fadeIn">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">☁️</div>
                      <h3 className={`text-2xl font-bold mb-4 ${textPrimaryClass}`}>Share with Doctor</h3>
                      <p className={`leading-relaxed mb-8 ${textSecondaryClass}`}>With your permission, health data can be securely shared with your healthcare provider, enabling remote monitoring and comprehensive care.</p>
                      <button onClick={() => setActiveStep(1)} className="text-teal-600 font-bold hover:underline">Start Over &rarr;</button>
                    </div>
                    <div className={`rounded-2xl overflow-hidden h-64 md:h-80 animate-fadeIn shadow-inner border ${isDarkMode ? 'bg-slate-800/50 border-slate-600' : 'bg-gray-100/50 border-white/50'}`}>
                      <img src="/doc_pat.png" alt="Doctor Reviewing Data" className="w-full h-full object-cover"/>
                    </div>
                  </>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* The Challenge Section */}
        <section id="about" className={`py-24 px-6 md:px-16 text-white relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-teal-900'}`}>
          {/* Subtle pattern overlay for challenge section */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <RevealOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-teal-100">The Challenge</h2>
                  <div className="space-y-10">
                    {challenges.map((challenge, idx) => (
                      <div key={idx} className="border-l-4 border-teal-500 pl-6 hover:pl-8 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-2 text-white">{challenge.title}</h3>
                        <p className="text-teal-100/80 text-sm leading-relaxed mb-3">{challenge.description}</p>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-800 text-teal-300">
                          {challenge.stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className={`backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/10'}`}>
                    <h3 className="text-2xl font-bold mb-8 text-white">Lung Cancer Impact</h3>
                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between items-center mb-2 text-sm">
                          <span className="text-teal-100">Annual Cases Worldwide</span>
                          <span className="font-bold">2.1M</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-400 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2 text-sm">
                          <span className="text-teal-100">Preventable with Early Detection</span>
                          <span className="font-bold text-orange-400">85%</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-400 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <h2 className={`text-4xl font-bold mb-6 ${textPrimaryClass}`}>Key Features</h2>
                <p className={`text-lg max-w-2xl mx-auto ${textSecondaryClass}`}>Airea empowers healthcare professionals with innovative features that support continuous patient monitoring.</p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, idx) => (
                <RevealOnScroll key={idx}>
                  <div className={`rounded-2xl p-8 transition-all duration-300 group h-full ${glassCardClass}`}>
                    <div className={`mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300 w-fit p-4 rounded-xl shadow-sm ${isDarkMode ? 'bg-slate-800' : 'bg-white/80'}`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${textPrimaryClass}`}>{feature.title}</h3>
                    <p className={`leading-relaxed text-sm ${textSecondaryClass}`}>{feature.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className={`text-4xl font-bold mb-6 ${textPrimaryClass}`}>Get in Touch</h2>
                  <p className={`mb-10 ${textSecondaryClass}`}>Have questions about our technology or want to schedule a clinical demo? We are here to help.</p>
                  
                  <div className="space-y-6">
                    <div className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white/60 border-white/50'}`}>
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600"><Phone size={20}/></div>
                      <div>
                        <p className={`text-sm ${textSecondaryClass}`}>Phone</p>
                        <p className={`font-semibold ${textPrimaryClass}`}>(+94)74 357 5152</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white/60 border-white/50'}`}>
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600"><Database size={20}/></div>
                      <div>
                        <p className={`text-sm ${textSecondaryClass}`}>Email</p>
                        <p className={`font-semibold ${textPrimaryClass}`}>airea.dev.team@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className={`p-8 rounded-3xl space-y-4 ${glassCardClass}`}>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/80 text-white placeholder-slate-400' : 'bg-white/80 placeholder-gray-400'}`} />
                      <input type="text" placeholder="Last Name" className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/80 text-white placeholder-slate-400' : 'bg-white/80 placeholder-gray-400'}`} />
                    </div>
                    <input type="email" placeholder="Your Email" className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/80 text-white placeholder-slate-400' : 'bg-white/80 placeholder-gray-400'}`} />
                    <textarea placeholder="Your Message" rows="4" className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-teal-500 backdrop-blur-sm resize-none ${isDarkMode ? 'bg-slate-800/80 text-white placeholder-slate-400' : 'bg-white/80 placeholder-gray-400'}`}></textarea>
                    {/* GLASS BUTTON */}
                    <button type="submit" className="w-full py-4 text-white font-bold rounded-xl bg-teal-600/90 backdrop-blur-md border border-teal-500/50 hover:bg-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-300">
                      Send Message
                    </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* --- DEVELOPER TEAM SECTION --- */}
        <section id="team" className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-6 ${textPrimaryClass}`}>Meet Our Developers</h2>
                <p className={`text-lg max-w-2xl mx-auto ${textSecondaryClass}`}>The brilliant minds behind Airea's life-saving technology.</p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {developers.map((dev, idx) => (
                <RevealOnScroll key={idx}>
                  <div className={`p-6 rounded-2xl transition-all duration-300 text-center group ${glassCardClass}`}>
                    <div className={`w-24 h-24 mx-auto rounded-full mb-4 overflow-hidden relative border-4 shadow-md group-hover:border-teal-200 transition-colors ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-200 border-white'}`}>
                       <img 
                         src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(dev.name)}`} 
                         alt={dev.name} 
                         className="w-full h-full object-cover" 
                       />
                    </div>
                    <h3 className={`font-bold text-lg mb-1 ${textPrimaryClass}`}>{dev.name}</h3>
                    <p className="text-teal-600 text-sm font-medium mb-4">{dev.role}</p>
                    
                    <div className="flex justify-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                      <a href="#" className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-teal-50 text-gray-400'} hover:text-teal-600`}>
                        <Github size={18} />
                      </a>
                      <a href="#" className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-teal-50 text-gray-400'} hover:text-blue-600`}>
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 px-6 md:px-16 text-sm relative z-10 ${isDarkMode ? 'bg-slate-900 text-slate-400' : 'bg-gray-900 text-gray-400'}`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                  <img src="/logo.png" alt="AIREA Logo" className="w-9 h-9 rounded-lg"/>
                </div>
               <span className="text-white font-bold text-lg">Airea</span>
             </div>
             <div className="flex gap-8">
               <a href="#" className="hover:text-white transition">Privacy Policy</a>
               <a href="#" className="hover:text-white transition">Terms of Service</a>
               <a href="#" className="hover:text-white transition">Contact Support</a>
             </div>
             <div>© 2025 Airea Health. All rights reserved.</div>
          </div>
        </footer>

        {/* Fixed Call Widget */}
        {showCallWidget && (
          <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
            {/* GLASS WIDGET */}
            <div className={`backdrop-blur-xl rounded-2xl p-4 shadow-2xl border flex items-center gap-4 relative ${isDarkMode ? 'bg-slate-800/80 border-slate-600' : 'bg-white/80 border-white/60'}`}>
              <button 
                onClick={() => setShowCallWidget(false)}
                className={`absolute -top-2 -right-2 rounded-full p-1 hover:bg-opacity-80 transition ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <XIcon size={12} />
              </button>
              <div className="w-10 h-10 bg-green-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-green-600 animate-pulse border border-green-200">
                <Phone size={20} />
              </div>
              <div>
                 <p className={`text-xs font-bold ${textPrimaryClass}`}>Questions?</p>
                 <p className={`text-xs ${textSecondaryClass}`}>Talk to sales</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
