'use client';

interface CharacterCardProps {
  character: any;
  onClick: () => void;
}

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <div 
      className="p-4 bg-white text-black shadow-lg rounded-md hover:scale-105 transition-transform cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-center">{character.name}</h2>
    </div>
  );
}
