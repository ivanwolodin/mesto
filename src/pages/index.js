import './index.css';

import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {addButton, editButton, formData, initialCards, submitButton} from "../utils/constants.js";

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
      cardsSection.addItem(createCard(item));
    }
  },
  '.elements'
);

cardsSection.renderItems();

const cardValidator = new FormValidator(formData, document.querySelector('.popup__container_card_form'));
cardValidator.enableValidation();

const profileValidator = new FormValidator(formData, document.querySelector('.popup__container_profile_form'));
profileValidator.enableValidation();

const popupCardForm = new PopupWithForm(
  '.popup_image',
  ({name, link}) => {
    cardsSection.prependItem(createCard({name, link}));
    popupCardForm.close();
  }
);

function createCard(item){
  const newCard = new Card(
    '.elements-cards',
    () => {
      popupPicture.open(item.name, item.link)
    },
    {name: item.name, link: item.link}
  );
  return newCard.generateCard();
}

popupCardForm.setEventListeners();
addButton.addEventListener('click', () => {
  cardValidator.resetValidation();
  popupCardForm.open();
});

editButton.addEventListener('click', () => {
  popupProfile.getFormValues(userInfo.getUserInfo());
  profileValidator.resetValidation();
  popupProfile.open();
});
