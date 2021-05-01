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


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            //" - document.querySelector('.header').offsetHeight" забрав, так як з ним не працювало
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Switch cards oh hover 
let start = document.querySelector('.pricing__card');
let pro = document.querySelector('.pricing__card-pro')

start.addEventListener('mouseover', function() {
    pro.classList.remove('_active');
})
start.addEventListener('mouseout', function() {
    start.classList.add('_active');
})
pro.addEventListener('mouseover', function() {
    start.classList.remove('_active');
})
pro.addEventListener('mouseout', function() {
    pro.classList.add('_active');
})






