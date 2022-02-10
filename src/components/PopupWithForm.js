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
      this._formValues[elem.name] = elem.value;
    })

    return this._formValues;
  }

  getFormValues = (data) => {
    this._form.querySelector('.popup__subtitle_type_name').value = data.userName;
    this._form.querySelector('.popup__subtitle_type_profession').value = data.userProfession;
  }

  _submitHandler = () => {
    const originalText = this._popupButton.innerText;
    this._popupButton.innerText = "Сохранение..";
    this._submitCallback(this._getInputValues());
    this._form.reset();
    this._popupButton.innerText = originalText;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitHandler);
  }
}
