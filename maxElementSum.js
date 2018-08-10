function matrixElementsSum(matrix) {
for(var i =0;i<matrix.length;i++)   {
    var newArr  = matrix[i];
    for(var j=0; j<newArr.length;j++)   {
        var newerArr = newArr[i];
        for(var k=0;k<newerArr.length;k++)  {
            console.log(newerArr[1]);
        }
    }
}
}

matrixElementsSum ([0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]) ;