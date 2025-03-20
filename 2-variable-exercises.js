/* Exercise 08 - Your name
Define a variable called myName and assign it a string containing your full name.
Consider which type of declaration keyword you're going to use e.g. will your
name change during the course of a JavaScript program? */

const MyName = "Alex"
let myName = "Alex"

/* Exercise 09 - Your age
Define a variable called myAge and assign it a numerical value that represents
how old you are. */

let Age = 21

/* Exercise 10 - A simple sum
Define a variable called result and assign it the value of adding the numbers
2389 and 8721 together. */

const result = 2389 + 8721
//result += 2389
//result += 8721

console.log(result)

/* Exercise 11 - A slice of PI
Define a constant variable and assign it the value of PI (assume PI has a value of
3.141592653589793 ) */   

const PI  = Math.PI

console.log(PI)

/* Exercise 12 - Re-assigning values
Define a variable called favouriteFood and assign it a string value (of your
particular favourite food). Use console.log to display it in the console then, re-
assign a new value to the favouriteFood variable. Log the new value to the
console to check that it has changed. */

let favouriteFood = "pizza"

console.log(favouriteFood)

favouriteFood = "pasta"

console.log(favouriteFood)

/* Exercise 13 - One year older
Define a variable myAge and assign it a numerical value that represents how old
you are then, add a value of 1 to the variable. You can log the variable value to
the console to check it has been updated. */

let age = 21

console.log(age)

// age = 22
// age += 1
age ++
console.log("Exercise 13 " + age)

/* Exercise 14 - One less slice
Define a variable slicesOfPizza and assign it a value of 8 . Then, reduce the
number stored in the slicesOfPizza variable by 1 . You can log the variable
value to the console to check it has been updated. */

let slicesOfPizza = 8

console.log(slicesOfPizza)

// slicesOfPizza = 8 - 1
// slicesOfPizza -= 1
 slicesOfPizza --

console.log("Exercise 14 -  " + slicesOfPizza)

/* Exercise 15 - A small withdrawal
Define a variable bankAccount and assign it a value of 1000 . Then, subtract 50
from the bankAccount variable and ensure that the new value is re-assigned to
the bankAccount variable. */

let bankAccount = 1000
bankAccount = 1000 - 50

console.log(bankAccount)

/* Exercise 16 - A significant deposit
Define a variable bankAccount and assign it a value of 1000 . Then, add 5000 to
the value stored in the bankAccount variable and ensure that the new value is
re-assigned to the bankAccount variable. */

deposit = bankAccount + 5050

console.log(deposit)

/* Exercise 17 - Give me your name, your full name
Define two variables, firstName and lastName and store your first and last
names into them respectively. Then, create a third variable fullName which
uses the firstName and lastName variables to create your full name. */

const firstName = "Aleksandr"
const lastName = "Belous"
const fullName = firstName + ' ' + lastName

console.log(fullName)