const timeElement = document.getElementById("user-time");

function updateTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}

updateTime(); 
setInterval(updateTime, 1000); 

