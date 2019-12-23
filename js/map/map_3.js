//Pull a property from each data set in an array

var badFlicks = [
    {title: 'Twilight', type:'theatre'},
    {title: 'Ax Em', type: 'video'},
    {title: 'Camp Rock', type:'tv'}
    ];

function pluck(array, property) {
  console.log(array, property);
}

pluck(badFlicks, 'title');