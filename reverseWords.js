function reverseWords(string)   {
    var newStr  =   string.split(" ")
    var reversedWordArr =   [];

    newStr.forEach(word => {
         var wordN ="";
         for(var i= word.length -1; i>=0; i--) {
             wordN += word[i];
         }
         reversedWordArr.push(wordN);
    });
 
    return console.log(reversedWordArr.join(" "));

}
reverseWords('BIG IS THE WORD')