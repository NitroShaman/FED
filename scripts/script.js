// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

menuButton.onclick = toggleMenu;
function toggleMenu () {

deNav.classList.toggle("is-open");

}