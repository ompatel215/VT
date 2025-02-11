function revealContent() {
    const content = document.getElementById('content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function showResponse(answer) {
    const response = document.getElementById('response');
    if (answer === 'yes') {
        response.innerHTML = "Yay! I'm so happy! 💝";
        setTimeout(() => {
            window.location.href = 'slideshow.html';
        }, 1500);
    } else {
        response.innerHTML = "Wrong answer, pick again! 😊";
    }
    
    response.style.animation = 'none';
    response.offsetHeight; // Trigger reflow
    response.style.animation = 'fadeIn 0.5s';
} 