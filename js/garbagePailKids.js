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

var tapped = false;
var firstTap;
var secondTap;
var tapTime = 200;

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

function addTen(cardNumber) {
  var result = cardNumber + 10;

  if (result > 83) {
    return 83;
  }

  return result;
}

function substractTen(cardNumber) {
  var result = cardNumber - 10;

  if (result < 1) {
    return 1;
  }

  return result;
}

previous.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 1) {
    if (tapTime > 200) {
      cardNumber--;
    } else {
      cardNumber = substractTen(cardNumber);
    }
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

previous.addEventListener("dblclick", (e) => {
  checkTransform();
  if (cardNumber != 1) {
    cardNumber = substractTen(cardNumber);
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

previous.addEventListener("touchstart", (e) => {
  if (!tapped) {
    tapTime = 201;
    tapped = true;
    firstTap = new Date();
  } else {
    secondTap = new Date();
    tapTime = secondTap - firstTap;
    tapped = false;
  }
});

next.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 83) {
    if (tapTime >= 200) {
      cardNumber++;
    } else {
      cardNumber = addTen(cardNumber);
    }
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

next.addEventListener("dblclick", (e) => {
  checkTransform();
  if (cardNumber != 83) {
    cardNumber = addTen(cardNumber);
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

next.addEventListener("touchstart", (e) => {
  if (!tapped) {
    tapTime = 201;
    tapped = true;
    firstTap = new Date();
  } else {
    secondTap = new Date();
    tapTime = secondTap - firstTap;
    tapped = false;
  }
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
