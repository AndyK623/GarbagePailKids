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
var mouseDown;
var mouseUp;
var clickTime;

function checkTransform() {
  if (card.style.transform === "rotate(90deg)") {
    card.style.transform = "";
  }
}

function setCardSrc() {
  card.src = basePath + cardNumber + cardType + fileType;
}

function setMaxHeight(maxHeight) {
  card.style.maxHeight = maxHeight;
}

previous.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 1) {
    if (clickTime > 500) {
      cardNumber = cardNumber - 10;
      if (cardNumber < 1) {
        cardNumber = 1;
      }
    } else {
      cardNumber--;
    }
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

previous.addEventListener("mousedown", (e) => {
  mouseDown = new Date();
});

previous.addEventListener("mouseup", (e) => {
  mouseUp = new Date();
  clickTime = mouseUp - mouseDown;
});

next.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 83) {
    if (clickTime > 500) {
      cardNumber = cardNumber + 10;
      if (cardNumber > 83) {
        cardNumber = 83;
      }
    } else {
      cardNumber++;
    }
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

next.addEventListener("mousedown", (e) => {
  mouseDown = new Date();
});

next.addEventListener("mouseup", (e) => {
  mouseUp = new Date();
  clickTime = mouseUp - mouseDown;
});

aVersion.addEventListener("click", (e) => {
  checkTransform();
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

bVersion.addEventListener("click", (e) => {
  checkTransform();
  cardType = "b";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

sketch.addEventListener("click", (e) => {
  checkTransform();
  cardType = "a";
  fileType = ".gif";
  setCardSrc();
  setMaxHeight("75vh");
});

holographic.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber <= 41) {
    cardType = "b";
    fileType = ".gif";
  } else {
    cardType = "r";
    fileType = ".jpg";
  }

  setCardSrc();
  setMaxHeight("75vh");
});

back.addEventListener("click", (e) => {
  checkTransform();
  cardType = "";
  fileType = ".jpg";
  setCardSrc();
  if (cardNumber <= 41) {
    card.style.transform = "rotate(90deg)";
    if (!screen.orientation.type.includes("landscape")) {
      setMaxHeight("45vh");
    }
  }
});

screen.orientation.addEventListener("change", function (e) {
  if (screen.orientation.type.includes("landscape")) {
    setMaxHeight("75vh");
  } else if (card.style.transform === "rotate(90deg)") {
    setMaxHeight("45vh");
  }
});
