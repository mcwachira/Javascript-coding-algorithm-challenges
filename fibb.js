function getFib(num)    {
    var  fibArr =[0,1];

    for (var i=2; i<num;i++) {
       fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
 return console.log(fibArr);
}

getFib([10])