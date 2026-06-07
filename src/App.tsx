import { useState } from 'react';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import type { Player } from './types';


// Data pemain HIMATA dengan foto yang digenerate secara lokal
const players: Player[] = [
  {
    name: "Fathir Akbar",
    position: "Striker",
    number: 9,
    image: "/images/Fathir.png"
  },
  {
    name: "Fabio Aimar",
    position: "Gelandang",
    number: 5,
    image: "/images/Fabio.png"
  },
  {
    name: "Dea Sucinta",
    position: "Bek",
    number: 8,
    image: "/images/Dea.png"
  },
  {
    name: "Pupu Erika",
    position: "Kiper",
    number: 1,
    image: "/images/Pupu.png"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('Semua');

  const positions = ['Semua', 'Striker', 'Gelandang', 'Bek', 'Kiper'];

  // Logic filter gabungan
  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === 'Semua' || player.position.toLowerCase() === selectedPosition.toLowerCase();
    return matchesSearch && matchesPosition;
  });

  const handleReset = () => {
    setSearchTerm('');
    setSelectedPosition('Semua');
  };

  return (
    <div className="min-h-screen bg-rmadrid-light flex flex-col items-center">
      {/* Komponen Header */}
      <Header />

      {/* Konten Utama */}
      <main className="max-w-7xl w-full px-6 py-12 flex-grow">
        {/* Panel Info & Input Pencarian */}
        <div className="mb-6 pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-rmadrid-navy">
              Susunan Pemain HIMATA
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Untuk bermain di IF Cup 2026.
            </p>
          </div>

          {/* Form Pencarian */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow sm:w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Cari nama pemain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rmadrid-gold/50 focus:border-rmadrid-gold transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tombol Posisi */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center sm:justify-start">
          {positions.map((pos) => {
            const isActive = selectedPosition === pos;
            return (
              <button
                key={pos}
                onClick={() => setSelectedPosition(pos)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'bg-rmadrid-navy text-white shadow-md border border-rmadrid-navy'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-xs'
                }`}
              >
                {pos}
              </button>
            );
          })}
        </div>

        {/* Grid Responsive atau Fallback Tampilan Kosong */}
        {filteredPlayers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlayers.map((player) => (
              <PlayerCard 
                key={player.name} 
                player={player} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-white border border-slate-100 rounded-2xl shadow-md max-w-md mx-auto">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Pemain Tidak Ditemukan</h3>
            <p className="text-slate-500 text-sm mb-6">
              Tidak ada hasil untuk "{searchTerm}"{selectedPosition !== 'Semua' && ` di posisi ${selectedPosition}`}.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-rmadrid-navy hover:bg-rmadrid-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              Reset Pencarian & Filter
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-rmadrid-navy text-slate-400 py-8 text-center text-sm border-t border-rmadrid-gold/20">
        <p>© 2026 Himpunan Mahasiswa Tabola Bale</p>
      </footer>
    </div>
  );
}

export default App;
