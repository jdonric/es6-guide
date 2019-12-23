var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(totalDistance, trip){
    return totalDistance + trip.distance;

}, 0);

console.log(totalDistance);