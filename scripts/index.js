console.log("connected!");

let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");

let closePopupButton = document.querySelector(".popup__close-button");
let savePopupButton = document.querySelector(".popup__save-button");

let popupName = document.querySelector(".popup__name");
let popupPosition = document.querySelector(".popup__profession");

let profileName = document.querySelector(".profile__name");
let profilePosition = document.querySelector(".profile__position");

function open() {
  popupName = document.querySelector(".profile__name").innerHTML;
  popupPosition = document.querySelector(".profile__position").innerHTML;
  popup.classList.add("popup_opened");
}

function closeAndSave(evt) {
  evt.preventDefault();
  profileName.innerHTML = document.querySelector(".popup__name").value;
  profilePosition.innerHTML =
    document.querySelector(".popup__profession").value;
  popup.classList.remove("popup_opened");
}

function closeWithoutSaving() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", open);
closePopupButton.addEventListener("click", closeWithoutSaving);
savePopupButton.addEventListener("click", closeAndSave);
