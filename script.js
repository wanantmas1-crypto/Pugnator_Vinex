// Quote Rotator for Pugnator & Vindex Company
const quotes = [
    "action is our shield",
    "attack is our cover",
    "fight is our base",
    "strike is our safety",
    "push is our strength",
    "charge is our fort",
    "advance is our guard",
    "effort is our protection",
    "drive is our wall",
    "speed is our stronghold",
    "surge is our barrier",
    "rush is our defence",
    "blitz is our block",
    "start is our haven",
    "move is our refuge",
    "force is our shelter",
    "flow is our fence",
    "raid is our safe spot",
    "attack is our post",
    "strike is our sanctuary",
    "chase is our shield",
    "hit is our stronghold",
    "advance is our cover",
    "charge is our guard",
    "fight is our safety",
    "push is our tower",
    "effort is our wall",
    "fight is our anchor",
    "action is our barrier",
    "speed is our defence",
    "blitz is our wall",
    "move is our cover",
    "surge is our shelter",
    "attack is our fence",
    "rush is our refuge",
    "drive is our fort",
    "start is our post",
    "strike is our sanctuary",
    "charge is our shield",
    "chase is our protection",
    "force is our base",
    "advance is our fence",
    "raid is our haven",
    "fight is our guard",
    "flow is our stronghold",
    "attack is our barrier",
    "effort is our shield",
    "strike is our shelter",
    "speed is our guard",
    "blitz is our anchor",
    "action is our tower",
    "drive is our safe spot",
    "advance is our fence",
    "hit is our refuge",
    "charge is our wall",
    "action is our fort",
    "surge is our fence",
    "attack is our sanctuary",
    "chase is our shield",
    "force is our stronghold",
    "start is our cover",
    "rush is our barrier",
    "fight is our post",
    "raid is our protection",
    "flow is our guard",
    "attack is our base",
    "effort is our haven",
    "strike is our cover",
    "advance is our safe spot",
    "drive is our shelter"
];

let currentQuoteIndex = 0;
const quoteDisplay = document.getElementById('quote-display');

function rotateQuote() {
    // Apply exit animation
    quoteDisplay.classList.remove('quote-slide-in');
    quoteDisplay.classList.add('quote-slide-out');
    
    // Wait for exit animation to finish before changing quote
    setTimeout(() => {
        quoteDisplay.classList.remove('quote-slide-out');
        void quoteDisplay.offsetWidth; // Trigger reflow
        quoteDisplay.textContent = quotes[currentQuoteIndex];
        quoteDisplay.classList.add('quote-slide-in');
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 500); // Half of the animation duration for smooth transition
}

// Rotate every 3 seconds
setInterval(rotateQuote, 3000);

// Display first quote immediately
quoteDisplay.textContent = quotes[currentQuoteIndex];
quoteDisplay.classList.add('quote-slide-in');
currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;