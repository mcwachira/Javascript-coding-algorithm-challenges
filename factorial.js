function factorial(num) {
  if(num === 1)
   {
       return num;
   } else{
  return  factorial(num-1)*num;
    
   }
     
}


factorial(4)