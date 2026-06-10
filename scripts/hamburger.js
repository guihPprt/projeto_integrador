const menu = document.getElementById("menu-ham");
const backbtn = document.getElementById("back-btn");
menu.addEventListener("click",click)
backbtn.addEventListener("click",click)

function click() {
    const popup = document.getElementById("popup");
    popup.classList.toggle("hide");
}