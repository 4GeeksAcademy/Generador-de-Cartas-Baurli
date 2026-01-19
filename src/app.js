import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  
  const card = document.getElementById("card");

  const suits = [
    { name: "heart", symbol: "♥" },
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" },
    { name: "diamond", symbol: "♦" }
  ];

  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  card.className = "card " + randomSuit.name;
  card.innerHTML = `${randomValue} ${randomSuit.symbol}`;
}

window.onload = function () {
  generateCard();
  
  const btn = document.getElementById("new-card");
  if (btn) btn.addEventListener("click", generateCard);

  setInterval(generateCard, 10000);

  const resizeBtn = document.getElementById("resize");

if (resizeBtn) {
  resizeBtn.addEventListener("click", function () {
    const card = document.getElementById("card");
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;

    if (width) card.style.width = width + "px";
    if (height) card.style.height = height + "px";
  });
}
};