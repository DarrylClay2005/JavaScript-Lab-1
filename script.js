// JavaScript Lab 1 – Problem Solving
// Write all your code below each prompt

// 1. Sandwich Calculator
// Each guest gets 2 sandwiches. You have 12 guests.
// Calculate total sandwiches needed.
let Guests = 12
let sandwiches = 2
let SandwichesNeeded = Guests / sandwiches

console.log("Total Sandwiches Needed: ", SandwichesNeeded)


// 2. Movie Budget
// You have $40. A movie ticket costs $9.50.
// How many full tickets can you buy, and what's the leftover amount?

// operators +, -, *, /

let budget = 40
let price = 9.5
let ticketsBought = budget / price
let leftoverAmount = budget % price


console.log("Tickets Bought: ", ticketsBought)
console.log("Leftover Amount: ", leftoverAmount)


/* 3. Dog Age Converter
Convert a dog’s age to human years
(1 dog year = 7 human years)
*/
let dogyears = 1
let humanyears = 7
let TotalAmount = dogyears * humanyears

console.log("Total  years: ", TotalAmount)


// 4. Combine and Print
// Create variables for your name, favorite food, and a hobby.
// Print a sentence using all 3.

let MyNameIsDarrylClay = MyName
let MyFavoriteFoodIsPizza = favoritefood 
let MyFavoriteHobbyIsGaming = Gaming
let AllTogether = MyNameIsDarrylClay + MyFavoriteFoodIsPizza + MyFavoriteHobbyIsGaming

console.log("Assignment: ", AllTogether)

// I Don't think this is fully right but ill take what credit i can get, i gotta get more practice, also side note for anyone publicly viewing this......
// GAMING IS A HOBBY I DON'T CARE WHAT ARGUMENTS YALL USE

// 🌟 BONUS (Optional)
// Use prompt() to ask for the user's name, then greet them.
// let name = prompt("What's your name?");
// console.log("Hello, " + name + "!");

prompt("Hello, What is your name",)
let name = prompt("One more time for me");
console.log("Hello, " + name + "! How are you doing today?" );