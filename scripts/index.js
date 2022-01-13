import {Card} from "./Card.js";
import {closePopup, initialCards, openPopup} from "./utils.js";
import {FormValidator} from "./FormValidator.js";

const popupPicture = document.querySelector('.popup_pic');
const closePopupPictureButton = popupPicture.querySelector('.popup__close-button');

const popupProfile = document.querySelector('.popup_profile');
const editButton = document.querySelector('.profile__edit-button');
const popupProfileForm = document.querySelector(
  '.popup__container_profile_form',
);

const profileCloseButton = popupProfile.querySelector('.popup__close-button');

const popupName = popupProfile.querySelector('.popup__subtitle_type_name');
const popupPosition = popupProfile.querySelector(
  '.popup__subtitle_type_profession',
);

const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');

const popupImage = document.querySelector('.popup_image');
const closePopupImageButton = popupImage.querySelector('.popup__close-image');
const popupCardLink = popupImage.querySelector('.popup__subtitle_type_link');
const popupCardName = popupImage.querySelector('.popup__subtitle_type_image');

const addButton = document.querySelector('.profile__add-button');
const popupCardForm = document.querySelector('.popup__container_card_form');

const elements = document.querySelector('.elements');

const formData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const cardValidator = new FormValidator(formData, document.querySelector('.popup__container_card_form'));
cardValidator.enableValidation();

const profileValidator = new FormValidator(formData, document.querySelector('.popup__container_profile_form'));
profileValidator.enableValidation();

function render() {
  initialCards.forEach((item) => {
    const newCard = new Card('.elements-cards');
    elements.append(newCard.getNewCard(item));
  });
}

function getProfileInfo() {
  popupName.value = profileName.textContent;
  popupPosition.value = profilePosition.textContent;
}

function handleEditProfileInfo() {
  profileName.textContent = popupName.value;
  profilePosition.textContent = popupPosition.value;

  closePopup(popupProfile);
}

function handleAddNewCard() {

  const cardLink = popupCardLink.value;
  const cardName = popupCardName.value;

  const newCard = new Card('.elements-cards');
  const item = newCard.getNewCard({link: cardLink, name: cardName});

  elements.prepend(item);
  popupCardLink.value = '';
  popupCardName.value = '';

  const submitButton = document.querySelector('.popup__save-image');
  submitButton.classList.add('popup__button_disabled');
  submitButton.disabled = true;

  closePopup(popupImage);
}

editButton.addEventListener('click', () => {
  getProfileInfo();
  openPopup(popupProfile);
});

profileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfileForm.addEventListener('submit', handleEditProfileInfo);

addButton.addEventListener('click', () => openPopup(popupImage));

closePopupImageButton.addEventListener('click', () => closePopup(popupImage));

popupCardForm.addEventListener('submit', handleAddNewCard);

closePopupPictureButton.addEventListener('click', () =>
  closePopup(popupPicture),
);

popupProfile
  .querySelector('.popup__overlay')
  .addEventListener('mousedown', () => closePopup(popupProfile));

popupImage
  .querySelector('.popup__overlay')
  .addEventListener('mousedown', () => closePopup(popupImage));

popupPicture
  .querySelector('.popup__overlay')
  .addEventListener('mousedown', () => closePopup(popupPicture));

render();
