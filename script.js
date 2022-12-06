const buttonMenu = document.querySelector(".btn_menu")

const header = document.querySelector("header")
const logoVet = document.querySelector("header > div figure")
const input = document.querySelector("nav ul li input")
const article = document.querySelector("article")
const figure = document.querySelector("article figure")
const main = document.querySelector("main")
const a = document.querySelectorAll("a")

buttonMenu.onclick = () => {
    header.classList.toggle("expand")
    logoVet.classList.toggle("expand-logo")
    input.classList.toggle("expand-buscar")
    article.classList.toggle("expand-article")
    figure.classList.toggle("expand-figure")
    main.classList.toggle("expand-main")

    for(indice in a) {
        a.item(indice).classList.toggle("expand-a")
    }
}
