//SOME: proceed if at least 1 item in array meet criteria

var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(request){
      console.log(request.status === 'pending');
  })


  inProgress;