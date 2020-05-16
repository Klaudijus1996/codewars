'use strict';

function strCount(str, letter){  
    let ats = 0;
    for ( let i=0;i<str.length;i++ ) {
         if (str[i] == letter) {
             ats++
         } 
    }
     return ats
   }

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);