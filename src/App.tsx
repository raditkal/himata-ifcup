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

  return (
    <div className="min-h-screen bg-rmadrid-light flex flex-col items-center">
      {/* Komponen Header */}
      <Header />

      {/* Konten Utama */}
      <main className="max-w-7xl w-full px-6 py-12 flex-grow">
        {/* Panel Info */}
        <div className="mb-10 pb-6 border-b border-slate-200 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-rmadrid-navy">
            Susunan Pemain HIMATA
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Untuk bermain di IF Cup 2026.
          </p>
        </div>

        {/* Grid Responsive (Mobile: 1 kolom, Tablet: 2 kolom, Desktop: 3 kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <PlayerCard 
              key={player.name} 
              player={player} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-rmadrid-navy text-slate-400 py-8 text-center text-sm border-t border-rmadrid-gold/20">
        <p>© 2026 Himpunan Mahasiswa Tabola Bale</p>
      </footer>
    </div>
  );
}

export default App;
