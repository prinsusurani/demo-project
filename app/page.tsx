'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';

export default function Home() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);

  const fetchCharacters = async (pageNumber = 1) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`);
      console.log('.....res.....');
      
      setCharacters(res.data.results);
    } catch (err) {
      setError('Failed to load characters. Please try again.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Star Wars Characters</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} onClick={() => setSelectedCharacter(char)} />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
          className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button 
          onClick={() => setPage(page + 1)} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>

      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
}
