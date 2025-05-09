import {useParams} from 'react-router-dom'; // Import useParams for getting id from URL
import { useEffect, useState } from 'react'; // Import useEffect, useState
import {getDogById} from '../utils/api'; // Import getDogById from apis module
import noimage from '../assets/noimage.png' // Import the noimage image
import Nav from '../components/Nav'; // Import the nav
import Footer from '../components/Footer'; // Import the footer
import Buttons from '../components/Buttons'; // Import the buttons

function DogDetails({favorites, setFavorites}) {
  const {id} = useParams(); //grab the id from URL
  const [dog, setDog] = useState(null); // State to store the dog info

  useEffect(() => {
    async function fetchDog() { // async function to be able to run getDogsById
      const dogData = await getDogById(id); // set the dog info by id to dogData
      setDog(dogData) //update the dog state with dogData
    }
    fetchDog(); //call the fetchDog async function
  }, [id]) //only run when id changes

  // I had to add this block because I was still running into errors while the API call ran
  // Once setDog(dogData) completes, that dog state changes and !dog no longer is true
  if (!dog) { // wait for the async function to return data
    return <></>;
  }

  let medDogImageSrc = (<img src={noimage} alt={'No Image Available'} style={{width:'300px'}} />) //default to noimage image
  if (dog && dog.photos[0] && dog.photos[0].medium) { // check if all parts of the image exists
    medDogImageSrc = (<img src={dog.photos[0].medium} alt={dog.name} style={{width:'300px'}} />); // if they all exist, then set to the real image
  }
  
  return (
    <>
      <Nav />
      <div className="dogDetailContainer">
        <h2>{dog.name}</h2>
        <div className="medDogImage">{medDogImageSrc}</div>
        <p><b>Breed: </b>{dog.breeds.primary ?? 'Not Listed'}</p>
        <p><b>Size: </b>{dog.size ?? 'Not Listed'}</p>
        <p><b>Age: </b>{dog.age ?? 'Not Listed'}</p>
        <p><b>Gender: </b>{dog.gender ?? 'Not Listed'}</p>
        <p><b>Coat Length: </b>{dog.coat ?? 'Not Listed'}</p>
        <p><b>Colors: </b>{dog.colors.primary ?? 'Not Listed'}</p>
        <p><b>Characteristics: </b>{dog.tags.map((tag) => (tag + ' ')) ?? 'Not Listed'}</p>
        <p><b>Status: </b>{dog.status ?? 'Not Listed'}</p>
        <p><b>Location: </b>{dog.contact.address.city + ', ' + dog.contact.address.state + ' ' + dog.contact.address.country ?? 'Not Listed'}</p>
        <p><b>Description: </b>{dog.description ?? 'Not Listed'}</p>
        <Buttons key={dog.id} dog={dog} favorites={favorites} setFavorites={setFavorites} />
      </div>
      <Footer />
    
    </>
  );
}

export default DogDetails;