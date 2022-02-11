import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    open (name, link) {
      super.open();
      this._popupSource = this._popUp.querySelector('.popup__source');
      this._popupLabel = this._popUp.querySelector('.popup__label');
      this._popupSource.src = link;
      this._popupSource.alt = name;
      this._popupLabel.textContent = name;
    }
}
