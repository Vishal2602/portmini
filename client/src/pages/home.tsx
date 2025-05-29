import { useEffect, useState } from "react";
import { Link } from "wouter";
import FeedbackWidget from "@/components/FeedbackWidget";
import GradientSymbols from "@/components/GradientSymbols";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.title = "Vishal Sunil Kumar - AI Engineer & UX Designer";
    
    // Simulate loading and then show content with animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2000);

    return () => clearTimeout(loadingTimer);
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

  // Loading screen component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          {/* Animated logo/name */}
          <div className="mb-8">
            <h1 className="text-4xl font-normal mb-2 animate-pulse">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>V</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '100ms' }}>i</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '200ms' }}>s</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>h</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '400ms' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '500ms' }}>l</span>
            </h1>
            <p className="text-lg portfolio-text-muted animate-fade-in">AI Engineer & UX Designer</p>
          </div>
          
          {/* Loading spinner */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black text-white transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Header */}
      <header className="flex justify-between items-start p-6 lg:p-8 animate-slide-down">
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

      <div className="flex h-[calc(100vh-120px)]">
        {/* Left Sidebar - Fixed */}
        <aside className="w-full lg:w-1/3 xl:w-1/4 px-6 lg:px-8 flex-shrink-0 animate-slide-in-left">
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
        <main className="flex-1 overflow-y-auto px-6 lg:px-8 lg:pl-16 scrollable-main relative animate-slide-in-right">
          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
            <div 
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Hello Section */}
          <section className="border-t portfolio-border pt-8 mb-16 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-normal mb-6 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                Hello! 👋
              </h2>
              <p className="text-xl lg:text-2xl max-w-4xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                I'm a passionate AI Engineer and UX Designer who bridges the gap between cutting-edge technology and human-centered design. I specialize in building intelligent systems that not only work flawlessly but also provide delightful user experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <h3 className="text-lg font-normal mb-4">What I Do</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Develop production-scale LLM applications with optimized RAG architectures</li>
                  <li>• Design intuitive user interfaces for complex AI systems</li>
                  <li>• Bridge technical implementation with user experience research</li>
                  <li>• Lead cross-functional teams in AI product development</li>
                </ul>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <h3 className="text-lg font-normal mb-4">Current Focus</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Advancing prompt engineering and model optimization</li>
                  <li>• Exploring multimodal AI interfaces</li>
                  <li>• Contributing to open-source AI tools</li>
                  <li>• Mentoring the next generation of AI designers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="border-t portfolio-border pt-8 mb-16 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <h2 className="text-xl font-normal mb-8 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>Featured Projects</h2>
            
            <div className="space-y-12">
              {/* F1 Monk Project */}
              <div className="animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <div className="mb-4">
                  <h3 className="text-2xl font-normal mb-2">F1 Monk - iOS Visa Assistant</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">iOS Development</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">AI/ML</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Natural Language Processing</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Google Cloud</span>
                  </div>
                </div>
                <p className="text-base portfolio-text-muted mb-6 leading-relaxed">
                  A comprehensive mobile application that revolutionizes visa compliance management for international students. Adopted by 200+ students, the app integrates Google Cloud Dialogflow, xAI, and Grok API for intelligent natural language processing. Features include automated deadline tracking, document management, and intelligent scheduling—all achieving a 95% user satisfaction rating.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="space-y-1 portfolio-text-muted">
                      <li>• Smart deadline notifications</li>
                      <li>• Document status tracking</li>
                      <li>• AI-powered compliance checking</li>
                      <li>• Multilingual support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Impact</h4>
                    <ul className="space-y-1 portfolio-text-muted">
                      <li>• 200+ active users</li>
                      <li>• 95% satisfaction rating</li>
                      <li>• 80% reduction in compliance errors</li>
                      <li>• Featured in university newsletter</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Adaptive Prompt Engineering Project */}
              <div className="animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <div className="mb-4">
                  <h3 className="text-2xl font-normal mb-2">Adaptive Prompt Engineering Framework</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Machine Learning</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">AWS SageMaker</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Reinforcement Learning</span>
                  </div>
                </div>
                <p className="text-base portfolio-text-muted mb-6 leading-relaxed">
                  A groundbreaking reinforcement learning-based system that dynamically optimizes prompts to improve LLM performance by 25%. Built with a modular TypeScript architecture featuring a sophisticated generator and hybrid RL/GA optimizer. Successfully deployed on AWS SageMaker with auto-scaling capabilities, reducing inference costs by 30% across 5+ production environments.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Technical Highlights</h4>
                    <ul className="space-y-1 portfolio-text-muted">
                      <li>• Reinforcement learning optimization</li>
                      <li>• Genetic algorithm integration</li>
                      <li>• Real-time performance monitoring</li>
                      <li>• Scalable cloud architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Results</h4>
                    <ul className="space-y-1 portfolio-text-muted">
                      <li>• 25% performance improvement</li>
                      <li>• 30% cost reduction</li>
                      <li>• 5+ production deployments</li>
                      <li>• Open-source contribution</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Healthcare AI Platform */}
              <div className="animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
                <div className="mb-4">
                  <h3 className="text-2xl font-normal mb-2">Healthcare AI Platform Enhancement</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">UX Design</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Healthcare</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Data Visualization</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">User Research</span>
                  </div>
                </div>
                <p className="text-base portfolio-text-muted mb-6 leading-relaxed">
                  Led the design transformation of multiple pharmaceutical and medical device platforms, implementing AI-augmented design systems that boosted user engagement by 25% across 10+ platforms. Architected scalable multi-device infrastructure supporting HubSpot and Redis caching, ensuring 99.9% uptime for 3 critical healthcare platforms while maintaining strict HIPAA compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Design Impact</h4>
                    <ul className="space-y-1 portfolio-text-muted">
                      <li>• 25% engagement increase</li>
                      <li>• 30% faster development cycles</li>
                      <li>• HIPAA-compliant design system</li>
                      <li>• Cross-platform consistency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technical Excellence</h4>
                    <ul className="space-y-1 portfolio-text-muted">
                      <li>• 99.9% platform uptime</li>
                      <li>• Scalable infrastructure</li>
                      <li>• Redis caching optimization</li>
                      <li>• Multi-device support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">Let's Build Something Amazing Together</h2>
              <p className="text-base portfolio-text-muted mb-6 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects that push the boundaries of AI and design. Whether you're looking to build intelligent systems, enhance user experiences, or explore new possibilities in AI, I'd love to hear from you.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Get In Touch
                </a>
                <Link 
                  href="/resume" 
                  className="px-6 py-3 border border-gray-700 rounded font-medium hover:border-gray-500 transition-colors"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto border-t portfolio-border pt-8 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-normal mb-4">Contact me</h3>
          </div>
          <button 
            onClick={scrollToTop}
            className="text-sm portfolio-hover cursor-pointer"
          >
            Top ↑
          </button>
        </div>
      </footer>

      {/* Feedback Widget */}
      <FeedbackWidget />
    </div>
  );
}