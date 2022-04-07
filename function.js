function init(){
    //variables in the calculator
    var result = document.getElementById("result");
    var parenthesisOpen = document.getElementById("parenthesisOpen");
    var parenthesisClose = document.getElementById("parenthesisClose");
    var percent = document.getElementById("percent");
    var allClear = document.getElementById("allClear");
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var divide = document.getElementById("divide");
    var times = document.getElementById("times");
    var subtract = document.getElementById("substract");
    var float = document.getElementById("float");
    var equals = document.getElementById("equals");
    var add = document.getElementById("add");

    //events
    parenthesisOpen.onclick = function(e){
        result.textContent = result.textContent + "("
    }
    parenthesisClose.onclick = function(e){
        result.textContent = result.textContent + ")"
    }
    zero.onclick = function(e){
        result.textContent = result.textContent + "0"
    }
    one.onclick = function(e){
        result.textContent = result.textContent + "1"
    }
    two.onclick = function(e){
        result.textContent = result.textContent + "2"
    }
    three.onclick = function(e){
        result.textContent = result.textContent + "3"
    }
    four.onclick = function(e){
        result.textContent = result.textContent + "4"
    }
    five.onclick = function(e){
        result.textContent = result.textContent + "5"
    }
    six.onclick = function(e){
        result.textContent = result.textContent + "6"
    }
    seven.onclick = function(e){
        result.textContent = result.textContent + "7"
    }
    eight.onclick = function(e){
        result.textContent = result.textContent + "8"
    }
    nine.onclick = function(e){
        result.textContent = result.textContent + "9"
    }
    float.onclick = function(e){
        result.textContent = result.textContent + "."
    }
    allClear.onclick = function(e){
        clear();
    }
    add.onclick = function(e){
        operandA = result.textContent;
        operator = "+";
        clean();
    }
    subtract.onclick = function(e){
        operandA = result.textContent;
        operator = "-";
        clean();
    }
    times.onclick = function(e){
        operandA = result.textContent;
        operator = "x";
        clean();
    }
    divide.onclick = function(e){
        operandA = result.textContent;
        operator = "/";
        clean();
    }
    equals.onclick = function(e){
        operandB = result.textContent;
        solve();
    }

}
    //Auxiliar Variables
var operandA
var operandB
var operator

    //calculator functions
function clean(){
    result.textContent = "";
}

function clear(){
    result.textContent = "";
    operandA = 0;
    operandB = 0;
    operator = "";
}

function solve(){
    var sol = 0;
    switch(operator){
        case "+":
            sol = parseFloat(operandA) + parseFloat(operandB);
            break;
        
        case "-":
            sol = parseFloat(operandA) - parseFloat(operandB);
            break;
        
        case "x":
            sol = parseFloat(operandA) * parseFloat(operandB);
            break;
        
        case "/":
            sol = parseFloat(operandA) / parseFloat(operandB);
            break;
    }
    clear();
    result.textContent = sol;
}
