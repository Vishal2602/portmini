import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.title = "Vishal Sunil Kumar - AI Engineer & UX Designer Portfolio";
    
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
      {/* Mobile Header */}
      <div className="block md:hidden bg-black border-b border-gray-800 p-4 sticky top-0 z-50">
        <Link href="/" className="portfolio-hover inline-block mb-2 text-sm">
          ← Back to Portfolio
        </Link>
        <h1 className="text-xl font-normal">Resume</h1>
        <p className="text-sm portfolio-text-muted">Professional Experience</p>
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
            {/* Professional Experience Section */}
            <section className="border-t portfolio-border pt-8 mb-16 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <h2 className="text-xl font-normal mb-8 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>Professional Experience</h2>
              
              {/* Corporate Engagement Project Analyst & Researcher */}
              <div className="mb-12">
                <h3 className="text-lg font-normal mb-1">Corporate Engagement Project Analyst & Researcher</h3>
                <p className="text-sm portfolio-text-muted mb-1">
                  University of Massachusetts Dartmouth <span>↗</span>
                </p>
                <p className="text-sm portfolio-text-muted mb-1">August 2024 - May 2025</p>
                
                <ul className="space-y-3 text-sm">
                  <li>
                    • Engineered data analytics systems analyzing 25+ corporate partnerships, increasing sponsorship efficiency by 20%
                  </li>
                  <li>
                    • Developed automated reporting dashboards using Python and Tableau, improving stakeholder decision-making processes
                  </li>
                  <li>
                    • Processed 600+ user feedback submissions annually, streamlining workflows that saved 50 monthly hours from troubleshooting overhead
                  </li>
                </ul>
              </div>

              {/* UX/UI Designer */}
              <div className="mb-12">
                <h3 className="text-lg font-normal mb-1">UX/UI Designer</h3>
                <p className="text-sm portfolio-text-muted mb-1">
                  Indegene <span>↗</span>
                </p>
                <p className="text-sm portfolio-text-muted mb-1">September 2021 - August 2023</p>
                
                <ul className="space-y-3 text-sm">
                  <li>
                    • Boosted user engagement by 25% across 10+ pharmaceutical and medical device platforms using AI-augmented design systems
                  </li>
                  <li>
                    • Architected scalable multi-device serving infrastructure supporting HubSpot and Redis caching, supporting 3 healthcare platforms with 99.9% uptime
                  </li>
                  <li>
                    • Reduced design-to-development handoff time by 30% implementing Agile workflows and automated CI/CD pipelines
                  </li>
                  <li>
                    • Mentored 3 junior designers while conducting 50+ user interviews, increasing team productivity by 20% and ensuring HIPAA compliance
                  </li>
                </ul>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Technical Skills</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-base font-normal mb-4">Programming & Development</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Python, Java, C++, SQL, React, Next.js, Vue.js, Django, Node.js, REST APIs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-4">AI & Machine Learning</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Transformers, LLM Fine-tuning, RAG Systems, OpenAI API, Hugging Face, TensorFlow, PyTorch</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-4">ML Operations & Evaluation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• RAGAS benchmarks, MLflow, Model Monitoring, A/B Testing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-4">Design & Visualization</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Figma, Adobe Creative Suite, Sketch, D3.js, Matplotlib, Seaborn, D3.js Training</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-4">Infrastructure & DevOps</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Docker, Kubernetes, AWS/GCP, FastAPI, CI/CD pipelines, Redis, SageMaker</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Featured Projects Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Featured Projects</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-normal mb-2">F1 Monk - iOS Visa Assistant</h3>
                  <p className="text-sm portfolio-text-muted mb-3">
                    Comprehensive mobile application adopted by 200+ international students for visa compliance management. Integrated Google Cloud Dialogflow, xAI, and Grok API for natural language processing. Features automated deadline tracking, document management, and scheduling with 95% user satisfaction rating.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-2">Adaptive Prompt Engineering Framework</h3>
                  <p className="text-sm portfolio-text-muted mb-3">
                    Developed reinforcement learning-based system improving LLM performance by 25% through dynamic prompt optimization. Built modular architecture with TS-based generator and hybrid RL/GA optimizer. Deployed on AWS SageMaker with auto-scaling, reducing inference costs by 30% across 5+ production environments.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Education</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-base font-normal mb-2">
                    University of Massachusetts Dartmouth
                  </p>
                  <p className="text-sm portfolio-text-muted">May 2025</p>
                </div>
                <div>
                  <p className="text-base font-normal mb-1">
                    Master of Science in Computer Science
                  </p>
                  <p className="text-sm portfolio-text-muted">GPA: 3.5/4</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mt-8">
                <div>
                  <p className="text-base font-normal mb-2">
                    Meenakshi Sundararajan Engineering College
                  </p>
                  <p className="text-sm portfolio-text-muted">May 2021</p>
                </div>
                <div>
                  <p className="text-base font-normal mb-1">
                    Bachelor of Technology in Information Technology
                  </p>
                  <p className="text-sm portfolio-text-muted">GPA: 8.1/10</p>
                </div>
              </div>
            </section>

            {/* Accomplishments Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Accomplishments</h2>
              
              <ul className="space-y-3 text-sm">
                <li>
                  • Boosted user engagement by 30% as Social Media Chair for the Graduate Student Senate through creative campaigns
                </li>
                <li>
                  • Mentored junior designers, improving team productivity and reducing project turnaround times by 20%
                </li>
              </ul>
            </section>
          </main>
      </div>


    </div>
  );
}
