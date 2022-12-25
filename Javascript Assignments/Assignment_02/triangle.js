/*1. Write a Javascript function to check whether 
a triangle is equilateral, isosceles or scalene*/

function checkTriangle(side1, side2, side3) {

    let valid = ((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side3 + side1) > side2);

    if (valid) {
        console.log(`Triangle is valid`);
        if (side1 === side2 && side2 === side3)
            console.log(`It is a Equilateral Triangle`);
        else if (side1 === side2 || side2 === side3 || side3 === side1)
            console.log(`It is a Isosceles Triangle`);
        else
            console.log(`It is a Scalene Triangle`);
    }
    else
        console.log(`Triangle is not valid!`);
}

const side1 = 3;
const side2 = 3;
const side3 = 5;

checkTriangle(side1, side2, side3);