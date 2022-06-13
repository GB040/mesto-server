(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t,n,o){var r=o.handleCardPhotoClick,i=o.handleCardTrashClick,a=o.handleCardLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._cardSelector=n,this._handleCardPhotoClick=r,this._handleCardTrashClick=i,this._handleCardLikeClick=a}var n,o;return n=e,(o=[{key:"_getTemplateClone",value:function(){var t=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0);this._element=t}},{key:"_setComponents",value:function(){this._cardLike=this._element.querySelector(".card__like"),this._cardTrash=this._element.querySelector(".card__trash"),this._cardPhoto=this._element.querySelector(".card__photo"),this._cardTitle=this._element.querySelector(".card__title"),this._cardLikeQuantity=this._element.querySelector(".card__like-quantity")}},{key:"_toggleCardLike",value:function(){this._cardLike.classList.toggle("card__like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._cardLike.addEventListener("click",(function(){t._handleCardLikeClick(),t._toggleCardLike()})),this._cardTrash.addEventListener("click",(function(){t._handleCardTrashClick({id:t._id,cardElement:t._element})})),this._cardPhoto.addEventListener("click",(function(){t._handleCardPhotoClick(t._name,t._link)}))}},{key:"showCardTrashButton",value:function(t,e){t===e&&this._cardTrash.classList.add("card__trash_show")}},{key:"activateUserLikes",value:function(t,e){var n=this;t.forEach((function(t){t._id===e&&n._cardLike.classList.add("card__like_active")}))}},{key:"createCard",value:function(){return this._getTemplateClone(),this._setComponents(),this._setEventListeners(),this._cardPhoto.src=this._link,this._cardPhoto.alt="".concat(this._name,"."),this._cardTitle.textContent=this._name,this._cardLikeQuantity.textContent=this._likes.length,this._element}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._invalidButtonClass=e.invalidButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formSelector=n}var e,o;return e=t,(o=[{key:"_showInputError",value:function(t){var e=this._element.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._element.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():(this._submitButtonElement.classList.remove(this._invalidButtonClass),this._submitButtonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"resetInputErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"disableSubmitButton",value:function(){this._submitButtonElement.classList.add(this._invalidButtonClass),this._submitButtonElement.disabled=!0}},{key:"enableValidation",value:function(){this._element=document.querySelector(this._formSelector),this._inputList=Array.from(this._element.querySelectorAll(this._inputSelector)),this._submitButtonElement=this._element.querySelector(this._submitButtonSelector),this._setEventListeners()}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function t(e,n){var o=e.data,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=o,this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){for(var t=0;t<=5;t++)this._renderer(this._initialArray[t])}},{key:"addItem",value:function(t){this._container.append(t)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=f(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},s.apply(this,arguments)}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function h(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(o);if(r){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function a(t,e,n,o){var r,c=o.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._handleSubmit=c,r._form=r._popup.querySelector(e),r._submitButton=r._popup.querySelector(n),r._submitButtonText=r._submitButton.textContent,r}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._popup.querySelectorAll(".popup__input-text"),this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"dataLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonText}},{key:"close",value:function(){s(d(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;s(d(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=m(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},v.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function w(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(o);if(r){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function a(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,t))._photoPopupPhoto=o._popup.querySelector(e),o._photoPopupTitle=o._popup.querySelector(n),o}return e=a,(n=[{key:"open",value:function(t,e){this._photoPopupPhoto.src=e,this._photoPopupPhoto.alt="".concat(t,"."),this._photoPopupTitle.textContent=t,v(g(a.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=O(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},L.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}function j(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(o);if(r){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function a(t,e,n){var o,r=n.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,t))._handleSubmit=r,o._submitButton=o._popup.querySelector(e),o}return e=a,(n=[{key:"open",value:function(t){L(T(a.prototype),"open",this).call(this),this._id=t.id,this._cardElement=t.cardElement}},{key:"setEventListeners",value:function(){var t=this;L(T(a.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(){t._handleSubmit({cardId:t._id,cardElement:t._cardElement})}))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var R=function(){function t(e){var n=e.nameSelector,o=e.aboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=document.querySelector(n),this._aboutSelector=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._aboutSelector.textContent}}},{key:"setUserInfo",value:function(t){this._nameSelector.textContent=t.name,this._aboutSelector.textContent=t.about}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var I=function(){function t(e){var n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=o}var e,n;return e=t,(n=[{key:"_fetch",value:function(t,e){return e.body&&(e.body=JSON.stringify(e.body)),e.headers=this._headers,fetch(this._baseUrl+t,e).then((function(t){return t.ok?t.json():Promise.reject("".concat(t.status))}))}},{key:"get",value:function(t){return this._fetch(t,{method:"GET"})}},{key:"patch",value:function(t,e){return this._fetch(t,{method:"PATCH",body:e})}},{key:"post",value:function(t,e){return this._fetch(t,{method:"POST",body:e})}},{key:"delete",value:function(t){return this._fetch(t,{method:"DELETE"})}},{key:"put",value:function(t){return this._fetch(t,{method:"PUT"})}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),U={inputSelector:".popup__input-text",submitButtonSelector:".popup__submit",invalidButtonClass:"popup__submit_invalid",inputErrorClass:"popup__input-text_type_error",errorClass:"popup__input-error_show"},V=document.forms.edit,D=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__container"),Q=V.elements.name,z=V.elements.about,G=document.querySelector(".profile__avatar"),H=document.querySelector(".cards__list"),J=new R({nameSelector:".profile__title",aboutSelector:".profile__subtitle"}),M=new B("#card-delete-popup",".popup__submit",{handleSubmit:function(t){var e=t.cardId,n=t.cardElement;M.close(),tt.delete("/cards/".concat(e)),n.remove()}}),F=new _("#edit-popup",".popup__form-container",".popup__submit",{handleSubmit:function(t){et(F),tt.patch("/users/me",{name:t.name,about:t.about}).then((function(t){J.setUserInfo(t)})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})).finally((function(){nt(F)}))}}),K=new _("#add-popup",".popup__form-container",".popup__submit",{handleSubmit:function(t){et(K),tt.post("/cards",{name:t.name,link:t.link}).then((function(t){var n=new e(t,"#card-template",{handleCardPhotoClick:function(t,e){X.open(t,e)},handleCardTrashClick:function(t){M.open(t)},handleCardLikeClick:function(){r.classList.contains("card__like_active")?tt.delete("/cards/likes/".concat(t._id)).then((function(t){i.textContent=t.likes.length})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})):tt.put("/cards/likes/".concat(t._id)).then((function(t){i.textContent=t.likes.length})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)}))}}),o=n.createCard(),r=o.querySelector(".card__like"),i=o.querySelector(".card__like-quantity");n.showCardTrashButton(!0,!0),function(t,e){e.prepend(t)}(o,H)})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})).finally((function(){nt(K)}))}}),W=new _("#avatar-popup",".popup__form-container",".popup__submit",{handleSubmit:function(t){et(W),tt.patch("/users/me/avatar",{avatar:t.link}).then((function(t){G.src=t.avatar})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})).finally((function(){nt(W)}))}}),X=new C("#photo-popup",".photo-popup__photo",".photo-popup__title"),Y=new o(U,"#edit-popup"),Z=new o(U,"#add-popup"),$=new o(U,"#avatar-popup"),tt=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",headers:{authorization:"da3ea697-f11c-42f5-89fc-193a981f7278","Content-Type":"application/json"}});function et(t){t.dataLoading(!0)}function nt(t){t.dataLoading(!1),t.close()}function ot(t,e){t.open(),e.resetInputErrors(),e.disableSubmitButton()}Y.enableValidation(),Z.enableValidation(),$.enableValidation(),tt.get("/users/me").then((function(t){J.setUserInfo(t),G.src=t.avatar})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})),tt.get("/cards").then((function(t){var n=new i({data:t,renderer:function(t){var o=new e(t,"#card-template",{handleCardPhotoClick:function(t,e){X.open(t,e)},handleCardTrashClick:function(t){M.open(t)},handleCardLikeClick:function(){i.classList.contains("card__like_active")?tt.delete("/cards/likes/".concat(t._id)).then((function(t){a.textContent=t.likes.length})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})):tt.put("/cards/likes/".concat(t._id)).then((function(t){a.textContent=t.likes.length})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)}))}}),r=o.createCard(),i=r.querySelector(".card__like"),a=r.querySelector(".card__like-quantity");tt.get("/users/me").then((function(e){o.showCardTrashButton(t.owner._id,e._id),o.activateUserLikes(t.likes,e._id)})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})),n.addItem(r)}},".cards__list");n.renderItems()})).catch((function(t){alert("Ошибка. Запрос не выполнен."),console.log("Ошибка. Запрос не выполнен:",t)})),D.addEventListener("click",(function(){ot(F,Y),Q.value=J.getUserInfo().name,z.value=J.getUserInfo().about})),F.setEventListeners(),A.addEventListener("click",(function(){ot(K,Z)})),K.setEventListeners(),N.addEventListener("click",(function(){ot(W,$)})),W.setEventListeners(),X.setEventListeners(),M.setEventListeners()})();