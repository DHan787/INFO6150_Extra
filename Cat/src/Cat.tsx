/*
 * @Author: Jiang Han
 * @Date: 2025-04-18 17:06:28
 * @Description: 
 */
// src/Cat.tsx
import { useEffect, useState } from 'react';

type CatBreed = {
  id: string;
  name: string;
  origin: string;
  description: string;
};

export default function CatList() {
  const [breeds, setBreeds] = useState<CatBreed[]>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': 'live_EwEKge1Wpqz5PSVHtcmbxYaQr1v8KSg4lAmrb0YHJ5DWYDYq6ZwIpiaspk6VccJV',
      },
    })
      .then((res) => res.json())
      .then((data) => setBreeds(data))
      .catch((err) => console.error('Failed to fetch breeds', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cat Breeds</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id} style={{ marginBottom: '1rem' }}>
            <h2>{breed.name}</h2>
            <p><strong>Origin:</strong> {breed.origin}</p>
            <p>{breed.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}