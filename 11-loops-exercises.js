/* Ex 77 - Count to ten
Write a for loop in JavaScript that counts from 1 to 10 and displays these
numbers in the console. */

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

/* Ex 78 - Count to ten again
Write a while loop in JavaScript that counts from 1 to 10 and displays these
numbers in the console. */

let i = 0

while( i < 10) {
    i++
    console.log(i)

}

/* Ex 79 - Count backwards
Using any type of loop, count backwards from 10 to 1 with JavaScript and
display these numbers in the console. */
let b = 10

while(b) {
    console.log(b--)
}

/* Ex 80 - Add until 25
Using any type of loop, count from the value of 1 to 25 adding each number
together to form a total (e.g. 1 + 2 + 3 + 4 …) then display this value in the
console. */

let total = 0;
for (let i = 1; i <= 25; i++) {
    total += i;
}
console.log(total);