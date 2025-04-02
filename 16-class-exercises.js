/* Classes provide a layer of abstraction (or 'syntactic sugar') over JavaScript's
Object Oriented protototype system. It's common to use them to pull together
common attributes (properties) and functions (methods) for a specific type of
object. */


// Ex 108 - Complete Constructor Class

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    Grade() {
        console.log(`У ${this.firstName} старший грейд`)
    }
}

const Employee = new Person('Alex', '')
console.log(Employee)

/* Ex 109 - Add a method
Add a method to the class which takes one argument of password and checks
whether or not this is the same as the password property contained within a
Person object. The method should return a true or false value. */

class Password {
    constructor(username, password) {
    this.username = username;
    this.password = password;
    }

    checkPassword(userPassword){
        return userPassword === this.password
    }
}

const userPass = new Password('Alex', 'Qwerty123')
console.log(userPass.checkPassword('Qwerty123'))

/* Ex 110 - Create a class
Create a JavaScript class that models a User object. The User class should
have:
Two properties for 'First Name' and 'Last Name'
One method that returns a string that consists of the user's full name */

class User {
    constructor(userFirstName, userLastName){
        this.userFirstName = userFirstName
        this.userLastName = userLastName
    }

    fullUserData(){
        return `${this.userFirstName} ${this.userLastName}`
    }
}

const Emp = new User('Alex', 'Bel')
console.log(Emp.fullUserData())

/* Ex 111 - Create another class
Create a JavaScript class that models a Rectangle object. The Rectangle class
should have:
A height and width property
A method that calculates the area of the rectangle (returned as a value) */

class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

const rect = new Rectangle(6,12)
console.log(rect.getArea())