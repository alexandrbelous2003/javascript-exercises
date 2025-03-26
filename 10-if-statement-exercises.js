/* Ex 71 - If you have enough money
Complete the boolean expression inside the parentheses of the if statement to
display the message in the console if the value stored inside the money variable
is greater than 200. */

let money = 250;
if (money >= 200 ) {
console.log('You have enough');
}

/* Ex 72 - If you are an admin
Complete the boolean expression inside the parentheses of the if statement to
display the message in the console if the user object has a true value for it's
admin property. */

let user = {
    role: 'Developer',
    admin: true
}
    if (user.admin === true ) {
    console.log('You have access');
    } else {
        console.log('You don`t have access');
    }

/* Ex 73 - If you are an admin and have an active account
Complete the boolean expression inside the parentheses of the if statement to
display the message in the console if the user object has a true value for it's
admin property as well as a true value for it's accountActive property. */

let user2 = {
    role: 'Developer',
    admin: true,
    accountActive: true
}
    if (user2.admin === true && user2.accountActive === true) {
    console.log('You have access');
    }

/* Ex 74 - If you know what you're doing
Write an if statement in JavaScript that displays the string I can use if
statements if the value stored in the skill variable is greater than or equal to
100. Try adjusting the value stored in the skill variable to check your if
statement is correct. */

let skill = 101

if(skill >= 100) {
    console.log('value is correct')
}

/* Ex 75 - If not…
Write an if statement in JavaScript that displays the string I can use if
statements in the console if the value stored in the skill variable is greater
than or equal to 100. If it is not, then display the string I can definitely use if
statements in the console. Try adjusting the value stored in the skill variable
to check you get the expected output. */

let skill2 = 101

if(skill2 >= 100) {
    console.log('I can use if statements')
}else {
    console.log('I can definitely use if statements')
}

/* Ex 76 - Grading
Write an if statement in JavaScript that displays a character on the console
(representing a grading mark) depending on the value stored in the score
variable. The grading is as follows: */

let score = 145;

// if(score >= 50 && score <= 60) {
//     console.log('D')
// } else if(score > 60 && score <= 70) {
//     console.log('C')
// } else if(score > 70 && score <= 80) {
//     console.log('B')
// } else {
//     console.log('A')
// }

if (score > 80) {
    console.log('A');
    } else if (score > 70) {
    console.log('B');
    } else if (score > 60) {
    console.log('C');
    } else if (score > 50) {
    console.log('D');
    } else {
    console.log('E');
    }

    if(score > 200) {
        console.error(`Big Value`)
    } else if(score > 150) {
        console.warn(`Big Value`)
    } else if (score > 100) {
        console.warn(`Ok`)
    } else {
        console.warn(`Great`)
    }