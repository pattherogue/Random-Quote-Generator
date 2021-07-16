/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array used to contain data structure
***/
let quotes = [
  {
    quote: "Waste no more time arguing what a good man should be. Be One.",
    source: "Marcus Aurelius",
  },
  {
    quote: "You could leave life right now. Let that determine what you do and say and think.",
    source: "Marcus Aurelius",
  },
  {
    quote: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    source: "Seneca",
  },
  {
    quote: "How long are you going to wait before you demand the best for yourself?",
    source: "Epictetus",
  },
  {
    quote: "He who fears death will never do anything worth of a man who is alive.",
    source: "Seneca",
    citation: "Dialogues and Essays",
    year: "2008",
  },
];




/***
 * `getRandomQuote` function to create random number that returns random quote 
***/
function getRandomQuote() {
  let randomNumber = quotes[ Math.floor( Math.random() * quotes.length) ]; /* variable to store random number */
  return randomNumber; /* return random quote object */
};




/***
 * `printQuote` function display new quote each time user clicks 
***/
function printQuote() {
  let quoteObject = getRandomQuote(quotes); /* variable to store random quote object from getRandomQuote() function */
  let html = `
  <p class="quote">${quoteObject.quote} </p>
  <p class="source">${quoteObject.source}</p>
`; /* variable to store HTML string */

if (quoteObject.citation !== undefined ) {
  html += `
  <span class="citation">${quoteObject.citation} </span>
  `;
}  /* if statement citation */

if (quoteObject.year !== undefined ) {
  html += `
  <span class="year">${quoteObject.year}</span>
  `;
} /* if statement year */

html += `</p>`; /* return full HTML string displaying random quote */
document.getElementById('quote-box').innerHTML = html; 

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);