import hamburgerImg from "./hamburger-img.jpg"

export function getHome(){
    let content = document.querySelector("#content");
    content.innerHTML = ""

    let introDiv = getIntroDiv()
    content.append(introDiv)
    let hoursDiv = getHoursDiv()
    content.append(hoursDiv)
    let img = getImg()
    content.append(img)
}

function getIntroDiv(){
    let div = document.createElement("div")
    div.classList.add("contentDiv")
    div.id = "introDiv"

    let text = document.createElement("p")
    text.classList.add("contentText")
    text.textContent = "Welcome to Bub's Burgers, where we've been selling award-winning burgers for over thirty years!" +
     " We're located on the corner of West Elm and Grover St," +
     " please see below for operating hours."

     div.append(text)
    return div
}

function getHoursDiv(){
    let div = document.createElement("div")

    div.classList.add("contentDiv")

    let header = document.createElement("h1")
    header.textContent = "Hours"


    div.append(header)

    let hours = document.createElement("div")
    hours.id = "hoursDiv"


    let mon = document.createElement("p")
    mon.textContent = "Monday: 6:00 AM – 5:00 PM" 
    let tue = document.createElement("p")
    tue.textContent = "Tuesday: 6:00 AM – 5:00 PM" 
    let wed = document.createElement("p")
    wed.textContent = "Wednesday: 6:00 AM – 5:00 PM" 
    let thur = document.createElement("p")
    thur.textContent = "Thursday: 6:00 AM – 5:00 PM" 
    let fri = document.createElement("p")
    fri.textContent = "Friday: 6:00 AM – 5:00 PM" 
    let sat = document.createElement("p")
    sat.textContent = "Saturday: 7:00 AM – 3:00 PM" 
    let sun = document.createElement("p")
    sun.textContent = "Sunday: Closed" 

    mon.classList.add("hours")
    tue.classList.add("hours")
    wed.classList.add("hours")
    thur.classList.add("hours")
    fri.classList.add("hours")
    sat.classList.add("hours")
    sun.classList.add("hours")


    hours.append(mon, tue, wed, thur, fri, sat, sun)
    div.append(hours)

    return div
}

function getImg(){
    let img = document.createElement("img")
    img.classList.add("image")
    img.src = hamburgerImg
    img.alt = "Hamburger With Bacon and Cheese"
    return img
}