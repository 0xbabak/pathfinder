import React from 'react';
import { Map, MessageSquare, TrendingUp, Download, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PathFinderLanding() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeFAQ, setActiveFAQ] = React.useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  // Auto-slide testimonials
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === 0 ? 1 : (prev === 1 ? 2 : 0)));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (e.currentTarget as HTMLElement).offsetLeft);
    setScrollLeft(activeTestimonial * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (e.currentTarget as HTMLElement).offsetLeft;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    
    if (newScrollLeft > 50) {
      setActiveTestimonial(0);
    } else if (newScrollLeft < -50 && newScrollLeft > -150) {
      setActiveTestimonial(1);
    } else if (newScrollLeft < -150) {
      setActiveTestimonial(2);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (e.currentTarget as HTMLElement).offsetLeft);
    setScrollLeft(activeTestimonial * 100);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (e.currentTarget as HTMLElement).offsetLeft;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    
    if (newScrollLeft > 50) {
      setActiveTestimonial(0);
    } else if (newScrollLeft < -50 && newScrollLeft > -150) {
      setActiveTestimonial(1);
    } else if (newScrollLeft < -150) {
      setActiveTestimonial(2);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  /*
    {
      id: 1,
      quote: "PathFinder helped me discover my passion for AI. The personalized roadmap guided me through Python, machine learning, and now I'm interning at Google! The AI mentoring kept me motivated throughout.",
      author: "Sarah Chen",
      role: "High School Computer Science Student",
      avatar: "S",
    },
    {
      id: 2,
      quote: "As a counselor, I recommend PathFinder to all my students. It's incredible how it helps them discover career paths they never considered. The data-driven approach gives them confidence in their choices.",
      author: "Dr. Michael Rodriguez",
      role: "High School Counselor",
      avatar: "M",
    },
    {
      id: 3,
      quote: "I mentor several students through PathFinder, and I'm amazed at how well it prepares them for tech careers. The skill assessments are spot-on, and the learning paths are industry-relevant.",
      author: "Alex Thompson",
      role: "Software Engineer at Microsoft",
      avatar: "A",
    },
    {
      id: 4,
      quote: "I was confused about whether to pursue finance or entrepreneurship. PathFinder's career insights showed me the data, and now I'm building my own startup while studying business!",
      author: "James Wilson",
      role: "Business Student at NYU Stern",
      avatar: "J",
    },
    {
      id: 5,
      quote: "My 7th graders love PathFinder! It makes career exploration fun and accessible. They're excited about learning when they can see how it connects to their future goals.",
      author: "Lisa Park",
      role: "Middle School Teacher",
      avatar: "L",
    },
    {
      id: 6,
      quote: "PathFinder helped me combine my love for art with technology. I'm now studying digital design and UX, something I never knew existed before using the app!",
      author: "Emma Davis",
      role: "Art & Design Student at Parsons",
      avatar: "E",
    },
    {
      id: 7,
      quote: "PathFinder's AI mentor helped me overcome my fear of coding. Now I'm building mobile apps and teaching other students! The step-by-step guidance made everything click.",
      author: "David Kim",
      role: "Computer Science Student at UC Berkeley",
      avatar: "D",
    },
    {
      id: 8,
      quote: "As a parent, I love how PathFinder makes career planning engaging for my teenager. She's now excited about her future instead of anxious about it.",
      author: "Maria Santos",
      role: "Parent of High School Student",
      avatar: "M",
    },
    {
      id: 9,
      quote: "PathFinder showed me how to turn my gaming hobby into a career in game development. I'm now interning at a major studio!",
      author: "Chris Johnson",
      role: "Game Development Student at USC",
      avatar: "C",
    },
  ]; */

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Map className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-white">PathFinder</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
                                 <a href="#download" className="bg-gradient-to-r from-purple-500 to-blue-500 font-semibold px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all" style={{color: 'white', fontWeight: '600'}}>
                   Download
                 </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
                <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Features</a>
                <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-blue-400">How It Works</a>
                <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Contact</Link>
                                 <a href="#download" className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 font-semibold rounded-lg text-center" style={{color: 'white', fontWeight: '600'}}>Download</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
                         <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
               Your Career Journey
               <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                 Starts Here
               </span>
             </h1>
             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
               Confused about your future? PathFinder creates personalized learning roadmaps and provides AI-powered mentoring to guide students and professionals.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                             <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center transform hover:scale-105">
                 <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                 Download for Android
               </button>
              <p className="text-sm text-gray-400">Coming soon to iOS</p>
            </div>
            
            {/* Mock App Screenshot */}
            <div className="max-w-sm mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700">
                <div className="bg-gray-800 rounded-2xl p-4 space-y-4 border border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="font-semibold text-gray-200">PathFinder AI</span>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-300">"I want to become a data engineer"</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-3 border border-purple-500/20">
                    <p className="text-sm text-gray-200">Perfect! I've created a personalized roadmap for you. Let's start with Python fundamentals...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              Everything You Need to Build Your Future
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              From career discovery to skill mastery, PathFinder guides you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-gray-900 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all border border-gray-700 hover:border-purple-500/30">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Map className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Personalized Roadmaps</h3>
              <p className="text-sm md:text-base text-gray-300">
                Get custom learning paths tailored to your goals, background, and preferred learning style.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all border border-gray-700 hover:border-purple-500/30">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">AI Mentoring</h3>
              <p className="text-sm md:text-base text-gray-300">
                24/7 AI-powered coaching to answer questions, provide guidance, and keep you motivated.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all border border-gray-700 hover:border-purple-500/30">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Career Insights</h3>
              <p className="text-sm md:text-base text-gray-300">
                Discover high-paying careers based on market trends, your interests, and skill potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              Your Path to Success in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative">
            {/* Enhanced connecting lines */}
            <div className="hidden md:block absolute top-8 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-purple-500/40 to-blue-500/40"></div>
            <div className="hidden md:block absolute top-8 right-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40"></div>
            
            <div className="text-center group relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all relative z-10">
                1
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 md:p-6 border border-white/10 shadow-lg h-36 md:h-48 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Tell Us Your Goals</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Share what you want to learn or let us help you discover your ideal career path through our assessment.
                </p>
              </div>
            </div>

            <div className="text-center group relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all relative z-10">
                2
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg h-48 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-3">Get Your Roadmap</h3>
                <p className="text-gray-300">
                  Receive a personalized learning plan with clear milestones, resources, and timeline.
                </p>
              </div>
            </div>

            <div className="text-center group relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all relative z-10">
                3
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg h-48 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-3">Learn & Grow</h3>
                <p className="text-gray-300">
                  Follow your path with AI mentoring support, track progress, and build skills that pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Testimonials Section */}
       <section className="py-16 bg-gray-800">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
                          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Real stories from students, teachers, and mentors who've transformed their careers with PathFinder
              </p>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing" 
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* First Row - 3 cards */}
                <div className="w-full flex-shrink-0 flex space-x-6">
                  {/* Student Testimonial */}
                  <div className="flex-1">
                    <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 h-full flex flex-col">
                      <div className="flex-1 mb-4">
                        <p className="text-gray-800 text-base leading-relaxed italic">
                          "PathFinder helped me discover my passion for AI. The personalized roadmap guided me through Python, machine learning, and now I'm interning at Google!"
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <h4 className="text-gray-900 font-semibold">Sarah Chen</h4>
                          <p className="text-gray-600 text-sm">High School CS Student</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          S
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Teacher Testimonial */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full shadow-sm flex flex-col">
                      <div className="flex-1 mb-4">
                        <p className="text-gray-800 text-base leading-relaxed italic">
                          "As a counselor, I recommend PathFinder to all my students. It's incredible how it helps them discover career paths they never considered."
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <h4 className="text-gray-900 font-semibold">Dr. Michael Rodriguez</h4>
                          <p className="text-gray-600 text-sm">High School Counselor</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          M
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mentor Testimonial */}
                  <div className="flex-1">
                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 h-full flex flex-col">
                      <div className="flex-1 mb-4">
                        <p className="text-gray-800 text-base leading-relaxed italic">
                          "I mentor several students through PathFinder, and I'm amazed at how well it prepares them for tech careers."
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <h4 className="text-gray-900 font-semibold">Alex Thompson</h4>
                          <p className="text-gray-600 text-sm">Software Engineer at Microsoft</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          A
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                                 {/* Second Row - 3 cards */}
                 <div className="w-full flex-shrink-0 flex space-x-6">
                   {/* Student Testimonial 2 */}
                   <div className="flex-1">
                     <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 h-full flex flex-col">
                       <div className="flex-1 mb-4">
                         <p className="text-gray-800 text-base leading-relaxed italic">
                           "I was confused about whether to pursue finance or entrepreneurship. PathFinder's career insights showed me the data!"
                         </p>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                         <div>
                           <h4 className="text-gray-900 font-semibold">James Wilson</h4>
                           <p className="text-gray-600 text-sm">Business Student at NYU Stern</p>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           J
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Teacher Testimonial 2 */}
                   <div className="flex-1">
                     <div className="bg-green-50 rounded-2xl p-6 border border-green-200 h-full flex flex-col">
                       <div className="flex-1 mb-4">
                         <p className="text-gray-800 text-base leading-relaxed italic">
                           "My 7th graders love PathFinder! It makes career exploration fun and accessible."
                         </p>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                         <div>
                           <h4 className="text-gray-900 font-semibold">Lisa Park</h4>
                           <p className="text-gray-600 text-sm">Middle School Teacher</p>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           L
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Student Testimonial 3 */}
                   <div className="flex-1">
                     <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200 h-full flex flex-col">
                       <div className="flex-1 mb-4">
                         <p className="text-gray-800 text-base leading-relaxed italic">
                           "PathFinder helped me combine my love for art with technology. I'm now studying digital design and UX!"
                         </p>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                         <div>
                           <h4 className="text-gray-900 font-semibold">Emma Davis</h4>
                           <p className="text-gray-600 text-sm">Art & Design Student at Parsons</p>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           E
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Third Row - 3 cards */}
                 <div className="w-full flex-shrink-0 flex space-x-6">
                   {/* Student Testimonial 4 */}
                   <div className="flex-1">
                     <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200 h-full flex flex-col">
                       <div className="flex-1 mb-4">
                         <p className="text-gray-800 text-base leading-relaxed italic">
                           "PathFinder's AI mentor helped me overcome my fear of coding. Now I'm building mobile apps and teaching other students!"
                         </p>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                         <div>
                           <h4 className="text-gray-900 font-semibold">David Kim</h4>
                           <p className="text-gray-600 text-sm">Computer Science Student at UC Berkeley</p>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           D
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Parent Testimonial */}
                   <div className="flex-1">
                     <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 h-full flex flex-col">
                       <div className="flex-1 mb-4">
                         <p className="text-gray-800 text-base leading-relaxed italic">
                           "As a parent, I love how PathFinder makes career planning engaging for my teenager. She's now excited about her future!"
                         </p>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                         <div>
                           <h4 className="text-gray-900 font-semibold">Maria Santos</h4>
                           <p className="text-gray-600 text-sm">Parent of High School Student</p>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           M
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Student Testimonial 5 */}
                   <div className="flex-1">
                     <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200 h-full flex flex-col">
                       <div className="flex-1 mb-4">
                         <p className="text-gray-800 text-base leading-relaxed italic">
                           "PathFinder showed me how to turn my gaming hobby into a career in game development. I'm now interning at a major studio!"
                         </p>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                         <div>
                           <h4 className="text-gray-900 font-semibold">Chris Johnson</h4>
                           <p className="text-gray-600 text-sm">Game Development Student at USC</p>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           C
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                               {/* Pagination Dots - 3 dots since we show 3 rows */}
                 <div className="flex justify-center mt-8 space-x-3">
                   <button
                     onClick={() => setActiveTestimonial(0)}
                     className={`pagination-dot transition-all duration-300 ${
                       0 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(1)}
                     className={`pagination-dot transition-all duration-300 ${
                       1 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(2)}
                     className={`pagination-dot transition-all duration-300 ${
                       2 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                 </div>
          </div>

                     {/* Mobile Carousel - Horizontal with partial preview */}
           <div className="md:hidden relative">
             <div className="overflow-hidden">
               <div 
                 className="flex transition-transform duration-300 ease-in-out" 
                 style={{ transform: `translateX(-${activeTestimonial * 80}%)` }}
               >
                 {/* All testimonials in a horizontal row */}
                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "PathFinder helped me discover my passion for AI. The personalized roadmap guided me through Python, machine learning, and now I'm interning at Google!"
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Sarah Chen</h4>
                         <p className="text-gray-600 text-sm">High School CS Student</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         S
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "As a counselor, I recommend PathFinder to all my students. It's incredible how it helps them discover career paths they never considered."
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Dr. Michael Rodriguez</h4>
                         <p className="text-gray-600 text-sm">High School Counselor</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         M
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "I mentor several students through PathFinder, and I'm amazed at how well it prepares them for tech careers."
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Alex Thompson</h4>
                         <p className="text-gray-600 text-sm">Software Engineer at Microsoft</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         A
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "I was confused about whether to pursue finance or entrepreneurship. PathFinder's career insights showed me the data!"
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">James Wilson</h4>
                         <p className="text-gray-600 text-sm">Business Student at NYU Stern</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         J
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "My 7th graders love PathFinder! It makes career exploration fun and accessible."
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Lisa Park</h4>
                         <p className="text-gray-600 text-sm">Middle School Teacher</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         L
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "PathFinder helped me combine my love for art with technology. I'm now studying digital design and UX!"
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Emma Davis</h4>
                         <p className="text-gray-600 text-sm">Art & Design Student at Parsons</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         E
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "PathFinder's AI mentor helped me overcome my fear of coding. Now I'm building mobile apps and teaching other students!"
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">David Kim</h4>
                         <p className="text-gray-600 text-sm">Computer Science Student at UC Berkeley</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         D
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0 mr-4">
                   <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "As a parent, I love how PathFinder makes career planning engaging for my teenager. She's now excited about her future!"
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Maria Santos</h4>
                         <p className="text-gray-600 text-sm">Parent of High School Student</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         M
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="w-5/6 flex-shrink-0">
                   <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200">
                     <div className="mb-4">
                       <p className="text-gray-800 text-base leading-relaxed italic">
                         "PathFinder showed me how to turn my gaming hobby into a career in game development. I'm now interning at a major studio!"
                       </p>
                     </div>
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="text-gray-900 font-semibold">Chris Johnson</h4>
                         <p className="text-gray-600 text-sm">Game Development Student at USC</p>
                       </div>
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                         C
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

                                                                                                               {/* Mobile Pagination Dots */}
                 <div className="flex justify-center mt-8 space-x-2">
                   <button
                     onClick={() => setActiveTestimonial(0)}
                     className={`pagination-dot transition-all duration-300 ${
                       0 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(1)}
                     className={`pagination-dot transition-all duration-300 ${
                       1 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(2)}
                     className={`pagination-dot transition-all duration-300 ${
                       2 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(3)}
                     className={`pagination-dot transition-all duration-300 ${
                       3 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(4)}
                     className={`pagination-dot transition-all duration-300 ${
                       4 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(5)}
                     className={`pagination-dot transition-all duration-300 ${
                       5 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(6)}
                     className={`pagination-dot transition-all duration-300 ${
                       6 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(7)}
                     className={`pagination-dot transition-all duration-300 ${
                       7 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                   <button
                     onClick={() => setActiveTestimonial(8)}
                     className={`pagination-dot transition-all duration-300 ${
                       8 === activeTestimonial 
                         ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500' 
                         : 'w-3 h-3 bg-gray-400'
                     } rounded-full`}
                   />
                 </div>
           </div>
        </div>
      </section>

      {/* Partners & Institutions Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
                         <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
               Trusted by Students and Professionals Worldwide
             </h2>
          </div>

                     <div className="relative overflow-hidden">
             {/* Scrolling container */}
             <div className="flex space-x-16 animate-scroll">
               {/* Harvard University */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-red-600 font-bold text-xl">H</div>
                   </div>
                 </div>
               </div>

               {/* MIT */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-gray-800 font-bold text-xl">MIT</div>
                   </div>
                 </div>
               </div>

               {/* Microsoft */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-600 font-bold text-xl">M</div>
                   </div>
                 </div>
               </div>

               {/* Stanford */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-red-500 font-bold text-xl">S</div>
                   </div>
                 </div>
               </div>

               {/* Google */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-500 font-bold text-xl">G</div>
                   </div>
                 </div>
               </div>

               {/* Yale */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-800 font-bold text-xl">Y</div>
                   </div>
                 </div>
               </div>

               {/* Apple */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-gray-800 font-bold text-xl">A</div>
                   </div>
                 </div>
               </div>

               {/* Princeton */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-orange-600 font-bold text-xl">P</div>
                   </div>
                 </div>
               </div>

               {/* Amazon */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-orange-500 font-bold text-xl">A</div>
                   </div>
                 </div>
               </div>

               {/* Columbia */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-600 font-bold text-xl">C</div>
                   </div>
                 </div>
               </div>

               {/* Meta */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-600 font-bold text-xl">M</div>
                   </div>
                 </div>
               </div>

               {/* UC Berkeley */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-800 font-bold text-xl">UCB</div>
                   </div>
                 </div>
               </div>

               {/* Duplicate logos for seamless scrolling */}
               {/* Harvard University */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-red-600 font-bold text-xl">H</div>
                   </div>
                 </div>
               </div>

               {/* MIT */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-gray-800 font-bold text-xl">MIT</div>
                   </div>
                 </div>
               </div>

               {/* Microsoft */}
               <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                   <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                   <div className="text-center relative z-10">
                     <div className="text-blue-600 font-bold text-xl">M</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
                         <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
               Frequently Asked Questions
             </h2>
             <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
               Everything you need to know about PathFinder
             </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setActiveFAQ(activeFAQ === 1 ? null : 1)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">How does PathFinder create personalized roadmaps?</h3>
                <span className="text-purple-400 text-2xl font-bold">
                  {activeFAQ === 1 ? '−' : '+'}
                </span>
              </button>
              {activeFAQ === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    Our AI analyzes your interests, skills, learning style, and career goals to create a custom learning path with specific milestones, resources, and timeline recommendations.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setActiveFAQ(activeFAQ === 2 ? null : 2)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">Is PathFinder suitable for all age groups?</h3>
                <span className="text-purple-400 text-2xl font-bold">
                  {activeFAQ === 2 ? '−' : '+'}
                </span>
              </button>
              {activeFAQ === 2 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    Yes! We're designed for students aged 10-25, with age-appropriate content and features. Younger users get simplified interfaces while older students access advanced career insights.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setActiveFAQ(activeFAQ === 3 ? null : 3)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">How accurate are the career recommendations?</h3>
                <span className="text-purple-400 text-2xl font-bold">
                  {activeFAQ === 3 ? '−' : '+'}
                </span>
              </button>
              {activeFAQ === 3 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    Our recommendations are based on current market trends, salary data, and job growth projections. We update our database regularly to ensure accuracy and relevance.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setActiveFAQ(activeFAQ === 4 ? null : 4)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">Can I use PathFinder on multiple devices?</h3>
                <span className="text-purple-400 text-2xl font-bold">
                  {activeFAQ === 4 ? '−' : '+'}
                </span>
              </button>
              {activeFAQ === 4 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    Absolutely! Your progress syncs across all devices. Whether you're on your phone, tablet, or computer, you'll always have access to your learning journey.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setActiveFAQ(activeFAQ === 5 ? null : 5)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">What if I change my mind about my career path?</h3>
                <span className="text-purple-400 text-2xl font-bold">
                  {activeFAQ === 5 ? '−' : '+'}
                </span>
              </button>
              {activeFAQ === 5 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    No problem! You can update your goals anytime, and PathFinder will automatically adjust your roadmap. Your previous progress is saved and can be applied to new paths.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setActiveFAQ(activeFAQ === 6 ? null : 6)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">How much does PathFinder cost?</h3>
                <span className="text-purple-400 text-2xl font-bold">
                  {activeFAQ === 6 ? '−' : '+'}
                </span>
              </button>
              {activeFAQ === 6 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    PathFinder is completely free for students! We believe education should be accessible to everyone. Premium features for institutions and organizations are available separately.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="download" className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                     <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
             Ready to Find Your Path?
           </h2>
           <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
             Join thousands of students who have already started their journey to a successful career.
           </p>
                     <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-50 transition-all flex items-center mx-auto transform hover:scale-105 shadow-lg">
             <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
             Download PathFinder Now
           </button>
          <p className="text-purple-200 mt-4">Available on Android • iOS coming soon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Map className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">PathFinder</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PathFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}