/* Exercise 44 - Change this string
Re-write the above code to use a template literal. You can check your code by
logging the new template literal to the console. */

const name = 'Sofia';
const str = `Good afternoon ${name}, nice to meet you!`

console.log(str) 

/* Exercise 45 - Change another string
Re-write the above code to use a template literal. You can check your code by
logging the new template literal to the console. */

const firstName = 'Jennie'
const secondName = 'Harper'

console.log(`Good afternoon ${firstName} ${secondName} nice to meet you!`)

/* Exercise 46 - Multi-line strings
Re-write the above code to use a template literal. You can check your code by
logging the new template literal to the console. */

console.log(`The quick brown\n fox jumps over\n the lazy dog`)

/* Exercise 47 - Variable interpolation 1
Re-write the above code to use a template literal. You can check your code by
logging the new template literal to the console. */

const age = 25
const birthday = '26/08/1995'
console.log(`I am ${age} years old on my birthday (${birthday})`)

/* Exercise 48 - Variable interpolation 2
Re-write the above code to use a template literal. You can check your code by
logging the new template literal to the console. */

const error = new Error('Unknown Error')
console.log(`An error occurred: ${error.message}`)