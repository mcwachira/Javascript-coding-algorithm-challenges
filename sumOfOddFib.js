function sumFibs(num) {
  
    var fibArr =[1,1];
    
   
    for(var i=2; i<num;i++)  {
      fibArr.push(fibArr[i-2] + fibArr[i-1]);
   
    }
    
     fibArr=  fibArr.filter((val) =>  {
       return (val %2 !==0) && (val<=num);
   });
   console.log(fibArr);

      fibArr =  fibArr.reduce((prev,curr) =>    {
        return prev + curr;
    })
   return console.log(fibArr);
    
   }
   
   sumFibs(4);