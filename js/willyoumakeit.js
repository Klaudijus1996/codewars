'use strict';

const zeroFuel = (dtp, mpg, fl) => dtp <= mpg*fl ? true : false



console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
