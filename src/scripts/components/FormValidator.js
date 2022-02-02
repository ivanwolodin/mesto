export class FormValidator {
  constructor(data, form) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = form.querySelectorAll(this._inputSelector);
    this._submitButton = form.querySelector(this._submitButtonSelector);

    this._form = form;
  }

  _showError(input, errorMessageText) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some((el) => !el.validity.valid);
  }

  _toggleButtonActive() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _checkIfInputValid(input) {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  }

  _setInputListeners() {
    this._inputList.forEach((input) => {
      this._toggleButtonActive();
      input.addEventListener('input', () => {
        this._checkIfInputValid(input);
        this._toggleButtonActive();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setInputListeners();
  }
}

