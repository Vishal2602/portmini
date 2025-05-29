import { useEffect, useState } from "react";
import { Link } from "wouter";
import FeedbackWidget from "@/components/FeedbackWidget";
import GradientSymbols from "@/components/GradientSymbols";

export default function AdaptivePromptProject() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    document.title = "Adaptive Prompt Engineering Framework | Vishal Sunil Kumar";
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
              <h1 className="text-4xl lg:text-5xl font-normal mb-4">Adaptive Prompt Engineering Framework</h1>
              <p className="text-xl portfolio-text-muted mb-6">Reinforcement Learning System for Dynamic LLM Optimization</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Machine Learning</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">TypeScript</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">AWS SageMaker</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Reinforcement Learning</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Python</span>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Adaptive Prompt Engineering Framework represents a breakthrough in LLM optimization, utilizing reinforcement learning to dynamically improve prompt effectiveness by 25%. This system combines cutting-edge machine learning techniques with practical deployment considerations to deliver a production-ready solution that has reduced inference costs by 30% across multiple environments.
            </p>
            <p className="text-base portfolio-text-muted leading-relaxed">
              Built with a modular TypeScript architecture and deployed on AWS SageMaker with auto-scaling capabilities, the framework demonstrates how academic research can be successfully translated into real-world applications that drive both performance improvements and cost savings.
            </p>
          </section>

          {/* Technical Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Technical Architecture</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Core Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Prompt Generator Module</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• TypeScript-based modular architecture</li>
                      <li>• Template-driven prompt construction</li>
                      <li>• Dynamic parameter injection</li>
                      <li>• Context-aware prompt adaptation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">RL/GA Optimizer</h4>
                    <ul className="space-y-2 text-sm portfolio-text-muted">
                      <li>• Hybrid reinforcement learning approach</li>
                      <li>• Genetic algorithm integration</li>
                      <li>• Multi-objective optimization</li>
                      <li>• Real-time performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Algorithm Design</h3>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Reinforcement Learning Pipeline</h4>
                  <div className="bg-gray-800 p-4 rounded text-xs text-green-400 mb-4">
                    <p className="font-mono">
                      Key components: Q-learning network, genetic optimizer, reward function, and experience buffer for training the adaptive prompt system.
                    </p>
                  </div>
                  <p className="text-sm portfolio-text-muted">
                    The system uses a dual-optimization approach, combining Q-learning for immediate feedback and genetic algorithms for long-term evolutionary improvement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Performance Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Optimization Improvements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">LLM Performance Increase</span>
                    <span className="text-xl font-bold text-green-400">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Inference Cost Reduction</span>
                    <span className="text-xl font-bold text-green-400">-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Quality Score</span>
                    <span className="text-xl font-bold text-blue-400">8.7/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Production Deployments</span>
                    <span className="text-xl font-bold text-white">5+</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Technical Benchmarks</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Optimization Time</span>
                    <span className="text-xl font-bold text-yellow-400">~2.3s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Memory Efficiency</span>
                    <span className="text-xl font-bold text-green-400">+40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Convergence Rate</span>
                    <span className="text-xl font-bold text-blue-400">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Scalability Factor</span>
                    <span className="text-xl font-bold text-white">10x</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Implementation Highlights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">AWS SageMaker Integration</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Deployed the framework on AWS SageMaker with custom auto-scaling policies that dynamically adjust compute resources based on optimization workload and performance requirements.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-blue-400">
                  <pre>
                    {`# SageMaker endpoint configuration
endpoint_config = {
  "EndpointConfigName": "adaptive-prompt-optimizer-v2",
  "ProductionVariants": [{
    "ModelName": "prompt-optimization-model",
    "InstanceType": "ml.g4dn.xlarge",
    "InitialInstanceCount": 1,
    "VariantName": "primary-variant",
    "InitialVariantWeight": 1
  }]
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-normal mb-4">Genetic Algorithm Enhancement</h3>
                <p className="text-sm portfolio-text-muted mb-4">
                  Implemented a hybrid approach where genetic algorithms provide population-based exploration while reinforcement learning enables exploitation of promising prompt modifications.
                </p>
                <div className="bg-gray-900 p-4 rounded text-xs text-purple-400">
                  <pre>
                    {`function evolvePromptPopulation(population, fitnessScores) {
  const elite = selectElite(population, fitnessScores, 0.2);
  const crossover = performCrossover(elite, 0.6);
  const mutated = applyMutation(crossover, 0.1);
  return combinePopulations(elite, mutated);
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Research Impact */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Research & Open Source Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-normal mb-4">Academic Contributions</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Novel hybrid RL/GA approach to prompt optimization</li>
                  <li>• Empirical analysis of prompt effectiveness metrics</li>
                  <li>• Production deployment case studies</li>
                  <li>• Cost-benefit analysis framework for LLM optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Open Source Release</h3>
                <ul className="space-y-3 text-sm portfolio-text-muted">
                  <li>• Framework core released under MIT license</li>
                  <li>• Comprehensive documentation and tutorials</li>
                  <li>• Community contributions and extensions</li>
                  <li>• Integration guides for popular ML platforms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Future Development */}
          <section className="mb-16">
            <h2 className="text-2xl font-normal mb-6">Future Roadmap</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal mb-4">Technical Enhancements</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Multi-modal prompt optimization (text, image, audio)</li>
                  <li>• Federated learning for privacy-preserving optimization</li>
                  <li>• Integration with emerging LLM architectures</li>
                  <li>• Real-time A/B testing framework</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-4">Platform Expansion</h3>
                <ul className="space-y-2 text-sm portfolio-text-muted">
                  <li>• Google Cloud AI Platform integration</li>
                  <li>• Azure Machine Learning compatibility</li>
                  <li>• Edge computing deployment options</li>
                  <li>• Enterprise security and compliance features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t portfolio-border pt-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal mb-4">Explore This Framework</h2>
              <p className="text-base portfolio-text-muted mb-6">
                The Adaptive Prompt Engineering Framework demonstrates the practical application of advanced ML research. I'm excited to discuss implementation details, performance optimizations, and potential collaborations.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:vsunilkumar@umassd.edu" 
                  className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  Technical Discussion
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