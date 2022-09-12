var card = document.getElementById("card");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var aVersion = document.getElementById("aVersion");
var bVersion = document.getElementById("bVersion");
var sketch = document.getElementById("sketch");
var holographic = document.getElementById("holographic");
var back = document.getElementById("back");

var cardNumber = 1;
var cardType = "a";
var fileType = ".jpg";
const basePath = "img/";

function checkTransform() {
  if (card.style.transform === "rotate(90deg)") {
    card.style.transform = "";
  }
}

function setCardSrc() {
  card.src = basePath + cardNumber + cardType + fileType;
}

previous.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 1) {
    cardNumber--;
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  card.style.maxHeight = "75vh";
});

next.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 41) {
    cardNumber++;
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  card.style.maxHeight = "75vh";
});

aVersion.addEventListener("click", (e) => {
  checkTransform();
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  card.style.maxHeight = "75vh";
});

bVersion.addEventListener("click", (e) => {
  checkTransform();
  cardType = "b";
  fileType = ".jpg";
  setCardSrc();
  card.style.maxHeight = "75vh";
});

sketch.addEventListener("click", (e) => {
  checkTransform();
  cardType = "a";
  fileType = ".gif";
  setCardSrc();
  card.style.maxHeight = "75vh";
});

holographic.addEventListener("click", (e) => {
  checkTransform();
  cardType = "b";
  fileType = ".gif";
  setCardSrc();
  card.style.maxHeight = "75vh";
});

back.addEventListener("click", (e) => {
  checkTransform();
  cardType = "";
  fileType = ".jpg";
  setCardSrc();
  card.style.transform = "rotate(90deg)";
  if (!screen.orientation.type.includes("landscape")) {
    card.style.maxHeight = "45vh";
  }
});

screen.orientation.addEventListener("change", function (e) {
  if (screen.orientation.type.includes("landscape")) {
    card.style.maxHeight = "75vh";
  } else if (card.style.transform === "rotate(90deg)") {
    card.style.maxHeight = "45vh";
  }
});
