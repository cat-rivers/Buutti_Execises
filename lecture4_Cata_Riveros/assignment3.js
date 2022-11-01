const distanceInKm = 345;
const speedInKmPerHour = 80;
const hours = Math.floor(distanceInKm / speedInKmPerHour);
const minutes = Math.ceil(
  (distanceInKm % speedInKmPerHour) / (speedInKmPerHour / 60)
);

console.log(
  `Traveling ${distanceInKm} km at ${speedInKmPerHour} km/h would take ${hours} hours ${minutes} minutes`
);
