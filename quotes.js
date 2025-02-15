const loveQuotes = [
    "Every time I see you, I fall in love all over again.",
    "You're the first and last thing on my mind each day.",
    "My heart beats for you, now and forever.",
    "You make every day feel like Valentine's Day.",
    "In your eyes, I found my home.",
    "With you, every moment is magical.",
    "I love you 3000!",

];

function changeQuote() {
    const quoteElement = document.getElementById('quote');
    let currentIndex = 0;
    
    setInterval(() => {
        quoteElement.style.opacity = '0';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % loveQuotes.length;
            quoteElement.textContent = loveQuotes[currentIndex];
            quoteElement.style.opacity = '1';
        }, 500);
    }, 5000);
}

window.onload = function() {
    document.getElementById('quote').textContent = loveQuotes[0];
    changeQuote();
}; 