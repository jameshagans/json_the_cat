const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('There is an error', null);
    }


    const data = JSON.parse(body); // change the body from a string to an object
    if (data.length === 0) {
      callback(`Breed not found`, null);
    } else {
      callback(null, data[0].description);
    }
  }
  );
};


module.exports = { fetchBreedDescription };