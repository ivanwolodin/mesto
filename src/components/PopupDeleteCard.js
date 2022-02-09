import Popup from "./Popup.js";

export class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);

    this._submitCallback = submitCallback;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  _submitHandler = () => {
    this._submitCallback(this._card);
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._popUp.addEventListener('click', this._submitHandler);
  }
}
