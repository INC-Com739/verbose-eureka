'use strict';

// Create a fortuneTeller Function

function fortuneTeller(name, age) {
    let fortune = '';

    
    if (name === 'Alice') {
        fortune += 'You will have a great adventure soon. ';
    } else if (name === 'Bob') {
        fortune += 'A surprise is waiting for you. ';
    } else {
        fortune += 'You will find happiness in unexpected places. ';
    }

   
    if (age < 20) {
        fortune += 'Youth brings many opportunities. ';
    } else if (age < 40) {
        fortune += 'You are in the prime of your life. ';
    } else {
        fortune += 'Wisdom comes with age. ';
    }

    return fortune;
}

const userName = prompt("Enter your name:");
const userAge = parseInt(prompt("Enter your age:"));


const result = fortuneTeller(userName, userAge);
console.log(`Hello ${userName}, ${result}`);