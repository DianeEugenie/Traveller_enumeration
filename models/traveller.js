const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation); };

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => runningTotal + journey.distance, 0);
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  //OPTION 1
  const allTransports = this.journeys.map(journey => journey.transport);
  // returns [train, train, aeroplane, car, ferry]

  return allTransports.filter((transport, index) => allTransports.indexOf(transport) === index);
  // The filter above takes in transport (element in the allTransports array), and the index (of the element in the allTransports array).
  // The function in the body checks if the index of the transport in the allTransports array is the same as the index of the current transport/element being checked.
  // If it passes the test, the transport/element is added to the new array.
  // If a transport/element already occurs somewhere else in the array, the indexOf the transport/element will find the first index.
  //This index does NOT match the index of the current transport/element being checked.
  // Therefore the condition will evaluate as false for filter and the filter will not keep the transport/element and moves onto the next one.
  // The filter returns a new array with elements that pass the test.


  //OPTION 2

  // const allTransports = this.journeys.map(journey => journey.transport);
  // // returns [train, train, aeroplane, car, ferry]
  //
  //   return allUniqueTransports = allTransports.reduce((transports, transport) => {
  //     if (transports.indexOf(transport) === -1) {
  //       transports.push(transport);
  //     };
  //     return transports;
  //   }, []);


    // Reduce goes through all transport types. Transports is the accumulator argument, the initialValue is set as [], the values are accumulated here = similar to putting 0 if counting the sum of an array.
    // Inside the body of reduce, the function checks the transports accumulator and if the index of the transport value (currentValue) that is being checked is not found (i.e. when indexOf returns -1), the function pushes the transport type into the accumulator, transports.
    //The enumeration reduce goes through every single element in the array. If the transport value that is being checked is found, indexOf does NOT return -1 so the transport value is not pushed into the transports accumulator.
    // after every check of the transport value the transports accumulator returns so that the transports now holds the newly added transport value.

  //OPTION 3
  // return Array.from(new Set(this.journeys.map(journey => journey.transport)));

  // Creates an array from a Set object which has as the argument the array of all the transports. Set only allows unique values so most likely does an indexOf filter under the hood.





};



module.exports = Traveller;
