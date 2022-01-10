class FormValidator {
  constructor(data, form) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
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

  _hasInvalidInput(inputs) {
    return Array.from(inputs).some((el) => !el.validity.valid);
  }

  _toggleButtonActive(inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
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
    const inputs = this._form.querySelectorAll(this._inputSelector);
    const submitButton = this._form.querySelector(this._submitButtonSelector);
    inputs.forEach((input) => {
      this._toggleButtonActive(inputs, submitButton, this._inactiveButtonClass);
      input.addEventListener('input', () => {
        this._checkIfInputValid(input);
        this._toggleButtonActive(inputs, submitButton, this._inactiveButtonClass);
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

const forms = document.querySelectorAll('.popup__form');

forms.forEach((form) => {
  const formValidator = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }, form);
  formValidator.enableValidation();
});
