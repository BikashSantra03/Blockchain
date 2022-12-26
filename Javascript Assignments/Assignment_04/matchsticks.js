
/*Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.*/


let matchHouse = n => {                                   // function matchHouse (n){}

    if (n === 0)
        return "Step 0 returns 0 matchsticks.";

    else if (n < 0 || typeof n !== "number")
        return "The input (step) will always be a non-negative integer."

    else {
        let x;
        x = (5 * n) + 1;
        return x;

    }
}

console.log(matchHouse(1));
console.log(matchHouse(4));
console.log(matchHouse(87));
console.log(matchHouse(0));
console.log(matchHouse(-2));
console.log(matchHouse(`abcd`));