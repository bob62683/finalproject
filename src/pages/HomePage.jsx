import DogList from '../components/DogList';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../App.css'

function HomePage({favorites, setFavorites}) {
  return (
    <>
      <Nav />
      <div id='homepage'>
        <h1>Welcome to the Dog Adoption Website!</h1>
        <p>Your ultimate resource for dog adoptions is right here! We
          aim to provide a comprehensive listing of adoptable dogs, 
          partnering with PetFinder to make your dog adoption a breeze. 
          Browse the dogs below, check out more details, add them to your 
          favorites list, or click on "Adopt Me" to go the PetFinder site 
          to start the adoption process. Don't see a dog that catches your 
          interest? Click the "See a New List of Dogs!" button to refresh the
          list of dogs!
        </p>
      </div>
      <DogList favorites={favorites} setFavorites={setFavorites} />
      <Footer />
    </>
  );
}

export default HomePage;