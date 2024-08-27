const countDownElement = document.getElementById("count")

if (countDownElement) {
    countDownElement.style.fontSize = "4rem";
    let counter = 11;
  
    const interval = setInterval(() => {
      counter--;
      countDownElement.innerText = counter.toString();
  
      if (counter === 0) {
        countDownElement.innerText = " ";
        clearInterval(interval);
      }
    }, 1000);
  }