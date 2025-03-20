/* Exercise 29 - Add this to this
Use JavaScript to add the two numbers together and display the result in the
console. */

const a = 2391 
const b = 8120

console.log(a + b)

/* Exercise 30 - Subtract this from this
Use JavaScript to substract the value stored in d from c and display the result
in the console. */

const c = 991
const d = 182

console.log(c - d)

/* Exercise 31 - Multiply this with this */

const e = 24
const f = 38

console.log(e * f)

/* Exercise 32 - Divide this by this */

const g = 90
const h = 15 

console.log(g / h)

/* Exercise 33 - Fix this
Display the number in the console with only 2 decimal places shown. */

const num = 23.001293

console.log(num.toFixed(2))

/* Exercise 34 - Strings and numbers don't match
Use JavaScript to add the two variables together to achieve the result of 4 . You
can display your result in the console to check. */

const a2 = 2
const b2 = '2'

console.log(a2 + Number(b2))
// console.log(a2 + +b2)

/* Exercise 35 - Round 'em up
Use JavaScript to round the number to 4 and display the result in the console. */

const num1 = 3.79;

// console.log(Math.round(num1))
console.log(Math.ceil(num1))

/* Exercise 36 - Round 'em down
Use JavaScript to round the number to 3 and display the result in the console. */

const num2 = 3.49;

console.log(Math.floor(num2))

/* Exercise 37 - Round 'em down again
Use JavaScript to round the number to 3 and display the result in the console. */

const num4 = 3.5;

console.log(Math.floor(num4))

/* Exercise 38 - Which is the biggest?
Given the numbers 1,8,2,9,3,7,4,6 , use JavaScript to determine which is the
largest number. */

console.log(Math.max(1,12,2,9,3,7,4,6))

/* Exercise 39 - Which is the smallest?
Given the numbers 3,2,9,1,7,6,4 , use JavaScript to determine which is the
smallest number. */

console.log(Math.min(3,2,9,1,7,6,4))

/* Exercise 40 - No dice
Create a random number with JavaScript that represents a value found on a
common set of playing dice (1-6). Log the value to the console to check the
value you have generated. */

// function dice(min, max) {
//     let random = min + Math.random() * (max + 1 - min)
//     return Math.floor(random) 
// }

const randomNumber = Math.floor(Math.random() * 6) + 1;

// console.log(dice(1,6))
console.log(randomNumber);

/* Exercise 41 - 1 to 100
Create a random number with JavaScript in the range of 1 to 100. */

// function oneToHundred(min, max) {
//     let round = min + Math.random() * (max + 1 - min)
//     return Math.floor(round)
// }

const randomNumber1 = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber1);

// console.log(oneToHundred(1,100))