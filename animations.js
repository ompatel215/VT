// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 1000);

// Music toggle functionality
const musicBtn = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

// Preload the audio
bgMusic.load();

musicBtn.addEventListener('click', async () => {
    try {
        if (bgMusic.paused) {
            await bgMusic.play();
            musicBtn.textContent = '🔇';
        } else {
            bgMusic.pause();
            musicBtn.textContent = '🎵';
        }
    } catch (err) {
        console.log('Error playing audio:', err);
        alert('Unable to play music. Please try again.');
    }
});

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const hearts = ['❤️', '💖', '💝', '💕'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 3000);
}

createFloatingHearts();
