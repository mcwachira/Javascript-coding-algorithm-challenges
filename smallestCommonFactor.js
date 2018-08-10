function smallestCommons(arr) {
arr.sort(function(a,b)  {
    return a-b;
});

    var min =   arr[0];
    var max = arr[1];
    var  result = min;


    function gcd(a,b) {
       if(!b) return b ===0 ?a :NaN;
       return gcd(b ,a % b);
    }
    function lcm(a,b) {
        return (a*b)/ gcd(a,b);
        
    }
    for(var i = min ;i <= max;i++) {
        result = lcm(i ,result)
    }
 return console.log(result);
}
  
  smallestCommons([2,10]);
