function bubbleSort(array) {
    for(var i = array.length; i > 0; i--)  {
       for( var j =0; j<i; j++) {
           if(array[j] > array[j + 1])  {
               var Temp =   array[j];
               array[j] = array[j + 1];
               array[j + 1] = Temp;
           } 
       }
    }

    return console.log(array);
}


bubbleSort([4,5,8,4,-2,3,-9,1])