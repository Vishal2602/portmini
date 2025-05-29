import { useEffect, useState } from "react";
import { Link } from "wouter";
import FeedbackWidget from "@/components/FeedbackWidget";
import GradientSymbols from "@/components/GradientSymbols";

export default function HealthcareAIProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    document.title = "Healthcare AI Platform Enhancement | Vishal Sunil Kumar";
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

          {/* Project Header */}
          <section className="border-t portfolio-border pt-8 mb-16 animate-slide-up">
            <div className="mb-8">
              <Link href="/" className="text-sm portfolio-text-muted portfolio-hover mb-4 inline-block">
                ← Back to Home
              </Link>
              <h1 className="text-4xl lg:text-5xl font-normal mb-4">Healthcare AI Platform Enhancement</h1>
              <p className="text-xl portfolio-text-muted mb-6">Transforming Pharmaceutical & Medical Device Platforms Through AI-Augmented Design</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">UX Design</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Healthcare</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Data Visualization</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">User Research</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">HIPAA Compliance</span>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              Led the comprehensive design transformation of multiple pharmaceutical and medical device platforms, implementing AI-augmented design systems that delivered a 25% increase in user engagement across 10+ platforms. This project demonstrates the successful intersection of healthcare technology, user experience design, and scalable infrastructure development.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed">
              Working within the highly regulated healthcare environment, I architected scalable multi-device infrastructure supporting HubSpot and Redis caching, ensuring 99.9% uptime for 3 critical healthcare platforms while maintaining strict HIPAA compliance throughout the development lifecycle.
            </p>
          </section>

          {/* Challenge & Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Challenge & Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4 text-red-400">Healthcare UX Challenges</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Complex regulatory requirements (HIPAA, FDA guidelines)</li>
                  <li>• Multiple user personas (clinicians, researchers, patients)</li>
                  <li>• Legacy system integration constraints</li>
                  <li>• High-stakes decision-making environments</li>
                  <li>• Accessibility requirements for diverse user populations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4 text-green-400">Design Strategy</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• AI-augmented design systems for consistency</li>
                  <li>• Evidence-based design through user research</li>
                  <li>• Agile development with continuous user feedback</li>
                  <li>• Cross-platform design language implementation</li>
                  <li>• Performance optimization for critical workflows</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Design Process & Methodology</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">User Research & Discovery</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Conducted extensive user research across 10+ healthcare platforms, interviewing 50+ users including clinicians, researchers, and administrative staff to understand workflow pain points and optimization opportunities.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Research Methods</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Contextual inquiries</li>
                      <li>• User journey mapping</li>
                      <li>• Heuristic evaluations</li>
                      <li>• A/B testing protocols</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Key Insights</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• 40% time lost to navigation</li>
                      <li>• Critical alerts missed</li>
                      <li>• Data visualization gaps</li>
                      <li>• Mobile workflow needs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Validation Metrics</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Task completion rate</li>
                      <li>• Error frequency</li>
                      <li>• User satisfaction scores</li>
                      <li>• System efficiency gains</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">AI-Augmented Design System</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Developed a comprehensive design system that leverages AI to ensure consistency across platforms while adapting to specific healthcare contexts and user needs.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-cyan-400">
                  <p className="font-mono">
                    Healthcare component generation system with context-aware design patterns, compliance validation, and accessibility enhancements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Technical Implementation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Scalable Infrastructure</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">HubSpot Integration</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Custom API integrations for healthcare workflows</li>
                      <li>• HIPAA-compliant data synchronization</li>
                      <li>• Automated patient communication systems</li>
                      <li>• Real-time analytics and reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Redis Caching Strategy</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Multi-layer caching for critical data</li>
                      <li>• Session management and user preferences</li>
                      <li>• Real-time notification delivery</li>
                      <li>• Performance optimization for large datasets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Development Workflow Optimization</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Implemented Agile workflows and automated CI/CD pipelines that reduced design-to-development handoff time by 30%, enabling faster iteration and deployment cycles.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-green-400">
                  <p className="font-mono">
                    Automated CI/CD pipeline with HIPAA compliance scanning, security assessments, and accessibility testing for healthcare applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Design Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Engagement Increase</span>
                    <span className="text-xl font-bold text-green-400">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Development Cycle Reduction</span>
                    <span className="text-xl font-bold text-green-400">-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Platform Uptime</span>
                    <span className="text-xl font-bold text-blue-400">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Platforms Enhanced</span>
                    <span className="text-xl font-bold text-white">10+</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Team & Process Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Team Productivity Increase</span>
                    <span className="text-xl font-bold text-green-400">+20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Junior Designers Mentored</span>
                    <span className="text-xl font-bold text-yellow-400">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Interviews Conducted</span>
                    <span className="text-xl font-bold text-blue-400">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">HIPAA Compliance Rate</span>
                    <span className="text-xl font-bold text-white">100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4">Stakeholder Feedback</h3>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "Vishal's design systems transformed our development process. The AI-augmented components not only improved consistency but also reduced our time-to-market significantly."
                  <footer className="mt-2 text-xs">— Senior Product Manager, Healthcare Division</footer>
                </blockquote>
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "The user research insights and design improvements directly translated to better clinical workflows and improved patient care efficiency."
                  <footer className="mt-2 text-xs">— Chief Medical Officer, Partner Healthcare System</footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Compliance & Security */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Compliance & Security</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-normal mb-4">HIPAA Compliance Framework</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• End-to-end encryption for all patient data</li>
                  <li>• Role-based access control implementation</li>
                  <li>• Audit trail logging for all user interactions</li>
                  <li>• Regular security assessments and penetration testing</li>
                  <li>• Staff training and compliance monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Design System Governance</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Component library with built-in compliance checks</li>
                  <li>• Automated accessibility testing in CI/CD pipeline</li>
                  <li>• Version control and change management protocols</li>
                  <li>• Cross-platform consistency validation</li>
                  <li>• Documentation and training materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">Healthcare Technology Innovation</h2>
              <p className="text-base portfolio-text-muted mb-6">
                This project showcases the successful application of AI-augmented design principles in highly regulated healthcare environments. I'm passionate about discussing healthcare technology challenges and collaborative opportunities.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Healthcare Tech Discussion
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