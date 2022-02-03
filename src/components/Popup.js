export default class Popup {
  constructor(popupSelector) {
    this._popUp = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupPictureButton = this._popUp.querySelector('.popup__close-button');
  }

  open () {
    document.addEventListener('keydown', this._handleEscClose);
    this._popUp.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popUp.classList.remove('popup_opened');
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closePopupPictureButton.addEventListener('click', () =>
      this.close()
    );
    this._popUp
      .querySelector('.popup__overlay')
      .addEventListener('mousedown', () => this.close());

  }
}
