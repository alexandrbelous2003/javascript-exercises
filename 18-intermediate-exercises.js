/* Ex 117 - Capitalise a string
Write a JavaScript function that takes one argument (a string) and returns the
string but in sentence case (first letter capitalised, other letters lower case). */

str = 'hello world!'

function firstLetterCapitalised(str) {
    return str[0].toUpperCase() + str.substring(1)
}

console.log(firstLetterCapitalised(str))

/* Ex 118 - Sum all numbers
Write a JavaScript function that takes one argument (a string e.g '123') and
returns the sum of all numbers inside that string assuming they are single digit
numbers. */

num = '12349'

function allNumbers(num) {
    return num.split('').reduce((a,b) => Number(a) + Number(b));
}

console.log(allNumbers(num))

/* Ex 119 - Largest numbers
Write a JavaScript function that takes one argument (an array of numbers) and
returns the largest number in the array. */

let arr = [1,9,21,21,213,312,4523,3423,98312,345345353,23423423423,345,2323,999999999999]
let largestNum = 0

function largestNumbers(arr) {
    for(let i = 0; i < arr.length; i++){
        if(largestNum < arr[i]){
            largestNum = arr[i]
        }
    }
    return largestNum
}

console.log(largestNumbers(arr))

/* Ex 120 - Break up a URL
Write a JavaScript function that returns a URL broken up into it's component
parts as an object. There should be properties in the object for protocol (e.g.
http or https), the host (e.g. www.google.com) and the path (e.g. /login). */

let url = 'https://www.google.com/login'
let strURL = new URL(url)

function BreakUpURL(url) {
    // a = url.split('/')
    // return {
    //     protocol: url.split(':')[0],
    //     host: a[2],
    //     path: a[3]
    // }

    return {
        protocol: strURL.protocol.replace(':',''),
        host: strURL.host,
        path: strURL.pathname.replace('/',''),
    }
}



console.log(BreakUpURL(url))

/* Ex 121 - Sort an array of strings
Write a JavaScript function that takes on argument (an array of strings) and
then returns the array sorted, in ascending order (A < B). */

let arr1  = [7,9,1,4,5,6,3,2,8]

function sortArr(arr1) {
    return arr1.sort((a,b) => a - b)
}

console.log(sortArr(arr1))

/* Ex 122 - Count similar items
Write a JavaScript function that takes two arguments (both an array of
numbers) and then returns the number of common numbers in both arrays. So
for the arrays [1,2,3] and [2,3,4] the result would be 2 (as 2 and 3 are in both
arrays). */