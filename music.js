window.onload = function() {
    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    const savedTime = localStorage.getItem('musicTime');
    
    // Always try to play music immediately
    audio.play().then(() => {
        musicBtn.textContent = '🔇';
        localStorage.setItem('musicPlaying', 'true');
        
        // Set the saved time position after starting playback
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }
    }).catch(err => console.log('Error playing audio:', err));

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.textContent = '🔇';
            localStorage.setItem('musicPlaying', 'true');
        } else {
            audio.pause();
            musicBtn.textContent = '🎵';
            localStorage.setItem('musicPlaying', 'false');
        }
    });

    // Save current time periodically
    setInterval(() => {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', !audio.paused);
    }, 1000);

    // Start the floating rose petals
    createFloatingRosePetals();
    
    // Initialize the first quote and start the quote rotation
    document.getElementById('quote').textContent = loveQuotes[0];
    changeQuote();
}; 