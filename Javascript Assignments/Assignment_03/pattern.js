
/*1. Using for loops, write a Javascript program to 
     output the following pattern - */


const printPattern = n => {

    let count = 0;

    for (let i = 1; i <= n; i++) {

        var array = [];

        for (let j = 1; j <= i; j++) {
            count++;
            array.push(count);
        }
        console.log(array.join(' '));                        // The join() method returns an array as a string.
    }

}

printPattern(4);