(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._token=e.token}var n,r;return n=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-35",token:"3a99f107-1f3f-4594-b232-09564fbe9a82"});function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n,o,i,a,u,c){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"setLikesCounter",(function(e){s._likeCounter.textContent=e})),r(this,"likeCard",(function(e){e.target.classList.add("element__like-button_liked"),s._likedByMe=!s._likedByMe})),r(this,"dislikeCard",(function(e){e.target.classList.remove("element__like-button_liked"),s._likedByMe=!s._likedByMe})),r(this,"handleLikeCard",(function(e){s._likedByMe?s._dislikeCard(e,s._cardId):s._likeCard(e,s._cardId)})),this._templateSelector=t,this._cardData=u,this._cardId=u.cardId,this._whoCreated=u.ownerId,this._likes=u.likes,this._whoLiked=[],this._likes.forEach((function(e){s._whoLiked.push(e._id)})),this._userId=c,this._likedByMe=!1,this._handleCardClick=n,this._handleDeleteClick=o,this._likeCard=i,this._dislikeCard=a}var t,o;return t=e,(o=[{key:"_getCardTemplate",value:function(){var e=document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0);return this._whoCreated!==this._userId&&e.querySelector(".element__delete-icon").remove(),this._whoLiked.includes(this._userId)&&(e.querySelector(".element__like-button").classList.add("element__like-button_liked"),this._likedByMe=!0),e}},{key:"generateCard",value:function(){return this._item=this._getCardTemplate(),this._likeCounter=this._item.querySelector(".element__like-counter"),this._likeCounter.textContent=this._likes.length,this._elementImage=this._item.querySelector(".element__image"),this._elementImage.src=this._cardData.link,this._elementImage.alt=this._cardData.name,this._item.querySelector(".element__name").textContent=this._cardData.name,this._setEventListeners(),this._item}},{key:"_setEventListeners",value:function(){var e=this;this._item.contains(this._item.querySelector(".element__delete-icon"))&&this._item.querySelector(".element__delete-icon").addEventListener("click",(function(){e._handleDeleteClick()})),this._item.querySelector(".element__like-button").addEventListener("click",this.handleLikeCard),this._elementImage.addEventListener("click",(function(t){e._handleCardClick()}))}},{key:"getCardId",value:function(){return this._cardId}},{key:"deleteCard",value:function(){this._item.remove()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(t)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popUp=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closePopupPictureButton=this._popUp.querySelector(".popup__close-button"),this._popupButton=this._popUp.querySelector(".popup__button")}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popUp.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popUp.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._closePopupPictureButton.addEventListener("click",(function(){return e.close()})),this._popUp.querySelector(".popup__overlay").addEventListener("mousedown",(function(){return e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(){return l(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){p(y(a.prototype),"open",this).call(this),this._popupSource=this._popUp.querySelector(".popup__source"),this._popupLabel=this._popUp.querySelector(".popup__label"),this._popupSource.src=t,this._popupSource.alt=e,this._popupLabel.textContent=e}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=n.querySelectorAll(this._inputSelector),this._submitButton=n.querySelector(this._submitButtonSelector),this._form=n}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonActive",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonActive(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_checkIfInputValid",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){e._toggleButtonActive(),t.addEventListener("input",(function(){e._checkIfInputValid(t),e._toggleButtonActive()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),P(S(r=i.call(this,e)),"_getInputValues",(function(){return r._formInputs.forEach((function(e){r._formValues[e.name]=e.value})),r._formValues})),P(S(r),"getFormValues",(function(e,t){r._form.querySelector(t.selectorName).value=e.userName,r._form.querySelector(t.selectorProfession).value=e.userProfession})),P(S(r),"_submitHandler",(function(){var e=r._popupButton.innerText;r._popupButton.textContent="Сохранение..",r._submitCallback(r._getInputValues()),r._popupButton.textContent=e})),P(S(r),"setEventListeners",(function(){j((n=S(r),E(a.prototype)),"setEventListeners",n).call(n),r._form.addEventListener("submit",r._submitHandler)})),r._submitCallback=t,r._form=r._popUp.querySelector(".popup__form"),r._formInputs=r._popUp.querySelectorAll(".popup__input"),r._formValues={},r}return t=a,(n=[{key:"close",value:function(){j(E(a.prototype),"close",this).call(this),this._form.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n,r){var o,i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(e,t,n){a._userName.textContent=e,a._userProfession.textContent=t,a._userAvatar.style.backgroundImage="url(".concat(n,")")},(o="setUserInfo")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._userName=document.querySelector(t),this._userProfession=document.querySelector(n),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userProfession:this._userProfession.textContent}}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function U(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M,z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),N(x(r=i.call(this,e)),"_submitHandler",(function(){r._submitCallback(r._card)})),N(x(r),"setEventListeners",(function(){A((n=x(r),D(a.prototype)),"setEventListeners",n).call(n),r._popUp.querySelector(".popup__button").addEventListener("click",r._submitHandler)})),r._submitCallback=t,r}return t=a,(n=[{key:"open",value:function(e){A(D(a.prototype),"open",this).call(this),this._card=e}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c),H=document.querySelector(".profile__edit-button"),J={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},F=document.querySelector(".profile__add-button"),$=document.querySelector(".profile__avatar");function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".profile__image");var K=new a(".elements",(function(e){K.addItem(re(e))})),Q=new B(".profile__name",".profile__position",".profile__image");Promise.all([t.getUserInfo(),t.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,K.renderItems(i),Q.setUserInfo(o.name,o.about,o.avatar)})).catch((function(e){alert("Cannot get data from server"),alert(e)}));var W=new b(".popup_pic");W.setEventListeners();var X=new L(".popup_profile",(function(e){var n=e.name,r=e.profession;t.changeUserInfo(n,r).then((function(e){Q.setUserInfo(e.name,e.about,e.avatar),X.close()})).catch((function(e){alert("Cannot change user info"),alert(e)}))}));X.setEventListeners();var Y=new z(".popup_delete_card",(function(e){t.deleteCard(e.getCardId()).then((function(){e.deleteCard(),Y.close()})).catch((function(e){alert("Cannot delete card"),alert(e)}))}));Y.setEventListeners();var Z=new v(J,document.querySelector(".popup__container_card_form"));Z.enableValidation();var ee=new v(J,document.querySelector(".popup__container_profile_form"));ee.enableValidation();var te=new v(J,document.querySelector(".popup_avatar"));te.enableValidation();var ne=new L(".popup_image",(function(e){var n=e.name,r=e.link;t.addNewCard(n,r).then((function(e){K.prependItem(re(e)),ne.close()})).catch((function(e){alert("Cannot add new card"),alert(e)}))}));function re(e){var n=new o(".elements-cards",(function(){W.open(e.name,e.link)}),(function(){Y.open(n)}),(function(e,r){t.likeCard(r).then((function(t){n.setLikesCounter(t.likes.length),n.likeCard(e)})).catch((function(e){alert("Cannot like card"),alert(e)}))}),(function(e,r){t.dislikeCard(r).then((function(t){n.setLikesCounter(t.likes.length),n.dislikeCard(e)})).catch((function(e){alert("Cannot unlike card"),alert(e)}))}),{name:e.name,link:e.link,cardId:e._id,ownerId:e.owner._id,likes:e.likes},M);return n.generateCard()}ne.setEventListeners(),F.addEventListener("click",(function(){Z.resetValidation(),ne.open()})),H.addEventListener("click",(function(){X.getFormValues(Q.getUserInfo(),{selectorName:".popup__subtitle_type_name",selectorProfession:".popup__subtitle_type_profession"}),ee.resetValidation(),X.open()}));var oe=new L(".popup_avatar",(function(e){var n=e.link;t.changeAvatar(n).then((function(e){Q.setUserInfo(e.name,e.about,e.avatar),oe.close()})).catch((function(e){alert("Cannot change avatar"),alert(e)}))}));oe.setEventListeners(),$.addEventListener("click",(function(){te.resetValidation(),oe.open()}))})();