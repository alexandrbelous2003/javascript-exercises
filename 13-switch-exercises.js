/* Ex 86 - Switch user
Write a switch statement that displays a message to the console depending on
the value stored in the user variable following cases:
If the value provided is 'admin', display You have full access
If the value provided is 'manager', display You can view user details
For any other value, display You are a normal user
Try changing the value of the user variable to test each of the paths in the
switch statement. */

let user = 'manager';

switch(user){
    case 'admin':
        console.log('You have full access')
    break
    case 'manager':
        console.log('You can view user details')
    break
    default :
        console.log('You are a normal user')
    break
}

// switch (user) {
//     case 'admin': {
//         console.log('You have full access');
//     break;
//     }
//     case 'manager': {
//         console.log('You can view user details');
//     break;
//     }
//     default: {
//         console.log('You are a normal user')
//     }
// }

/* Ex 87 - Flick the switch
To satisfy the following conditions:
When the number variable is 1, set the value of the switch variable to 'On'
When the number variable is 0, set the value of the switch variable to
'Off'
let user = 'admin';
let number = 1;
let switch;
switch (number) {
}
Ultimate Collection of JavaScript Exercises for Beginners [Exercise Book]
© 2023 Junior Developer Central Page 40
For any other values, set the switch variable to 'Unknown'
Display the contents of your switch variable to the console to check your
results. */

let number = 0
let switch$

switch(number) {
    case 1:
        switch$ = 'On'
    break
    case 0: 
        switch$ = 'Off'
    break
    default:
        switch$ = 'Unknown'
    break
}

console.log(switch$)