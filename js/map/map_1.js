//Pull a property from each data set in an array

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function(image){
      console.log(image.height);
  });
  
  heights;