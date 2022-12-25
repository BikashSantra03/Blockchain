/*3. Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000*/


function calcSum() {

    let sum = 0;

    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0)       // if both condition true required, then (i % 3 === 0 && i % 5 === 0)
            sum += i;
    }

    return sum;
}

//let sum = calcSum();
console.log(`The sum is ${calcSum()}`);