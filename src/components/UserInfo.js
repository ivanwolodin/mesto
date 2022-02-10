export default class UserInfo {
  constructor(userNameSelector, userProfessionSelector, userAvatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userProfession = document.querySelector(userProfessionSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      'userName': this._userName.textContent,
      'userProfession': this._userProfession.textContent,
      'avatar': window.getComputedStyle(this._userAvatar).getPropertyValue('background-image')
    }
  }

  setUserInfo = (name, profession, avatar) => {
    this._userName.textContent = name;
    this._userProfession.textContent = profession;
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
  }
}
