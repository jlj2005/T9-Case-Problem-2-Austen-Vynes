"use_strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Case Problem 2

   Random Jane Austen Quote Generator
   Author: Ethan Jay
   Date:  5/31/2023   
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
// Var to hold a random number between 0 and 9 (total of 10)
var randomQ = randomInt(0,10);

// Reference the first quote element in the document
var quoteElem = document.getElementsByTagName("quote")[0];

// Insert the calculated random number quote into the quote element.
quoteElem.innerHTML = getQuote(randomQ);

// function to generate a random integer. pass in vars "lowest" and "size".
function randomInt(lowest, size) {
   return Math.floor(lowest + size * Math.random());
}

function getQuote(n) {
   var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Life seems but a quick succession of busy nothings.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "One cannot be always laughing at a man without now and then stumbling on something witty.",
   "Men were put into the world to teach women the law of compromise.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}
