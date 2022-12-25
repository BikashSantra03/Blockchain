/*Write a function using switch case to find the grade
 of a student based on marks obtained*/


function myResult(marks) {

    let grade;

    switch (true) {

        case (marks <= 100 && marks >= 90):
            grade = "S";
            break;
        case (marks <= 89 && marks >= 80):
            grade = 'A';
            break;
        case (marks <= 79 && marks >= 70):
            grade = 'B';
            break;
        case (marks <= 69 && marks >= 60):
            grade = 'C';
            break;
        case (marks <= 59 && marks >= 50):
            grade = 'D';
            break;
        case (marks <= 49 && marks >= 40):
            grade = 'E';
            break;
        case (marks <= 39 && marks >= 0):
            grade = "Student has failed!";
            break;

        default:
            grade = "INVALID SCORE";
    }

    return grade;

}

const marks = prompt("Enter your marks : ");
let result = myResult(marks);
console.log(result);
