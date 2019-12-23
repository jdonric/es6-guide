var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(mem, desk) {
     desk.type === 'sitting' ? mem.sitting++ : mem  // [value] ? [if true] : [if false]
     desk.type === 'standing' ? mem.standing++ : mem  // [value] ? [if true] : [if false]
      
      return mem;

  }, { sitting: 0, standing: 0 });

  console.log(deskTypes); 

 
