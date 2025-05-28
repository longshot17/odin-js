let output = document.querySelector("p");
let buttons = document.querySelectorAll("button");
function compute(){
    equation = output.textContent.split(" ");
    num1 = parseInt(equation[0])
    operation = equation[1]
    num2 = parseInt(equation[2])

    if(operation == "+"){
        result = num1 + num2;
        output.textContent = result;
    }
    else if (operation == "-"){
        result = num1 - num2;
        output.textContent = result;
    }
    else if (operation == "*"){
        result = num1 * num2;
        output.textContent = result;
    }
    else if (operation == "/"){
        result = num1 / num2;
        output.textContent = result;
    }
}

function type_num(str){
    current = output.textContent;
    output.textContent = current + str;
}
function type_op(str){
    current = output.textContent;
    output.textContent = current + " " + str + " ";
}

buttons.forEach(button => {
    if(button.classList.contains("equals-button")){
        button.addEventListener("click", () => {
            compute();
        }
        )
    }
    else if(button.classList.contains("clear-button")){
        button.addEventListener("click", () => {
            output.textContent = ""
        }
        )
    }
    else if(button.classList.contains("num-button")){
        button.addEventListener("click", () => {
            type_num(button.textContent);
        })
    }
    
    else{
        button.addEventListener("click", () => {
            type_op(button.textContent);
        })
    }

  



})


