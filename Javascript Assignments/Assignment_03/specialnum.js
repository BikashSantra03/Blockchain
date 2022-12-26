/* 3. Write a program to find whether a given number is 
    special number or not */


const checkSpecial = n => {
    const number = n;

    let temp = number;
    let sum = 0;

    while (temp > 0) {
        let remainder = temp % 10;                       // finding remainder

        let fact = 1

        for (let i = 1; i <= remainder; i++) {
            fact *= i;
        }
        sum += fact;
        temp = parseInt(temp / 10);
    }


    if (sum == number) {
        console.log(`${number} is a Special number`);
    }
    else {
        console.log(`${number} is not a Special number.`);

    }
}


// const number = prompt("Enter a positive integer");
checkSpecial(145);