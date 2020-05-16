'use strict';

function findDifference(a, b) {
    let c = 1;
    let d = 1;
    let ats = 0;
    
    
    for ( let i=0;i<a.length;i++ ) {
        c *= Number(a[i])
    };
    for ( let i=0;i<b.length;i++ ) {
        d *= Number(b[i])
    };
    if ( c - d < 0 ) {
        ats += d - c
    } else { return c-d }
    return ats
  }


console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
