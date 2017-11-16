const uber = require('./uber.json');
const lyft = require('./lyft.json');
const cabify = require('./cabify.json');
const taxify = require('./taxify.json');

module.exports = () => ({
  uber: uber.cities,
  lyft: lyft.cities,
  cabify: cabify.cities,
  taxify: taxify.cities,
  cities: [
    ...uber.cities.map(u => ({ ...u, company: 'uber' })),
    ...lyft.cities.map(u => ({ ...u, company: 'lyft' })),
    ,
    ...cabify.cities.map(u => ({ ...u, company: 'cabify' })),
    ...taxify.cities.map(u => ({ ...u, company: 'taxify' }))
  ]
});
