function isPalindrome(string) {
    string  =   string.toLowerCase();

    var charactersArr   =   string.split("");
    var validCharacters='a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z'.split('');

    var lettersArr  =   [];
 charactersArr.forEach(char => {
     if(validCharacters.indexOf(char)   >-1) lettersArr.push(char);
 });
 if(lettersArr.join("")  === lettersArr.reverse().join("")) return  true;
 else return false;
}
console.log(isPalindrome("Madam I'm Adam"));