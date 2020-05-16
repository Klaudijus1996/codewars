'use strict';

function correctPolishLetters (string) {
    const a = 'ąćęłńóśźż';
    const b = 'acelnoszz';
    let c = '';
    for ( let i=0;i<string.length;i++ ) {
          if ( a.indexOf(string[i]) >= 0 ) {
               c += b[a.indexOf(string[i])]
          } else {c+=string[i]}
    };
    return c;
  }

console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");