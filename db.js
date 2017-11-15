const uber = require('./uber.json');
const lyft = require('./lyft.json');
const cabify = require('./cabify.json');

module.exports = () => ({
  uber: uber.cities,
  lyft: lyft.cities,
  cabify: cabify.cities
});
