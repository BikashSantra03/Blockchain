/*Write a program to find the factorial of all prime numbers between a
given range  */

function findPrime(start, end) {

    let i, j;

    for (i = start; i <= end; i++) {                                // for loop to traverse the numbers
        for (j = 2; j <= i - 1; j++) {                              // for loop to check number is prime or not
            if (i % j == 0)
                break;
        }

        if (i == j) {
            findFactorial(i);
        }
    }
}

function findFactorial(i) {                                          // checking the factorial of prime number

    let fact = 1

    for (let x = 1; x <= i; x++) {
        fact *= x;
    }
    console.log(`Prime number is ${i} and factorial is ${fact}`);


}

let start = 1;
let end = 100;
console.log(`.............................................\nPrime numbers between ${start} to ${end} and their factorials are :\n.............................................\n`);
findPrime(start, end);