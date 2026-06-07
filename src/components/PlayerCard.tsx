import type { PlayerCardProps } from '../types';

export default function PlayerCard({ player }: PlayerCardProps) {
  // Menentukan warna badge berdasarkan posisi pemain
  const getPositionStyle = (position: string) => {
    switch (position.toLowerCase()) {
      case 'striker':
        return 'bg-amber-500/10 text-amber-700 border border-amber-500/20';
      case 'bek':
        return 'bg-blue-500/10 text-blue-700 border border-blue-500/20';
      case 'kiper':
        return 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-700 border border-slate-500/20';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative gold-border-glow">

      {/* Bagian Foto Pemain */}
      <div className="relative overflow-hidden aspect-[4/5] bg-slate-100 z-10">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay Vignette Gelap di bagian bawah foto */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        
        {/* Badge Nomor Punggung Bulat pada Foto */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-rmadrid-accent text-rmadrid-navy flex items-center justify-center font-bold text-lg shadow-lg border border-white/20 select-none z-20">
          {player.number}
        </div>
      </div>

      {/* Bagian Informasi Pemain */}
      <div className="p-6 relative z-10 bg-white flex flex-col flex-grow">
        {/* Badge Posisi */}
        <div className="mb-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${getPositionStyle(player.position)}`}>
            {player.position}
          </span>
        </div>

        {/* Nama Pemain */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-rmadrid-navy transition-colors duration-300">
          {player.name}
        </h3>
        
        {/* Footer Card */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>L1</span>
          <span className="w-2 h-2 rounded-full bg-rmadrid-gold group-hover:animate-ping"></span>
        </div>
      </div>
    </div>
  );
}
