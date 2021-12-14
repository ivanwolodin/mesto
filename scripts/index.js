const initialCards = [
  {
    name: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

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

const elementsTemplate = document.querySelector('.elements-cards').content;
const elements = document.querySelector('.elements');

function render() {
  initialCards.forEach((item) => {
    elements.append(addItem(item));
  });
}

function addItem(item) {
  const element = elementsTemplate.cloneNode(true);

  const elementImage = element.querySelector('.element__image');

  elementImage.src = item.link;
  elementImage.alt = item.name;
  element.querySelector('.element__name').textContent = item.name;
  element
    .querySelector('.element__delete-icon')
    .addEventListener('click', deleteCard);
  element
    .querySelector('.element__like-button')
    .addEventListener('click', likeCard);

  elementImage.addEventListener('click', (evt) => {
    getPictureInfo(popupPicture, evt);
    openPopup(popupPicture);
  });

  return element;
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function getProfileInfo() {
  popupName.value = profileName.textContent;
  popupPosition.value = profilePosition.textContent;
}

function getPictureInfo(popup, evt) {
  popup.querySelector('.popup__source').src = evt.target.src;
  popup.querySelector('.popup__source').alt = evt.target.alt;
  popup.querySelector('.popup__label').textContent = evt.target.alt;
}

function closePopup(popup) {
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove('popup_opened');
}

function handleEditProfileInfo() {
  profileName.textContent = popupName.value;
  profilePosition.textContent = popupPosition.value;

  closePopup(popupProfile);
}

function handleAddNewCard() {
  const cardLink = popupCardLink.value;
  const cardName = popupCardName.value;

  const item = addItem({ link: cardLink, name: cardName });
  elements.prepend(item);
  popupCardLink.value = '';
  popupCardName.value = '';

  const submitButton = document.querySelector('.popup__save-image');
  submitButton.classList.add('popup__button_disabled');
  submitButton.disabled = true;

  closePopup(popupImage);
}

function deleteCard(evt) {
  evt.preventDefault();
  evt.target.closest('.element').remove();
}

function likeCard(evt) {
  evt.preventDefault();
  evt.target.classList.toggle('element__like-button_liked');
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
  .addEventListener('click', () => closePopup(popupProfile));

popupImage
  .querySelector('.popup__overlay')
  .addEventListener('click', () => closePopup(popupImage));

popupPicture
  .querySelector('.popup__overlay')
  .addEventListener('click', () => closePopup(popupPicture));

render();
