import Nav from '../components/Nav';// Import the Nav component to show each dog
import Footer from '../components/Footer';// Import the Footer component to show each dog
import DogCard from '../components/DogCard'; // Import the DogCard component to show each dog
import { useEffect, useState } from 'react'; // Import useEffect & useState
import {getDogById} from '../utils/api'; // Import getDogById from api modules
import '../App.css' // Import the css styles

function Favorites({favorites, setFavorites}) {

  const [favoriteDogs, setFavoriteDogs] = useState([]); // State to store the favorite dogs info

  useEffect(() => {
    async function fetchFavorites() { // async function to be able to run getDogsById
      const favList = []; // declare an empty favorites list array 

      for (let id of favorites) { //loop through each id in favorites array
        const dog = await getDogById(id); //pull dog data from getDogById functions that was imported in
        favList.push(dog); // add the dog data to the array
      }

      setFavoriteDogs(favList); //update the state with the full list of dog data from favList array
    }

    //Had to add this block because when I added to favorites, went to favorites view and clicked unfavorite, the dog card stayed in place
    if (favorites.length > 0) { // check if there are favorites 
      fetchFavorites(); //and if there are run the fetchFavorites function
    } else { //otherwise if favorites is empty, empty out the favoriteDogs array also
      setFavoriteDogs([]);
    }
  }, [favorites]); //only run when favorites changes

  return (
    <>
      <Nav />
      <div id="favorites">
        <h1>Your Favorite Dogs</h1>
        {favoriteDogs.length > 0 ? (favoriteDogs.map((dog) => (<DogCard key={dog.id} dog={dog} favorites={favorites} setFavorites={setFavorites}/>))
        ) : (<p>You haven't added any favorites yet!</p>)}
      </div>
      <Footer />
    </>
  );
}

export default Favorites;