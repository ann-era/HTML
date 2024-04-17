function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB');
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('datetime').textContent = `Date: ${date} | Time: ${time}`;
}

setInterval(getCurrentDateTime, 1000);