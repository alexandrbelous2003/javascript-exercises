/* Ex 49 - How long is this list?
Determine the length of the array and log the result to the console. */

const arr = [1, 4, 5, 7, 2, 9, 10]
console.log(arr.length)

/* Ex 50 - What about this list?
Determine the length of the array and log the result to the console. */

const arr2 = [1, 'Sarah', 5, 'Hamza', { a: 1 } , { b: 2 }, 10]

console.log(arr2.length)

/* Ex 51 - The first and last items
Define two variables called first and last that give pick out the first and last
values from the array. Check your variables have the values of 102 and 40
respectively by logging the result to the console. */
const arr3 = [102, 4, 22, 7, 32, 9, 40]; 

const first = arr3[0]
const last =  arr3[arr3.length - 1]

const first2 = arr3.shift()
const last2 =  arr3.pop()

console.log(last2)

/* Ex 52 - The third item
Define a variable called third that picks out the third item from the array.
Check you have the correct value by displaying it in the console. */

const arr4 = [92, 87, 45, 80, 1, 94, 20]

// console.log(arr4[2])
console.log(arr4.at(2))

/* Ex 53 - Better way to get the last item
Can you think of another way to get the last item in the array and store it in a
variable called last without accessing the array's length property? */

const arr6 = [92, 87, 45, 80, 1, 94, 20]

console.log(arr6.pop())

/* Ex 54 - Create your own array
Convert the above code to have all the values stored in the variables to be part
of one array (i.e. rewrite the code to use an array rather than individual variables
for each fruit). */

const item1 = 'Apple';
const item2 = 'Orange';
const item3 = 'Banana';
const item4 = 'Kiwi';
const item5 = 'Mango';

console.log([].concat(item1,item2, item3, item4, item5))

/* Ex 55 - Remove an item
Create a new variable lastLanguage that contains the last item from the
languages array. Your code should also remove the last item from the
languages array too. */

const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala','Perl']

console.log(languages.slice(0, -1))

/* Ex 56 - Remove another item
Create a new variable firstLanguage that contains the first item from the
languages array. Your code should also remove the first item from the
languages array too. */

console.log(languages.slice(1,6))
console.log(languages.splice(1))

/* Ex 57 - Add an item
Add the language Ruby to the end of the languages array, making it the last
item in the array. */

const languages2 = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala', 'Perl']
// console.log(languages2.push('Ruby'))
console.log(languages2.concat('Ruby'))

// Ex 58 - Add an item at the start
// Add the language Node.js to the start of the languages array, making it the
// first item in the array.

const lang = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala', 'Perl']

// console.log(languages2.push('Ruby'))
console.log(lang.reverse().concat('Ruby').reverse())
lang.splice(0,0, 'Ruby')
console.log(lang)
// lang.unshift('Ruby')
// console.log(lang)
// console.log(lang.unshift('Ruby'))
console.log(['Ryby', ...lang])