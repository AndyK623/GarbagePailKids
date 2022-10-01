const isTouchDevice = "ontouchstart" in document.documentElement;

var card = document.getElementById("card");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var aVersion = document.getElementById("aVersion");
var bVersion = document.getElementById("bVersion");
var sketch = document.getElementById("sketch");
var holographic = document.getElementById("holographic");
var back = document.getElementById("back");
var backSpan = document.getElementById("backSpan");

var flipped = false;

var cardNumber = 1;
var cardType = "a";
var fileType = ".jpg";
const basePath = "img/";

var tappedPrevious = false;
var firstTapPrevious;
var secondTapPrevious;
var tapTimePrevious = 400;

var tappedNext = false;
var firstTapNext;
var secondTapNext;
var tapTimeNext = 400;

function checkTransform() {
  if (card.style.transform === "rotate(90deg)") {
    card.style.transform = "";
    flipped = false;
    backSpan.textContent = "flip_to_back";
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
    if (!isTouchDevice) {
      e.ctrlKey ? (cardNumber = substractTen(cardNumber)) : cardNumber--;
    } else {
      tapTimePrevious < 400
        ? (cardNumber = substractTen(cardNumber))
        : cardNumber--;
    }
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

previous.addEventListener("touchstart", (e) => {
  if (!tappedPrevious) {
    tapTimePrevious = 401;
    tappedPrevious = true;
    firstTapPrevious = new Date();
  } else {
    secondTapPrevious = new Date();
    tapTimePrevious = secondTapPrevious - firstTapPrevious;
    tappedPrevious = false;
  }
});

next.addEventListener("click", (e) => {
  checkTransform();
  if (cardNumber != 83) {
    if (!isTouchDevice) {
      e.ctrlKey ? (cardNumber = addTen(cardNumber)) : cardNumber++;
    } else {
      tapTimeNext < 400 ? (cardNumber = addTen(cardNumber)) : cardNumber++;
    }
  }
  cardType = "a";
  fileType = ".jpg";
  setCardSrc();
  setMaxHeight("75vh");
});

next.addEventListener("touchstart", (e) => {
  if (!tappedNext) {
    tapTimeNext = 401;
    tappedNext = true;
    firstTapNext = new Date();
  } else {
    secondTapNext = new Date();
    tapTimeNext = secondTapNext - firstTapNext;
    tappedNext = false;
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
  if (flipped) {
    checkTransform();
    cardType = "a";
    fileType = ".jpg";
    setCardSrc();
    setMaxHeight("75vh");

    backSpan.textContent = "flip_to_back";
    flipped = false;
  } else {
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

    backSpan.textContent = "flip_to_front";
    flipped = true;
  }
});

screen.orientation.addEventListener("change", function (e) {
  if (screen.orientation.type.includes("landscape")) {
    setMaxHeight("75vh");
  } else if (card.style.transform === "rotate(90deg)") {
    setMaxHeight("45vh");
  }
});
