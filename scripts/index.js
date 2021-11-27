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

const popupProfile = document.querySelector(".popup__profile");
const editButton = document.querySelector(".profile__edit-button");

const closePopupButton = popupProfile.querySelector(".popup__close-button");
const savePopupButton = popupProfile.querySelector(".popup__save-button");

const popupName = popupProfile.querySelector(".popup__subtitle_type_name");
const popupPosition = popupProfile.querySelector(
  ".popup__subtitle_type_profession"
);

let profileName = document.querySelector(".profile__name");
let profilePosition = document.querySelector(".profile__position");

const popupImage = document.querySelector(".popup__image");
const closePopupImageButton = popupImage.querySelector(".popup__close-image");
const savePopupImageButton = popupImage.querySelector(".popup__save-image");
const addButton = document.querySelector(".profile__add-button");

const elementsTemplate = document.querySelector(".elements-cards").content;
const elements = document.querySelector(".elements");

initialCards.forEach((item) => {
  const element = elementsTemplate.cloneNode(true);
  element.querySelector(".element__image").src = item.link;
  element.querySelector(".element__name").textContent = item.name;
  element
    .querySelector(".element__delete-icon")
    .addEventListener("click", deleteCard);
  element
    .querySelector(".element__like-button")
    .addEventListener("click", likeCard);
  elements.append(element);
});

function openPopupProfile() {
  popupName.value = profileName.textContent;
  popupPosition.value = profilePosition.textContent;
  popupProfile.classList.add("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePosition.textContent = popupPosition.value;
  popupProfile.classList.remove("popup_opened");
}

function closePopupProfile() {
  popupProfile.classList.remove("popup_opened");
}

function openPopupImage() {
  popupImage.classList.add("popup_opened");
}

function closePopupImage() {
  popupImage.classList.remove("popup_opened");
}

function addNewCard(evt) {
  evt.preventDefault();
  const element = elementsTemplate.cloneNode(true);
  const popupCardLink = popupImage.querySelector(".popup__subtitle_type_link");
  const popupCardName = popupImage.querySelector(".popup__subtitle_type_image");

  const cardLink = popupCardLink.value;
  const cardName = popupCardName.value;

  if (cardLink !== "" && cardName !== "") {
    element.querySelector(".element__image").src = cardLink;
    element.querySelector(".element__name").textContent = cardName;
    element
      .querySelector(".element__delete-icon")
      .addEventListener("click", deleteCard);
    element
      .querySelector(".element__like-button")
      .addEventListener("click", likeCard);
    elements.prepend(element);
    popupCardLink.value = "";
    popupCardName.value = "";
  }

  popupImage.classList.remove("popup_opened");
}

function deleteCard(evt) {
  evt.preventDefault();
  evt.target.parentNode.parentNode.parentNode.remove();
}

function likeCard(evt) {
  evt.preventDefault();
}

editButton.addEventListener("click", openPopupProfile);
closePopupButton.addEventListener("click", closePopupProfile);
savePopupButton.addEventListener("click", formSubmitHandler);

addButton.addEventListener("click", openPopupImage);
closePopupImageButton.addEventListener("click", closePopupImage);
savePopupImageButton.addEventListener("click", addNewCard);
