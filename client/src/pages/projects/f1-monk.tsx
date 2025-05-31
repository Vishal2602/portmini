import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";
import homeScreenImage from "@assets/iPhone 15 Pro White Titanium.png";
import timelineImage from "@assets/iPhone 15 Pro White Titanium-6.png";
import alertsImage from "@assets/iPhone 15 Pro White Titanium-4.png";
import criticalAlertsImage from "@assets/iPhone 15 Pro White Titanium-3.png";
import profileImage from "@assets/iPhone 15 Pro White Titanium-2.png";

export default function F1MonkProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    document.title = "F1 Monk - iOS Visa Assistant | Vishal Sunil Kumar";
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const mainElement = document.querySelector('.scrollable-main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    const mainElement = document.querySelector('.scrollable-main');
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Mobile Header */}
      <div className="block md:hidden bg-black border-b border-gray-800 p-4 sticky top-0 z-50">
        <Link href="/" className="portfolio-hover inline-block mb-2 text-sm">
          ← Back to Portfolio
        </Link>
        <h1 className="text-xl font-normal">F1 Monk</h1>
        <p className="text-sm portfolio-text-muted">iOS Visa Assistant</p>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-start p-6 lg:p-8 animate-slide-down">
        <div>
          <h1 className="text-2xl lg:text-3xl font-normal mb-1">
            Vishal Sunil Kumar
          </h1>
          <p className="text-lg portfolio-text-muted">AI Engineer & UX Designer</p>
        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="text-white portfolio-hover">
            Home
          </Link>
          <Link href="/resume" className="text-white portfolio-hover">
            Resume
          </Link>
        </nav>
      </header>

      <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-120px)]">
        {/* Left Sidebar - Full width on mobile, sidebar on desktop */}
        <aside className="w-full md:w-1/3 lg:w-1/3 xl:w-1/4 px-4 md:px-6 lg:px-8 flex-shrink-0 animate-slide-in-left">
          <section id="about" className="border-t portfolio-border pt-8">
            <p className="text-base max-w-md leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              AI Engineer and UX Designer with 3+ years developing production-scale LLM applications and human-centered design systems. Delivered 25% user engagement increases across 100+ healthcare platforms through optimized RAG architectures and data-driven design methodologies.
            </p>
            
            <div className="space-y-2 text-sm">
              <p className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  vsunilkumar@umassd.edu
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <a 
                  href="tel:+14254786132" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  425-478-6132
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                <a 
                  href="https://www.linkedin.com/in/vishals2602/" 
                  className="portfolio-text-muted portfolio-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <a 
                  href="https://github.com/Vishal2602" 
                  className="portfolio-text-muted portfolio-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
            </div>
            
            {/* Gradient Symbols */}
            <GradientSymbols />
          </section>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 lg:pl-16 scrollable-main relative animate-slide-in-right">
          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
            <div 
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Project Header */}
          <section className="border-t portfolio-border pt-8 mb-16 animate-slide-up">
            <div className="mb-8">
              <Link href="/" className="text-sm portfolio-text-muted portfolio-hover mb-4 inline-block">
                ← Back to Home
              </Link>
              <h1 className="text-4xl lg:text-5xl font-normal mb-4">F1 Monk</h1>
              <p className="text-xl portfolio-text-muted mb-6">iOS Visa Assistant for International Students</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">iOS Development</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">AI/ML</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Natural Language Processing</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Google Cloud</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Swift</span>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              F1 Monk is a comprehensive iOS application designed to provide wisdom and personalized guidance to international students navigating the complexities of the F1 visa process. It combines sleek design with smart development to create a seamless experience for users who need timely alerts, answers, and document tracking related to their visa journey.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed mb-6">
              The application integrates cutting-edge AI technologies including Google Cloud Dialogflow, xAI, and Grok API to provide intelligent, context-aware assistance that adapts to each user's unique situation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-medium mb-2">Platform</h3>
                <p className="portfolio-text-muted">iOS (SwiftUI)</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Architecture</h3>
                <p className="portfolio-text-muted">MVVM with Combine</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Duration</h3>
                <p className="portfolio-text-muted">6 months development</p>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Problem Statement</h2>
            <div className="bg-red-900/20 p-6 rounded mb-6">
              <p className="text-base portfolio-text-muted leading-relaxed italic">
                "International students often face confusion around visa deadlines, legal documentation, and university compliance due to scattered information and lack of real-time personalized guidance."
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Key Challenges</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Scattered information across multiple sources</li>
                  <li>• Missing critical visa deadlines</li>
                  <li>• Complex legal documentation requirements</li>
                  <li>• Lack of personalized guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Target Audience</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• International students on F1 visa</li>
                  <li>• Students navigating OPT, CPT, I-20 updates</li>
                  <li>• Users needing mobile-first compliance solutions</li>
                  <li>• Students managing tax filing requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">AI-Powered Features</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• <strong>AI Chat Assistant:</strong> Context-aware Q&A using xAI/Grok API and Dialogflow</li>
                  <li>• <strong>Personalized Timeline:</strong> Dynamic scheduling and reminders for key milestones</li>
                  <li>• <strong>Smart Notifications:</strong> Intelligent alerts sorted by importance</li>
                  <li>• <strong>Profile System:</strong> Store academic and visa details for custom alerts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Core Functionality</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• <strong>Help Center:</strong> Easy access to support and government resources</li>
                  <li>• <strong>Advisor Appointments:</strong> In-app scheduling for academic, visa, and career help</li>
                  <li>• <strong>Document Tracking:</strong> Monitor important visa document statuses</li>
                  <li>• <strong>Deadline Management:</strong> Never miss critical submission dates</li>
                </ul>
              </div>
            </div>
          </section>

          {/* App Screenshots */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">App Interface</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <img 
                  src={homeScreenImage} 
                  alt="F1 Monk Home Screen"
                  className="w-full max-w-xs mx-auto"
                />
                <h3 className="text-sm font-medium text-center">Home Dashboard</h3>
                <p className="text-xs portfolio-text-muted text-center">Daily events summary with personalized greetings and quick access to timeline</p>
              </div>
              <div className="space-y-4">
                <img 
                  src={timelineImage} 
                  alt="F1 Monk Timeline View"
                  className="w-full max-w-xs mx-auto"
                />
                <h3 className="text-sm font-medium text-center">Smart Timeline</h3>
                <p className="text-xs portfolio-text-muted text-center">Color-coded events with completion tracking and deadline management</p>
              </div>
              <div className="space-y-4">
                <img 
                  src={alertsImage} 
                  alt="F1 Monk Alerts System"
                  className="w-full max-w-xs mx-auto"
                />
                <h3 className="text-sm font-medium text-center">Intelligent Alerts</h3>
                <p className="text-xs portfolio-text-muted text-center">Priority-based notification system with categorized alerts</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Tech Stack</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• <strong>Frontend:</strong> SwiftUI for modular, declarative UI</li>
                  <li>• <strong>Architecture:</strong> MVVM (Model-View-ViewModel)</li>
                  <li>• <strong>State Management:</strong> Combine framework</li>
                  <li>• <strong>AI Integration:</strong> xAI/Grok + Google Dialogflow</li>
                  <li>• <strong>Networking:</strong> URLSession for API requests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Design Strategy</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• <strong>Dark Theme UI:</strong> Low-stress readability design</li>
                  <li>• <strong>Accent Colors:</strong> Blue and red for urgency indicators</li>
                  <li>• <strong>Typography:</strong> Rounded sans-serif for clarity</li>
                  <li>• <strong>Navigation:</strong> Bottom tab with five core sections</li>
                  <li>• <strong>Iconography:</strong> SF Symbols for consistency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Navigation Screens */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">App Navigation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src={criticalAlertsImage} 
                  alt="Important Alerts View"
                  className="w-full max-w-xs mx-auto"
                />
                <h3 className="text-sm font-medium text-center">Critical Notifications</h3>
                <p className="text-xs portfolio-text-muted text-center">High-priority alerts with immediate action items like OPT deadlines</p>
              </div>
              <div className="space-y-4">
                <img 
                  src={profileImage} 
                  alt="Profile and Help Section"
                  className="w-full max-w-xs mx-auto"
                />
                <h3 className="text-sm font-medium text-center">Profile & Resources</h3>
                <p className="text-xs portfolio-text-muted text-center">User profile management with quick access to visa resources and DSO contact</p>
              </div>
            </div>
          </section>

          {/* Architecture & Development */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Architecture & Development</h2>
            <div className="bg-gray-900/50 p-6 rounded">
              <h3 className="text-lg font-normal mb-4">Architecture Breakdown</h3>
              <div className="grid md:grid-cols-4 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Models</h4>
                  <p className="portfolio-text-muted">Data structures for alerts, timeline events, and user profiles</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Views</h4>
                  <p className="portfolio-text-muted">UI components like notification cards, timeline scroll views</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">ViewModels</h4>
                  <p className="portfolio-text-muted">Logic for managing state, sorting alerts, toggling read status</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Services</h4>
                  <p className="portfolio-text-muted">AI Chat integration, Authentication, Push Notifications</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem & Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Solution Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4 text-green-400">Our Solution</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Centralized F1-related knowledge and reminders</li>
                  <li>• Critical deadlines are often missed due to poor tracking systems</li>
                  <li>• Document management across multiple platforms is fragmented</li>
                  <li>• Language barriers make compliance information difficult to understand</li>
                  <li>• University support systems are often overwhelmed and understaffed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4 text-green-400">The Solution</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• AI-powered compliance checking with real-time updates</li>
                  <li>• Smart notification system for upcoming deadlines</li>
                  <li>• Centralized document management with cloud synchronization</li>
                  <li>• Multilingual support with natural language processing</li>
                  <li>• 24/7 AI assistant for instant guidance and support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm portfolio-text-muted">Satisfaction Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-sm portfolio-text-muted">Reduction in Compliance Errors</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">Interested in This Project?</h2>
              <p className="text-base portfolio-text-muted mb-6">
                F1 Monk represents my commitment to using AI for social good. I'm always excited to discuss the technical details and lessons learned from this project.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Discuss This Project
                </a>
                <Link 
                  href="/" 
                  className="px-6 py-3 border border-gray-700 rounded font-medium hover:border-gray-500 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>


    </div>
  );
}