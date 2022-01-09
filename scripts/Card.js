export function closePopup(popup) {
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove('popup_opened');
}

export function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export const initialCards = [
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


export class Card {
    constructor(templateSelector) {
        const elementsTemplate = document.querySelector(templateSelector).content;
        this.item = elementsTemplate.cloneNode(true);
        this._elementImage = this.item.querySelector('.element__image');
    }

    getNewCard(data) {
        this._elementImage.src = data.link;
        this._elementImage.alt = data.name;

        this.item.querySelector('.element__name').textContent = data.name;
        this._setEventListeners();

        return this.item;
    }

    _setEventListeners() {
        this.item
            .querySelector('.element__delete-icon')
            .addEventListener('click', this._deleteCard);
        this.item
            .querySelector('.element__like-button')
            .addEventListener('click', this._likeCard);

        this._elementImage.addEventListener('click', (evt) => {
            this._fetchCardInfo(popupPicture, evt);
            this._openPopup(popupPicture);
        });
    }

    _fetchCardInfo(popup, evt) {
        popup.querySelector('.popup__source').src = evt.target.src;
        popup.querySelector('.popup__source').alt = evt.target.alt;
        popup.querySelector('.popup__label').textContent = evt.target.alt;
    }

    _openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', closeByEsc);
    }

    _deleteCard(evt) {
        evt.preventDefault();
        evt.target.closest('.element').remove();
    }

    _likeCard(evt) {
        evt.preventDefault();
        evt.target.classList.toggle('element__like-button_liked');
    }
}
