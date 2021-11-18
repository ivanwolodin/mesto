const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");

const closePopupButton = popup.querySelector(".popup__close-button");
const savePopupButton = popup.querySelector(".popup__save-button");

let popupName = popup.querySelector(".popup__subtitle_type_name");
let popupPosition = popup.querySelector(".popup__subtitle_type_profession");

let profileName = document.querySelector(".profile__name");
let profilePosition = document.querySelector(".profile__position");

function openPopup() {
  popupName = document.querySelector(".profile__name").textContent;
  popupPosition = document.querySelector(".profile__position").textContent;
  popup.classList.add("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popup.querySelector(
    ".popup__subtitle_type_name"
  ).value;
  profilePosition.textContent = popup.querySelector(
    ".popup__subtitle_type_profession"
  ).value;
  popup.classList.remove("popup_opened");
}

function closePopup(evt) {
  evt.preventDefault();
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
savePopupButton.addEventListener("click", formSubmitHandler);
