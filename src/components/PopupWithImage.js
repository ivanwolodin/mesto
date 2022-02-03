import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    open (name, link) {
      super.open()
      this._popUp.querySelector('.popup__source').src = link;
      this._popUp.querySelector('.popup__source').alt = name;
      this._popUp.querySelector('.popup__label').textContent = name;
    }
}
