export default function GradientSymbols() {
  return (
    <div className="fixed left-6 bottom-20 space-y-4 z-30 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'both' }}>
      {/* Star */}
      <div className="relative w-8 h-8 animate-float" style={{ animationDelay: '0s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-yellow-300 to-green-300 opacity-80 rotate-0 star-shape"></div>
      </div>
      
      {/* Triangle */}
      <div className="relative w-8 h-8 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-7 border-l-transparent border-r-transparent triangle-gradient opacity-80" 
             style={{ borderBottomWidth: '28px' }}></div>
      </div>
      
      {/* Flower/Cross */}
      <div className="relative w-8 h-8 animate-float" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-green-300 to-pink-300 opacity-80 flower-shape"></div>
      </div>
      
      {/* Cloud/Blob */}
      <div className="relative w-8 h-8 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-300 opacity-80 blob-shape"></div>
      </div>
    </div>
  );
}