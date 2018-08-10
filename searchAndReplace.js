function myReplace(str, before, after) {
     var newS   = str.split(" ");
     function matchCase(text, pattern) {
        var result = '';
    
        for(var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);
    
            if(p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        
    
        return result;
    }
       var index = result.indexOf(before)
       if(index !==-1) {
           newS[index] = after;
       }
       var sentence     = newS.join(" ");
       console.log(sentence);
     
  }
}
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
 
