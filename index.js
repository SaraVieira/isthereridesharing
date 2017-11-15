const osmosis = require('osmosis');
const axios = require('axios');
const jsonfile = require('jsonfile');

const file = 'uber.json';
const fileCabify = 'cabify.json';
const fileLyft = 'lyft.json';

const uber = { cities: [] };
const cabify = { cities: [] };
const lyft = { cities: [] };

osmosis
  .get('https://www.uber.com/en-GB/cities/')
  .find('h3 + ul li')
  .set({
    city: 'a',
    link: 'a@href'
  })
  .data(city => {
    uber.cities.push({
      city: city.city,
      link: city.link
    });
  })
  .error(error => error)
  .done(() =>
    jsonfile.writeFile(file, uber, function(err) {
      console.error(err);
    })
  );

osmosis
  .get('https://cabify.com/en#cities-list')
  .find('div.cities ul li')
  .set({
    name: 'a',
    link: 'a@href'
  })
  .data(city => {
    cabify.cities.push({
      name: city.name,
      link: city.link
    });
  })
  .log(console.log)
  .error(console.log)
  .debug(console.log)
  .done(() =>
    jsonfile.writeFile(fileCabify, cabify, function(err) {
      console.error(err);
    })
  );

osmosis
  .get('https://www.lyft.com/cities')
  .find('.list-unstyled .m-y-s')
  .set({
    name: 'a',
    link: 'a@href'
  })
  .data(city => {
    lyft.cities.push({
      name: city.name,
      link: city.link
    });
  })
  .log(console.log)
  .error(console.log)
  .debug(console.log)
  .done(() =>
    jsonfile.writeFile(fileLyft, lyft, function(err) {
      console.error(err);
    })
  );
