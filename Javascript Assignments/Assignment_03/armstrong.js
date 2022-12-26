/* 2. Write a program to find whether a given number is 
      armstrong number or not */


const checkArmstrong = n => {
    const number = n;

    let temp1 = number;

    let numberOfDigits = 0;

    while (temp1 > 0)                              // finding total number of digit
    {
        numberOfDigits += 1;                       // it can also be find by number.length
        temp1 = parseInt(temp1 / 10);
    }

    let temp2 = number;
    let sum = 0;

    while (temp2 > 0) {
        let remainder = temp2 % 10;                       // finding remainder

        sum += remainder ** numberOfDigits;
        temp2 = parseInt(temp2 / 10);
    }


    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);

    }
}


//const number = prompt("Enter a positive integer");
checkArmstrong(153);