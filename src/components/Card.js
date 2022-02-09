import {api} from "./Api.js";

export class Card {
  constructor(templateSelector, handleCardClick, handleDeleteClick, cardData) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;

    this._cardId = cardData.cardId;
    this._whoCreated = cardData.ownerId;
    this._likes = cardData.likes;

    this._myId = "59385c7c302a08e8328209f6";

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getCardTemplate() {
    const elementsTemplate = document.querySelector(this._templateSelector).content;
    const cardTemplate = elementsTemplate.querySelector('.element').cloneNode(true);

    if (this._whoCreated !== this._myId) {
      cardTemplate.querySelector('.element__delete-icon').remove();
    }

    return cardTemplate;
  }

  generateCard() {
    this._item = this._getCardTemplate();

    this._elementImage = this._item.querySelector('.element__image');
    this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;

    this._item.querySelector('.element__name').textContent = this._cardData.name;
    this._setEventListeners();

    return this._item;
  }

  _setEventListeners() {
    if (this._item.contains(this._item.querySelector('.element__delete-icon'))) {
      this._item
        .querySelector('.element__delete-icon')
        .addEventListener('click', () => {
          this._handleDeleteClick();
        });
    }

    this._item
      .querySelector('.element__like-button')
      .addEventListener('click', this._likeCard);

    this._elementImage.addEventListener('click', (evt) => {
      this._fetchCardInfo(evt);
      this._handleCardClick();
    });
  }

  _fetchCardInfo(evt) {
    this._popup = document.querySelector('.popup_pic');
    this._popup.querySelector('.popup__source').src = evt.target.src;
    this._popup.querySelector('.popup__source').alt = evt.target.alt;
    this._popup.querySelector('.popup__label').textContent = evt.target.alt;
  }

  getCardId(){
    return this._cardId;
  }

  deleteCard() {
    this._item.remove();
  }

  _likeCard(evt) {
    evt.preventDefault();
    evt.target.classList.toggle('element__like-button_liked');
  }
}
