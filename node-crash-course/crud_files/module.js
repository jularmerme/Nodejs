const newPeople = require('./people');
const { people, ages } = require('./people');

console.log(newPeople);
console.log(people);
console.log(ages);

const os = require('os');

console.log(os.platform, os.homedir());
