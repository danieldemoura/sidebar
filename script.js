const buttonMenu = document.querySelector(".btn_menu")
const header = document.querySelector("header")
const search = document.querySelector(".lupa")

buttonMenu.onclick = () => {
    header.classList.toggle("active")
}

search.onclick = () => {
    header.classList.add("active")
}
