export function getAbout(){
    let content = document.querySelector("#content");
    content.innerHTML = ""
    let aboutDiv = getAboutDiv()
    content.append(aboutDiv)
    let contactDiv = getContactDiv()
    content.append(contactDiv)
}

function getAboutDiv(){
    let div = document.createElement("div")
    div.classList.add("contentDiv")
    let header = document.createElement("h1")
    header.textContent = "Our Story"
    div.append(header)

    let text = document.createElement("p")
    text.textContent = "Our story begins on June 9th, 2025 when I started this project. I was thinking of " +
    "fake restaurant names and decided on Rob's Burgers, named after my buddy Rob. To give the restaurant " + 
    "something memorable, I invented the Hamburger Gauntlet, an eating challange composed of " + 
    "ten burgers, ten orders of fries, ten large sodas, and a bag of cheese curds. " +
    "Contestants have five minutes to finish, with the opopportunity to earn a spot on a spot on the Wall of Fame."

    div.append(text)
    return div
}

function getContactDiv(){
    let div = document.createElement("div")
    div.classList.add("contentDiv")
    let header = document.createElement("h1")
    header.textContent = "Contact Us"
    div.append(header)

    let text = document.createElement("h2")
    text.textContent = "Rob"
    text.id = "contactHeader"
    div.append(text)

    let info = document.createElement("div")
    info.id = "infoDiv"
    let position = document.createElement("p")
    position.textContent = "Owner"
    position.classList.add("contactInfo")
    info.append(position)
    let number = document.createElement("p")
    number.textContent = "123-456-7890"
    number.classList.add("contactInfo")
    info.append(number)
    let email = document.createElement("p")
    email.textContent = "Rob@gmail.com"
    email.classList.add("contactInfo")
    info.append(email)

    div.append(info)
    return div
}