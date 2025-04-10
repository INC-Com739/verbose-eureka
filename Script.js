'use strict';

// Create a fortuneTeller Function

function fortuneTeller(name, age) {
    let fortune = '';

    // Generate fortunes based on name
    if (name === 'Alice') {
        fortune += 'You will have a great adventure soon. ';
    } else if (name === 'Bob') {
        fortune += 'A surprise is waiting for you. ';
    } else {
        fortune += 'You will find happiness in unexpected places. ';
    }

    // Generate fortunes based on age
    if (age < 20) {
        fortune += 'Youth brings many opportunities. ';
    } else if (age < 40) {
        fortune += 'You are in the prime of your life. ';
    } else {
        fortune += 'Wisdom comes with age. ';
    }

    return fortune;
}


//Create a function named fortuneTeller that takes two arguments: name and age. 

// Inside the function: Use if statements to generate fortunes based on the name.Use if statements to generate fortunes based on the age.

//Combine the fortunes into a single string and return it.

//Use prompt() to ask the user for their name and age.
const userName = prompt("Enter your name:");
const userAge = parseInt(prompt("Enter your age:"));

//Call the fortuneTeller function with the user's input and display the result using console.log.
const result = fortuneTeller(userName, userAge);
console.log(`Hello ${userName}, ${result}`);