'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());        
    }

};

// if (isMobile.any()) {
//     document.body.classList.add('_touch');

//     let menuArrows = document.querySelectorAll('.menu__arrow');
//     if (menuArrows.length > 0) {
//         for (let index = 0; index < menuArrows.length; index++) {
//             const menuArrow = menuArrows[index];
//             menuArrow.addEventListener("click", function (e) {
//                 menuArrow.parentElement.classList.toggle('_active');
//             });
//         }
//     }
// } else {
//     document.body.classList.add('_pc');
// }\

// Добавляем клас для menuLang & menuArrow
const menuArrow = document.querySelector('.menu__arrow');
const menuLangList = document.querySelector('.menu__langList');

menuArrow.addEventListener("click", function (e) {
    menuArrow.classList.toggle('_active');
    menuLangList.classList.toggle('_active');
})

// Скрываем menuLang при клике вне области menuLang & menuArrow
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.menu__lang')) {
        menuArrow.classList.remove('_active');
        menuLangList.classList.remove('_active');
    }
})
// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


