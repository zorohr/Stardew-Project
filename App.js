const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const myPopEvent = document.querySelectorAll(".popUp")
myPopEvent.forEach(el => {
    el.addEventListener("click", () => {
    el.querySelector("#myPopUp").classList.toggle("show");
    })
})
