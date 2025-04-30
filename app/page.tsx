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
    // <div className="p-4 pt-12">
    <div className="min-h-screen bg-black text-white p-6">
      {/* <h1 className="text-3xl font-bold text-center mb-4 pt-8">Star Wars Characters</h1> */}

      <h1 className="text-3xl md:text-4xl font-bold text-center text-white-800 mb-6">
  <span className="animate-typing inline-block overflow-hidden whitespace-nowrap border-r-2 border-gray-900 pr-2">
    Star Wars Characters
  </span>
</h1>


      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} onClick={() => setSelectedCharacter(char)} />
        ))}
      </div>

      {/* <div className="flex justify-center mt-6 space-x-4">
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
      </div> */}

<div className="flex justify-center mt-16 space-x-6">
  <button
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
    className="relative inline-flex items-center px-6 py-2 rounded-full 
      bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold 
      shadow-lg hover:scale-105 hover:shadow-indigo-400 transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">⬅</span>
    Previous
  </button>
  <span className="text-lg font-semibold text-gray-700">
    Page <span className="text-indigo-600">{page}</span>
  </span>
  <button
    onClick={() => setPage(page + 1)}
    className="relative inline-flex items-center px-6 py-2 rounded-full 
      bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold 
      shadow-lg hover:scale-105 hover:shadow-pink-400 transition-all duration-300
      group"
  >
    Next
    {/* <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">➡</span> */}
  </button>
</div>


      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
}
