export default class UserInfo{
  constructor(userNameSelector, userProfessionSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userProfession = document.querySelector(userProfessionSelector);
  }

  getUserInfo(){
    return {
      'userName': this._userName.textContent,
      'userProfession': this._userProfession.textContent
    }
  }

  setUserInfo = (name, profession) => {
    this._userName.textContent = name;
    this._userProfession.textContent = profession;
  }
}
