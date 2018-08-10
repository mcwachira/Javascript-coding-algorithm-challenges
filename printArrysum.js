function simpleArraySum (arr)  {
var val =0;
val= arr.reduce((prev,curr)=>   {
    return prev + curr;
})
console.log(val);
}


simpleArraySum(6,[1,2,3,4,5,6,7,8])


    // function processData(input) {
    //     //Enter your code here
    //     var lines = input.split("\n");
    //     var count = parseInt(lines[0].trim(), 10);
    //     var numbers = lines[1].split(" ");
    //     var res = 0;
    //     for (var i = 0; i < count; i++) {
    //         res += parseInt(numbers[i], 10);
    //     }
    //     process.stdout.write(res);
    // } 
    
    // process.stdin.resume();
    // process.stdin.setEncoding("ascii");
    // _input = "";
    // process.stdin.on("data", function (input) {
    //     _input += input;
    // });
    
    // process.stdin.on("end", function () {
    //    processData(_input);
    // });

    // function main() {
    //     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    //     const arCount = parseInt(readLine(), 10);
    //     const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    //   var Val   = 0;
    // for(var i=0;  i<arCount; i++)   {
    //     Val +=parseInt(ar[i],10)
    // }
    
    //     ws.write(Val + "\n");
    
    //     ws.end();
    // }