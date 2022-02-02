import '../pages/index.css';

import {Card} from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import {FormValidator} from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import {addButton, editButton, formData, initialCards, submitButton} from "./utils/constants.js";

const popupPicture = new PopupWithImage('.popup_pic');
popupPicture.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__position');

const popupProfile = new PopupWithForm(
  '.popup_profile',
  ({name, profession}) => {
    userInfo.setUserInfo(name, profession);
    popupProfile.close();
  }
);
popupProfile.setEventListeners();

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
addButton.addEventListener('click', popupCardForm.open);

editButton.addEventListener('click', () => {
  popupProfile.getFormValues(userInfo.getUserInfo());
  popupProfile.open();
});

const cardValidator = new FormValidator(formData, document.querySelector('.popup__container_card_form'));
cardValidator.enableValidation();

const profileValidator = new FormValidator(formData, document.querySelector('.popup__container_profile_form'));
profileValidator.enableValidation();
