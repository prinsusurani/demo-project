'user client';

interface CharacterCardProps {
  character: any;
  onClick: () => void;
}

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <div
  onClick={onClick}
  className="group p-6 py-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
             rounded-2xl shadow-lg text-white text-center cursor-pointer
             transform transition-transform duration-300 hover:scale-105 hover:rotate-2
             hover:shadow-2xl hover:shadow-purple-500/40"
>
  <h2 className="text-lg font-bold group-hover:underline">{character.name}</h2>
</div>
  );
}
