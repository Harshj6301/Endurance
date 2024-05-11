document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.getElementById('hero-title');
    const text = "Endurance AI";
    let index = 0;
  
    const intervalId = setInterval(function() {
      if (index < text.length) {
        heroTitle.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    },90); // Adjust typing speed here (milliseconds)
  });
  