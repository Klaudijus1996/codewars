'use stritct';


var splitInParts = function(s, partLength){
    let zodis = '';
        for (let i=0;i<s.length;i++) {
            zodis += s[i]
         if (i%partLength === partLength-1) {
             zodis+= ' ';
         }
        }
         return zodis.trim()
    }


console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
// console.log(splitInParts("HelloKata", 1), "H e l l o K a t a")
// console.log(splitInParts("HelloKata", 9), "HelloKata")