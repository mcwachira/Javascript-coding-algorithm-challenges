function sumPrimes(num) {
    var prime =[];
    for(var i=0; i<=num;i++)  {
      prime[i]  =true;
    }
    prime[0]  = false;
    prime[1]  = false;
  
    for(var i=2; i<=Math.sqrt(num); i++)  {
      for(var j=2; j* i <=num; j++) {
        prime[i*j]  = false;
      }
    }
    var result  = [];
    for(var i=0;i<prime.length; i++)  {
      if(prime[i]) result.push(i);
    }
  var sum = result.reduce((prev,curr) =>  {
    return prev + curr;
  })
   return  console.log(sum);
  }
  
  sumPrimes(10);