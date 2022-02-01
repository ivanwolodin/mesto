import {Card} from "./Card.js";
import Section from "./Section.js";

import PopupWithImage from "./PopupWithImage.js";
import {initialCards} from "./utils.js";
import {FormValidator} from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";

const popupPicture = new PopupWithImage('.popup_pic');
popupPicture.setEventListeners();

const editButton = document.querySelector('.profile__edit-button');
const popupProfileForm = document.querySelector(
  '.popup__container_profile_form',
);


const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popupProfile = new PopupWithForm(
  '.popup_profile',
  () => {
    profileName.textContent = document.querySelector('.popup__subtitle_type_name').value;
    profilePosition.textContent = document.querySelector(
      '.popup__subtitle_type_profession',
    ).value;
    popupProfile.close();
  }
);
popupProfile.setEventListeners();

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

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(
        '.elements-cards',
        () => {
          popupPicture.open(item.name, item.link)
        }
      );
      cardsSection.addItem(newCard.getNewCard(item));
    }
  },
  '.elements'
);

cardsSection.renderItems();

// function getProfileInfo() {
//   popupName.value = profileName.textContent;
//   popupPosition.value = profilePosition.textContent;
// }

// //это submitCallback
// function handleEditProfileInfo() {
//   profileName.textContent = popupName.value;
//   profilePosition.textContent = popupPosition.value;
//
//   closePopup(popupProfile);
// }


const popupCardForm = new PopupWithForm(
  '.popup_image',
  ({name, link}) => {

    const newCard = new Card(
      '.elements-cards',
      () => {
        popupPicture.open(name, link)
      }
    );
    cardsSection.prependItem(newCard.getNewCard({name, link}));
    const submitButton = document.querySelector('.popup__save-image');
    submitButton.classList.add('popup__button_disabled');
    submitButton.disabled = true;
    popupCardForm.close();
  }
);
popupCardForm.setEventListeners();
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', popupCardForm.open);

editButton.addEventListener('click', () => {
  popupProfile.open();
});
