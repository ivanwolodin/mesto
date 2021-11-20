const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");

const closePopupButton = popup.querySelector(".popup__close-button");
const savePopupButton = popup.querySelector(".popup__save-button");

const popupName = popup.querySelector(".popup__subtitle_type_name");
const popupPosition = popup.querySelector(".popup__subtitle_type_profession");

let profileName = document.querySelector(".profile__name");
let profilePosition = document.querySelector(".profile__position");

function openPopup() {
  popupName.value = profileName.textContent;
  popupPosition.value = profilePosition.textContent;
  popup.classList.add("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePosition.textContent = popupPosition.value;
  closePopup();
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function changeBackgroundColor() {
  const date = new Date();
  const hour = date.getHours();

  if (hour > 7 && hour < 16) {
    const backgroundColor = document.querySelector(".root");
    backgroundColor.style = "background-color: #868a86;";

    profileName.style = "color: black";
    profilePosition.style = "color: black";
  }
}

changeBackgroundColor();

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
savePopupButton.addEventListener("click", formSubmitHandler);
