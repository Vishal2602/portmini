import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Alexandra Moore - Senior Producer Portfolio";
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-start p-6 lg:p-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-normal mb-1">
            Alexandra Moore,
          </h1>
          <p className="text-lg portfolio-text-muted">Senior Producer</p>
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <section id="about" className="border-t portfolio-border pt-8 mb-8">
              <p className="text-base max-w-md leading-relaxed mb-8">
                A seasoned Senior Producer with 10+ years of experience, I excel in leading 
                complex marketing and design projects from concept to completion.
              </p>
              
              <div className="space-y-2 text-sm">
                <p>
                  <a 
                    href="mailto:hello@figma.com" 
                    className="portfolio-text-muted portfolio-hover"
                  >
                    hello@figma.com
                  </a>
                  <span className="portfolio-text-muted"> ↗</span>
                </p>
                <p>
                  <a 
                    href="tel:+15551234567" 
                    className="portfolio-text-muted portfolio-hover"
                  >
                    (555) 123-4567
                  </a>
                  <span className="portfolio-text-muted"> ↗</span>
                </p>
                <p>
                  <a 
                    href="https://linkedin.com/in/alexandra-moore" 
                    className="portfolio-text-muted portfolio-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <span className="portfolio-text-muted"> ↗</span>
                </p>
              </div>
            </section>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Experience Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Experience</h2>
              
              {/* Senior Producer - Creative Agency XYZ */}
              <div className="mb-12">
                <h3 className="text-lg font-normal mb-1">Senior Producer</h3>
                <p className="text-sm portfolio-text-muted mb-1">
                  Creative Agency XYZ <span>↗</span>
                </p>
                <p className="text-sm portfolio-text-muted mb-1">June 2022 - Present</p>
                <p className="text-sm portfolio-text-muted mb-6">Remote & New York, NY</p>
                
                <ul className="space-y-3 text-sm">
                  <li>
                    • Seamlessly facilitate diverse creative experiences; from immersive 
                    installations to cinematic narratives. A catalyst for collaboration 
                    across all mediums.
                  </li>
                  <li>
                    • Clients include: Lunethrix, Driftwell, Qyra, Forgeland and more.
                  </li>
                </ul>
              </div>

              {/* Senior Producer - Five Studios */}
              <div className="mb-12">
                <h3 className="text-lg font-normal mb-1">Senior Producer</h3>
                <p className="text-sm portfolio-text-muted mb-1">
                  Five Studios <span>↗</span>
                </p>
                <p className="text-sm portfolio-text-muted mb-1">December 2021 - June 2022</p>
                <p className="text-sm portfolio-text-muted mb-6">New York, NY</p>
                
                <ul className="space-y-3 text-sm">
                  <li>
                    • Orchestrated the creation of integrated video, motion, and photo 
                    content for multi-platform marketing campaigns, ensuring seamless 
                    execution and brand alignment.
                  </li>
                  <li>
                    • Directed all phases of production operations (pre-production, 
                    production, post-production), meticulously managing budgets, contracts, 
                    and legal requirements to deliver projects on time and within quality standards.
                  </li>
                  <li>
                    • Strategically developed and managed production schedules, creative 
                    strategies, and talent relations, optimizing resources to deliver 
                    high-quality content within budget parameters.
                  </li>
                  <li>
                    • Clients include: Nestiva, Zemrex, Pollenate, Vireo and more.
                  </li>
                </ul>
              </div>

              {/* Content Producer - Creative Hub Studio */}
              <div className="mb-12">
                <h3 className="text-lg font-normal mb-1">Content Producer</h3>
                <p className="text-sm portfolio-text-muted mb-1">
                  Creative Hub Studio <span>↗</span>
                </p>
                <p className="text-sm portfolio-text-muted mb-1">October 2019 - March 2019</p>
                <p className="text-sm portfolio-text-muted mb-6">Los Angeles, CA</p>
                
                <ul className="space-y-3 text-sm">
                  <li>
                    • Facilitated clear and efficient communication across cross-functional 
                    teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration 
                    and project alignment.
                  </li>
                  <li>
                    • Proactively identified and integrated industry trends, emerging 
                    technologies, and cultural insights to enhance creative output and 
                    maintain brand relevance.
                  </li>
                  <li>
                    • Clients include: Lunethrix, Forgeland and more.
                  </li>
                </ul>
              </div>
            </section>

            {/* Skills Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Skills</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-base font-normal mb-4">Project Management</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Budget Management & Forecasting</li>
                    <li>• Timeline Development & Execution</li>
                    <li>• Vendor & Contract Negotiation</li>
                    <li>• On-Site Production Management</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-4">Strategic & Creative Oversight</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Creative Strategy Development</li>
                    <li>• Talent Relations & Management</li>
                    <li>• Creative Direction Oversight</li>
                    <li>• Brand Alignment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-4">Communication & Collaboration</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Cross-Functional Team Leadership</li>
                    <li>• Client Relationship Management</li>
                    <li>• Stakeholder Communication</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Education</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-base font-normal mb-2">
                    University of California, Los Angeles (UCLA)
                  </p>
                </div>
                <div>
                  <p className="text-base font-normal mb-1">
                    Bachelor of Fine Arts in Graphic Design
                  </p>
                  <p className="text-sm portfolio-text-muted">Minor: Studio Photography</p>
                </div>
              </div>
            </section>

            {/* Recommendations Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Recommendations</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm italic mb-2">
                    "Alexandra brings sunshine to creative teams. Her optimism, problem-solving, 
                    and clear communication drive success."
                  </p>
                  <p className="text-sm portfolio-text-muted">Client, Driftwell</p>
                </div>
                
                <div>
                  <p className="text-sm italic mb-2">
                    "Alexandra is hungry to tackle new challenges. She's delightful with 
                    clients and can diffuse a tense room with her laugh."
                  </p>
                  <p className="text-sm portfolio-text-muted">
                    Creative Director, Creative Agency XYZ
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="border-t portfolio-border pt-8 mb-16">
              <h2 className="text-xl font-normal mb-8">Certifications</h2>
              
              <p className="text-sm">
                Safe Sets International - COVID-19 Level Production Safety, 2020
              </p>
            </section>
          </main>
        </div>
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
