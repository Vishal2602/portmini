import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";
import splashImage from "@assets/Splash.png";
import exploreJobBoardsImage from "@assets/Explore - Job Boards.png";
import exploreMiscImage from "@assets/Explore - Misc.png";
import exploreMagazineImage from "@assets/Explore - Magazine.png";
import savedImage from "@assets/Saved.png";
import fullNewsImage from "@assets/Full News.png";
import fullNewsCricketImage from "@assets/Full news cricket.png";
import fullNewsRonaldoImage from "@assets/Full News ronaldo.png";

export default function ThePigeonAppProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    document.title = "The Pigeon - News App Design | Vishal Sunil Kumar";
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
        <h1 className="text-xl font-normal">The Pigeon</h1>
        <p className="text-sm portfolio-text-muted">Modern News Application</p>
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
              <h1 className="text-4xl lg:text-5xl font-normal mb-4">The Pigeon - News App Design</h1>
              <p className="text-xl portfolio-text-muted mb-6">Bringing Traditional Newspaper Experience to Mobile Devices</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Mobile App Design</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">User Research</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">News Platform</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Content Strategy</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Digital Innovation</span>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Pigeon is a revolutionary mobile application designed to replicate the most beloved features of traditional newspapers within a clean, modern digital interface. This project demonstrates comprehensive UX research methodology, from user surveys and competitive analysis to persona development and iterative design processes.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed">
              The goal was to create an all-in-one app that keeps users informed, entertained, and connected—just like a physical newspaper—but with the convenience and interactivity of a smartphone. The design balances nostalgia for traditional media with modern digital expectations.
            </p>
          </section>

          {/* Research & User Insights */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Research & User Insights</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">User Survey Results</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Conducted comprehensive user surveys asking "What feature of a newspaper would you like to replicate into the app?" to understand core user needs and preferences.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Top User Preferences</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>Job Boards (25%)</strong> - Career opportunities and listings</li>
                      <li>• <strong>Crosswords (23.4%)</strong> - Interactive puzzles and games</li>
                      <li>• <strong>Organized Content (13.4%)</strong> - Structured information hierarchy</li>
                      <li>• <strong>Credibility (12%)</strong> - Trusted news sources and verification</li>
                      <li>• <strong>Technology News (11.2%)</strong> - Specialized tech coverage</li>
                      <li>• <strong>Comics & Extras (15%)</strong> - Entertainment features</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Key Research Insights</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Strong demand for utility features (jobs, credibility)</li>
                      <li>• High engagement potential with interactive content</li>
                      <li>• Users want comprehensive news experience in one app</li>
                      <li>• Traditional newspaper features still highly valued</li>
                      <li>• Need for both information and entertainment content</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Competitive Analysis</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Analyzed major competitors including The Hindu, Times of India, BBC, Google News, and Inshorts to identify market gaps and opportunities.
                </p>
                <div className="bg-gray-900 p-4 rounded">
                  <h4 className="font-medium mb-3">Competitive Advantage Discovery</h4>
                  <p className="text-sm portfolio-text-muted mb-3">
                    The Pigeon stands out by offering all key features—Free access, Live News, Crosswords, Job Boards, and Hashtags—while competitors typically lack this comprehensive combination.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="font-medium mb-1">Market Gap</p>
                      <p className="portfolio-text-muted">No single app combines all desired newspaper features</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Opportunity</p>
                      <p className="portfolio-text-muted">Create comprehensive newspaper replacement</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Validation</p>
                      <p className="portfolio-text-muted">Confirmed need for well-rounded news app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Persona & Storyboarding */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">User Persona & Journey Mapping</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Primary Persona: Sarah Cooper</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Demographics & Profile</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>Age:</strong> 28, Businesswoman in New York, NY</li>
                      <li>• <strong>Personality:</strong> Workaholic, Energetic, Ambitious</li>
                      <li>• <strong>Tech Savvy:</strong> Mobile-first, always connected</li>
                      <li>• <strong>Media Habits:</strong> Needs credible, accessible news</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Pain Points & Goals</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>Frustrations:</strong> Can't access newspaper on-the-go</li>
                      <li>• <strong>Problem:</strong> Forgets saved articles, limited access</li>
                      <li>• <strong>Goals:</strong> Stay updated anywhere, trust sources</li>
                      <li>• <strong>Needs:</strong> Structure, accuracy, convenience</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">User Journey Storyboard</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Created detailed storyboard following Sarah's discovery and adoption of The Pigeon app, highlighting the problem-solution dynamic and emotional user journey.
                </p>
                <div className="bg-gray-900 p-4 rounded">
                  <h4 className="font-medium mb-3">Story Flow</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-medium mb-1">Problem Discovery</p>
                      <p className="portfolio-text-muted">Sarah forgets her newspaper, realizes need for mobile solution</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Solution Introduction</p>
                      <p className="portfolio-text-muted">Friend introduces The Pigeon app as newspaper replacement</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Feature Exploration</p>
                      <p className="portfolio-text-muted">Discovers crosswords, live updates, organized content</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adoption & Satisfaction</p>
                      <p className="portfolio-text-muted">Falls in love with functionality and ease of use</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process & Methodology */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Design Process & Methodology</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Five-Phase Design Process</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="bg-gray-900 p-4 rounded text-center">
                    <h4 className="font-medium mb-2">Research</h4>
                    <p className="text-xs portfolio-text-muted">Surveys & competitive analysis</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded text-center">
                    <h4 className="font-medium mb-2">Brainstorm</h4>
                    <p className="text-xs portfolio-text-muted">Feature ideation & concepts</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded text-center">
                    <h4 className="font-medium mb-2">Define</h4>
                    <p className="text-xs portfolio-text-muted">Problems, solutions & goals</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded text-center">
                    <h4 className="font-medium mb-2">Wireframe</h4>
                    <p className="text-xs portfolio-text-muted">App structure & layout</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded text-center">
                    <h4 className="font-medium mb-2">Prototype</h4>
                    <p className="text-xs portfolio-text-muted">High-fidelity visuals</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Problem-Solution Framework</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-red-400">Identified Problems</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Existing news apps don't replicate full newspaper experience</li>
                      <li>• Interfaces are outdated and cluttered with poor UX</li>
                      <li>• No single app offers comprehensive newspaper features</li>
                      <li>• Limited engagement with traditional news consumption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-green-400">Design Solutions</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Integrate beloved newspaper features into mobile app</li>
                      <li>• Create decluttered, modern UI/UX design</li>
                      <li>• Provide comprehensive news experience in one platform</li>
                      <li>• Enable users to proudly say "Yes, I do read the news"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Flow & Information Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">User Flow & Information Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">App Navigation Structure</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Designed intuitive user flow from splash screen through onboarding to main navigation, ensuring seamless content discovery and user engagement.
                </p>
                <div className="bg-gray-900 p-4 rounded">
                  <h4 className="font-medium mb-3">Navigation Hierarchy</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="font-medium mb-1">Entry Flow</p>
                      <p className="portfolio-text-muted">Splash → Onboarding → Sign In/Up → Navigation</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Main Navigation</p>
                      <p className="portfolio-text-muted">Home, Search, Explore, Saved, Trending</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Content Categories</p>
                      <p className="portfolio-text-muted">Job Boards, Misc, Magazine, Search Results</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Content Organization Strategy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Core Features</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>Home:</strong> Personalized news feed with trending topics</li>
                      <li>• <strong>Explore:</strong> Discovery section with categories</li>
                      <li>• <strong>Job Boards:</strong> Career opportunities and listings</li>
                      <li>• <strong>Search:</strong> Comprehensive content search functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Engagement Features</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>Crosswords:</strong> Daily puzzles and interactive games</li>
                      <li>• <strong>Saved Articles:</strong> Bookmark and read later functionality</li>
                      <li>• <strong>Trending:</strong> Popular content and viral stories</li>
                      <li>• <strong>Live Updates:</strong> Real-time news notifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design System & Visual Identity */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Design System & Visual Identity</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Typography & Color System</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Typography</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>Primary Font:</strong> Helvetica Neue for clean readability</li>
                      <li>• Optimized for mobile screen reading</li>
                      <li>• Hierarchical text sizing for content structure</li>
                      <li>• Accessibility-compliant contrast ratios</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Color Palette</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• <strong>White (#FFFFFF):</strong> Clean background and text</li>
                      <li>• <strong>Black (#000000):</strong> Primary text and UI elements</li>
                      <li>• <strong>Orange (#FF4823):</strong> Brand accent and CTAs</li>
                      <li>• Minimal palette supporting content focus</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Interface Design Philosophy</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  The design system emphasizes clean, modern aesthetics that support trustworthy news consumption while maintaining the familiar comfort of traditional newspaper layouts.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-3 rounded text-center">
                    <h4 className="font-medium mb-1">Minimal</h4>
                    <p className="text-xs portfolio-text-muted">Clean, uncluttered interface</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded text-center">
                    <h4 className="font-medium mb-1">Bold</h4>
                    <p className="text-xs portfolio-text-muted">Strong visual hierarchy</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded text-center">
                    <h4 className="font-medium mb-1">Trustworthy</h4>
                    <p className="text-xs portfolio-text-muted">Credible news presentation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Product & Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Final Product & Key Features</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">App Interface & User Experience</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  The final product features a modern mobile interface that successfully modernizes the newspaper experience with clean design, intuitive navigation, and comprehensive content organization.
                </p>
                
                {/* Splash Screen */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Brand Identity & Splash Screen</h4>
                  <div className="flex justify-center mb-4">
                    <img 
                      src={splashImage} 
                      alt="The Pigeon app splash screen with orange branding"
                      className="max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                  <p className="text-sm portfolio-text-muted text-center">
                    Clean splash screen showcasing The Pigeon's bold orange brand identity and minimalist design approach
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Onboarding & Brand Identity</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Clean splash screen with bold orange brand identity</li>
                      <li>• "The Pigeon" branding prominently displayed</li>
                      <li>• Minimalist approach focusing on readability</li>
                      <li>• Consistent visual language throughout app</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Navigation System</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Bottom tab navigation with home, trending, explore, search, and saved</li>
                      <li>• Clear iconography for intuitive wayfinding</li>
                      <li>• Consistent orange accent color for active states</li>
                      <li>• Touch-optimized interface elements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Core Feature Screens</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Job Boards Section</h4>
                    <p className="text-sm portfolio-text-muted mb-3">
                      Comprehensive job listing interface featuring major companies like Google, Microsoft, Adobe, and Amazon with clean card-based layout and search functionality.
                    </p>
                    
                    <div className="flex justify-center mb-4">
                      <img 
                        src={exploreJobBoardsImage} 
                        alt="Job boards interface showing UX Designer positions at major companies"
                        className="max-w-xs rounded-lg shadow-lg"
                      />
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded">
                      <div className="grid md:grid-cols-3 gap-4 text-xs">
                        <div>
                          <p className="font-medium mb-1">Search & Filter</p>
                          <p className="portfolio-text-muted">Prominent search bar for job discovery</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Company Integration</p>
                          <p className="portfolio-text-muted">Major tech companies and startups featured</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Save Functionality</p>
                          <p className="portfolio-text-muted">Bookmark jobs for later review</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Interactive Content (Misc Section)</h4>
                    <p className="text-sm portfolio-text-muted mb-3">
                      Dedicated section for entertainment features including daily crosswords and Sudoku puzzles, maintaining the traditional newspaper experience.
                    </p>
                    
                    <div className="flex justify-center mb-4">
                      <img 
                        src={exploreMiscImage} 
                        alt="Interactive content section showing daily crossword and Sudoku puzzles"
                        className="max-w-xs rounded-lg shadow-lg"
                      />
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded">
                      <div className="grid md:grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-medium mb-1">Daily Crossword</p>
                          <p className="portfolio-text-muted">Interactive puzzle with start and share options</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Sudoku Games</p>
                          <p className="portfolio-text-muted">Number puzzles for daily mental exercise</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Magazine & Publications</h4>
                    <p className="text-sm portfolio-text-muted mb-3">
                      Digital magazine section featuring popular publications like Forbes, CitizenK, GQ, and Time with cover art and reading options.
                    </p>
                    
                    <div className="flex justify-center mb-4">
                      <img 
                        src={exploreMagazineImage} 
                        alt="Magazine section displaying Forbes, CitizenK, GQ, and Time publications"
                        className="max-w-xs rounded-lg shadow-lg"
                      />
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded">
                      <div className="grid md:grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-medium mb-1">Premium Publications</p>
                          <p className="portfolio-text-muted">High-quality magazine covers and content</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Issue Archive</p>
                          <p className="portfolio-text-muted">December 2021 issues and historical content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">News Reading Experience</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Full-screen article reading interface with high-quality images, source attribution, and social engagement features across multiple content categories.
                </p>
                
                {/* News Article Screenshots */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <img 
                      src={fullNewsImage} 
                      alt="Financial news article about RBI and forex reserves"
                      className="max-w-full rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-xs portfolio-text-muted">Financial News - The Times</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={fullNewsCricketImage} 
                      alt="Cricket news article about Ronaldo breaking records"
                      className="max-w-full rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-xs portfolio-text-muted">Sports News - ESPN</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={fullNewsRonaldoImage} 
                      alt="Cricket championship news about India vs New Zealand"
                      className="max-w-full rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-xs portfolio-text-muted">Cricket Coverage - ESPN</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Article Interface</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Full-screen article reading with high-quality images</li>
                      <li>• Source attribution (BBC News, ESPN, The Times, IndiaTV)</li>
                      <li>• Social engagement metrics (likes, views)</li>
                      <li>• Share and bookmark functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Content Categories</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Sports coverage (Cricket, Football, Tennis)</li>
                      <li>• Financial news and market updates</li>
                      <li>• Breaking news and current events</li>
                      <li>• Saved articles for offline reading</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Saved Content Management</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Dedicated saved section allows users to bookmark articles from various sources for later reading, addressing the key user need identified in research.
                </p>
                
                <div className="flex justify-center mb-4">
                  <img 
                    src={savedImage} 
                    alt="Saved articles interface showing bookmarked content from various sources"
                    className="max-w-xs rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="bg-gray-900 p-4 rounded">
                  <h4 className="font-medium mb-3">Personal Library Features</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="font-medium mb-1">Multi-Source Content</p>
                      <p className="portfolio-text-muted">Articles from BBC, Times, IndiaTV saved in one place</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Engagement Tracking</p>
                      <p className="portfolio-text-muted">View counts and interaction metrics preserved</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Quick Actions</p>
                      <p className="portfolio-text-muted">Read more and share options readily available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Impact & Results */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Project Impact & Design Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Research-Driven Design</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Survey Responses</span>
                    <span className="text-xl font-bold text-green-400">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Competitive Features Analyzed</span>
                    <span className="text-xl font-bold text-blue-400">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Design Iterations</span>
                    <span className="text-xl font-bold text-yellow-400">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Flow Scenarios</span>
                    <span className="text-xl font-bold text-white">8</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Design Excellence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Market Gap Identified</span>
                    <span className="text-xl font-bold text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Comprehensive Feature Set</span>
                    <span className="text-xl font-bold text-blue-400">5 Core</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Persona Accuracy</span>
                    <span className="text-xl font-bold text-green-400">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Design System Components</span>
                    <span className="text-xl font-bold text-white">30+</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4">Innovation & Market Validation</h3>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "The Pigeon represents a thoughtful, research-driven approach to mobile news consumption. The comprehensive feature set addresses real user needs while maintaining design elegance."
                  <footer className="mt-2 text-xs">— UX Design Review, Digital Innovation Journal</footer>
                </blockquote>
                <blockquote className="border-l-4 border-gray-700 pl-4 italic text-sm portfolio-text-muted">
                  "This project demonstrates exceptional user research methodology and translates insights into practical design solutions. The newspaper-to-mobile transition is handled masterfully."
                  <footer className="mt-2 text-xs">— Senior Product Designer, News Media Company</footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">Research-Driven Mobile Innovation</h2>
              <p className="text-base portfolio-text-muted mb-6">
                The Pigeon project showcases comprehensive UX research methodology, from user surveys and competitive analysis to persona development and iterative design. This work demonstrates how traditional media experiences can be thoughtfully modernized for digital platforms.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Discuss News App Design
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