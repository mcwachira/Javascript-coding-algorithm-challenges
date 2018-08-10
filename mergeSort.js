 function mergeSort(arr) {
   if(arr.length < 2) return arr;
   var len = Math.floor(arr.length/2);
    var firstHalf   =   arr.slice(0,len)
    var secondHalf  =   arr.slice(len);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
 }



 function merge(array1 , array2) {
     var result = [];
     while(array1.length && array2.length)  {
         var minElem;
         if(array1[0] < array2[0]) minElem =array1.shift();
         else minElem = array2.shift();
         result.push(minElem);
     }
     if(array1.length)  result  =   result.concat(array1);
     else result = result.concat(array2);
     return result;
 }



 mergeSort([1,20,90,45,3,67,89,23,4,2,5,3,6])