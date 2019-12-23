//Pulling array objects that satisfy specific conditions

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    console.log(number > 50);
});

