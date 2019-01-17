/**

Author:Aum Trivedi

**/
var firstnumber;  
var secondnumber;  
var result;  
var operations;  

//This function for get Button key  stroke 
function checkKeyPress(command){
 	if(command=="one")
            {
               document.getElementById('display_text').value += "1";
            }
    if(command=="two")
            {
               document.getElementById('display_text').value += "2";
            }
    if(command=="three")
            {
               document.getElementById('display_text').value += "3";
            }
    if(command=="four")
            {
               document.getElementById('display_text').value += "4";
            }
    if(command=="five")
            {
               document.getElementById('display_text').value += "5";
            }
    if(command=="six")
            {
               document.getElementById('display_text').value += "6";
            }
    
    if(command=="seven")
            {
               document.getElementById('display_text').value += "7";
            }
    if(command=="eight")
            {
               document.getElementById('display_text').value += "8";
            }
     if(command=="nine")
            {
               document.getElementById('display_text').value += "9";
            }
    if(command=="zero")
            {
               document.getElementById('display_text').value += "0";
            }
    if(command=="point")
            {
               document.getElementById('display_text').value = ".";
            }
}
 
// Addition between numbers
function add()
{
    operation = "+";  
    firstnumber=parseInt(document.getElementById('display_text').value);
    console.log(firstnumber);
    document.getElementById('display_text').value= firstnumber + operation; 
    
}

// Substraction between numbers
function sub()
{
    operation = "*";  
    firstnumber=parseInt(document.getElementById('display_text').value);
    console.log(firstnumber);
    document.getElementById('display_text').value= firstnumber + operation; 
    
}

// Multiply between numbers
function multiply()
{
     operation = "*";  
    firstnumber=parseInt(document.getElementById('display_text').value);
    console.log(firstnumber);
    document.getElementById('display_text').value= firstnumber + operation; 
}

// Square with single operands
function square()
{
     
    firstnumber=parseInt(document.getElementById('display_text').value);
    console.log(firstnumber);
     
    document.getElementById('display_text').value= square(firstnumber); 
}

// Square between two operands
function divide()
{
     operation = "/";  
    firstnumber=parseInt(document.getElementById('display_text').value);
    console.log(firstnumber);
    document.getElementById('display_text').value= firstnumber + operation;  
}

//Press equal give total result
function equalsto(){  
   
 secondnumber = parseInt(document.getElementById('display_text').value);  
console.log(secondnumber); 
 if (operation == "+")  
 {  
  result = firstnumber + secondnumber;  
    
 }  
if (operation == "*")  
 {  
  result = firstnumber * secondnumber;  
    
 }   
   
 document.getElementById('display_text').value = firstnumber + operation + secondnumber + " = " + result.toString();
     return;
}

function removeData(){
     
    document.getElementById('display_text').value =""; 
}
 

