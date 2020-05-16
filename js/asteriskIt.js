'use strict';

function asteriscIt(n) {

    const a = n.toString().split(',').join('');
    let b = a.split('')
    
    for ( let i=0;i<b.length;i++ ) {
        if(b[i-1]%2===0 && b[i]%2===0) {
          b.splice(i, 0, '*');
        }
    }
    return b.join('')
  };


  console.log(asteriscIt(5312708), '531270*8');
  console.log(asteriscIt(9682135), '96*8*2135');
  console.log(asteriscIt(2222), '2*2*2*2');
  console.log(asteriscIt(1111), '1111');
  console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');