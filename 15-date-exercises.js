/* Ex 100 - Today
Using the JavaScript Date object, display the current date in the console. */

console.log(Date())

/* Ex 101 - Day of the week
Using the JavaScript Date object, display the current day of the week in the
console.
Hint: In order to display the day of the week as text (e.g. Monday,
Tuesday…) you will need to add some additional code to conver the information
you get from the date object to the day of the week. */

const currentDate = new Date()

console.log(currentDate.toDateString())

/* Ex 102 - What zone is this?
Using the JavaScript Date object, determine the current time zone and display
it in the console. */

const currentUTC = new Date()

console.log(currentUTC.toUTCString())

/* Ex 103 - What time is it?
Using the JavaScript Date object, display the current time in the console. */

// const currentTime = new Date()

const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds}`
    }
    console.log(
    getCurrentTime()
    );

// console.log(currentTime.toLocaleTimeString())

/* Ex 104 - Timestamps
Using the JavaScript Date object, get the current timestamp and display it in
the console. */


const currentTimeStamps = new Date()

console.log(currentTimeStamps.getUTCMinutes())

/* Ex 105 - Create an error
Create a new JavaScript Error object with the message 'This is a custom error'. */

const err = {
    error: 'This is a custom error'
}

console.error(err.error)

/* Ex 106 - Catch an error
The following code will produce an error: 

Use a JavaScript try/catch block to catch the error and display a message to the
console (e.g. 'Invalid JSON found')*/

try {
    JSON.parse('not json');
} catch(error) {
    console.error('Invalid JSON found')
}

/* Ex 107 - Catch a custom error
Create a new JavaScript Error and give it a message of your choice. Then, write
a try/catch block where your custom error is thrown and then caught. Display
the result of the error inside the catch block to the console. */

let person = {
    age: 21,
    name: 'Alex'
}

try {
    // person - its obj, not a string, so JSON.parse will throw an error
    let obj = JSON.parse(person)  // Error! person - its obj
    console.log(obj.age)
} catch(error) {
    console.error('Invalid JSON Data') 
}
