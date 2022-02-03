'use strict';

const btn = document.getElementById('js-hamburger__menu__btn');

btn.addEventListener('click', () => {
  if (btn.classList.contains('close')) {
    navShow();
  } else if (btn.classList.contains('show')) {
    navClose();
  }
});

const menuItem = document.querySelectorAll('.p-nav__item').forEach((nav) => {
  nav.addEventListener('click', () => {
    navClose();
  });
});

const bgClose = document.getElementById('js-hamburger__menu').addEventListener('click', () => {
  navClose();
});

const menuList = document.getElementById('js-hamburger__menu');
const bodyFixed = document.getElementById('js-body');

function navShow() {
  btn.classList.add('show');
  btn.classList.remove('close');
  menuList.classList.add('show');
  menuList.classList.remove('close');
  bodyFixed.style.overflow = 'hidden'
}

function navClose() {
  menuList.classList.remove('show');
  menuList.classList.add('close');
  btn.classList.remove('show');
  btn.classList.add('close');
  bodyFixed.style.overflow = 'initial'
}