
//1. Write a program to find whether a given year is a leap year or not.



const year = prompt('Enter the year : ');                   // taking input from user
checkLeapYear(year);

function checkLeapYear(year) {
    if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0))

        console.log(year, "is Leap Year");

    else
        console.log(year, "is not a Leap Year");
}