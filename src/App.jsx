import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  MessageCircle, 
  Heart, 
  CreditCard, 
  Calendar, 
  Video, 
  Play, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Lock, 
  Search, 
  Bell, 
  CheckCircle,
  Briefcase,
  Cross,
  Music,
  Tv,
  Radio,
  CalendarDays,
  GraduationCap,
  Book,
  Share2,
  DollarSign,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Loader,
  MapPin,
  Clock,
  Quote,
  Target,
  Eye,
  ChevronLeft
} from 'lucide-react';

/**
 * MOCK DATA
 */

const USER_PROFILE = {
  name: "David O.",
  tier: "Disciple", 
  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100", 
  nextSession: "Thursday, 4:00 PM"
};

// Resources with Bible Images
const MINISTRY_RESOURCES = [
  { id: 'b1', title: "Complete Holy Bible", type: "Scripture", category: "Free", image: "https://plus.unsplash.com/premium_photo-1725075087236-e32a71552098?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", locked: false }, // Explicit Bible Image
  { id: 'b2', title: "Bible Through the Year", type: "Plan", category: "Free", image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=300&h=400", locked: false },
  { id: 'b3', title: "Ekpere na Abu", type: "Hymnal", category: "Free", image: "https://play-lh.googleusercontent.com/4gZEZnlkc5hCNdDHo61F4dJTO-iWUXDbXpeiV9GfQLslRckKhu6DMD-dIckYOXDLtzk", locked: false },
  { id: 'b4', title: "Igbo & English Liturgy", type: "Liturgy", category: "Free", image: "https://images.unsplash.com/photo-1775247022803-fd16733e175c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", locked: false },
  { id: 'b5', title: "Ancient & Modern (A&M)", type: "Hymnal", category: "Premium", image: "https://images.unsplash.com/photo-1536777525605-e146b6cef617?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", locked: true, note: "Token Donation" },
  { id: 1, title: "The Art of Prayer", type: "Book", category: "Spiritual", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=300&h=400", locked: true },
  { id: 2, title: "Kingdom Economics", type: "Video", category: "Business", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=300&h=200", locked: true },
];

const COMMUNITY_POSTS = [
  { id: 1, author: "Sarah J.", role: "Member", content: "The mentorship session on 'Integrity in Business' completely changed my perspective today. Truly blessed!", likes: 24, comments: 5, time: "2h ago" },
  { id: 2, author: "Ven. Dr. Moses Omeke", role: "Admin", content: "Remember, your workspace is also your altar. Honor God in your deals today.", likes: 156, comments: 42, time: "5h ago" },
];

// Home Content for Sanctury Page
const HOME_CONTENT = [
  { id: 1, title: "Walking in Divine Authority", type: "Sermon", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=400&h=250" },
  { id: 2, title: "Understanding the Scriptures", type: "Bible Study", image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=400&h=250" }, // Bible Image
  { id: 3, title: "Marketplace Apostles", type: "Business", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400&h=250" },
  { id: 4, title: "The Power of Prayer", type: "Sermon", image: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?auto=format&fit=crop&q=80&w=400&h=250" },
];

const SCHOOL_COURSES = [
  { id: 1, title: "School of Ministry: Level 1", lessons: 12, students: 450, image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 2, title: "Kingdom Finance Mastery", lessons: 8, students: 210, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300&h=200" },
];

/**
 * COMPONENT: Button
 */
const Button = ({ children, variant = 'primary', className = '', icon: Icon, onClick }) => {
  const baseStyle = "flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 shadow-md";
  const variants = {
    primary: "bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-900/30",
    gold: "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:shadow-amber-500/30",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50",
    ghost: "text-slate-600 hover:bg-slate-100 shadow-none",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {Icon && <Icon size={18} className="mr-2" />}
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

/**
 * COMPONENT: Action Modal
 */
const ActionModal = ({ isOpen, onClose, title, message, actionLabel }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform scale-100 animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-serif font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full"><X size={20} /></button>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl mb-6 flex items-start">
           <div className="bg-blue-200 p-2 rounded-lg mr-3 text-blue-800"><Star size={20} /></div>
           <p className="text-sm text-slate-700">{message}</p>
        </div>
        <div className="flex space-x-3">
           <Button variant="ghost" onClick={onClose} className="flex-1">Cancel</Button>
           <Button variant="primary" onClick={() => { alert("Connecting to Payment Gateway / Backend..."); onClose(); }} className="flex-1">{actionLabel}</Button>
        </div>
      </div>
    </div>
  );
};

/**
 * COMPONENT: Futuristic Profile Modal
 */
const ProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;
  
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_50px_rgba(30,58,138,0.4)] rounded-[2rem] max-w-sm w-full p-8 transform scale-100 animate-in zoom-in-95 duration-300 relative text-center" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/20 rounded-full transition-colors"><X size={20} /></button>
        
        <div className="relative inline-block mb-6 mt-4">
           <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
           <img src={user.avatar} className="relative w-32 h-32 rounded-full object-cover border-4 border-white/40 shadow-2xl" alt="Profile" />
        </div>
        
        <h3 className="text-3xl font-serif font-bold text-white mb-1">{user.name}</h3>
        
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-bold tracking-widest uppercase text-xs mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          {user.tier} Member
        </div>
        
        <div className="bg-black/20 rounded-2xl p-5 border border-white/10 backdrop-blur-sm text-left shadow-inner">
           <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1 font-bold">Next Live Session</p>
           <p className="text-white font-medium flex items-center"><Calendar size={16} className="mr-2 text-blue-400" /> {user.nextSession}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * MAIN APP COMPONENT
 */
export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [landingView, setLandingView] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [user, setUser] = useState(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // Modal State
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', message: '', actionLabel: '' });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleLogin = () => {
    setUser(USER_PROFILE);
    setCurrentView('dashboard');
  };

  const openModal = (title, message, actionLabel) => {
    setModalConfig({ isOpen: true, title, message, actionLabel });
  };

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <HomeView openModal={openModal} />; 
      case 'mentorship': return <MentorshipHub openModal={openModal} />; 
      case 'community': return <CommunityHub openModal={openModal} />; 
      case 'resources': return <ResourcesView openModal={openModal} />; 
      case 'giving': return <PartnershipView openModal={openModal} />; 
      default: return <HomeView openModal={openModal} />;
    }
  };

  if (currentView === 'landing') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-200">
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setLandingView('home')}>
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Cross className="text-amber-400" size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[25px] font-extrabold text-blue-900 tracking-[0.2em] leading-none mb-0.5">DMO</span>
                  <span className="font-serif text-2xl font-bold text-blue-900 tracking-tight leading-none">Covenant<span className="text-amber-600">Path</span></span>
                </div>
              </div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => setLandingView('home')} className={`font-medium transition-colors ${landingView === 'home' ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'}`}>Home</button>
                <button onClick={() => setLandingView('about')} className={`font-medium transition-colors ${landingView === 'about' ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'}`}>About</button>
                <button onClick={() => setLandingView('testimonies')} className={`font-medium transition-colors ${landingView === 'testimonies' ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'}`}>Testimonies</button>
                <button onClick={() => setLandingView('events')} className={`font-medium transition-colors ${landingView === 'events' ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'}`}>Events</button>
              </div>
              <Button onClick={handleLogin} variant="primary">Member Login</Button>
            </div>
          </div>
        </nav>

        <div className="pt-20">
          {landingView === 'home' && (
            <div className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden animate-in fade-in duration-500">
              <div className="absolute inset-0 z-0 opacity-10">
                 <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900 skew-x-12 transform origin-top-right"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="mb-12 lg:mb-0">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-semibold mb-6 border border-blue-100">
                      <Star size={16} className="mr-2 text-amber-500" />
                      Mentorship with Ven. Dr. Moses Omeke
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
                      Build Your Life on<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">a Sure Foundation</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                      Join a global community guided by faith. Access exclusive teachings, 1-on-1 mentorship, and strategies rooted in Kingdom principles.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <Button onClick={handleLogin} variant="primary" icon={ChevronRight}>Start Your Journey</Button>
                      <Button onClick={() => {}} variant="outline" icon={Play}>Watch Introduction</Button>
                    </div>
                    <div className="mt-10 flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 50k+ Members</div>
                      <div className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Daily Devotionals</div>
                      <div className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Live Sessions</div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Mentorship Session" 
                      className="rounded-2xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-500 border-8 border-white"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                      <div className="flex items-center mb-3">
                        <div className="flex -space-x-2">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                            </div>
                          ))}
                        </div>
                        <span className="ml-3 text-sm font-bold text-slate-700">+2,400 joined this week</span>
                      </div>
                      <p className="text-xs text-slate-500 italic">"This platform transformed my business and my prayer life."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {landingView === 'about' && <LandingAbout />}
          {landingView === 'testimonies' && <LandingTestimonies openModal={openModal} />}
          {landingView === 'events' && <LandingEvents />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <ActionModal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal} 
        title={modalConfig.title} 
        message={modalConfig.message} 
        actionLabel={modalConfig.actionLabel} 
      />
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
        user={user} 
      />

      <aside className={`hidden md:flex flex-col bg-blue-950 text-white shadow-xl z-20 transition-all duration-500 ease-in-out ${isSidebarExpanded ? 'w-72' : 'w-24 shrink-0'}`}>
        <div className="p-6 flex items-center justify-between border-b border-blue-900/50 min-h-[5rem]">
          <div className={`flex items-center transition-all duration-500 overflow-hidden ${isSidebarExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3 shrink-0">
              <Cross className="text-blue-950" size={20} />
            </div>
            <div className="flex flex-col justify-center whitespace-nowrap">
               <span className="text-[15px] font-bold text-amber-400 tracking-[0.2em] leading-none mb-0.5">DMO</span>
               <span className="font-serif text-xl font-bold tracking-wide leading-none">Covenant<span className="text-amber-400">Path</span></span>
            </div>
          </div>
          <button onClick={() => setIsSidebarExpanded(!isSidebarExpanded)} className="p-2 rounded-lg bg-blue-900/50 hover:bg-blue-800 text-blue-200 hover:text-white transition-colors shrink-0">
            <ChevronLeft size={20} className={`transform transition-transform duration-500 ${!isSidebarExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex-1 py-6 space-y-2 overflow-y-auto overflow-x-hidden">
          <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={BookOpen} isExpanded={isSidebarExpanded}>Sanctuary (Home)</NavButton>
          <NavButton active={activeTab === 'community'} onClick={() => setActiveTab('community')} icon={MessageCircle} isExpanded={isSidebarExpanded}>Fellowship</NavButton>
          <NavButton active={activeTab === 'mentorship'} onClick={() => setActiveTab('mentorship')} icon={Users} isExpanded={isSidebarExpanded}>Mentorship</NavButton>
          <NavButton active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} icon={Briefcase} isExpanded={isSidebarExpanded}>Library</NavButton>
          <NavButton active={activeTab === 'giving'} onClick={() => setActiveTab('giving')} icon={Heart} isExpanded={isSidebarExpanded}>Partnership</NavButton>
        </div>

        <div className="p-4 border-t border-blue-900/50 overflow-hidden">
          <div className={`flex space-x-4 justify-center mb-6 opacity-60 transition-all duration-500 ${isSidebarExpanded ? 'flex' : 'hidden'}`}>
             <Facebook size={18} className="cursor-pointer hover:text-amber-400" />
             <Instagram size={18} className="cursor-pointer hover:text-amber-400" />
             <Youtube size={18} className="cursor-pointer hover:text-amber-400" />
             <Globe size={18} className="cursor-pointer hover:text-amber-400" />
          </div>
          <button onClick={() => setCurrentView('landing')} className={`flex items-center text-blue-300 hover:text-white transition-colors text-sm font-medium w-full ${isSidebarExpanded ? 'justify-start px-2' : 'justify-center'}`}>
            <LogOut size={16} className={isSidebarExpanded ? 'mr-2 shrink-0' : 'shrink-0'} /> 
            <span className={`whitespace-nowrap transition-all duration-300 ${isSidebarExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>Sign Out</span>
          </button>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-950/95 md:hidden flex flex-col p-6 animate-in fade-in duration-200">
           <div className="flex justify-between items-center mb-8">
             <div className="flex flex-col justify-center">
               <span className="text-[10px] font-bold text-amber-400 tracking-[0.2em] leading-none mb-0.5">DMO</span>
               <span className="font-serif text-2xl font-bold text-white leading-none">Covenant<span className="text-amber-400">Path</span></span>
             </div>
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><X size={28} /></button>
           </div>
           <div className="space-y-4">
            <NavButton active={activeTab === 'home'} onClick={() => {setActiveTab('home'); setIsMobileMenuOpen(false);}} icon={BookOpen}>Sanctuary</NavButton>
            <NavButton active={activeTab === 'mentorship'} onClick={() => {setActiveTab('mentorship'); setIsMobileMenuOpen(false);}} icon={Users}>Mentorship</NavButton>
            <NavButton active={activeTab === 'community'} onClick={() => {setActiveTab('community'); setIsMobileMenuOpen(false);}} icon={MessageCircle}>Community</NavButton>
            <NavButton active={activeTab === 'resources'} onClick={() => {setActiveTab('resources'); setIsMobileMenuOpen(false);}} icon={Briefcase}>Resources</NavButton>
            <NavButton active={activeTab === 'giving'} onClick={() => {setActiveTab('giving'); setIsMobileMenuOpen(false);}} icon={Heart}>Giving</NavButton>
           </div>
           <button onClick={() => setCurrentView('landing')} className="mt-auto text-white flex items-center py-4 border-t border-blue-800">
             <LogOut size={20} className="mr-2" /> Sign Out
           </button>
        </div>
      )}

      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 h-screen">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10 sticky top-0">
          <div className="flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden mr-4 text-slate-600">
              <Menu size={24} />
            </button>
            <div className="hidden sm:flex items-center text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full w-64">
              <Search size={16} className="mr-2" />
              <input type="text" placeholder="Search sermons, mentors..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              {notificationCount > 0 && <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
            </button>
            <div 
              className="flex items-center space-x-3 pl-4 border-l border-slate-200 cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition-colors"
              onClick={() => setIsProfileModalOpen(true)}
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800">{user?.name}</p>
                <p className="text-xs text-slate-500">{user?.tier} Member</p>
              </div>
              <img src={user?.avatar} alt="Profile" className="w-9 h-9 rounded-full border border-slate-200 object-cover shadow-sm" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
             {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavButton({ active, onClick, icon: Icon, isExpanded = true, children }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center py-3.5 text-sm font-medium transition-all duration-300 border-l-4
        ${active 
          ? 'bg-blue-900 border-amber-500 text-white' 
          : 'border-transparent text-blue-200 hover:bg-blue-900 hover:text-white'
        } ${isExpanded ? 'px-6' : 'px-0 justify-center'}`}
    >
      <Icon size={20} className={`${isExpanded ? 'mr-3' : 'mr-0'} shrink-0 transition-all duration-300 ${active ? 'text-amber-500' : 'text-blue-400'}`} />
      <span className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
        {children}
      </span>
    </button>
  );
}

const HomeView = ({ openModal }) => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
        <Cross size={300} />
      </div>
      <div className="relative z-10">
        <h2 className="font-serif text-3xl font-bold mb-2">Welcome back, David.</h2>
        <p className="text-blue-100 mb-6 max-w-xl">"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future." — Jeremiah 29:11</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gold" icon={Play} onClick={() => openModal('Daily Devotional', 'Opening today\'s audio devotional player.', 'Listen Now')}>Play Daily Devotional</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => openModal('Book Mentorship', 'Schedule a 1-on-1 session with Ven. Dr. Moses Omeke.', 'View Calendar')}>Book Mentorship</Button>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6 border-l-4 border-l-blue-600">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Calendar size={24} /></div>
          <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Confirmed</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">Upcoming Session</h3>
        <p className="text-sm text-slate-500 mb-4">Leadership Strategy with Ven. Dr. Omeke</p>
        <p className="text-sm font-medium text-slate-800">Thursday, 4:00 PM</p>
      </Card>

      <Card className="p-6 border-l-4 border-l-amber-500">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-amber-50 rounded-lg text-amber-600"><Briefcase size={24} /></div>
          <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">New</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">Business Insight</h3>
        <p className="text-sm text-slate-500 mb-4">Latest article on Kingdom Finance.</p>
        <button className="text-sm font-medium text-blue-600 hover:underline">Read Article &rarr;</button>
      </Card>

      <Card className="p-6 border-l-4 border-l-purple-500">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-purple-50 rounded-lg text-purple-600"><BookOpen size={24} /></div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">Daily Scripture</h3>
        <p className="text-sm text-slate-500 mb-4">Read today's passage from the Bible.</p>
        <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:bg-transparent" onClick={() => openModal('Bible Reader', 'Opening the Holy Bible...', 'Read Now')}>Open Bible &rarr;</Button>
      </Card>
    </div>
    
    <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4 font-serif">Featured Sermons & Studies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_CONTENT.map((content) => (
                <div key={content.id} className="group cursor-pointer" onClick={() => openModal(content.type, `Playing: ${content.title}`, 'Watch Video')}>
                    <div className="relative rounded-xl overflow-hidden aspect-video mb-3 shadow-md bg-slate-200">
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                        <img src={content.image} alt={content.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                            <Play size={10} className="mr-1" /> 45:00
                        </div>
                    </div>
                    <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-1">{content.title}</h4>
                    <p className="text-sm text-slate-500">{content.type === 'Sermon' ? 'Ven. Dr. Moses Omeke' : content.type}</p>
                </div>
            ))}
        </div>
    </div>
  </div>
);

/**
 * MENTORSHIP & SCHOOL HUB
 */
const MentorshipHub = ({ openModal }) => {
  const [activeSub, setActiveSub] = useState('platform');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex space-x-6 border-b border-slate-200 overflow-x-auto">
         <button onClick={() => setActiveSub('platform')} className={`pb-3 text-sm font-bold transition-all whitespace-nowrap ${activeSub === 'platform' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}>Mentorship & Live</button>
         <button onClick={() => setActiveSub('school')} className={`pb-3 text-sm font-bold transition-all whitespace-nowrap ${activeSub === 'school' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}>School of Ministry</button>
         <button onClick={() => setActiveSub('library')} className={`pb-3 text-sm font-bold transition-all whitespace-nowrap ${activeSub === 'library' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}>Library & Store</button>
      </div>

      {activeSub === 'platform' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 bg-slate-900 text-white flex flex-col items-center text-center">
                 <Video size={48} className="text-blue-400 mb-4" />
                 <h3 className="text-xl font-bold mb-2">Zoom Mentorship Platform</h3>
                 <p className="text-slate-400 text-sm mb-6">Connect live with Ven. Dr. Moses Omeke. Offerings can be sowed directly during sessions.</p>
                 <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button variant="gold" icon={DollarSign} onClick={() => openModal('Sow Offering', 'Proceed to Payment Gateway for Offering.', 'Pay Now')}>Sow Offering</Button>
                    <Button variant="primary" onClick={() => openModal('Zoom Integration', 'Launching In-App Zoom Client...', 'Launch')}>Join Live Room</Button>
                 </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <Users className="text-blue-600 mb-3" size={24} />
                  <h4 className="font-bold text-slate-800">Discipleship Platform</h4>
                  <p className="text-xs text-slate-500 mb-4">Track your spiritual growth and connect with your cell group.</p>
                  <Button variant="outline" className="w-full text-xs" onClick={() => openModal('Discipleship Portal', 'Accessing your growth tracker.', 'Open')}>Open Dashboard</Button>
                </Card>
                <Card className="p-6">
                  <CalendarDays className="text-amber-600 mb-3" size={24} />
                  <h4 className="font-bold text-slate-800">Booking & Invites</h4>
                  <p className="text-xs text-slate-500 mb-4">Invite Ven. Dr. Moses Omeke for programs and conventions.</p>
                  <Button variant="outline" className="w-full text-xs" onClick={() => openModal('Invitation Form', 'Opening the official booking request form.', 'Open Form')}>Send Invitation</Button>
                </Card>
              </div>
           </div>

           <Card className="h-full bg-white p-6 flex flex-col">
              <h3 className="font-bold mb-4 flex items-center"><Star size={16} className="text-amber-500 mr-2" /> Head Mentor</h3>
              <div className="flex items-center mb-6">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" className="w-16 h-16 rounded-full bg-slate-100 object-cover" />
                 <div className="ml-4">
                    <p className="font-bold text-slate-800">Ven. Dr. Moses Omeke</p>
                    <p className="text-xs text-slate-500">Theology & Leadership</p>
                 </div>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-100">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Recent Receipts</h4>
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs p-2 bg-slate-50 rounded"><span>Book Purchase</span><span className="font-bold">$15.00</span></div>
                    <div className="flex justify-between text-xs p-2 bg-slate-50 rounded"><span>Monthly Seed</span><span className="font-bold">$50.00</span></div>
                 </div>
                 <p className="text-[10px] text-center text-slate-400 mt-2">Receipts sent to email automatically.</p>
              </div>
           </Card>
        </div>
      )}

      {activeSub === 'school' && (
         <div className="space-y-6">
            <div className="bg-blue-900 rounded-xl p-6 text-white flex justify-between items-center">
               <div>
                  <h3 className="text-xl font-bold">Online School of Ministry</h3>
                  <p className="text-blue-200 text-sm">A complete university system for spiritual education.</p>
               </div>
               <GraduationCap size={48} className="opacity-20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {SCHOOL_COURSES.map(course => (
                  <Card key={course.id} className="group cursor-pointer">
                     <div className="aspect-video bg-slate-200 relative">
                        <img src={course.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{course.lessons} Lessons</div>
                     </div>
                     <div className="p-4">
                        <h4 className="font-bold text-slate-800 mb-1">{course.title}</h4>
                        <p className="text-xs text-slate-500 mb-4">{course.students} Students Enrolled</p>
                        <Button variant="primary" className="w-full text-xs h-auto py-2" onClick={() => openModal('Course Enrollment', `Enrolling in ${course.title}. Fee: $50`, 'Pay & Enroll')}>Enroll Now</Button>
                     </div>
                  </Card>
               ))}
            </div>
         </div>
      )}

      {activeSub === 'library' && (
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
               <Card key={i} className="p-4">
                  <div className="aspect-[2/3] bg-slate-200 mb-3 rounded shadow-inner overflow-hidden">
                     <img src={`https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=200&h=300&text=Book+${i}`} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 line-clamp-1">The Power of Vision</h4>
                  <p className="text-xs text-slate-500 mb-2">Ven. Dr. Moses Omeke</p>
                  <Button variant="outline" className="w-full text-xs h-auto py-1.5" onClick={() => openModal('Purchase Book', 'Confirm purchase: The Power of Vision ($9.99)', 'Buy Now')}>$9.99 - Buy</Button>
               </Card>
            ))}
         </div>
      )}
    </div>
  );
};

/**
 * COMMUNITY HUB (FELLOWSHIP)
 */
const CommunityHub = ({ openModal }) => (
  <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
    {/* Ministry Media Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
       <button onClick={() => openModal('Audio Sermons', 'Opening audio player...', 'Listen')} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center hover:bg-blue-50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2"><Music size={20} /></div>
          <span className="text-xs font-bold text-slate-700">Audio & Songs</span>
       </button>
       <button onClick={() => openModal('Missions', 'Loading mission field videos...', 'Watch')} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center hover:bg-amber-50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2"><Tv size={20} /></div>
          <span className="text-xs font-bold text-slate-700">Missions Video</span>
       </button>
       <button onClick={() => openModal('Invitation', 'Open Invitation Form...', 'Apply')} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center hover:bg-purple-50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2"><CalendarDays size={20} /></div>
          <span className="text-xs font-bold text-slate-700">Invite for Program</span>
       </button>
       <button onClick={() => openModal('Live Stream', 'Connecting to Live Stream...', 'Watch Live')} className="bg-red-600 p-4 rounded-xl shadow-md flex flex-col items-center hover:bg-red-700 transition-colors text-white">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2"><Radio size={20} className="animate-pulse" /></div>
          <span className="text-xs font-bold">Live Stream</span>
       </button>
    </div>

    {/* Post Creator */}
    <Card className="p-4">
      <div className="flex space-x-4">
         <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
            <img src={USER_PROFILE.avatar} alt="Me" className="w-full h-full object-cover" />
         </div>
         <div className="flex-1">
           <textarea placeholder="Share a testimony or prayer request..." className="w-full border-none resize-none focus:ring-0 text-slate-700 placeholder-slate-400 bg-transparent" rows="2"></textarea>
           <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100">
             <div className="flex space-x-2 text-slate-400">
                <Video size={18} className="cursor-pointer hover:text-blue-600" />
                <BookOpen size={18} className="cursor-pointer hover:text-blue-600" />
             </div>
             <Button variant="primary" className="px-4 py-1.5 text-sm h-auto" onClick={() => openModal('Post Created', 'Your testimony has been shared.', 'Close')}>Post</Button>
           </div>
         </div>
      </div>
    </Card>

    {/* Feed */}
    <div className="space-y-4">
      {COMMUNITY_POSTS.map(post => (
        <Card key={post.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100&seed=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{post.author}</h4>
                <div className="flex items-center text-xs text-slate-500">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] mr-2 ${post.role === 'Admin' ? 'bg-amber-100 text-amber-700 font-bold' : 'bg-slate-100 text-slate-600'}`}>{post.role}</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>
            <button className="text-slate-400 hover:text-blue-600"><Share2 size={16} /></button>
          </div>
          <p className="text-slate-700 mb-4 leading-relaxed">{post.content}</p>
          <div className="flex items-center space-x-6 text-slate-500 text-sm">
            <button className="flex items-center hover:text-red-500 transition-colors"><Heart size={18} className="mr-1.5" /> {post.likes}</button>
            <button className="flex items-center hover:text-blue-500 transition-colors"><MessageCircle size={18} className="mr-1.5" /> {post.comments}</button>
            <button className="flex items-center hover:text-green-500 transition-colors ml-auto"><Briefcase size={18} className="mr-1.5" /> Support</button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

/**
 * RESOURCES VIEW
 */
const ResourcesView = ({ openModal }) => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900">Resources</h2>
        <p className="text-slate-500">Ministry Resources, Bibles, and Masterclasses.</p>
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {['All', 'Scripture', 'Liturgy', 'Hymnal', 'Books', 'Business'].map(tag => (
          <button key={tag} className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap transition-colors bg-white">
            {tag}
          </button>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {MINISTRY_RESOURCES.map(resource => (
        <div key={resource.id} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
          <div className="relative aspect-[3/4] overflow-hidden bg-slate-200">
            <img src={resource.image} alt={resource.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
              {resource.type}
            </div>
            {resource.locked && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur text-slate-900 p-3 rounded-full shadow-lg">
                  <Lock size={20} />
                </div>
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-1">
               <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{resource.category}</span>
               {resource.note && <span className="text-[10px] text-amber-600 font-bold">{resource.note}</span>}
            </div>
            <h3 className="font-bold text-slate-800 leading-snug mb-2 group-hover:text-blue-700 transition-colors">{resource.title}</h3>
            {resource.locked ? (
              <Button variant="outline" className="w-full text-xs py-2 h-auto border-amber-500 text-amber-600 hover:bg-amber-50" onClick={() => openModal('Premium Access', `Unlock ${resource.title}.`, 'Donate to Access')}>Donate to Access</Button>
            ) : (
              <Button variant="primary" className="w-full text-xs py-2 h-auto" onClick={() => openModal('Resource Opened', `Reading: ${resource.title}`, 'Open Reader')}>Open Resource</Button>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Integrated Library & Store Section */}
    <div className="pt-8 mt-8 border-t border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-slate-900">Library & Store</h2>
        <p className="text-slate-500">Purchase books and premium materials by Ven. Dr. Moses Omeke.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         {[1,2,3,4].map(i => (
            <Card key={i} className="p-4 flex flex-col h-full">
               <div className="aspect-[2/3] bg-slate-200 mb-3 rounded shadow-inner overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=200&h=300&text=Book+${i}`} className="w-full h-full object-cover" />
               </div>
               <h4 className="font-bold text-sm text-slate-800 line-clamp-1 flex-1">The Power of Vision</h4>
               <p className="text-xs text-slate-500 mb-2">Ven. Dr. Moses Omeke</p>
               <Button variant="outline" className="w-full text-xs h-auto py-1.5" onClick={() => openModal('Purchase Book', 'Confirm purchase: The Power of Vision ($9.99)', 'Buy Now')}>$9.99 - Buy</Button>
            </Card>
         ))}
      </div>
    </div>
  </div>
);

/**
 * PARTNERSHIP & GIVING VIEW
 */
const PartnershipView = ({ openModal }) => (
  <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
     <div className="text-center">
       <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Partnership & Giving</h2>
       <p className="text-slate-500 max-w-xl mx-auto">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over..." — Luke 6:38</p>
     </div>

     {/* Mission Video Section */}
     <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl" onClick={() => openModal('Mission Video', 'Playing: Impact Report 2024', 'Watch')}>
        <div className="aspect-video w-full bg-slate-800 relative flex items-center justify-center group cursor-pointer">
           <Play size={64} className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
           <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-bold text-lg">See The Impact</h3>
              <p className="text-slate-300 text-sm">How your partnership is changing lives in rural communities.</p>
           </div>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 relative opacity-75 hover:opacity-100 transition-opacity">
          <h3 className="text-lg font-bold text-slate-500">Seeker</h3>
          <div className="text-3xl font-bold text-slate-800 my-2">Free</div>
          <ul className="space-y-3 my-6 text-sm text-slate-600">
            <li className="flex"><CheckCircle size={16} className="text-green-500 mr-2" /> Complete Bible & Liturgy</li>
            <li className="flex"><CheckCircle size={16} className="text-green-500 mr-2" /> Koinonia Access</li>
            <li className="flex"><CheckCircle size={16} className="text-slate-300 mr-2" /> 1-on-1 Mentorship</li>
          </ul>
          <Button variant="outline" className="w-full">Current Plan</Button>
        </Card>

        <Card className="p-6 relative ring-2 ring-blue-600 shadow-xl transform md:-translate-y-2">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Partner</div>
          <h3 className="text-lg font-bold text-blue-900">Disciple</h3>
          <div className="text-3xl font-bold text-slate-900 my-2">$20<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-3 my-6 text-sm text-slate-600">
            <li className="flex"><CheckCircle size={16} className="text-green-500 mr-2" /> Ancient & Modern Hymnal</li>
            <li className="flex"><CheckCircle size={16} className="text-green-500 mr-2" /> School of Ministry Access</li>
            <li className="flex"><CheckCircle size={16} className="text-green-500 mr-2" /> Group Mentorship</li>
          </ul>
          <Button variant="primary" className="w-full" onClick={() => openModal('Partnership Upgrade', 'Upgrade to Disciple Tier ($20/mo)', 'Proceed to Payment')}>Register Partnership</Button>
        </Card>

        <Card className="p-6 relative">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          <h3 className="text-lg font-bold text-amber-700">Inner Circle</h3>
          <div className="text-3xl font-bold text-slate-900 my-2">$100<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-3 my-6 text-sm text-slate-600">
            <li className="flex"><CheckCircle size={16} className="text-amber-500 mr-2" /> Direct Zoom Access</li>
            <li className="flex"><CheckCircle size={16} className="text-amber-500 mr-2" /> Annual Retreat Invite</li>
            <li className="flex"><CheckCircle size={16} className="text-amber-500 mr-2" /> All Paid Books Free</li>
          </ul>
          <Button variant="gold" className="w-full" onClick={() => openModal('Partnership Upgrade', 'Join Inner Circle ($100/mo)', 'Proceed to Payment')}>Join Inner Circle</Button>
        </Card>
     </div>

     {/* Payment Accounts */}
     <div className="bg-slate-100 p-8 rounded-2xl text-center">
       <h3 className="text-lg font-bold text-slate-800 mb-6">Ministry Account Details</h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
             <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2">Domestic (Naira)</p>
             <p className="font-mono text-lg font-bold text-slate-800">1234 5678 90</p>
             <p className="text-sm text-slate-500">Zenith Bank • Moses Omeke Ministry</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
             <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2">International (USD)</p>
             <p className="font-mono text-lg font-bold text-slate-800">0000 0000 00</p>
             <p className="text-sm text-slate-500">GTBank Domiciliary • Moses Omeke Ministry</p>
          </div>
       </div>
       <div className="mt-6 flex justify-center gap-2">
          <div className="h-8 w-12 bg-slate-300 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">VISA</div>
          <div className="h-8 w-12 bg-slate-300 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">MC</div>
       </div>
     </div>
  </div>
);

/**
 * NEW COMPONENTS FOR LANDING PAGES
 */

const LandingAbout = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">About DMO CovenantPath</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">A global ministry dedicated to raising marketplace apostles and disciples through the undiluted word of faith.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-20">
      <Card className="p-10 border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-shadow">
        <Target size={48} className="text-amber-500 mb-6" />
        <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Our Mission</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          To empower individuals to discover their divine purpose, equip them with Kingdom principles, and deploy them as agents of transformation in their families, workplaces, and communities.
        </p>
      </Card>
      <Card className="p-10 border-t-4 border-t-blue-600 shadow-lg hover:shadow-xl transition-shadow">
        <Eye size={48} className="text-blue-600 mb-6" />
        <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Our Vision</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          To see a generation walking confidently on the Covenant Path, experiencing the fullness of God's blessings, and radiating Christ's love in every sphere of influence across the globe.
        </p>
      </Card>
    </div>

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
      <div className="md:flex">
        <div className="md:w-2/5 h-80 md:h-auto bg-slate-200 relative">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Ven. Dr. Moses Omeke" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
          <div className="text-amber-600 font-bold tracking-wider text-sm mb-3 uppercase">The Founder</div>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Ven. Dr. Moses Omeke</h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Ven. Dr. Moses Omeke is a visionary leader, dynamic teacher, and passionate mentor with over two decades of ministry experience. He is dedicated to bridging the gap between spiritual depth and practical life success.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Through DMO CovenantPath, he hosts transformative mentorship programs, the acclaimed School of Ministry, and provides daily spiritual nourishment to thousands globally. His unique calling focuses on raising "Marketplace Apostles"—believers who thrive in business and career while maintaining uncompromised faith.
          </p>
          <div className="flex space-x-4">
             <Button variant="outline">Read Full Biography</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LandingTestimonies = ({ openModal }) => {
  const testimonies = [
    { name: "Sarah Jenkins", role: "Entrepreneur", text: "The mentorship sessions completely transformed my approach to business. I learned how to integrate my faith with my daily operations, and my revenue has doubled while my peace of mind has increased.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
    { name: "Michael Obi", role: "Student", text: "DMO CovenantPath gave me the spiritual grounding I needed. The daily devotionals are the perfect start to my day, and the community here is incredibly supportive.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
    { name: "Grace Chukwu", role: "Ministry Leader", text: "Attending the School of Ministry leveled up my leadership skills. Ven. Dr. Omeke teaches with such clarity and profound wisdom. It's a must for anyone called to serve.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?auto=format&fit=crop&q=80&w=150" },
    { name: "David Anya", role: "Marketplace Apostle", text: "I used to think my career and ministry were separate. The teachings here showed me my office is my pulpit. My entire perspective on wealth and Kingdom advancement changed forever.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
    { name: "Esther Williams", role: "Teacher", text: "Finding this platform was an answer to prayer. The free Bible reading plans and liturgy resources have revitalized my personal altar. I am deeply grateful.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-8">
        <div className="mb-6 md:mb-0 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4">Stories of Transformation</h2>
          <p className="text-xl text-slate-600">Read how the Covenant Path is impacting lives worldwide. Your testimony could be the key to someone else's breakthrough.</p>
        </div>
        <Button variant="primary" icon={MessageCircle} onClick={() => openModal('Share Testimony', 'Your testimony form is ready. Let the world hear your story!', 'Submit Testimony')} className="shrink-0">
          Share Your Testimony
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonies.map((t, i) => (
          <Card key={i} className="p-8 relative hover:shadow-lg transition-shadow bg-white">
            <Quote size={48} className="text-blue-50 absolute top-6 right-6" />
            <p className="text-slate-700 italic mb-10 relative z-10 leading-relaxed text-lg">"{t.text}"</p>
            <div className="flex items-center mt-auto border-t border-slate-100 pt-6">
              <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-blue-50 mr-4" />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-amber-600 font-medium">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const LandingEvents = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = {
    upcoming: [
      { title: "Annual Marketplace Apostles Conference", date: "Oct 15 - 17, 2024", time: "9:00 AM Daily", location: "Main Auditorium & Online", type: "Conference" },
      { title: "Monthly Miracle Service", date: "First Friday of Every Month", time: "10:00 PM - 4:00 AM", location: "Prayer City", type: "Service" },
      { title: "Kingdom Finance Masterclass", date: "Nov 12, 2024", time: "6:00 PM", location: "Zoom (Live Room)", type: "Masterclass" }
    ],
    past: [
      { title: "Mid-Year Fasting Retreat", date: "July 2024", time: "Replay Available", location: "Online Portal", type: "Retreat" },
      { title: "Youth Leadership Summit", date: "June 2024", time: "Replay Available", location: "Main Auditorium", type: "Summit" }
    ],
    announcements: [
      { title: "New Course Added to School of Ministry", date: "Just Now", text: "Enrollment is now open for 'Advanced Spiritual Warfare'. Log into your dashboard to begin taking the course." },
      { title: "Partnership Drive 2024", date: "Ongoing", text: "Join our Inner Circle to help fund rural missions this quarter. Together we can take the gospel to the unreached." },
      { title: "App Update: New Liturgy Versions", date: "Yesterday", text: "The Igbo and English Liturgy sections in The Vault have been updated with audio reading capabilities." }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">Ministry Events & News</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Stay connected with our latest programs, conferences, and important announcements from DMO CovenantPath.</p>
      </div>

      <div className="flex justify-center space-x-2 md:space-x-8 mb-12 border-b border-slate-200 pb-2 overflow-x-auto">
         <button onClick={() => setActiveTab('announcements')} className={`pb-4 px-4 text-base md:text-lg font-bold transition-all whitespace-nowrap ${activeTab === 'announcements' ? 'text-blue-900 border-b-4 border-blue-900' : 'text-slate-400 hover:text-slate-600'}`}>Announcements</button>
         <button onClick={() => setActiveTab('upcoming')} className={`pb-4 px-4 text-base md:text-lg font-bold transition-all whitespace-nowrap ${activeTab === 'upcoming' ? 'text-blue-900 border-b-4 border-blue-900' : 'text-slate-400 hover:text-slate-600'}`}>Upcoming Events</button>
         <button onClick={() => setActiveTab('past')} className={`pb-4 px-4 text-base md:text-lg font-bold transition-all whitespace-nowrap ${activeTab === 'past' ? 'text-blue-900 border-b-4 border-blue-900' : 'text-slate-400 hover:text-slate-600'}`}>Past Events</button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {activeTab === 'upcoming' && events.upcoming.map((ev, i) => (
          <Card key={i} className="flex flex-col md:flex-row overflow-hidden border-l-4 border-l-blue-600 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-50 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-blue-100">
               <Calendar size={40} className="text-blue-600 mb-3" />
               <p className="font-bold text-blue-900">{ev.date}</p>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
               <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3 block">{ev.type}</span>
               <h3 className="text-2xl font-bold text-slate-800 mb-4">{ev.title}</h3>
               <div className="flex items-center text-slate-600 mb-2"><Clock size={18} className="mr-3 text-slate-400" /> {ev.time}</div>
               <div className="flex items-center text-slate-600 mb-6"><MapPin size={18} className="mr-3 text-slate-400" /> {ev.location}</div>
               <Button variant="outline" className="w-full">Register Now</Button>
            </div>
          </Card>
        ))}

        {activeTab === 'past' && events.past.map((ev, i) => (
          <Card key={i} className="flex flex-col md:flex-row overflow-hidden bg-slate-50 opacity-90 hover:opacity-100 transition-opacity">
            <div className="bg-slate-200 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-300">
               <Calendar size={40} className="text-slate-500 mb-3" />
               <p className="font-bold text-slate-700">{ev.date}</p>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
               <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 block">{ev.type}</span>
               <h3 className="text-2xl font-bold text-slate-800 mb-4">{ev.title}</h3>
               <div className="flex items-center text-slate-600 mb-2"><Clock size={18} className="mr-3 text-slate-400" /> {ev.time}</div>
               <div className="flex items-center text-slate-600 mb-6"><MapPin size={18} className="mr-3 text-slate-400" /> {ev.location}</div>
               <Button variant="ghost" className="w-full text-blue-700 bg-blue-100 hover:bg-blue-200">Watch Replay</Button>
            </div>
          </Card>
        ))}

        {activeTab === 'announcements' && events.announcements.map((ev, i) => (
          <Card key={i} className="p-8 border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-start justify-between mb-6">
               <div className="bg-amber-100 p-3 rounded-xl"><Bell size={28} className="text-amber-600" /></div>
               <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">{ev.date}</span>
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-4">{ev.title}</h3>
             <p className="text-lg text-slate-600 leading-relaxed">{ev.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};