const quotes = [
  "“Any application that can be written in JavaScript, will eventually be written in JavaScript.” – Jeff Atwood",
  "“JavaScript is the duct tape of the internet.” – Charlie Campbell",
  "“JavaScript is the most misunderstood language in the world.” – Douglas Crockford",
  "“Always bet on JavaScript.” – Brendan Eich",
  "“JavaScript will stay relevant as long as the web exists.” – Anonymous Dev"
];

function changeQuote() {
  const quoteBox = document.getElementById("quote-box");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randomIndex];
}