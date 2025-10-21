
function updateTime() {
  const timeElement = document.getElementById('user-time');
  
  if (timeElement) {
    const now = new Date();

    const formattedTime = 
      now.toLocaleTimeString('en-US', { hour12: false }) + 
      '.' + now.getMilliseconds().toString().padStart(3, '0');

    timeElement.textContent = formattedTime;
  }
}

setInterval(updateTime, 1);
