const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; //import CLIENT_ID from .env
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET; //import CLIENT_SECRET from .env

let token = null; //declare token var that can be used by all three functions

async function getAccessToken() {
  const response = await fetch('https://api.petfinder.com/v2/oauth2/token', { //fetch API URL
    method: 'POST', //declare method as POST
    headers: { 'Content-Type': 'application/x-www-form-urlencoded',  }, //Set headers per PetFinder API documentation
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, //Set body per PetFinder API documentation
  });

  const data = await response.json(); // store the response
  token = data.access_token; //pull the token from the response
  return token; //return the token so it can be used by getDogs & getDogById
}

export async function getDogs() {
  const token = await getAccessToken(); //Grab API token
  const response = await fetch('https://api.petfinder.com/v2/animals?type=dog&limit=21', { //fetch API URL
    headers: { Authorization: `Bearer ${token}`, }, //Set headers per PetFinder API documentation
  });

  const data = await response.json(); // store the response as JSON
  return data.animals; //return the JSON
}

export async function getDogById(id) {
  const token = await getAccessToken(); //Grab API token
  const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, { //fetch API URL
    headers: { Authorization: `Bearer ${token}`, }, //Set headers per PetFinder API documentation
  });

  const data = await response.json(); // store the response as JSON
  return data.animal; //return the JSON
}