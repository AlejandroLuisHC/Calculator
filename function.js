function init(){
    //variables in the calculator
    const
        result             = document.getElementById('result')
        , tracker          = document.getElementById('tracker')
        , parenthesisOpen  = document.getElementById('parenthesisOpen')
        , parenthesisClose = document.getElementById('parenthesisClose')
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
        ;

    //events
    parenthesisOpen.onclick     =()=> result.textContent += "(";
    parenthesisClose.onclick    =()=> result.textContent += ")";
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
    allClear.onclick            =()=> allClear();

    add.onclick = function(e){
        operandA = result.textContent;
        tracker.textContent = operandA + "+";
        operator = "+";
        clean();
    }
    subtract.onclick = function(e){
        operandA = result.textContent;
        tracker.textContent = operandA + "-";
        operator = "-";
        clean();
    }
    times.onclick = function(e){
        operandA = result.textContent;
        tracker.textContent = operandA + "x";
        operator = "x";
        clean();
    }
    divide.onclick = function(e){
        operandA = result.textContent;
        tracker.textContent = operandA + "/";
        operator = "/";
        clean();
    }
    equals.onclick = function(e){
        operandB = result.textContent;
        tracker.textContent += operandB;
        solve();
    }

}
    //Auxiliar Variables
var operandA;
var operandB;
var operator;

    //calculator functions
function clean(){
    result.textContent = "";
}

function allClear(){
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
        case "%":
            sol = parseFloat(operandA) % parseFloat(operandB);
            break;
    }
    allClear();
    result.textContent = sol;
}
