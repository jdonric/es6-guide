//EVERY: proceed if all items in array meet criteria

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted;

hasSubmitted = users.every(function(user){
    console.log(user.hasSubmitted === true);
});

hasSubmitted;