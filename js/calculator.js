/**

Author:Aum Trivedi

**/
var firstnumber;
var secondnumber;
var result;
var operations;
var onfocustxt=document.getElementById('display_text');
var txtMaxLength=document.getElementById('display_text').value;

var historyLength=Array();
onfocustxt.focus(); 
//Display button value on textbox and  history textarea
function checkKeyPress(command){
    if(command=="one")
    {
         
         // Always focus on result textfield
        document.getElementById('display_text').value += "1"; // When press button display 1 in textfield
        document.getElementById('history_data').value = document.getElementById('display_text').value; // When press button display 1 in History textarea

    }
    if(command=="two" )
    {
         
        document.getElementById('display_text').value += "2";  
        document.getElementById('history_data').value = document.getElementById('display_text').value;  
    }
    if(command=="three")
    {
         // Always focus on result textfield
        document.getElementById('display_text').value += "3";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="four")
    {
       
        document.getElementById('display_text').value += "4";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="five")
    {
      
        document.getElementById('display_text').value += "5";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="six")
    {
         
        document.getElementById('display_text').value += "6";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }

    if(command=="seven")
    {
         
        document.getElementById('display_text').value += "7";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="eight")
    {
        
        document.getElementById('display_text').value += "8";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="nine")
    {
     
        document.getElementById('display_text').value += "9";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="zero")
    {
        
        document.getElementById('display_text').value += "0";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
    if(command=="point")
    {
        var currentString = document.getElementById('display_text').value.toString(); 
        var lastChar = currentString[currentString.length - 1];
        console.log(lastChar);
        if (lastChar === ".") {//Prevent multiple time point in js

            document.getElementById('display_text').value = document.getElementById('history_data').value;
        }
        else{
        onfocustxt.focus();
        document.getElementById('display_text').value += ".";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
        }
        }
}


// Addition between multiple operands
function add()
{
    var currentString = document.getElementById('display_text').value.toString(); 
    var lastChar = currentString[currentString.length - 1];
    console.log(lastChar);
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") { //Prevent multiple time  special character

        document.getElementById('display_text').value = document.getElementById('history_data').value;
    }
    else{
        document.getElementById('display_text').value += "+";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
}

// Substraction between multiple operands
function sub()
{
    var currentString = document.getElementById('display_text').value.toString();
    var lastChar = currentString[currentString.length - 1];
    console.log(lastChar);
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {

        document.getElementById('display_text').value = document.getElementById('history_data').value;
    }
    else{
        document.getElementById('display_text').value += "-";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }

}

// Multiply between multiple operands
function multiply()
{
    var currentString = document.getElementById('display_text').value.toString();
    var lastChar = currentString[currentString.length - 1];
    console.log(lastChar);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "÷") {

        document.getElementById('display_text').value = document.getElementById('history_data').value;
    }
    else{

        if (event.key == "*") {
            document.getElementById('history_data').value = document.getElementById('display_text').value;
        }

        else{
            document.getElementById('display_text').value += "*";
            document.getElementById('history_data').value = document.getElementById('display_text').value;
        }
    }
}

// Divide between two operands
function divide()
{
    var currentString = document.getElementById('display_text').value;
    var lastChar = currentString[currentString.length - 1];
    console.log(lastChar);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {

        document.getElementById('display_text').value = document.getElementById('history_data').value;
    }
    else{
        document.getElementById('display_text').value += "/";
        document.getElementById('history_data').value = document.getElementById('display_text').value;
    }
}

//Exponent X^Y with double operands
function exponent()
{
    document.getElementById('display_text').value += "^";

}

/**
Single operand functions
**/

// Square with single operand
function square()
{
    var c=document.getElementById("display_text").value
    document.getElementById("display_text").value = Math.pow(c, 2);
    document.getElementById('history_data').value = document.getElementById('display_text').value;
}
// Cube with single operands
function cube()
{
    var c=document.getElementById("display_text").value
    document.getElementById("display_text").value = Math.pow(c, 3);//Math  function
    document.getElementById('history_data').value = document.getElementById('display_text').value;
}
// square with single operands
function sqrt()
{
    var c=document.getElementById("display_text").value
    document.getElementById("display_text").value = Math.sqrt(c);
    document.getElementById('history_data').value = document.getElementById('display_text').value;
}

// factorial with single operands
function fact()
{
    var c=document.getElementById("display_text").value;
    document.getElementById("display_text").value = factorial(c);
    document.getElementById('history_data').value = document.getElementById('display_text').value;
}


// Display operations related results  in Textfield and history textarea
function equalsto(){
    
    var currentString = document.getElementById('display_text').value.toString();
    
    var lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") //Prevent end operator error
    {
        document.getElementById('display_text').value="Must End with Operand";
    }
     
    if(currentString.indexOf("^")>=0) //Exponent functions work here 
    {
        var aa=currentString.split("^");
        document.getElementById('display_text').value=Math.pow(parseInt(aa[0]),parseInt(aa[1]))
    }

    var b=eval(document.getElementById("display_text").value); 
    historyLength.push(document.getElementById("history_data").value);
    console.log(historyLength);


    // If  num/0 then  it gives error message 
    if(b == "Infinity")
    {
        document.getElementById("display_text").value="Error";    
        document.getElementById("history_data").value="Reset your digit"; 
    }
    else
    {
        document.getElementById("display_text").value=b;
    }
}

//Remove textfield data when press C
function removeData(){

    document.getElementById('display_text').value =""; 
}

//Remove textfield and history data when press D
function deleteChar()
{
    document.getElementById('history_data').value = "";
    document.getElementById('display_text').value =""; 
    document.getElementById("history_display").innerHTML = " "; 
}

//Calculate factorial given number
function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
}

//Display history using  array
function historyMod()
{
    var history_text = "";
    var i;
    for (i = 0; i < historyLength.length; i++) {
        history_text += historyLength[i] + "<br>";
    }

    document.getElementById("history_display").innerHTML = history_text;
}

window.addEventListener("keypress", event => {
    if (event.key == "=") {
        if(document.getElementById('display_text').value != " ")
        {

            equalsto();
        }
    }
    
});

