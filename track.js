document.addEventListener("DOMContentLoaded", function(){
  // Typewriter effect
  const txtElement = document.getElementById('typewriter');
  const words = ["Welcome to my portfolio.", "I am Quan Mai."];
  let wordIndex = 0;
  let txt = '';
  let isDeleting = false;
  let typeSpeed = 200;

  function type() {
      const current = wordIndex % words.length;
      const fullTxt = words[current];

      if (isDeleting) {
          txt = fullTxt.substring(0, txt.length - 1);
      } else {
          txt = fullTxt.substring(0, txt.length + 1);
      }

      txtElement.innerHTML = `<span class="txt">${txt}</span>`;

      if (!isDeleting && txt === fullTxt) {
          typeSpeed = 2000;
          isDeleting = true;
      } else if (isDeleting && txt === '') {
          isDeleting = false;
          wordIndex++;
          typeSpeed = 500;
      } else {
          typeSpeed = 200;
      }

      setTimeout(type, typeSpeed);
  }

  type();
});