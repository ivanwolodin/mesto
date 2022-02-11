import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popUp.querySelector('.popup__form');

    this._formInputs = this._popUp.querySelectorAll('.popup__input');

    this._originalButtonText = this._popupButton.textContent;

    this._formValues = {};
  }

  _getInputValues = () => {
    this._formInputs.forEach((elem) => {
      this._formValues[elem.name] = elem.value;
    })

    return this._formValues;
  }

  getFormValues = (data, selectors) => {
    this._form.querySelector(selectors.selectorName).value = data.userName;
    this._form.querySelector(selectors.selectorProfession).value = data.userProfession;
  }

  _submitHandler = () => {
    this._submitCallback(this._getInputValues());
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitHandler);
  }

  renderLoading = (isLoading) => {
    if(isLoading) {
      this._popupButton.textContent = "Сохранение..";
    } else {
      this._popupButton.textContent = this._originalButtonText;
    }
  }
}
