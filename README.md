<h1 align="center"> Sidebar </h1>

> Nesse desafio foi proposto criar um menu Sidebar, e todas vez que clicasse no botão do menu, expandisse o Menu, e quando clicasse de novo voltasse ao seu tamanho original.

![Sidebar](./.github/preview.png)

> ## 🧰 **Techs**
* **HTML**
* **CSS**
* **JavaScript**
* **Figma**


<h2 align="center"> Código CSS </h2>

```CSS
/* Estilo que espande o Sidebar */
header.active {
    width: 250px;
}

header.active .logo {
    width: 185px;
}

header.active .buscar {
    width: 222px;
}

header.active ul li a {
    opacity: 1;
}

header.active .footer {
    justify-content: space-between;
}

header.active .footer figure {
    width: 150px;
    opacity: 1;
}

header.active + main {
    padding-left: 250px; 
}

header, main, figure, .buscar, .logo, .footer, input, a {
    transition: all .7s;
}

.active, .active main, .active figure, .active .buscar, .active .logo, .active .footer, .active input, .active a {
    transition: all .7s;
}

@media screen and (max-width: 600px) {
    header.active + main {
        padding-left: 78px;
    }
}
```

<h2 align="center"> Código JS </h2>

```JS
const buttonMenu = document.querySelector(".btn_menu")
const header = document.querySelector("header")
const search = document.querySelector(".lupa")

buttonMenu.onclick = () => {
    header.classList.toggle("active")
}

search.onclick = () => {
    header.classList.add("active")
}

```