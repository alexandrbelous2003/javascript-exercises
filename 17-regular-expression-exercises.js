/* Regular Expression Exercises

Regular expressions can be used to match patterns of text inside strings. The
Regular Expression (or RegEx) is made up of symbols, each of which have a
specific meaning / function. */

/* Ex 112 - Match a name
Given the following string: */

const regex = /John/i;
const userName = 'John Smith';

console.log(userName.match(regex))

/* Ex 113 - Match the first word
Write a regular expression in JavaScript that matches the first word in the
string. */

const regex2 = /^\w+/;
const userName2 = 'The quick brown fox';

console.log(userName2.match(regex2))

/* Ex 114 - Match the last word
Write a regular expression in JavaScript that matches the last word in the
string. */

const regex3 = /\w+$/;
const userName3 = 'The quick brown fox';

console.log(userName3.match(regex3))

/* Ex 115 - Match a number
Write a regular expression in JavaScript that matches the number in the string. */

const regex4 = /\w\d/;
const userName4 = 'John 29 Smith';

console.log(userName4.match(regex4))

/* Ex 116 - Match a date
Write a regular expression in JavaScript that matches the date inside the string. */

const regex5 = /\d{2}\/\d{2}\/\d{4}/;
const userName5 = 'John 29/01/1999 Smith';

console.log(userName5.match(regex5))