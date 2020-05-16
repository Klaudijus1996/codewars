'use strict';

function well(x){

    const good = 'good';
    const gooder = 0;
    let bad = 0;
      for ( let i=0;i<x.length;i++ ) {
            const a = x[i];
           if (good.indexOf(a) >= 0 ) {
               bad++
           };
      }
      if ( bad == 0 ) {
        return 'Fail!'
      } else
      if ( bad <= 2 ) {
        return 'Publish!'
      }
      if ( bad > 2 ) {
        return 'I smell a series!'
      }
      return;
    }


console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
