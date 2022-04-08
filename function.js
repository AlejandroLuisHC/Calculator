    //auxiliar variables
var operandA;
var operandB;
var operator = "";

function init(){
    //variables in the calculator
        const
        result             = document.getElementById('result')
        , tracker          = document.getElementById('tracker')
        , power            = document.getElementById('power')
        , sqrt             = document.getElementById('sqrt')
        , percent          = document.getElementById('percent')
        , allClear         = document.getElementById('allClear')
        , zero             = document.getElementById('zero')
        , one              = document.getElementById('one')
        , two              = document.getElementById('two')
        , three            = document.getElementById('three')
        , four             = document.getElementById('four')
        , five             = document.getElementById("five")
        , six              = document.getElementById("six")
        , seven            = document.getElementById("seven")
        , eight            = document.getElementById("eight")
        , nine             = document.getElementById("nine")
        , divide           = document.getElementById("divide")
        , times            = document.getElementById("times")
        , subtract         = document.getElementById("subtract")
        , float            = document.getElementById("float")
        , equals           = document.getElementById("equals")
        , add              = document.getElementById("add")
        , clean            = document.getElementById("clean")
        ;

    //events
    //power.onclick               =()=> result.textContent += "^";
    //sqrt.onclick                =()=> result.textContent += "√"; 
    zero.onclick                =()=> result.textContent += "0";
    one.onclick                 =()=> result.textContent += "1";
    two.onclick                 =()=> result.textContent += "2";
    three.onclick               =()=> result.textContent += "3";
    four.onclick                =()=> result.textContent += "4";
    five.onclick                =()=> result.textContent += "5";
    six.onclick                 =()=> result.textContent += "6";
    seven.onclick               =()=> result.textContent += '7';
    eight.onclick               =()=> result.textContent += "8";
    nine.onclick                =()=> result.textContent += "9";
    float.onclick               =()=> result.textContent += ".";
    percent.onclick             =()=> result.textContent = parseFloat(result.textContent) / 100;  
    allClear.onclick            =()=> clearAll();
    clean.onclick               =()=> clear();

    
    add.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            solve();
        }
        operandA = result.textContent;
        tracker.textContent = operandA + "+";
        operator = "+";
        clear();
    }
    subtract.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            solve();
        }
        operandA = result.textContent;
        tracker.textContent = operandA + "-";
        operator = "-";
        clear();
    }
    times.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            solve();
        }
        operandA = result.textContent;
        tracker.textContent = operandA + "x";
        operator = "x";
        clear();
    }
    divide.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            solve();
        }
        operandA = result.textContent;
        tracker.textContent = operandA + "/";
        operator = "/";
        clear();
    }
    equals.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            tracker.textContent = operandB;
            solve();
        }
       
    }
    sqrt.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            solve();
        }
        operandA = result.textContent;
        tracker.textContent = operandA + "√";
        operator = "√";
        clear();
    }
    power.onclick = function(e){
        if(operator !== ""){
            operandB = result.textContent;
            solve();
        }
        operandA = result.textContent;
        tracker.textContent = operandA + "^";
        operator = "^";
        clear();
    }
}

    //calculator functions
function clear(){
    result.textContent = "";
}

function clearSolve(){
    result.textContent = "";
    operandA = 0;
    operandB = 0;
    operator = "";
}

function clearAll(){
    tracker.textContent = "";
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
        case "^":
            sol = parseFloat(operandA) ** parseFloat(operandB);
            break;
        case "√":
            sol = parseFloat(operandA) ** (1 / parseFloat(operandB));
            break;
    }
    clearSolve();
    if (sol % 1 === 0){
        result.textContent = sol
    }else{result.textContent = sol.toFixed(3);}   
}
