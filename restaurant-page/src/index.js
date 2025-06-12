import {getHome} from "./homePage.js"
import {getMenu} from "./menuPage.js"
import {getAbout} from "./aboutPage.js"
import "./index.css"

const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const aboutBtn = document.querySelector("#about-btn")

getHome()

homeBtn.addEventListener("click", () => {
    getHome()
});
menuBtn.addEventListener("click", () => {
    getMenu()
});
aboutBtn.addEventListener("click", () => {
    getAbout()
});