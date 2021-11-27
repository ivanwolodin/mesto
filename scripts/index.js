const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");

const closePopupButton = popup.querySelector(".popup__close-button");
const savePopupButton = popup.querySelector(".popup__save-button");

const popupName = popup.querySelector(".popup__subtitle_type_name");
const popupPosition = popup.querySelector(".popup__subtitle_type_profession");

let profileName = document.querySelector(".profile__name");
let profilePosition = document.querySelector(".profile__position");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementsTemplate = document.querySelector('.elements-cards').content;
const elements = document.querySelector('.elements');

initialCards.forEach((item) => {
  const element =  elementsTemplate.cloneNode(true);
  element.querySelector('.element__image').src = item.link;
  element.querySelector('.element__name').textContent = item.name;
  elements.append(element);

}); 

// const directorTemplate = document.querySelector('.director-template').content;
// directors.forEach(function (element) {
//   const directorElement = directorTemplate.cloneNode(true);

//   directorElement.querySelector('.directors__name').textContent = element.name;
//   directorElement.querySelector('.directors__description').textContent = element.career;
//   directorElement.querySelector('.directors__films').href = element.films;

//   directorsList.append(directorElement)
// })


function openPopup() {
  popupName.value = profileName.textContent;
  popupPosition.value = profilePosition.textContent;
  popup.classList.add("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePosition.textContent = popupPosition.value;
  popup.classList.remove("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
savePopupButton.addEventListener("click", formSubmitHandler);
