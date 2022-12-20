
//3. Write a program to find the factorial of a number.


let number = prompt("Enter number : ");

if (number < 0)
    console.log('Error! Factorial for negative number does not exist.');

else if (number === 0)
    console.log(`The factorial of ${number} is 1.`);

else {
    let fact = 1
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}`);
}