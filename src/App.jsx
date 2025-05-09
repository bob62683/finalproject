import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DogDetails from './pages/DogDetails';
import Favorites from './pages/Favorites';

function App() {
  const [favorites, setFavorites] = useState([]);

  //https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
  useEffect(() => {
    const storedFovorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFovorites) {
      setFavorites(storedFovorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Routes>
      <Route path="/" element={<HomePage favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/dogs/:id" element={<DogDetails favorites={favorites} setFavorites={setFavorites} />} />
    </Routes>
  );
}

export default App;
