// Interface untuk data pemain HIMATA
export interface Player {
  name: string;
  position: string;
  number: number;
  image: string;
}

// Props untuk komponen PlayerCard
export interface PlayerCardProps {
  player: Player;
}
