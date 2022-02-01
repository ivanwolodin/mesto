import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popUp.querySelector('.popup__form');
  }

  _getInputValues = () => {
    this._formValues = {};

    this._formInputs = this._popUp.querySelectorAll('.popup__input');
    this._formInputs.forEach((elem) => {
      console.log(elem);
      this._formValues[elem.name] = elem.value;
    })

    return this._formValues;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    this._submitCallback(this._getInputValues());
    this._form.reset();
  }

  setEventListeners = () => {
    this._closePopupPictureButton.addEventListener('click', () =>
      this.close()
    );
    this._popUp
      .querySelector('.popup__overlay')
      .addEventListener('mousedown', () => this.close());

    this._form.addEventListener('submit', this._submitHandler);
  }
}
