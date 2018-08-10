function allLongestStrings(inputArray) {
//     var maxSize = 0;
//     var newArr  =[];
//    for(var i=0; i<inputArray.length;i++) {
//    if (inputArray[i].length > maxSize)    {
//      maxSize == inputArray[i].length;
//      console.log(maxSize);
     
//  }

//    }

//  return console.log(maxSize);

   
var maxSize =0;
var newArr =[];
  for(var i =0; i < inputArray.length;i++)    {
      if(inputArray[i].length > maxSize)    {
   maxSize = inputArray[i].length;
 
      };
  return  console.log(maxSize);
   
    }
 
}




   
allLongestStrings(["abc","eeee", "abcd", "dcd"])