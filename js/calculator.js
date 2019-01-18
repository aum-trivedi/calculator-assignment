/**

Author:Aum Trivedi

**/
var firstnumber;
var secondnumber;
var result;
var operations;
var onfocustxt=document.getElementById('display_text');
function checkKeyPress(command){
    if(command=="one")
   {
    onfocustxt.focus();
    document.getElementById('display_text').value += "1";
    document.getElementById('history_data').value = document.getElementById('display_text').value;
   }
    if(command=="two" )
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "2";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="three")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "3";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="four")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "4";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="five")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "5";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="six")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "6";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    
    if(command=="seven")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "7";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="eight")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "8";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
     if(command=="nine")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "9";
                 document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="zero")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += "0";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="point")
            {
                onfocustxt.focus();
               document.getElementById('display_text').value += ".";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
}
 
 
// Addition between numbers
function add()
{
   var currentString = document.getElementById('display_text').value.toString();
   var lastChar = currentString[currentString.length - 1];
   console.log(lastChar);
   if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
    
   document.getElementById('display_text').value = document.getElementById('history_data').value;
   }
   else{
    
       
      document.getElementById('display_text').value += "+";
      document.getElementById('history_data').value = document.getElementById('display_text').value;
       

   }
}

// Substraction between numbers
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

// Multiply between numbers
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

// Square with single operands
function square()
{
     var c=document.getElementById("display_text").value
    document.getElementById("display_text").value = Math.pow(c, 2);
   document.getElementById('history_data').value = document.getElementById('display_text').value;
}

function qube()
{
     var c=document.getElementById("display_text").value
    document.getElementById("display_text").value = Math.pow(c, 3);
   document.getElementById('history_data').value = document.getElementById('display_text').value;
}

function sqrt()
{
     var c=document.getElementById("display_text").value
    document.getElementById("display_text").value = Math.sqrt(c);
   document.getElementById('history_data').value = document.getElementById('display_text').value;
}
// Square between two operands
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

function fact()
{
     var c=document.getElementById("display_text").value;
    document.getElementById("display_text").value = factorial(c);
   document.getElementById('history_data').value = document.getElementById('display_text').value;
}

function exponent()
{
   document.getElementById('display_text').value += "^";
   
}

function equalsto(){
   var currentString = document.getElementById('display_text').value.toString();
   var lastChar = currentString[currentString.length - 1];
    
   if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      document.getElementById('display_text').value="Must End with Operand";
   }
   //if(currentString=="^")
   if(currentString.indexOf("^")>=0) 
   {
    console.log("HERE");
   var currentString = document.getElementById('display_text').value.toString();
   var aa=currentString.split("^");
   document.getElementById('display_text').value=Math.pow(parseInt(aa[0]),parseInt(aa[1]))
   }
   // }
    document.getElementById("display_text").value=eval(document.getElementById("display_text").value); 
}

function removeData(){
     
    document.getElementById('display_text').value =""; 
}

function deleteChar()
{
    document.getElementById('history_data').value = "";
    document.getElementById('display_text').value =""; 
}
function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}

window.addEventListener("keypress", event => {
   if (event.key == "=") {
      if(document.getElementById('display_text').value != " ")
      {
         
         equalsto();
      }
   }
   if (event.key == "+") {
       

         add();
      
   }
   if (event.key == "*") {
      if(document.getElementById('display_text').value != " ")
      {

         multiply();
      }
   }
 });

 