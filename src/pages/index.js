import './index.css';

import {api} from "../components/Api.js";
import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {PopupDeleteCard} from "../components/PopupDeleteCard.js";

import {
  addButton,
  editButton,
  formData,
  editAvatarButton
} from "../utils/constants.js";

const cardsSection = new Section('.elements',
  (item) => {
    cardsSection.addItem(createCard(item));
  }
);

api.getInitialCards().then((result) => {
  cardsSection.renderItems(result);
})
  .catch((err) => {
    alert("All is broken");
    alert(err);
  });

const popupPicture = new PopupWithImage('.popup_pic');
popupPicture.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__position', '.profile__image');

api.getUserInfo().then((result) => {
  userInfo.setUserInfo(
    result.name,
    result.about,
    result.avatar
  )
})
  .catch((err) => {
    alert("Cannot get user info");
    alert(err);
  });


const popupProfile = new PopupWithForm(
  '.popup_profile',
  ({name, profession}) => {
    api.changeUserInfo(name, profession).then((result) => {
      userInfo.setUserInfo(
        result.name,
        result.about
      )
    })
      .catch((err) => {
        alert("Cannot change user info");
        alert(err);
      });

    popupProfile.close();
  }
);

popupProfile.setEventListeners();

const popupDelete = new PopupDeleteCard(
  '.popup_delete_card',
  (card) => {
    api.deleteCard(card.getCardId()).then(() => {
      card.deleteCard();
      popupDelete.close();
    })
      .catch((err) => {
        alert("Cannot delete card");
        alert(err);
      });
  }
);
popupDelete.setEventListeners();

const cardValidator = new FormValidator(formData, document.querySelector('.popup__container_card_form'));
cardValidator.enableValidation();

const profileValidator = new FormValidator(formData, document.querySelector('.popup__container_profile_form'));
profileValidator.enableValidation();

const editAvatarValidator = new FormValidator(formData, document.querySelector('.popup_avatar'));
editAvatarValidator.enableValidation();

const popupCardForm = new PopupWithForm(
  '.popup_image',
  ({name, link}) => {
    api.addNewCard(name, link).then((result) => {
      cardsSection.prependItem(createCard(result));
      popupCardForm.close();
    })
      .catch((err) => {
        alert("Cannot add new card");
        alert(err);
      });
  }
);

function createCard(item) {
  const newCard = new Card(
    '.elements-cards',
    () => {
      popupPicture.open(item.name, item.link);
    },
    () => {
      popupDelete.open(newCard);
    },
    {
      "name": item.name,
      "link": item.link,
      "cardId": item._id,
      "ownerId": item.owner._id,
      "likes": item.likes
    }
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

const popupEditAvatarProfile = new PopupWithForm(
  '.popup_avatar',
  ({link}) => {
    api.changeAvatar(link).then((result) => {
      userInfo.setUserInfo(
        result.name,
        result.about,
        result.avatar
      )
      popupEditAvatarProfile.close();
    })
      .catch((err) => {
        alert("Cannot change avatar");
        alert(err);
      });
  }
);
popupEditAvatarProfile.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  editAvatarValidator.resetValidation();
  popupEditAvatarProfile.open();
})
