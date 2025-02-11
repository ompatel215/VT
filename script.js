function revealContent() {
    document.getElementById('content').style.display = 'block';
    document.getElementById('bgMusic').play();
    
    // Create celebration hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 300);
    }
}

function showResponse(answer) {
    const response = document.getElementById('response');
    if (answer === 'yes') {
        response.innerHTML = "Yay! I'm so happy! 💝";
        setTimeout(() => {
            document.getElementById('bgMusic').pause();
            window.location.href = 'slideshow.html';
        }, 1500);
    } else {
        response.innerHTML = "Wrong answer, pick again! 😊";
    }
    
    response.style.animation = 'none';
    response.offsetHeight;
    response.style.animation = 'fadeIn 0.5s';
} 