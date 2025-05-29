import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";

export default function EcommercePlatformProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    document.title = "E-commerce Platform & Mobile App Design | Vishal Sunil Kumar";
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
              <h1 className="text-4xl lg:text-5xl font-normal mb-4">E-commerce Platform & Mobile App Design</h1>
              <p className="text-xl portfolio-text-muted mb-6">Comprehensive Digital Commerce Experience with Native Mobile Applications</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">E-commerce Design</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Mobile App UI</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">User Experience</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Product Design</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Conversion Optimization</span>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              Designed and developed a comprehensive e-commerce platform featuring an intuitive web interface and native mobile applications for iOS and Android. This project demonstrates end-to-end digital commerce experience design, from product discovery and detailed views to seamless checkout flows and user account management systems.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed">
              The platform emphasizes conversion optimization through strategic user experience design, incorporating modern interface patterns, accessibility considerations, and performance-focused architecture that delivers exceptional shopping experiences across all device types and user contexts.
            </p>
          </section>

          {/* Mobile App Design Excellence */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Mobile App Design Excellence</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Product Discovery & Navigation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Home Screen Optimization</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Strategic product showcase with dynamic recommendations</li>
                      <li>• Intuitive category navigation with visual hierarchy</li>
                      <li>• Personalized content based on user behavior analytics</li>
                      <li>• Quick access to favorites and recently viewed items</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Search & Filter Systems</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Advanced search with auto-suggestions and filters</li>
                      <li>• Visual product browsing with grid and list views</li>
                      <li>• Sort functionality by price, popularity, and ratings</li>
                      <li>• Smart categorization with breadcrumb navigation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Product Detail Experience</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Crafted immersive product detail pages featuring high-quality image galleries, comprehensive product information, customer reviews, and seamless add-to-cart functionality optimized for mobile interactions.
                </p>
                <div className="bg-gray-900 p-4 rounded">
                  <h4 className="font-medium mb-3">Key Features Implemented</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="font-medium mb-1">Image Gallery</p>
                      <p className="portfolio-text-muted">Swipeable high-res images with zoom functionality</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Product Variants</p>
                      <p className="portfolio-text-muted">Size, color, and style selection interfaces</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Social Proof</p>
                      <p className="portfolio-text-muted">Customer reviews and rating systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Checkout & Payment Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Checkout & Payment Optimization</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Streamlined Checkout Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Cart Management</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Persistent shopping cart with quantity adjustments</li>
                      <li>• Save for later functionality and wishlist integration</li>
                      <li>• Real-time price calculations with discounts</li>
                      <li>• Shipping cost estimation and delivery options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Payment Integration</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Multiple payment methods support</li>
                      <li>• Secure payment processing with encryption</li>
                      <li>• One-tap payment options for returning customers</li>
                      <li>• Order confirmation and tracking systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Conversion Rate Optimization</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Implemented strategic design decisions focused on reducing cart abandonment and increasing conversion rates through psychological principles, urgency indicators, and trust signals.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-blue-400">
                  <p className="font-mono">
                    A/B tested checkout flows with progressive disclosure, guest checkout options, and social proof elements resulting in measurable conversion improvements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* User Account & Profile Management */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">User Account & Profile Systems</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Account Dashboard Design</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Profile Management</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Personal information and preferences settings</li>
                      <li>• Address book management for shipping</li>
                      <li>• Payment method storage and security</li>
                      <li>• Communication preferences and notifications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Order History & Tracking</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Comprehensive order history with status tracking</li>
                      <li>• Return and exchange request processing</li>
                      <li>• Reorder functionality for repeat purchases</li>
                      <li>• Digital receipts and invoice management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Loyalty & Rewards Integration</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Designed comprehensive loyalty program interfaces that encourage repeat purchases through points systems, tier-based rewards, and personalized offers based on purchase history.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-3 rounded text-center">
                    <h4 className="font-medium mb-1">Points System</h4>
                    <p className="text-xs portfolio-text-muted">Earn and redeem rewards</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded text-center">
                    <h4 className="font-medium mb-1">Tier Benefits</h4>
                    <p className="text-xs portfolio-text-muted">Exclusive member perks</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded text-center">
                    <h4 className="font-medium mb-1">Referral Program</h4>
                    <p className="text-xs portfolio-text-muted">Share and earn rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation & Performance */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Technical Excellence & Performance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Mobile-First Design Strategy</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Progressive web app capabilities for offline functionality</li>
                  <li>• Touch-optimized interactions and gesture support</li>
                  <li>• Responsive design scaling from mobile to desktop</li>
                  <li>• Performance optimization for fast loading times</li>
                  <li>• Cross-platform compatibility testing and validation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Accessibility & Usability</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• WCAG 2.1 AA compliance for inclusive design</li>
                  <li>• Screen reader optimization and keyboard navigation</li>
                  <li>• High contrast modes and text scaling support</li>
                  <li>• Voice navigation integration for hands-free shopping</li>
                  <li>• Multi-language support with RTL text handling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design Process & User Research */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Design Process & User Research</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">User Research & Testing</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Conducted extensive user research including interviews, usability testing, and behavioral analytics to inform design decisions and optimize the shopping experience across all touchpoints.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">User Interviews</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Shopping behavior analysis</li>
                      <li>• Pain point identification</li>
                      <li>• Feature prioritization</li>
                      <li>• Competitive analysis</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Usability Testing</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Task completion rates</li>
                      <li>• Navigation efficiency</li>
                      <li>• Error recovery patterns</li>
                      <li>• Conversion funnel analysis</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Analytics Integration</h4>
                    <ul className="text-xs portfolio-text-muted space-y-1">
                      <li>• Heat map analysis</li>
                      <li>• User flow tracking</li>
                      <li>• A/B test results</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Iterative Design Methodology</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Employed agile design sprints with continuous user feedback integration, allowing for rapid prototyping, testing, and refinement of key user flows and interface elements.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-purple-400">
                  <p className="font-mono">
                    Design sprint methodology: Discover → Define → Ideate → Prototype → Test → Iterate, ensuring user-centered solutions that drive business results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Results & Impact */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Results & Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Conversion Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mobile Conversion Rate Increase</span>
                    <span className="text-xl font-bold text-green-400">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cart Abandonment Reduction</span>
                    <span className="text-xl font-bold text-green-400">-32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Order Value Increase</span>
                    <span className="text-xl font-bold text-blue-400">+28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Session Duration</span>
                    <span className="text-xl font-bold text-yellow-400">+55%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">User Experience Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">App Store Rating</span>
                    <span className="text-xl font-bold text-green-400">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Task Completion Rate</span>
                    <span className="text-xl font-bold text-blue-400">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer Satisfaction Score</span>
                    <span className="text-xl font-bold text-green-400">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Return User Rate</span>
                    <span className="text-xl font-bold text-white">78%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4">Client & User Feedback</h3>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "The mobile app design transformed our customer engagement. The intuitive interface and seamless checkout process have significantly boosted our conversion rates."
                  <footer className="mt-2 text-xs">— Head of Digital Commerce, E-commerce Client</footer>
                </blockquote>
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "Outstanding work on the user experience design. The app feels premium while maintaining simplicity, exactly what our customers needed."
                  <footer className="mt-2 text-xs">— Product Manager, Mobile Development Team</footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">E-commerce Design Excellence</h2>
              <p className="text-base portfolio-text-muted mb-6">
                This comprehensive e-commerce platform demonstrates expertise in conversion-focused design, mobile-first development, and user-centered commerce experiences. I'm passionate about creating digital shopping experiences that drive both user satisfaction and business growth.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Discuss E-commerce Design
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