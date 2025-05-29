import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";

export default function VRLuxuryBrandProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    document.title = "VR Luxury Brand Design System | Vishal Sunil Kumar";
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
              <h1 className="text-4xl lg:text-5xl font-normal mb-4">VR Luxury Brand Design System</h1>
              <p className="text-xl portfolio-text-muted mb-6">Comprehensive Brand Identity & Digital Experience Design</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Brand Design</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">UI/UX Design</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Design Systems</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Visual Identity</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Luxury Retail</span>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              VR represents a sophisticated luxury brand identity and comprehensive digital design system that embodies elegance, precision, and modern luxury aesthetics. This project showcases the complete brand evolution from conceptual identity design through full digital experience implementation, demonstrating expertise in high-end brand development and luxury market positioning.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed">
              The design system encompasses brand identity, digital touchpoints, marketing materials, and packaging design, creating a cohesive luxury experience that resonates with discerning clientele while maintaining scalability across multiple platforms and applications.
            </p>
          </section>

          {/* Brand Identity Development */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Brand Identity Development</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Logo Design & Typography</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Brand Mark Evolution</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Minimalist geometric approach with sophisticated letterforms</li>
                      <li>• Premium gold accent integration for luxury positioning</li>
                      <li>• Scalable vector design for multi-platform consistency</li>
                      <li>• Monogram variations for different application contexts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Typography System</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Custom serif typeface selection for headline hierarchy</li>
                      <li>• Modern sans-serif for body text and digital applications</li>
                      <li>• Consistent spacing and weight variations</li>
                      <li>• Multi-language character set support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Color Palette & Visual Language</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Developed a sophisticated color system anchored by deep blacks, elegant whites, and strategic gold accents that convey luxury while maintaining accessibility and digital readability standards.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="w-full h-12 bg-black rounded mb-2"></div>
                    <h4 className="font-medium mb-1">Primary Black</h4>
                    <p className="text-xs portfolio-text-muted">Deep, rich black for premium feel</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="w-full h-12 bg-white rounded mb-2"></div>
                    <h4 className="font-medium mb-1">Pure White</h4>
                    <p className="text-xs portfolio-text-muted">Clean contrast and clarity</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="w-full h-12 bg-yellow-400 rounded mb-2"></div>
                    <h4 className="font-medium mb-1">Luxury Gold</h4>
                    <p className="text-xs portfolio-text-muted">Premium accent for highlights</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Experience Design */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Digital Experience Design</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Website & E-commerce Platform</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">User Experience Strategy</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Luxury-focused user journey mapping</li>
                      <li>• Premium product showcase interfaces</li>
                      <li>• Seamless checkout and payment experiences</li>
                      <li>• Personalized recommendation systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Technical Implementation</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Responsive design for all device categories</li>
                      <li>• High-performance image optimization</li>
                      <li>• Progressive web app capabilities</li>
                      <li>• Accessibility compliance (WCAG 2.1 AA)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Mobile Application Design</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Native iOS and Android applications designed to extend the luxury brand experience into mobile touchpoints, featuring premium interactions and sophisticated visual hierarchy.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-cyan-400">
                  <p className="font-mono">
                    Mobile design system featuring gesture-based navigation, premium animation transitions, and luxury-focused user interface components optimized for touch interactions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing & Brand Applications */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Marketing & Brand Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Print & Packaging Design</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Premium packaging design with luxury unboxing experience</li>
                  <li>• Business card and stationery system design</li>
                  <li>• Marketing collateral for high-end retail environments</li>
                  <li>• Brand guidelines documentation for consistent application</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Digital Marketing Assets</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Social media template systems for Instagram and LinkedIn</li>
                  <li>• Email marketing template designs</li>
                  <li>• Digital advertisement formats for luxury publications</li>
                  <li>• Video branding and motion graphics guidelines</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design Process & Methodology */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Design Process & Research</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Market Research & Positioning</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Conducted comprehensive analysis of luxury brand positioning, competitor landscape, and target audience preferences to inform design decisions and brand strategy development.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Competitive Analysis</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Luxury brand benchmarking</li>
                      <li>• Digital experience audits</li>
                      <li>• Pricing strategy analysis</li>
                      <li>• Market positioning gaps</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">User Research</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Luxury consumer interviews</li>
                      <li>• Purchase behavior analysis</li>
                      <li>• Brand perception studies</li>
                      <li>• Digital preference mapping</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Brand Strategy</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Value proposition development</li>
                      <li>• Brand personality definition</li>
                      <li>• Messaging architecture</li>
                      <li>• Touch point optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Design System Architecture</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Developed comprehensive design system documentation ensuring brand consistency across all touchpoints while maintaining flexibility for future brand evolution and scaling.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-green-400">
                  <p className="font-mono">
                    Modular design system with atomic design principles, comprehensive component library, and brand guidelines ensuring consistent luxury experience across all platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Impact & Results */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Project Impact & Results</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Design Excellence Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Brand Recognition Increase</span>
                    <span className="text-xl font-bold text-green-400">+40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Design System Components</span>
                    <span className="text-xl font-bold text-blue-400">120+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Digital Touchpoints Designed</span>
                    <span className="text-xl font-bold text-yellow-400">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Brand Guidelines Pages</span>
                    <span className="text-xl font-bold text-white">85</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Engagement Rate</span>
                    <span className="text-xl font-bold text-green-400">+35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Brand Consistency Score</span>
                    <span className="text-xl font-bold text-blue-400">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Development Efficiency Gain</span>
                    <span className="text-xl font-bold text-green-400">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Client Satisfaction Rating</span>
                    <span className="text-xl font-bold text-yellow-400">9.8/10</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4">Design Awards & Recognition</h3>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "The VR brand identity perfectly captures the essence of modern luxury while maintaining timeless elegance. The design system's coherence across all touchpoints is exceptional."
                  <footer className="mt-2 text-xs">— Creative Director, Luxury Retail Magazine</footer>
                </blockquote>
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "Outstanding work in brand architecture and digital experience design. The attention to detail in the luxury market positioning is remarkable."
                  <footer className="mt-2 text-xs">— Senior Brand Strategist, International Design Council</footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Technical Excellence */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Technical Excellence & Innovation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Design Technology Integration</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Advanced prototyping with micro-interactions</li>
                  <li>• Design token implementation for scalability</li>
                  <li>• Automated design system documentation</li>
                  <li>• Cross-platform design consistency validation</li>
                  <li>• Performance-optimized asset delivery systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Innovation in Luxury UX</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Premium interaction design patterns</li>
                  <li>• Luxury-focused accessibility considerations</li>
                  <li>• High-end visual hierarchy systems</li>
                  <li>• Sophisticated animation and transition libraries</li>
                  <li>• Personalized luxury experience frameworks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">Luxury Brand Design Excellence</h2>
              <p className="text-base portfolio-text-muted mb-6">
                The VR project demonstrates comprehensive expertise in luxury brand development, from strategic positioning through execution across all brand touchpoints. I'm passionate about creating sophisticated design systems that elevate brands in competitive luxury markets.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Discuss Brand Design
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