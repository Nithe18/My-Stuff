// String and template literals
/* const firstName = 'Nitheesh';
const job = 'Student';
const birthYear = 2000;
const year = 2050;

const nitheesh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(nitheesh);

const nitheeshNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nitheeshNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); */

//Taking decisions: if/else statements
/* const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Nitheesh can start driving license 🚗');
} */

/* const age = 15;

if (age >= 18) {
    console.log('Nitheesh can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Nitheesh is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Coding challenge #2
const MarkWeight = 78;
const MarkHeight = 1.69;
const JohnWeight = 92;
const JohnHeight = 1.95;

const MarkBMI = MarkWeight / MarkHeight ** 2;
const JohnBMI = JohnWeight / JohnHeight ** 2;
console.log(MarkBMI, JohnBMI);

if (MarkBMI > JohnBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
} else {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
} */

// Type conversion and coercion
// type conversion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// trying typer conversion with a number which is not a number
console.log(Number('Nitheesh'));
console.log(typeof NaN);

//String to number
console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old'); // + operator converts number to string(implicit conversion)
console.log('23' - '10' - 3); // - operator converts string to number(implicit conversion)
console.log('23' * '2'); // * operator converts string to number(implicit conversion)
console.log('23' / '2'); // / operator converts string to number(implicit conversion) */

// Truthy and Falsy values

// 5 falsy values: 0, '', undefined, null, NaN
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nitheesh'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
}
else {
    console.log('Height is UNDEFINED');
} */


// Equality operators: == vs ===
/*const age = '18';
if (age === 18) console.log('You just became an adult'); // === is strict equality operator
if (age == 18) console.log('You just became an adult'); // == is loose equality operator

// prompt function to take input from user in browser
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
}
else if (favourite === 7) {
    console.log('7 is also a cool number');
}
else if (favourite === 9) {
    console.log('9 is also a cool number');
}
else if (favourite === 11) {
    console.log('11 is also a cool number');
}
else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?'); // !== is strict not equal operator */

// Boolean logic: AND, OR and NOT operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND operator
console.log(hasDriversLicense || hasGoodVision); // OR operator
console.log(!hasDriversLicense); // NOT operator

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // AND operator

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}








