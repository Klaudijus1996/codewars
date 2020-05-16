'use strict';

function positiveSum(arr) {
    let a = 0;
    for ( let i=0;i<arr.length;i++ ) {
          if ( arr[i] < 0  ) {
              arr[i] = 0
          }
          a += Number(arr[i])
    }
    return a
  }

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);