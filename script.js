// script.js

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dateStr = now.toLocaleDateString(undefined, options);
  const timeStr = now.toLocaleTimeString(undefined, timeOptions);
  document.getElementById('datetime').textContent = `${dateStr} ${timeStr}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
