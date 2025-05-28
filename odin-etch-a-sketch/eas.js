let container = document.querySelector("#grid-container");
let n = 16;
let erase = false;


function change_color(ele){

    if(erase == false){
        
        ele.style.backgroundColor = "black";
    }
    else{
        ele.style.backgroundColor = "white";
    }    
}

function create_grid(n){
    side = (600 / n) - 2;
    for(let i = 0; i < (n*n); i ++){
        let element = document.createElement("div");   
        element.style.height = side + "px";
        element.style.width = side + "px";
        element.addEventListener("mouseenter", function(){
            change_color(element);
        });
        element.classList.add("square");
        container.append(element);
    }
}

erase_button = document.querySelector("#erase-button");
erase_button.addEventListener("click", function(){
    erase = !erase;
});
resize_button = document.querySelector("#resize-button");

resize_button.addEventListener("click", function(){
    let newN = prompt("Enter a new grid size between 1 and 100")
    if(newN > 100 | newN < 1){
        alert("Invalid input");
    }
    else{
        container.replaceChildren()
        create_grid(newN);
    }
});

reset_button = document.querySelector("#reset-button");
reset_button.addEventListener("click", function(){
    container.replaceChildren()
    create_grid(n);
});




create_grid(16);






