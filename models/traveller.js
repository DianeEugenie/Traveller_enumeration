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
  // const allTransports = this.journeys.map(journey => journey.transport);
  //
  // //[train, train, aeroplane, car, ferry]
  //
  // return allTransports.filter((transport, index) => allTransports.indexOf(transport) === index);

  // const allTransports = this.journeys.map(journey => journey.transport);
  // return Array.from(uniqueTransports = new Set(allTransports));

  return Array.from(new Set(this.journeys.map(journey => journey.transport)));

//   return allUniqueTransports = allTransports.reduce((transports, transport) => {
//     if (transports.indexOf(transport) === -1) {
//       transports.push(transport);
//     };
//     return transports;
//   }, []);
// };





module.exports = Traveller;
