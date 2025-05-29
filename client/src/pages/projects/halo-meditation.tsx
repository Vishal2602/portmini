import { useEffect, useState } from "react";
import { Link } from "wouter";
import GradientSymbols from "@/components/GradientSymbols";

export default function HaloMeditationProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('scrollable-main')) {
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight - target.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    const scrollableElement = document.querySelector('.scrollable-main');
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
      return () => scrollableElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="block md:hidden bg-black border-b border-gray-800 p-4 sticky top-0 z-50">
        <Link href="/" className="portfolio-hover inline-block mb-2 text-sm">
          ← Back to Portfolio
        </Link>
        <h1 className="text-xl font-normal">HALO Meditation App</h1>
        <p className="text-sm portfolio-text-muted">Create a halo of positivity</p>
      </div>

      {/* Fixed Left Sidebar - Hidden on mobile */}
      <aside className="hidden md:block w-80 lg:w-96 md:fixed left-0 top-0 h-full flex flex-col">
        <section className="flex-1 p-6 lg:p-8 overflow-y-auto scrollable-sidebar">
          <div className="animate-fade-in">
            <Link href="/" className="portfolio-hover inline-block mb-8">
              ← Back to Portfolio
            </Link>
            
            <h1 className="text-3xl lg:text-4xl font-normal mb-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              HALO Meditation App
            </h1>
            <p className="text-lg portfolio-text-muted mb-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Create a halo of positivity
            </p>
            
            <div className="space-y-4 text-sm animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div>
                <h3 className="font-medium mb-2">Project Type</h3>
                <p className="portfolio-text-muted">Mobile App UX/UI Design</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Duration</h3>
                <p className="portfolio-text-muted">6 weeks</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Role</h3>
                <p className="portfolio-text-muted">UX Designer, UI Designer, User Researcher</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Key Features</h3>
                <ul className="portfolio-text-muted space-y-1">
                  <li>• Free meditation platform</li>
                  <li>• Live instructor sessions</li>
                  <li>• Personalized sound journeys</li>
                  <li>• Interactive onboarding</li>
                </ul>
              </div>
            </div>
          </div>
          
          <GradientSymbols />
        </section>
      </aside>

      {/* Main Content - Scrollable */}
      <main className="flex-1 w-full md:ml-80 lg:ml-96 overflow-y-auto px-4 md:px-6 lg:px-8 md:pl-16 scrollable-main relative">
        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-white transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="py-6 md:py-8 max-w-4xl">
          {/* Project Overview */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">Project Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Vision Statement</h3>
                <p className="text-base portfolio-text-muted leading-relaxed">
                  HALO is a meditation and relaxation app designed to help users manage stress, improve focus, and sleep better through calming audio experiences and live instructor-led sessions. Unlike other wellness apps, HALO is entirely free and emphasizes accessibility, interaction, and variety in relaxation techniques.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded">
                <h4 className="font-medium mb-4">Core Value Proposition</h4>
                <p className="text-sm portfolio-text-muted mb-4">
                  "HALO is a one-stop solution for peace of mind. Users can find new ways to relax while engaging in live sessions and personal growth."
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="font-medium mb-1">Accessibility First</p>
                    <p className="portfolio-text-muted">Completely free platform - peace of mind has no price</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Live Community</p>
                    <p className="portfolio-text-muted">Real-time instructor sessions and interactive features</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Personalized Journey</p>
                    <p className="portfolio-text-muted">Curated sound experiences tailored to individual needs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem & Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Problem & Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">The Challenge</h3>
                <div className="bg-red-900/20 p-4 rounded mb-4">
                  <p className="text-sm portfolio-text-muted mb-3">
                    "To make an app to help people relax, sleep, reduce stress and anxiety, or just listen to relaxing sounds. The app should be completely free, as peace of mind does not have a price."
                  </p>
                </div>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Modern life creates chronic stress and sleep issues</li>
                  <li>• Most meditation apps are locked behind paywalls</li>
                  <li>• Limited personalization in existing solutions</li>
                  <li>• Lack of real-time interaction and community features</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Our Solution</h3>
                <div className="bg-green-900/20 p-4 rounded mb-4">
                  <p className="text-sm portfolio-text-muted">
                    HALO fills the gap with interactivity + live features + no paywalls, creating a standout value proposition in the wellness app market.
                  </p>
                </div>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Guided and unguided meditation sessions</li>
                  <li>• Nature and calming sounds library</li>
                  <li>• Personalized sound journeys</li>
                  <li>• Live instructor-led sessions</li>
                  <li>• Interactive and intuitive onboarding</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research & Competitive Analysis */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Research & Competitive Analysis</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Market Landscape</h3>
                <p className="text-sm portfolio-text-muted mb-6">
                  Analyzed leading meditation and wellness apps to identify market gaps and opportunities for differentiation. The research revealed significant limitations in accessibility and community features.
                </p>

                <div className="bg-gray-900 p-6 rounded">
                  <h4 className="font-medium mb-4">Competitive Feature Comparison</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 pr-4">Feature</th>
                          <th className="text-center py-2 px-2">Calm</th>
                          <th className="text-center py-2 px-2">Headspace</th>
                          <th className="text-center py-2 px-2">Aura</th>
                          <th className="text-center py-2 px-2">Insight Timer</th>
                          <th className="text-center py-2 px-2">Oak</th>
                          <th className="text-center py-2 px-2 text-orange-400 font-medium">HALO</th>
                        </tr>
                      </thead>
                      <tbody className="portfolio-text-muted">
                        <tr className="border-b border-gray-800">
                          <td className="py-2 pr-4">Free Access</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2 text-orange-400">✅</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 pr-4">Guided Meditations</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2 text-orange-400">✅</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 pr-4">Live Sessions</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2 text-orange-400">✅</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 pr-4">Relaxing Sounds</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2 text-orange-400">✅</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 pr-4">Reminders</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">✅</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2 text-orange-400">✅</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Interactivity</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2">❌</td>
                          <td className="text-center py-2 px-2 text-orange-400">✅</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Personas */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">User Personas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded">
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Dan Bush</h3>
                  <p className="text-sm portfolio-text-muted">28, Art Designer • New York, NY</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Goals</h4>
                    <ul className="portfolio-text-muted space-y-1">
                      <li>• Relax after intense work sessions</li>
                      <li>• Sleep better and improve focus</li>
                      <li>• Find quick stress relief solutions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Frustrations</h4>
                    <ul className="portfolio-text-muted space-y-1">
                      <li>• Struggles with sleep quality</li>
                      <li>• Unsure how to start meditating</li>
                      <li>• Limited time for self-care</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Personality</h4>
                    <p className="portfolio-text-muted">Energetic, ambitious, tech-savvy</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Preferred Apps</h4>
                    <p className="portfolio-text-muted">Slack, Netflix, Spotify</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded">
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Jenna Max</h3>
                  <p className="text-sm portfolio-text-muted">28, Consultant • London, England</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Goals</h4>
                    <ul className="portfolio-text-muted space-y-1">
                      <li>• Meditate regularly and consistently</li>
                      <li>• Find inner peace amid travel</li>
                      <li>• Build mindfulness habits</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Frustrations</h4>
                    <ul className="portfolio-text-muted space-y-1">
                      <li>• Travel disrupts meditation routine</li>
                      <li>• Forgets to practice regularly</li>
                      <li>• Needs flexibility in scheduling</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Personality</h4>
                    <p className="portfolio-text-muted">Introvert, optimistic, routine-oriented</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Preferred Apps</h4>
                    <p className="portfolio-text-muted">Facebook, Amazon, Calendar</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-900/20 p-4 rounded">
              <p className="text-sm portfolio-text-muted">
                <strong>Key Insight:</strong> Users are busy professionals seeking calm through technology. HALO meets them where they are: mobile-first, intuitive, and designed for quick habit formation.
              </p>
            </div>
          </section>

          {/* User Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">User Flow & Information Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Core User Journey</h3>
                <p className="text-sm portfolio-text-muted mb-6">
                  The flow is minimal, user-centered, and encourages rapid habit formation through strategic onboarding and intuitive navigation.
                </p>
                
                <div className="bg-gray-900 p-6 rounded">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-medium">1</div>
                      <div>
                        <h4 className="font-medium">Splash Screen</h4>
                        <p className="text-xs portfolio-text-muted">Brand introduction and app loading</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-medium">2</div>
                      <div>
                        <h4 className="font-medium">Interactive Onboarding</h4>
                        <p className="text-xs portfolio-text-muted">3-screen journey explaining core features and benefits</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-medium">3</div>
                      <div>
                        <h4 className="font-medium">Authentication</h4>
                        <p className="text-xs portfolio-text-muted">Simple sign in/sign up process</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-medium">4</div>
                      <div>
                        <h4 className="font-medium">Goal Setting & Validation</h4>
                        <p className="text-xs portfolio-text-muted">Personalized wellness goals and preferences</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-medium">5</div>
                      <div>
                        <h4 className="font-medium">Main Navigation</h4>
                        <p className="text-xs portfolio-text-muted">Access to core app features and content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-normal mb-4">Navigation Structure</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Home</h4>
                    <ul className="space-y-1 portfolio-text-muted text-xs">
                      <li>• Recommendations</li>
                      <li>• Scheduled events</li>
                      <li>• Progress tracking</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Live</h4>
                    <ul className="space-y-1 portfolio-text-muted text-xs">
                      <li>• Real-time sessions</li>
                      <li>• Instructor-led classes</li>
                      <li>• Community features</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Categories</h4>
                    <ul className="space-y-1 portfolio-text-muted text-xs">
                      <li>• Sleep</li>
                      <li>• Music</li>
                      <li>• Relax</li>
                      <li>• Yoga</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Search</h4>
                    <ul className="space-y-1 portfolio-text-muted text-xs">
                      <li>• Find sound types</li>
                      <li>• Filter by duration</li>
                      <li>• Instructor search</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-2">Profile</h4>
                    <ul className="space-y-1 portfolio-text-muted text-xs">
                      <li>• User preferences</li>
                      <li>• Favorites</li>
                      <li>• Progress stats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Design Process & Methodology</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Design Sprint Approach</h3>
                <p className="text-sm portfolio-text-muted mb-6">
                  A user-first design sprint approach using quick iterations, handwritten ideations, and visual validation to ensure the final product meets user needs and business objectives.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-3">Research Phase</h4>
                    <ul className="space-y-2 text-xs portfolio-text-muted">
                      <li>• Market analysis</li>
                      <li>• Competitor research</li>
                      <li>• User interviews</li>
                      <li>• Pain point identification</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-3">Design Phase</h4>
                    <ul className="space-y-2 text-xs portfolio-text-muted">
                      <li>• Persona creation</li>
                      <li>• User flow mapping</li>
                      <li>• Wireframe development</li>
                      <li>• Visual design system</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-medium mb-3">Validation Phase</h4>
                    <ul className="space-y-2 text-xs portfolio-text-muted">
                      <li>• Figma prototyping</li>
                      <li>• User testing</li>
                      <li>• Iteration cycles</li>
                      <li>• Final refinements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UI/UX Design Style */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Visual Design System</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Design Philosophy</h3>
                <p className="text-sm portfolio-text-muted mb-6">
                  The visual design reflects calmness and serenity while maintaining modern appeal and intuitive usability. Every element is crafted to promote relaxation and ease of use.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Color & Theme</h4>
                    <div className="bg-gray-900 p-4 rounded mb-4">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-6 h-6 bg-purple-500 rounded"></div>
                        <div className="w-6 h-6 bg-pink-400 rounded"></div>
                        <div className="w-6 h-6 bg-purple-300 rounded"></div>
                      </div>
                      <p className="text-xs portfolio-text-muted">
                        Soothing purples and pinks create a calming atmosphere that encourages relaxation and mindfulness.
                      </p>
                    </div>
                    
                    <h4 className="font-medium mb-4">Visual Elements</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Soft shadows and modern gradients</li>
                      <li>• 3D avatars for friendly appeal</li>
                      <li>• Rounded corners throughout</li>
                      <li>• Intuitive iconography</li>
                      <li>• Calm, subtle animations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4">Layout & Structure</h4>
                    <div className="bg-gray-900 p-4 rounded mb-4">
                      <p className="text-xs portfolio-text-muted mb-3">
                        Card-based modular UI system allows for flexible content organization and easy navigation.
                      </p>
                    </div>
                    
                    <h4 className="font-medium mb-4">User Experience Principles</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Minimalist approach to reduce cognitive load</li>
                      <li>• Consistent interaction patterns</li>
                      <li>• Accessibility-first design decisions</li>
                      <li>• Progressive disclosure of information</li>
                      <li>• Feedback-rich interactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Differentiators */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Key Differentiators & Innovation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded">
                <h3 className="text-lg font-medium mb-3">🌟 Completely Free</h3>
                <p className="text-sm portfolio-text-muted">
                  Fully unlocked platform with no premium tiers or paywalls. Peace of mind should be accessible to everyone.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded">
                <h3 className="text-lg font-medium mb-3">🧘‍♀️ Live Sessions</h3>
                <p className="text-sm portfolio-text-muted">
                  Real-time instructor-led sessions create community connection and guided learning experiences.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded">
                <h3 className="text-lg font-medium mb-3">🎧 Curated Journeys</h3>
                <p className="text-sm portfolio-text-muted">
                  Highly personalized sound journeys adapted to individual preferences and wellness goals.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded">
                <h3 className="text-lg font-medium mb-3">👥 Interactive Onboarding</h3>
                <p className="text-sm portfolio-text-muted">
                  Goal-setting and preference validation ensure personalized experiences from day one.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded">
                <h3 className="text-lg font-medium mb-3">📅 Smart Scheduling</h3>
                <p className="text-sm portfolio-text-muted">
                  Personalized schedules and intelligent reminders help build consistent mindfulness habits.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded">
                <h3 className="text-lg font-medium mb-3">🌈 Wellness Ecosystem</h3>
                <p className="text-sm portfolio-text-muted">
                  Comprehensive platform combining meditation, sleep aids, focus tools, and relaxation techniques.
                </p>
              </div>
            </div>
          </section>

          {/* Project Impact & Results */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Project Impact & Design Achievements</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Design Innovation</h3>
                <div className="bg-gray-900 p-6 rounded">
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">User-Centered Approach</h4>
                      <ul className="space-y-1 portfolio-text-muted">
                        <li>• Comprehensive user research and persona development</li>
                        <li>• Iterative design process with user feedback integration</li>
                        <li>• Accessibility-first design principles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Market Differentiation</h4>
                      <ul className="space-y-1 portfolio-text-muted">
                        <li>• First fully-free meditation app with live features</li>
                        <li>• Unique combination of community and personalization</li>
                        <li>• Innovative onboarding and goal-setting experience</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Technical Excellence</h4>
                      <ul className="space-y-1 portfolio-text-muted">
                        <li>• Scalable design system for future expansion</li>
                        <li>• Cross-platform compatibility considerations</li>
                        <li>• Performance-optimized interface design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Key Learnings & Insights</h3>
                <div className="bg-purple-900/20 p-6 rounded">
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-3">User Behavior Insights</h4>
                      <ul className="space-y-2 portfolio-text-muted">
                        <li>• Users prefer short, guided sessions over long meditations</li>
                        <li>• Live community features significantly increase engagement</li>
                        <li>• Personalization is crucial for habit formation</li>
                        <li>• Free access removes barriers to wellness adoption</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Design Process Learnings</h4>
                      <ul className="space-y-2 portfolio-text-muted">
                        <li>• Competitive analysis revealed significant market gaps</li>
                        <li>• User personas guided feature prioritization effectively</li>
                        <li>• Iterative prototyping improved usability significantly</li>
                        <li>• Visual design impacts user perception of app credibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Final Thoughts & Vision</h2>
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded">
              <p className="text-lg portfolio-text-muted mb-6 leading-relaxed">
                "HALO is more than a meditation app—it's a wellness ecosystem built with empathy and accessibility in mind. Its unique offering lies in merging community-led live features with a personalized and peaceful interface."
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Accessibility Impact</h4>
                  <p className="portfolio-text-muted">
                    By removing financial barriers, HALO democratizes access to mental wellness tools and creates an inclusive platform for all users.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Community Building</h4>
                  <p className="portfolio-text-muted">
                    Live instructor sessions foster real connections and shared experiences, making meditation a social and supportive activity.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Future Vision</h4>
                  <p className="portfolio-text-muted">
                    HALO establishes a foundation for expanding mental wellness features and building a comprehensive health ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}