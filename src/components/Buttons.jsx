import React, { useState } from 'react';

function Buttons({dog, favorites, setFavorites}) {
    const isFav = favorites.includes(dog.id); //Add dog ID favorites to isFav
    const [animateHeart, setAnimateHeart] = useState(false); //create a state for whether to animate the heart or not

    const handleNewFavorite = () => {
        setAnimateHeart(true); // When favorite is clicked, start the animation
        setFavorites(fav => { //update the favorites array
          if (fav.includes(dog.id)) { 
            return fav.filter(id => id !== dog.id); // Remove if already in favorites as button should be 'Unfavorite'
          } else {
            return [...fav, dog.id]; // Add if not in favorites as button should be 'Favorite'
          }
        });
        setTimeout(() => setAnimateHeart(false), 1000); // Set a lifetime for the animation
      };

    return(
        <div>
            <button id="fav-button" onClick={handleNewFavorite} >
              <span className={`heart ${animateHeart ? 'animate' : ''}`}>
                {isFav ? '❤️' : '🤍'}
              </span>
              {isFav ? 'Unfavorite Me' : 'Favorite Me'}
            </button>
            <button id="adopt-button" className="adopt" onClick={() => window.open(dog.url, '_blank') }>Adopt Me</button>
        </div>
        
    )
}

export default Buttons;