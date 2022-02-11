import './index.css';

import {api} from "../components/Api.js";
import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {PopupWithConfirmation} from "../components/PopupWithConfirmation.js";

import {
  addButton,
  editButton,
  formData,
  editAvatarButton
} from "../utils/constants.js";

let userId;

const cardsSection = new Section('.elements',
  (item) => {
    cardsSection.addItem(createCard(item));
  }
);
const userInfo = new UserInfo('.profile__name', '.profile__position', '.profile__image');

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    cardsSection.renderItems(cards);
    userInfo.setUserInfo(
      userData.name,
      userData.about,
      userData.avatar
    );
  })
  .catch((err) => {
    alert("Cannot get data from server");
    alert(err);
  });

const popupPicture = new PopupWithImage('.popup_pic');
popupPicture.setEventListeners();

const popupProfile = new PopupWithForm(
  '.popup_profile',
  ({name, profession}) => {
    api.changeUserInfo(name, profession).then((result) => {
      userInfo.setUserInfo(
        result.name,
        result.about,
        result.avatar
      );
      popupProfile.close();
    })
      .catch((err) => {
        alert("Cannot change user info");
        alert(err);
      });
  }
);

popupProfile.setEventListeners();

const popupDelete = new PopupWithConfirmation(
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
    (cardId) => {
      api.likeCard(cardId).then((result) => {
        newCard.setLikesCounter(result.likes.length);
      })
        .catch((err) => {
          alert("Cannot like card");
          alert(err);
        });
    },
    (cardId) => {
      api.dislikeCard(cardId).then((result) => {
        newCard.setLikesCounter(result.likes.length);
      })
        .catch((err) => {
          alert("Cannot unlike card");
          alert(err);
        });
    },
    {
      "name": item.name,
      "link": item.link,
      "cardId": item._id,
      "ownerId": item.owner._id,
      "likes": item.likes
    },
    userId
  );
  return newCard.generateCard();
}

popupCardForm.setEventListeners();
addButton.addEventListener('click', () => {
  cardValidator.resetValidation();
  popupCardForm.open();
});

editButton.addEventListener('click', () => {
  popupProfile.getFormValues(userInfo.getUserInfo(), {
    selectorName: '.popup__subtitle_type_name',
    selectorProfession: '.popup__subtitle_type_profession'
  });
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
      );
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
});
