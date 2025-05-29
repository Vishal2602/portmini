import { useEffect, useState } from "react";

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = "Vishal Sunil Kumar - AI Engineer & UX Designer Portfolio";
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-start p-6 lg:p-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-normal mb-1">
            Vishal Sunil Kumar
          </h1>
          <p className="text-lg portfolio-text-muted">AI Engineer & UX Designer</p>
        </div>
        <nav>
          <a 
            href="#about" 
            className="text-white portfolio-hover"
          >
            About
          </a>
        </nav>
      </header>

      <div className="flex h-[calc(100vh-120px)]">
        {/* Left Sidebar - Fixed */}
        <aside className="w-full lg:w-1/3 xl:w-1/4 px-6 lg:px-8 flex-shrink-0">
          <section id="about" className="border-t portfolio-border pt-8">
            <p className="text-base max-w-md leading-relaxed mb-8">
              AI Engineer and UX Designer with 3+ years developing production-scale LLM applications and human-centered design systems. Delivered 25% user engagement increases across 100+ healthcare platforms through optimized RAG architectures and data-driven design methodologies.
            </p>
            
            <div className="space-y-2 text-sm">
              <p>
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  vsunilkumar@umassd.edu
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
              <p>
                <a 
                  href="tel:+14254786332" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  425-478-6332
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
              <p>
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
              <p>
                <a 
                  href="#" 
                  className="portfolio-text-muted portfolio-hover"
                >
                  designport.netlify.app
                </a>
                <span className="portfolio-text-muted"> ↗</span>
              </p>
            </div>
          </section>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto px-6 lg:px-8 lg:pl-16 scrollable-main relative">
          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
            <div 
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
            {/* Professional Experience Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Professional Experience</h2>
              
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
    </div>
  );
}
