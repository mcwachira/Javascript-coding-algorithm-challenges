function sieveOfEratosthenes(n) {
    var prime   =   [];
    for (var i =0; i <= n; i++)   {
        prime[i] = true;
    }
    prime[0] = false;
    prime[1] = false;

    for(var i =2; i < Math.sqrt(n); i++) {
        for(var j =2; j*i <= n; j++)    {
            prime[j * i]    = false;
        }
    }

    var result  =[];
    for(var i =0; i<prime.length; i++)  {
        if(prime[i]) return result.push(i);
    }
    return  console.log(result);
}



sieveOfEratosthenes(20);