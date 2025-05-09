import { useEffect, useState } from 'react';
import {getDogs} from '../utils/api'; // Import the getDogs function to fetch dog data from the PetFinder API
import DogCard from './DogCard'; // Import the DogCard component to show each dog

function DogList({favorites, setFavorites}) { 
  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
    const newDogs = await getDogs();
    setDogs(newDogs);
  };

  // Fetch dogs on initial load
  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="dogList">
      <button id="refresh-dogs" className="refresh" onClick={fetchDogs}>See a New List of Dogs!</button>
      <br />
      {dogs.map((dog) => (<DogCard key={dog.id} dog={dog} favorites={favorites} setFavorites={setFavorites} />))}
    </div>
  );
}

export default DogList;