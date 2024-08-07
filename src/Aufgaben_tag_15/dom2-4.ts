//!----- DOM 2 - Aufgabe 4 --------!

function setSmall() {
    const element = document.getElementById('element');
    if (element) {
      element.classList.remove('middle', 'crazy');
      element.classList.add('small');
      element.style.transitionProperty = "all";
      element.style.transitionDuration = "0.2s";
      element.style.textShadow = "none";
      element.style.color = "black"
    }
  }
  
  function setMiddle() {
    const element = document.getElementById('element');
    if (element) {
      element.classList.remove('small', 'crazy');
      element.classList.add('middle');
      element.style.transitionProperty = "all";
      element.style.transitionDuration = "0.5s";
      element.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
      element.style.color = "red"
    }
  }
  
  function setBigAndCrazy() {
    const element = document.getElementById('element');
    if (element) {
      element.classList.remove('small', 'middle');
      element.classList.add('crazy');
      element.style.transitionProperty = "all";
      element.style.transitionDuration = "0.8s";
      element.style.textShadow = "5px 5px 10px rgba(255, 0, 0, 0.8)"
      element.style.color = "blue"
    }
  }
  
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;
      if (buttonText === 'Small') {
        setSmall();
      } else if (buttonText === 'Middle') {
        setMiddle();
      } else if (buttonText === 'Big & Crazy') {
        setBigAndCrazy();
      }
    });
  });