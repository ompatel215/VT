let surpriseAudio;
let isPlaying = false;

function playSuprise() {
    if (!surpriseAudio) {
        surpriseAudio = new Audio('PND.mp3');
    }
    
    if (!isPlaying) {
        surpriseAudio.play().catch(error => {
            console.log("Error playing audio:", error);
        });
        isPlaying = true;
    } else {
        surpriseAudio.pause();
        surpriseAudio.currentTime = 0;
        isPlaying = false;
    }
    
    // Create extra floating hearts when music plays
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 300);
    }
} 