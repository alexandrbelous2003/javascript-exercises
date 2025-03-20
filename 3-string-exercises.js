/* Exercise 18 - How long is a piece of string?
Determine the length of the following string and log the value to the console. */

const str = 'How long is a piece of string?';

console.log(str.length)

/* Exercise 19 - Hello to the world
Create two separate variables that hold the strings Hello and World then
display them together as one string using console.log  */

const first = "Hello"
const second = "World"

console.log(first.concat(" ", second))

/* Exercise 20 - First 3 characters */

let strCharacters = 'The quick brown fox';

console.log(strCharacters.slice(0,3))

/* Exercise 21 - Does this string have class? */

let str2 = 'Does this string have class?'

console.log(str2.includes('class'))

/* Exercise 22 - Where do you stop? */

let str3 = 'You need to stop when it gets too much';

// function stopStr(str3) {
//     return str3.slice(0, str3.indexOf('stop'))
// }

function stopStr(str3) {
    return str3.indexOf('stop')
}

console.log(stopStr(str3))

/* Exercise 23 - A game of two halves
Split the original string into two equal parts and store each half in it's own
separate variable. */

const str4 = 'Half 1 Half 2';

// function spl(str4) {
//     let a = str4.split(' ',2).join(' ')
//     let b = str4.slice(7)
    
//     return [a,b]
// }

const strHalfLength = str4.length / 2;
const half1 = str4.slice(0, strHalfLength);
const half2 = str4.slice(strHalfLength);

console.log(half2)

/* Exercise 24 - Remove the spaces */

const withoutSpace = ' Lots of leading and trailing space '

console.log(withoutSpace.trim())

/* Exercise 25 - To upper case */

const upperCase = 'The quick brown fox'

console.log(upperCase.toUpperCase())

/* Exercise 26 - To lower case */

const lowerCase = 'The quick brown fox'

console.log(lowerCase.toLowerCase())

/* Exercise 27 - To sentence case
Convert the following string to be sentence case (first letter of the string
capitalised). */

const sentenceCase = 'to be or not to be'

console.log(`${sentenceCase[0].toUpperCase()}${sentenceCase.slice(1)}`)

/* Exercise 28 - The first and last
Use JavaScript to get the first and last characters from the original string above.
Log the result to the console to check your solution. */

const sentenceCase2 = 'that is the question'

console.log(`${sentenceCase2[0].toUpperCase()}${sentenceCase2.slice(1,-1)}${sentenceCase2[sentenceCase2.length - 1].toUpperCase()}`)