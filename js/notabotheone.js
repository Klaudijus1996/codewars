'use strict';

function binaryCleaner(arr) {
    const ez = [];
    const pez = [];
    const ayy = [ez,pez];
    for ( let i=0;i<arr.length;i++ ) {
        if ( arr[i] < 2 ) {
            ez.push(arr[i])
        }
    }
    for ( let i=0;i<arr.length;i++) {
        if ( arr[i] > 1 ) {
            pez.push(arr[i])
        }
    }
    return ayy
  }



console.log(binaryCleaner([0,1,2,1,0,2,1,1,1,0,4,5,6,2,1,1,0]), [ [ 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0 ], [ 2, 5, 10, 11, 12, 13 ] ]);
// console.log(binaryCleaner([0,1,1,2,0]), [ [ 0, 1, 1, 0 ], [ 3 ] ]);
// console.log(binaryCleaner([2,2,0]), [ [ 0 ], [ 0, 1 ] ]);
// console.log(binaryCleaner([0,1,2,1,0,2,1,1]), [ [ 0, 1, 1, 0, 1, 1 ], [ 2, 5 ] ]);
// console.log(binaryCleaner([1]), [ [ 1 ], [] ]);