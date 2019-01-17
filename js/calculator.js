/**

Author:Aum Trivedi

**/
var firstnumber;
var secondnumber;
var result;
var operations;
//This function for get Button key  stroke 
function checkKeyPress(command){
 	if(command=="one" || document.getElementById('display_text').value == "0" || document.getElementById('display_text').value == result)
            {
               document.getElementById('display_text').value += "1";
               document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="two" )
            {
               document.getElementById('display_text').value += "2";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
    if(command=="three")
            {
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
               document.getElementById('display_text').value = ".";
                document.getElementById('history_data').value = document.getElementById('display_text').value;
            }
}
 
 
// Addition between numbers
function add()d
{
     
   document.getElementById("display_text").value += "+";
   document.getElementById('history_data').value = document.getElementById('display_text').value;
}d

// Substraction between numbers
function sub()
{
    operation = "*";  
    firstnumber=parseInt(document.getElementById('display_text').value);
    document.getElementById('history_data').value = document.getElementById('display_text').value;
    console.log(firstnumber);
    document.getElementById('display_text').value= firstnumber + operation; 
    
}

// Multiply between numbers
function multiply()
{
     operation = "*";  
    firstnumber=parseInt(document.getElementById('display_text').value);
     document.getElementById('history_data').value = document.getElementById('display_text').value;
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

function equalsto(){
 
 document.getElementById("display_text").value = eval(document.getElementById("display_text").value);
  
}

function removeData(){
     
    document.getElementById('display_text').value =""; 
}
function deleteChar()
{
    document.getElementById('history_data').value = "";
    document.getElementById('display_text').value =""; 
}
 
 

