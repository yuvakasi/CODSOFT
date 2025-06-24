const quotes = [
  "The best way to predict the future is to create it.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "Success is not final, failure is not fatal.",
  "Believe you can and you're halfway there.",
  "Don’t wait. The time will never be just right."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

// Show quote on load
newQuote();