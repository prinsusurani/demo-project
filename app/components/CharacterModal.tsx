'use client';

import { formatDate } from '../utils/formatDate';
import * as Dialog from '@radix-ui/react-dialog';
interface CharacterModalProps {
  character: any;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  console.log('character..............',character);
  
  return (
    <Dialog.Root open={!!character} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 backdrop-blur-sm animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-96 rounded-2xl shadow-2xl text-white p-8
          bg-gradient-to-tr from-indigo-600 via-purple-700 to-pink-600
          animate-slideUp transition-all duration-500"
        >
          <Dialog.Title className="text-2xl font-bold mb-4 text-center">
            {character.name}
          </Dialog.Title>
          <div className="space-y-2 text-sm">
            <p><strong>Height:</strong> {character.height / 100} m</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            {/* <p><strong>Created At:</strong> {formattedDate}</p> */}
            <p><strong>Appears in:</strong> {character.films.length} Films</p>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full py-2 rounded-full bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition-all cursor-pointer"
          >
            Close
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
