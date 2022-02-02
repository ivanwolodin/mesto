import {Card} from "./Card.js";
import Section from "./Section.js";

import PopupWithImage from "./PopupWithImage.js";
import {initialCards} from "./utils.js";
import {FormValidator} from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const submitButton = document.querySelector('.popup__save-image');

const popupPicture = new PopupWithImage('.popup_pic');
popupPicture.setEventListeners();

const editButton = document.querySelector('.profile__edit-button');

const userInfo = new UserInfo('.profile__name', '.profile__position');

const popupProfile = new PopupWithForm(
  '.popup_profile',
  ({name, profession}) => {
    userInfo.setUserInfo(name, profession);
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

    submitButton.classList.add('popup__button_disabled');
    submitButton.disabled = true;
    popupCardForm.close();
  }
);
popupCardForm.setEventListeners();
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', popupCardForm.open);

editButton.addEventListener('click', () => {
  popupProfile.getFormValues(userInfo.getUserInfo());
  popupProfile.open();
});

const cardValidator = new FormValidator(formData, document.querySelector('.popup__container_card_form'));
cardValidator.enableValidation();

const profileValidator = new FormValidator(formData, document.querySelector('.popup__container_profile_form'));
profileValidator.enableValidation();
