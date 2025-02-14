// Change this to your relationship start date
const startDate = new Date('2024-12-04T00:00:00'); // Format: YYYY-MM-DDTHH:mm:ss

function updateCounter() {
    const now = new Date();
    
    // Calculate years
    let years = now.getFullYear() - startDate.getFullYear();
    
    // Calculate months
    let months = now.getMonth() - startDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate days
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
        months--;
        // Get last day of previous month
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Calculate hours since the start time
    const hourDiff = now - new Date(now.getFullYear(), now.getMonth(), now.getDate(), startDate.getHours(), startDate.getMinutes());
    const hours = Math.floor(hourDiff / (1000 * 60 * 60));
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// Update counter every hour
setInterval(updateCounter, 1000 * 60 * 60);
// Initial update
updateCounter();