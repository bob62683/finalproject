import noimage from '../assets/noimage.png'
import Buttons from './Buttons'; // Import the buttons
import { Link } from 'react-router-dom';

function DogCard({dog, favorites, setFavorites}) {
  let dogImageSrc = (<img src={noimage} alt={'No Image Available'} style={{width:'300px'}} />); // Declare dogImageSrc null in case there is no image
  if (dog.photos.length > 0 && dog.photos[0].small) { // Check if there are photos in the array and if image value exists  
    dogImageSrc = (<img src={dog.photos[0].small} alt={dog.name} style={{width:'200px'}} />); // set dogImageSrc to it if it does
  }

  return (
    <div className="dogCard">
      <h3>{dog.name}</h3>
      <div className="dogImage">{dogImageSrc}</div>
      <p>{dog.breeds.primary}</p>
      <Link to={`/dogs/${dog.id}`}>View Details</Link>
      <Buttons key={dog.id} dog={dog} favorites={favorites} setFavorites={setFavorites}/>
    </div>
  );
}

export default DogCard;