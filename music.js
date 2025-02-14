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

    // Remove any existing event listeners
    musicBtn.replaceWith(musicBtn.cloneNode(true));
    const newMusicBtn = document.getElementById('musicToggle');
    
    newMusicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            newMusicBtn.textContent = '🔇';
            localStorage.setItem('musicPlaying', 'true');
        } else {
            audio.pause();
            newMusicBtn.textContent = '🎵';
            localStorage.setItem('musicPlaying', 'false');
        }
    });

    // Save current time periodically
    setInterval(() => {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', !audio.paused);
    }, 1000);

    // Only create rose petals if we're on the slideshow page
    if (window.location.pathname.includes('slideshow')) {
        createFloatingRosePetals();
        document.getElementById('quote').textContent = loveQuotes[0];
        changeQuote();
    }
}; 