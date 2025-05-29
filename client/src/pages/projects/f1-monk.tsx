import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";

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
                  href="tel:+14254786332" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  425-478-6332
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                <a 
                  href="https://linkedin.com/in/vishal2602" 
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
                  href="#" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  designport.netlify.app
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
              F1 Monk is a comprehensive mobile application designed to revolutionize visa compliance management for international students. Built from the ground up with AI-powered features, the app serves as a digital assistant that helps students navigate the complex world of visa requirements, deadlines, and documentation.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed">
              The application has been adopted by over 200 international students and maintains an impressive 95% user satisfaction rating. By integrating cutting-edge AI technologies including Google Cloud Dialogflow, xAI, and Grok API, F1 Monk provides intelligent, contextual assistance that adapts to each user's unique situation.
            </p>
          </section>

          {/* Problem & Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Problem & Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4 text-red-400">The Problem</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• International students face complex visa compliance requirements</li>
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
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm portfolio-text-muted">Active Users</div>
              </div>
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