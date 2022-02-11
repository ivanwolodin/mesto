export class Card {
  constructor(
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeCard,
    handleDislikeCard,
    cardData,
    userId) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
    this._cardId = cardData.cardId;

    this._whoCreated = cardData.ownerId;
    this._likes = cardData.likes;

    this._whoLiked = [];
    this._likes.forEach(whoLiked => {
        this._whoLiked.push(whoLiked._id);
      }
    )

    this._userId = userId;
    this._likedByMe = false;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;

    this._likeCard = handleLikeCard;
    this._unlikeCard = handleDislikeCard;

  }

  setLikesCounter = (counter) => {
    this._likeCounter.textContent = counter;
  }

  _getCardTemplate() {
    const elementsTemplate = document.querySelector(this._templateSelector).content;
    const cardTemplate = elementsTemplate.querySelector('.element').cloneNode(true);

    if (this._whoCreated !== this._myId) {
      cardTemplate.querySelector('.element__delete-icon').remove();
    }

    if (this._whoLiked.includes(this._userId)) {
      cardTemplate.querySelector('.element__like-button').classList.add('element__like-button_liked');
      this._likedByMe = true;
    }

    return cardTemplate;
  }

  generateCard() {
    this._item = this._getCardTemplate();

    this._likeCounter = this._item.querySelector('.element__like-counter');
    this._likeCounter.textContent = this._likes.length;

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
      .addEventListener('click', this.handleLikeCard);

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

  getCardId() {
    return this._cardId;
  }

  deleteCard() {
    this._item.remove();
  }

  handleLikeCard = (evt) => {
    if (!this._likedByMe) {
      this._likeCard(this._cardId);
      evt.target.classList.toggle('element__like-button_liked');
      this._likedByMe = !this._likedByMe;
    } else {
      this._unlikeCard(this._cardId);
      evt.target.classList.toggle('element__like-button_liked');
      this._likedByMe = !this._likedByMe;
    }

  }
}
