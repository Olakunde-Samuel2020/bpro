function updateUTCTime() {
    const now = new Date();
    const utcTimeElement = document.getElementById('utc-time');
    utcTimeElement.textContent = now.toUTCString();
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);