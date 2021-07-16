/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = quotes[ Math.floor( Math.random() * quotes.length) ];
  return randomNumber;
};

getRandomQuote();


/***
 * `printQuote` function
***/
function printQuote() {
  let quoteObject = getRandomQuote(quotes);
  let html = `
  <p class="quote">${quoteObject.quote} </p>
  <p class="source">${quoteObject.source}</p>
`;

if (quoteObject.citation !== undefined ) {
  html += `
  <span class="citation">${quoteObject.citation} </span>
  `
};

if (quoteObject.year !== undefined ) {
  html += `
  <span class="year">${quoteObject.year}</span>
  `;
};

html += `</p>`;
document.getElementById('quote-box').innerHTML = html; 

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);