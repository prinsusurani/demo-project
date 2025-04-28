'use client';

import { formatDate } from '../utils/formatDate';

interface CharacterModalProps {
  character: any;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
        <p>Height: {character.height / 100} meters</p>
        <p>Mass: {character.mass} kg</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Appears in {character.films?.length || 0} films</p>
        <p>Created on: {character.created ? formatDate(character.created) : 'N/A'}</p>

        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}
