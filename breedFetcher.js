const request = require('request');

const breedName = process.argv[2];



request(`https://api.thecaapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {


  if (error) {
    return console.log("There is an error!", error);
  }



  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log(`${breedName} is not found.`);
  }

  console.log('DATA: ', data[0].description);


});

