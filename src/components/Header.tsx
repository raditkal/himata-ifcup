export default function Header() {
  return (
    <header className="glass-header text-white py-12 px-6 relative overflow-hidden shadow-2xl w-full">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase drop-shadow-md">
          KABINET <span className="gold-gradient-text font-black">HIMATA</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-300 font-light tracking-widest uppercase flex items-center gap-2">
          <span className="w-6 h-[1px] bg-rmadrid-gold/60"></span>
          TAHUN 2026
          <span className="w-6 h-[1px] bg-rmadrid-gold/60"></span>
        </p>
      </div>
    </header>
  );
}
