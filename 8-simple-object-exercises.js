/* Ex 59 - A person object
Access the name property of the person variable and display the contents in
the console. */

const person = {
    name: 'Hamza',
    age: 21,
    role: 'Developer'
    };

console.log(person.name)
console.log(person['role'])

/* Ex 60 - A full person object
Write a console statement that logs the person's full name ( firstName and
lastName ) to the console output. You should include a space in between their
first and last name in your output */

const person2 = {
    firstName: 'Sarah',
    lastName: 'Hennings',
    age: 33,
    role: 'Developer'
    };

console.log(`${person2.firstName} ${person2.lastName}`)

/* Ex 61 - How many languages do you speak?
Using JavaScript, determine how many languages the person has listed in the
object (the length of the languages property) */

const person3 = {
    name: 'James',
    age: 21,
    role: 'Developer',
    languages: ['French', 'English', 'German', 'Polish', 'Italian']
    };

console.log(person3.languages.length)

/* Ex 62 - Make an object
Create an object that has the above variable names as the properties of the
object and values that correspond to the values stored in each variable. */

const firstName = 'Willie';
const lastName = 'Phillips';
const age = 26;
const role = 'Developer';

const person5 = {
    firstName: firstName,
    lastName: lastName,
    age: 26,
    role: role
}

console.log(person5)

/* Ex 63 - Make another object
Create an object that has the properties under the 'Object properties' heading
and store it in a variable person . Then, create an additional property on the
person object called friend . The friend property should contain another
object that itself has the properties under the 'Friend properties' section. */

// Object properties
const name2 = 'Ricardo Smith';
const age2 = 19;
const role2 = 'Developer';
// Friend properties
const friendName = 'Robin Marshall';
const friendAge = 20;
const friendRole = 'Developer';

const person6 = {
    name: name2,
    age: age2,
    role: role2,
    friend: {
        friendName: friendName,
        friendAge: friendAge,
        friendRole: friendRole
    }
}

console.log(person6)