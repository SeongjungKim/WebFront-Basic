const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomArray = [111, 224, 133, 54, 25, 6, 67, 28, 92, 10];

function getRandomValue() {
  const randomIndex = Math.floor(Math.random() * randomArray.length);
  const randomValue = randomArray[randomIndex];

  quote.innerText = randomValue;
  author.innerText = randomIndex;
}

getRandomValue();
setInterval(getRandomValue, 500);
