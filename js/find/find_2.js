//find the first relevant item/object in an array

var ladders = [
    {id: 'aa', height: 20},
    {id: 'ab', height: '10 feet'},
    {id: 'ac', height: '50 feet'},
    {id: 'ad', height: '30 feet'},
    {id: 'ae', height: '20 feet'}
];


function findWhere(array, criteria) {
    array.find(function(){
          return ladders.find(function(item){
              return item.height === criteria;
          })
    })
};

findWhere(ladders, {height: '20 feet'});