var buyLinkArr = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".modal-cart");
var buyClose = buyPopup.querySelector(".modal-close");

for (var i = 0; i < buyLinkArr.length; i++) {
  buyLinkArr[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
}

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

var writeLink = document.querySelector(".write-us");
var writePopup = document.querySelector(".modal-write-us");
var writeClose = writePopup.querySelector(".modal-close");

writeLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
});

writeClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
    if (writePopup.classList.contains("modal-show")) {
      writePopup.classList.remove("modal-show");
    }
    if (buyPopup.classList.contains("modal-show")) {
      buyPopup.classList.remove("modal-show");
    }
  }
});