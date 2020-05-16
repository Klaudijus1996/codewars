'use strict';

function sumEvenNumbers(input) {
    let ats = 0;
    for ( let i=0;i<=input.length;i++ ) {
        if ( input[i] % 2 === 0 ) {
             ats += Number(input[i])
        }
        console.log(ats)
    }
    return ats;
};

  

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),'->', 30);