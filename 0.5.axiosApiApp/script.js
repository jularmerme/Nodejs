const axios = require("axios");

const options = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { r: "json", i: "tt4154796" },
  headers: {
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
