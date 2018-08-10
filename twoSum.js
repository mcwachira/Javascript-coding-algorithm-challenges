function twoSum(numArray,sum) {
   var pairs    =[];
   var hashTables   = [];

   for(var i=0; i< numArray.length;i++) {
       var currNum = numArray[i];
       var counterpart  = sum -currNum;
       if( hashTables.indexOf(counterpart)!==-1)  {
pairs.push([currNum ,counterpart]);
       }
       hashTables.push(currNum);
   }
   return console.log( pairs);
}


twoSum([1,2,3,4,5,1,2,3] ,3)