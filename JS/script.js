console.log("You know what is Back-end without front? it's END :D");

let buttonThemeChange = document.querySelector(".js-themeChangeButton");
let themeBox = document.querySelector(".js-themeBox");
let body = document.querySelector(".js-body");

if (body.classList.contains("body--White")) {
buttonThemeChange.innerHTML = "Zmień motyw <br>Motyw Biały";
}

buttonThemeChange.addEventListener("click", () => {
    themeBox.classList.toggle("theme__box--hide")
})

let buttonThemeWhite = document.querySelector(".js-themeWhite");
console.log(buttonThemeWhite);
let buttonThemeDark = document.querySelector(".js-themeDark");
console.log(buttonThemeDark);
let buttonThemeNeon = document.querySelector(".js-themeNeon");
console.log(buttonThemeNeon);

buttonThemeWhite.addEventListener("click", () => {
    body.classList.add("body--white");
    body.classList.remove("body--dark", "body--neon");
    buttonThemeChange.innerHTML = "Zmień motyw <br>Motyw Biały";
})

buttonThemeDark.addEventListener("click", () => {
    body.classList.add("body--dark");
    body.classList.remove("body--white", "body--neon");
    buttonThemeChange.innerHTML = "Zmień motyw <br>Motyw Ciemny";
})

buttonThemeNeon.addEventListener("click", () => {
    body.classList.add("body--neon");
    body.classList.remove("body--white", "body--Dark");
    buttonThemeChange.innerHTML = "Zmień motyw <br>Motyw Neon";
})



