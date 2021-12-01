const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popupPicture = document.querySelector(".popup_pic");
const closePopupPictureButton = popupPicture.querySelector(
  ".popup__close-button"
);

const popupProfile = document.querySelector(".popup_profile");
const editButton = document.querySelector(".profile__edit-button");
const popupProfileForm = document.querySelector(".popup__container_profile_form");

const closePopupButton = popupProfile.querySelector(".popup__close-button");
const savePopupButton = popupProfile.querySelector(".popup__save-button");

const popupName = popupProfile.querySelector(".popup__subtitle_type_name");
const popupPosition = popupProfile.querySelector(
  ".popup__subtitle_type_profession"
);

let profileName = document.querySelector(".profile__name");
let profilePosition = document.querySelector(".profile__position");

const popupImage = document.querySelector(".popup_image");
const closePopupImageButton = popupImage.querySelector(".popup__close-image");
const savePopupImageButton = popupImage.querySelector(".popup__save-image");
const addButton = document.querySelector(".profile__add-button");
const popupCardForm = document.querySelector(".popup__container_card_form");

const elementsTemplate = document.querySelector(".elements-cards").content;
const elements = document.querySelector(".elements");

function render() {
  initialCards.forEach((item) => {
    elements.append(addItem(item));
  });
}

function addItem(item) {
  const element = elementsTemplate.cloneNode(true);
  element.querySelector(".element__image").src = item.link;
  element.querySelector(".element__image").alt = item.name;
  element.querySelector(".element__name").textContent = item.name;
  element
    .querySelector(".element__delete-icon")
    .addEventListener("click", deleteCard);
  element
    .querySelector(".element__like-button")
    .addEventListener("click", likeCard);

  element
    .querySelector(".element__image")
    .addEventListener("click", () => openPopup(popupPicture));

  element
    .querySelector(".element__image")
    .addEventListener("click", (evt) => getPictureInfo(popupPicture, evt));

  return element;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function getProfileInfo() {
  popupName.value = profileName.textContent;
  popupPosition.value = profilePosition.textContent;
}

function getPictureInfo(popup, evt) {
  popup.querySelector(".popup__source").src = evt.target.src;
  popup.querySelector(".popup__source").alt = evt.target.alt;
  popup.querySelector(".popup__label").textContent = evt.target.alt;
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleEditProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePosition.textContent = popupPosition.value;

  closePopup(popupProfile);
}

function handleAddNewCard(evt) {
  evt.preventDefault();
  const popupCardLink = popupImage.querySelector(".popup__subtitle_type_link");
  const popupCardName = popupImage.querySelector(".popup__subtitle_type_image");

  const cardLink = popupCardLink.value;
  const cardName = popupCardName.value;

  if (cardLink !== "" && cardName !== "") {
    item = addItem({ link: cardLink, name: cardName });
    elements.prepend(item);
    popupCardLink.value = "";
    popupCardName.value = "";
  }

  closePopup(popupImage);
}

function deleteCard(evt) {
  evt.preventDefault();
  evt.target.parentNode.parentNode.parentNode.remove();
  evt.stopPropagation();
}

function likeCard(evt) {
  evt.preventDefault();
  evt.target.classList.toggle("element__like-button_liked");
}

editButton.addEventListener("click", () => getProfileInfo);
editButton.addEventListener("click", () => openPopup(popupProfile));

closePopupButton.addEventListener("click", () => closePopup(popupProfile));
popupProfileForm.addEventListener("submit", handleEditProfileInfo);

addButton.addEventListener("click", () => openPopup(popupImage));

closePopupImageButton.addEventListener("click", () => closePopup(popupImage));
popupCardForm.addEventListener("submit", handleAddNewCard);

closePopupPictureButton.addEventListener("click", () =>
  closePopup(popupPicture)
);

render();
