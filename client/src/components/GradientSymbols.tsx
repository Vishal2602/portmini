export default function GradientSymbols() {
  return (
    <div className="flex space-x-6 mt-8 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
      {/* Star */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-yellow-300 to-green-300 opacity-90 star-shape"></div>
      </div>
      
      {/* Triangle */}
      <div className="relative w-12 h-12 animate-float flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
        <div className="w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent triangle-gradient opacity-90" 
             style={{ borderBottomWidth: '40px', borderLeftWidth: '20px', borderRightWidth: '20px' }}></div>
      </div>
      
      {/* Flower/Cross */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-green-300 to-pink-300 opacity-90 flower-shape"></div>
      </div>
      
      {/* Cloud/Blob */}
      <div className="relative w-12 h-12 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-300 opacity-90 blob-shape"></div>
      </div>
    </div>
  );
}