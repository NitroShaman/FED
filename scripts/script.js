// JavaScript Document
console.log("hi");

const menuOpenButton = document.querySelector("header > button");
const menuCloseButton = document.querySelector("header > nav button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = toggleMenu;
menuCloseButton.onclick = toggleMenu;


function toggleMenu () {
    deNav.classList.toggle("is-open");
}