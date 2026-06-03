'use strict'
document.addEventListener("DOMContentLoaded", function(){
    console.log('Скрипт сработал корректно')
});
const welcomeButtonModal = document.querySelector(".button");
const modalApplication=document.querySelector(".application");
if (welcomeButtonModal && modalApplication){
    welcomeButtonModal.addEventListener("click", function(event){
        modalApplication.removeAttribute("hidden");
    });
}
window.addEventListener("click", function(event){
    if (event.target === modalApplication){
        modalApplication.setAttribute("hidden", true);
    }
});
const closeModalButton=document.querySelector(".application_close");
closeModalButton.addEventListener("click", function(event){
    modalApplication.setAttribute("hidden", true);
});