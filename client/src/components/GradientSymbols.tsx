import starImage from "@assets/tl(12).png";
import triangleImage from "@assets/tl(24).png";
import flowerImage from "@assets/tl(2).png";
import blobImage from "@assets/tl(9).png";

export default function GradientSymbols() {
  return (
    <div className="flex space-x-6 mt-8 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
      {/* Star */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0s' }}>
        <img 
          src={starImage} 
          alt="Star symbol" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>
      
      {/* Triangle */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0.2s' }}>
        <img 
          src={triangleImage} 
          alt="Triangle symbol" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>
      
      {/* Flower */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0.4s' }}>
        <img 
          src={flowerImage} 
          alt="Flower symbol" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>
      
      {/* Blob */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0.6s' }}>
        <img 
          src={blobImage} 
          alt="Blob symbol" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>
    </div>
  );
}