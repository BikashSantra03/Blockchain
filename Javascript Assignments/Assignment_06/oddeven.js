// Question 3 of assignment 6

let num = prompt(`Enter the numbr : `);
let str = num.toString();
console.log(str);
let result = [str[0]];
for (let i = 1; i < str.length; i++) {
  if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
    result.push("-", str[i]);
  } else {
    result.push(str[i]);
  }
}
console.log(result.join(""));
