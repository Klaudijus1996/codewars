"use stritct";

function finalGrade (exam, projects) {
    let kekw = 0;
    if (exam > 90 || projects > 10) {
        kekw = 100
    } else
    if (exam>75 && projects >= 5) {
        kekw = 90
    } else
    if (exam > 50 && projects >= 2) {
        kekw = 75
    }
    return kekw

}




console.log(finalGrade(100, 12),'-->', 100);
console.log(finalGrade(85, 5),'-->', 90);



// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10. finalGrade = 100 if exam 90> finalGrade = 100
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5. 90 if 75+ exan or/and 5>=
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.  75 if 50+ or min 2
// 0, in other cases


/*  finalGrade(100, 12);  // 100
    finalGrade(99, 0);    // 100
    finalGrade(10, 15);   // 100

    finalGrade(85, 5);    // 90

    finalGrade(55, 3);    // 75

    finalGrade(55, 0);    // 0
    finalGrade(20, 2);    // 0 */