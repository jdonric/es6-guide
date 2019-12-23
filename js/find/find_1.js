//find the first relevant item/object in an array

var farmZones = [
    {name: 'pig pen', location: 'south'},
    {name: 'chicken coup', location: 'west'},
    {name: 'hay stack', location: 'south'},
    {name: 'corn field', location: 'north'},
    {name: 'tool shed', location: 'east'}
];


farmZones.find(function(zone){
   console.log(zone.location === 'east');
});


