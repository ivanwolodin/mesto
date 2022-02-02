export class Card {
  constructor(templateSelector, handleCardClick) {
    const elementsTemplate = document.querySelector(templateSelector).content;
    this._item = elementsTemplate.querySelector('.element').cloneNode(true);
    this._elementImage = this._item.querySelector('.element__image');
    this._handleCardClick = handleCardClick;
    this._popup = document.querySelector('.popup_pic');
  }

  getNewCard(data) {
    this._elementImage.src = data.link;
    this._elementImage.alt = data.name;

    this._item.querySelector('.element__name').textContent = data.name;
    this._setEventListeners();

    return this._item;
  }

  _setEventListeners() {
    this._item
      .querySelector('.element__delete-icon')
      .addEventListener('click', (evt) => {
        this._deleteCard(evt)
      });
    this._item
      .querySelector('.element__like-button')
      .addEventListener('click', this._likeCard);

    this._elementImage.addEventListener('click', (evt) => {
      this._fetchCardInfo(evt);
      this._handleCardClick();
    });
  }

  _fetchCardInfo(evt) {
    this._popup.querySelector('.popup__source').src = evt.target.src;
    this._popup.querySelector('.popup__source').alt = evt.target.alt;
    this._popup.querySelector('.popup__label').textContent = evt.target.alt;
  }

  _deleteCard(evt) {
    evt.preventDefault();
    this._item.remove();
    this._item = null;
  }

  _likeCard(evt) {
    evt.preventDefault();
    evt.target.classList.toggle('element__like-button_liked');
  }
}
