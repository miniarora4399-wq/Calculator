// CALCULATOR PROGRAM
const display      = document.getElementById("display");
const clearBtn     = document.getElementById("clearBtn");
const deleteBtn    = document.getElementById("deleteBtn");
const calculateBtn = document.getElementById("calculateBtn");

const button       = document.querySelectorAll(".button")

// NUMBERS AND OPERATORS BUTTONS

button.forEach(function(button){
    button.addEventListener("click", function(){
        const value = button.innerText;
        display.value += value;
    });
});

// CLEAR

clearBtn.addEventListener("click",function(){
    display.value= " ";
});

// DELETE

deleteBtn.addEventListener("click", function(){
    display.value = display.value.slice(0,-1);
});

// CALCULATION

calculateBtn.addEventListener("click", function(){
    try
    {
         display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
    
});

