/* 
Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0
Cold - less than 20 
Moderate - Between 20 and 30
Hot - Above 30
(32°F − 32) × 5/9
Output format
Cold:

Chicago (18)
Los Angeles (15)
Write a javascript program to calculate celcius for the cities, and group the cities based on the celcius range

*/
function celcius(x) {
  newTemp = (x - 32) * (5 / 9);
  return newTemp;
}

var city1 = {
  name: "Albany",
  temp: celcius(22.2),
};
var city2 = {
  name: "Caribou",
  temp: celcius(9.5),
};
var city3 = {
  name: "Columbia",
  temp: celcius(44.6),
};
var city4 = {
  name: "Denver",
  temp: celcius(29.2),
};
var city5 = {
  name: "Indianapolis",
  temp: celcius(26.5),
};
var city6 = {
  name: "Montgomery",
  temp: celcius(46.6),
};
var city7 = {
  name: "San Diego",
  temp: celcius(57.8),
};
var city8 = {
  name: "Tulsa",
  temp: celcius(36.4),
};
var city9 = {
  name: "Tampa",
  temp: celcius(61.3),
};
var city10 = {
  name: "Billings",
  temp: celcius(24.0),
};

let cities = [
  city1,
  city2,
  city3,
  city4,
  city5,
  city6,
  city7,
  city8,
  city9,
  city10,
];
console.log(cities);
let coldCities = cities.filter((cities) => cities.temp < -6.67);
console.log("Cities with Cold temperatures");
for (let i = 0; i < coldCities.length; i++) {
  console.log(
    `The city's name is ${coldCities[i].name} with a temperature of ${coldCities[i].temp} degrees celcius.`
  );
}

console.log("Cities with average temperatures");
let avgCities = cities.filter(
  (cities) => cities.temp > -6.67 && cities.temp < -1.1
);
for (let i = 0; i < avgCities.length; i++) {
  console.log(
    `The city's name is ${avgCities[i].name} with a temperature of ${avgCities[i].temp} degrees celcius.`
  );
}

console.log("Cities with hot temperatures");
let hotCities = cities.filter((cities) => cities.temp > -1.1);
for (let i = 0; i < avgCities.length; i++) {
  console.log(
    `The city's name is ${hotCities[i].name} with a temperature of ${hotCities[i].temp} degrees celcius.`
  );
}

// Step 1: set up cities with temp
// Step 2: convert to celcius
