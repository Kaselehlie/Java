// Your task is to filter out planets based on the following criteria for potential habitability:

// - The temperature is between 253 K and 323 K, inclusive.
// - The distance from the Sun is between 0.75 and 1.5 AU, inclusive.

// Print the new array containing the names of the planets that match the criteria.

const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const planets = [
	{name: "Mercury", temperature: 440, distance: 0.39},
	{name: "Venus", temperature: 737, distance: 0.72},
	{name: "Earth", temperature: 288, distance: 1},
	{name: "Mars", temperature: 253, distance: 1.5},
	{name: "Jupiter", temperature: 163, distance: 5.2},
	{name: "Saturn", temperature: 133, distance: 9.58},
	{name: "Uranus", temperature: 78, distance: 19.22},
	{name: "Neptune", temperature: 73, distance: 30.05}
];

const habitablePlanets = planets.filter(
	function (planet)
	{
		return planet.temperature >= 253 && planet.temperature <= 323 && // - instructing to filter planets that its temperature is between 253 K and 323 K, inclusive.
		       planet.distance >= 0.75 && planet.distance <= 1.5; // - instructing to filter planets that its distance from the Sun is between 0.75 and 1.5 AU, inclusive.
	}
);

console.log(habitablePlanets);

//console printed;(2) [{…}, {…}]
// 0
// : 
// {name: 'Earth', temperature: 288, distance: 1}
// 1
// : 
// {name: 'Mars', temperature: 253, distance: 1.5}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)