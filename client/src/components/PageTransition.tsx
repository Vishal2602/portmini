import { useEffect, useState } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsNavigating(true);
      setTransitionStage("exit");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "exit") {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("enter");
        // Add slight delay before marking navigation complete
        setTimeout(() => setIsNavigating(false), 100);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  // Scroll to top on route change
  useEffect(() => {
    if (transitionStage === "enter" && !isNavigating) {
      const scrollableElement = document.querySelector('.scrollable-main');
      if (scrollableElement) {
        scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [transitionStage, isNavigating]);

  return (
    <>
      {/* Loading overlay for smooth transitions */}
      {isNavigating && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-200" />
      )}
      
      <div 
        className={`page-transition transition-all duration-400 ease-out ${
          transitionStage === "exit" 
            ? "opacity-0 translate-y-6 scale-96" 
            : "opacity-100 translate-y-0 scale-100"
        } ${className}`}
        style={{
          transformOrigin: "center top",
          backfaceVisibility: "hidden",
          perspective: "1000px"
        }}
      >
        {children}
      </div>
    </>
  );
}