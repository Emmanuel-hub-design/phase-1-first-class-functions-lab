// Define returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Define returnLastTwoDrivers function
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Define selectingDrivers array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define createFareMultiplier function
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// Define fareDoubler function using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Define fareTripler function using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Define selectDifferentDrivers function
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};

// Example usage:
const drivers = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4'];

console.log(returnFirstTwoDrivers(drivers)); // Returns: ['Driver 1', 'Driver 2']
console.log(returnLastTwoDrivers(drivers)); // Returns: ['Driver 3', 'Driver 4']

console.log(fareDoubler(10)); // Returns: 20
console.log(fareTripler(10)); // Returns: 30

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Returns: ['Driver 1', 'Driver 2']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));