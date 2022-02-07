import './index.css';

import Api from "../components/Api.js";
import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {addButton, editButton, formData} from "../utils/constants.js";

let initialCards = [];

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-35/',
  token: '3a99f107-1f3f-4594-b232-09564fbe9a82',
});

api.getInitialCards().then((result) => {
  const cardsSection = new Section(
    {
      items: result,
      renderer: (item) => {
        cardsSection.addItem(createCard(item));
      }
    },
    '.elements'
  );
  cardsSection.renderItems();
})
  .catch((err) => {
    alert("All is broken");
    alert(err);
  });

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

popupProfile.setEventListeners();``

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

function createCard(item) {
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
