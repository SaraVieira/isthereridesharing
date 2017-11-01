var osmosis = require('osmosis');
var axios = require('axios');

var jsonfile = require('jsonfile');

var file = 'db.json';


const data = {cities: []};

osmosis
  .get('https://www.uber.com/en-GB/cities/')
  .find('h3 + ul li')
  .set({
    city: 'a',
    link: 'a@href'
  })
  .data(city => {
    data.cities.push({
      city: city.city,
      link: city.link
    });
  })
  .error(error => error)
  .done(() => 
    jsonfile.writeFile(file, data, function(err) {
      console.error(err);
   })
  )

