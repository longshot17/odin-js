export function getMenu(){
    let content = document.querySelector("#content");
    content.innerHTML = ""

    let headerDiv = getHeader()
    content.append(headerDiv)

    let burgerDiv = getBurgers()
    content.append(burgerDiv)

    let sidesDiv = getSides()
    content.append(sidesDiv)

    let beverages = getBeverages()
    content.append(beverages)
}

function getHeader(){
    let menuDiv = document.createElement("div")
    menuDiv.classList.add("contentDiv")

    let menuHeader = document.createElement("h1")
    menuHeader.textContent = "Menu"
    menuDiv.append(menuHeader)


    return menuDiv
}

function getBurgers(){
    let div = document.createElement("div")
    div.classList.add("contentDiv")

    let header = document.createElement("h2")
    header.textContent = "Burgers"
    header.classList.add("foodType")

    div.append(header)

    let burgerDiv = document.createElement("div")
    burgerDiv.classList.add("contentDiv")
    let burgerDesc = document.createElement("p")
    burgerDesc.classList.add("description")
    burgerDesc.textContent = "Classic Hamburger with your choice of cheese, lettuce, and tomato."
    let burgerTitle = document.createElement("p")
    burgerTitle.classList.add("item")
    burgerTitle.textContent = "The Classic - $10"

    burgerDiv.append(burgerTitle)
    burgerDiv.append(burgerDesc)

    let bbqBurgerDiv = document.createElement("div")
    bbqBurgerDiv.classList.add("contentDiv")
    let bbqBurgerDesc = document.createElement("p")
    bbqBurgerDesc.classList.add("description")
    bbqBurgerDesc.textContent = "Hamburger with barbeque sauce, bacon, and onion rings. Also comes with your choice of cheese lettuce, and tomato."
    let bbqBurgerTitle = document.createElement("p")
    bbqBurgerTitle.classList.add("item")
    bbqBurgerTitle.textContent = "The BBQ Burger - $12"

    burgerDiv.append(bbqBurgerTitle)
    burgerDiv.append(bbqBurgerDesc)

    let vgBurgerDiv = document.createElement("div")
    vgBurgerDiv.classList.add("contentDiv")
    let vgBurgerDesc = document.createElement("p")
    vgBurgerDesc.classList.add("description")
    vgBurgerDesc.textContent = "Plant based patty with lettuce, tomato, pickles, and onion."
    let vgBurgerTitle = document.createElement("p")
    vgBurgerTitle.classList.add("item")
    vgBurgerTitle.textContent = "The Vegetarian - $12"

    burgerDiv.append(vgBurgerTitle)
    burgerDiv.append(vgBurgerDesc)

    div.append(burgerDiv)

    
    return div
}

function getBeverages(){
    let div = document.createElement("div")
    div.classList.add("contentDiv")

    let header = document.createElement("h2")
    header.textContent = "Beverages"
    header.classList.add("foodType")
    div.append(header)

    let bev1 = document.createElement("p")
    bev1.classList.add("item")
    bev1.textContent = "Bottled Water - $2"
    div.append(bev1)

    let bev2 = document.createElement("p")
    bev2.classList.add("item")
    bev2.textContent = "Canned Soda - $2"
    div.append(bev2)

    let bev3 = document.createElement("p")
    bev3.classList.add("item")
    bev3.id = "coffee"
    bev3.textContent = "Coffee - $2.50"
    div.append(bev3)
    
    return div
}

function getSides(){
    let div = document.createElement("div")
    div.classList.add("contentDiv")

    let header = document.createElement("h2")
    header.textContent = "Sides"
    header.classList.add("foodType")
    div.append(header)

    let friesDiv = document.createElement("div")
    friesDiv.classList.add("contentDiv")
    let friesDesc = document.createElement("p")
    friesDesc.classList.add("description")
    friesDesc.textContent = "French Fries topped with cheese sauce, pulled pork, and jalapeños."
    let friesTitle = document.createElement("p")
    friesTitle.classList.add("item")
    friesTitle.textContent = "Loaded Fries - $6"

    div.append(friesTitle)
    div.append(friesDesc)


    let curdsDiv = document.createElement("div")
    curdsDiv.classList.add("contentDiv")
    let curdsDesc = document.createElement("p")
    curdsDesc.classList.add("description")
    curdsDesc.textContent = "Wisconsin famous cheese curds, fried in beer batter and served with our house made sauce."
    let curdsTitle = document.createElement("p")
    curdsTitle.classList.add("item")
    curdsTitle.textContent = "Cheese Curds - $4"
    curdsDesc.id = "curds"

    div.append(curdsTitle)
    div.append(curdsDesc)


    return div
}