/* Ex 64 - You need A and B
Use a JavaScript logical operator to create a boolean expression which only
results in true when both A and B are true */

let A = true;
let B = true;

console.log(A || B)

// Ex 65 - You need A or B
// Use a JavaScript logical operator to create a boolean expression which results in
// true if either A and B are true.

let A2 = false;
let B2 = true;

console.log(A2 || B2)

/* Ex 66 - You need A or B or C
Use a JavaScript logical operator to create a boolean expression which results in
true when any of ther variables are true. */

let A3= false;
let B3 = true;
let C3 = false;

console.log(A3 || B3 || C3)

/* Ex 67 - You need A and B or C again
Use a JavaScript logical operator to create a boolean expression which results in
true when the value of either A and B are both true or the value of C is true. */

let A4 = false;
let B4 = false;
let C4 = true;

console.log(A4 && B4 || C4)

/* Ex 68 - You should be at least 21 years old
Write a boolean expression (which will result in false) to determine whether the
value stored in the age variable is at least 21. Check that expression is correct
by changing the value stored in age to 21 and 22  */

let age = 20

console.log(age >= 21)

/* Ex 69 - You need to know at least 3 languages
Write a boolean expression (which will result in true) to determine whether the
languages array has at least 3 items in it. Call the .pop() function on the array
to remove one item then check your expression again. */

let languages = ['English', 'French', 'Italian'];

// languages.pop()

console.log(languages.length === 3)

/* Ex 70 - You need to know exactly 4 languages
Write a boolean expression (which will result in true) to determine whether the
languages array has exactly 4 items in it. Call the .pop() or .push() function
on the array to remove or add an item then check your expression again. */

let languages2 = ['English', 'French', 'Italian', 'Spanish'];

// languages2.push('Russia')

console.log(languages2.length === 4)
// console.log(languages2)