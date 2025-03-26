/* Ex 81 - Sum all the numbers
Use a JavaScript for or while loop to add up (sum) the values that are stored
in the numbers array. Display your result in the console. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0

for(num of numbers) {
    total += num
}

console.log(total)

/* Ex 82 - Show every other item
Use a JavaScript for or while loop to only display every other item in the
fruit array in the console. (
Output should be 'Apple', 'Orange', 'Pineapple'); */

const fruit = ['Cherry', 'Apple', 'Banana', 'Orange', 'Kiwi',
    'Pineapple'];


// for(let i = 0; i < fruit.length; i++) {
//     if(i % 2 === 1) {
//         console.log(fruit[i])
//     }
// }

for (let i = 1; i < fruit.length; i += 2) {
    console.log(fruit[i]);
}

/* Ex 83 - How many sixes
Use a JavaScript for or while loop to count the number of sixes (value of '6')
that are in the numbers array. Display your result to the console. */

const numbers1 = [1, 6, 2, 6, 3, 6, 6, 4, 6, 5, 6,6,6,6,6];
let tot = 0;

// for(let i = 0; i < numbers1.length; i++) {
//     if(numbers1[i] === 6){
//         tot += numbers1[i] / numbers1[i]
//     }
// }

for(let i = 0; i < numbers1.length; i++) {
    if(numbers1[i] === 6){
        tot += 1
    }
}

console.log(tot)

/* Ex 84 - Largest number
Use a JavaScript for or while loop to determine the largest number in the
numbers array and display it in the console. */

const numbers2 = [33, 42, 72, 91, 52, 98, 22, 19, 7]
let amount = 0

for(let i = 0; i < numbers2.length; i++) {
    if(numbers2[i] > amount){
        amount = numbers2[i]
    }
}

// console.log(Math.max(...numbers2))

console.log(amount)

/* Ex 85 - Smallest number
Use a JavaScript for or while loop to determine the smallest number in the
numbers array and display it in the console. */
const numbers3 = [33, 42, 72, 91, 52, 98, 22, 19, 7];
let amount4 = 200

for(let i = 0; i < numbers3.length; i++) {
    if(numbers3[i] < amount4){
        amount4 = numbers3[i]
    }
}

console.log(amount4)