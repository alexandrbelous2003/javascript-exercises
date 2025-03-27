/* Ex 88 - Functional messages
Write a function that displays the message Hello World to the console and call
the function 3 times. */

 let helloWorld = () => {
    return console.log(`Hello world`)
}

const showMessage = (msg, numberOfTimes) => {
    for(let i = 0; i < numberOfTimes; i++) {
        console.log(msg);
    }
}
showMessage('Hello World', 3)

helloWorld()
helloWorld()
helloWorld()

/* Ex 89 - Say hi to me
Write a function that has one parameter name and displays the message Hello
{name} (where {name} is the value you pass in) to the console. Call the function
to check it is working correctly. */

let name = 'Aleksandr'

function hello(name) {
    return console.log(`Hello ${name}`)
}

hello(name)

/* Ex 90 - Sum two numbers
Write a function that takes two arguments which are numbers, adds them
together and then returns the result. */

let value1 = 20;
let value2 = 30; 

function sumNumber(value1, value2) {
    return value1 + value2
}

console.log(sumNumber(value1, value2))

/* Ex 91 - Multiply three numbers
Write a function that takes three arguments which are numbers and multiplies
them all together before finally returning the result. */



function multipliesNumber(value1, value2, value3) {
    return value1 * value2 * value3
}

console.log(multipliesNumber(26, 45, 21))

/* Ex 92 - What is the first item?
Write a function that takes one argument which is an array and returns the first
value from the array. The function should not modify the original array. */

let arr = [8, 9, 10, 23, 34, 21, 29]

function firstElArray(arr) {
    return arr[0]
}

console.log(firstElArray(arr))

/* Ex 93 - Does the property exist?
Write a function that takes two arguments, the first of which is an object and
the second a string. The function should then return a true or false value */


const propertyExists = (obj, property) =>
    obj[property] !== undefined
    console.log(
    propertyExists({
    a: 1,
    b: 2
    },
    'a')
    );

/* Ex 94 - Check my grade
Write a function that displays a character on the console (representing a
    grading mark) depending on the value passed in as an argument to the
    function. The grading is as follows:
    More than 50 - D
    More than 60 - C
    More than 70 - B
    More than 80 - A
    For anything else a value of U should be displayed. */

    let rank = 5

    function grade(rank) {
        if(rank > 80){
           return console.log('A')
        } else if(rank > 70){
           return console.log('B')
        } else if(rank > 60){
            return console.log('C')
        } else {
            return console.log('D')
        }
    }

    grade(rank)

/* Ex 95 - The first letter
Write a function that takes one argument which is a string and then returns the
first letter from the string */

let str = 'sdfsfsdfsd'

function firstArgument(str) {
    return str.charAt(0)
}

console.log(firstArgument(str))

/* Ex 96 - Pick a letter
Write a function that takes two arguments, the first of which is a string and the
second is a number. The function should return the letter from the string that
occurs at the position in the string as indicated by the number passed in to the
function. */

let str1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

function argStr(str1, num) {
    return str1[num - 1]
}

console.log(argStr(str1, 1))

/* Ex 97 - Perimeter of a square
Complete the above function to calculate the perimeter of a square given the
value of one of the sides. The function should return the value of the
calculation. */

const perimeterSquare = side => {
    return 4 * side
}

console.log(perimeterSquare(8))

/* Ex 98 - Perimeter of a rectangle
Complete the above function to calculate the perimeter of a rectangle given
the length and width. The function should return the value of the calculation. */

const perimeterTriangle = (length, width) => {
    return (length * 2) + (width * 2)
}

console.log(perimeterTriangle(5, 6))

/* Ex 99 - Circumference of a circle
Complete the above function to calculate the circumference of a circle given
the value of it's radius. The function should return the value of the calculation. */

const perimeterCircle = radius => {
    return Math.PI * 2  * radius
}

console.log(perimeterCircle(22))