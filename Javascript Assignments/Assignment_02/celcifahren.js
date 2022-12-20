
//2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit

function cToF(celsius) {
    const C = celsius;
    const F = ((9 * C / 5) + 32);
    console.log(C + "\u00B0C is " + F + "\u00B0F");


}

function fToC(fahrenheit) {
    const F = fahrenheit;
    const C = ((F - 32) * 5) / 9;

    console.log(F + "\u00B0F is " + C + "\u00B0C");

}

cToF(60);
fToC(45);