function calc(){ 
var number1 = parseInt(document.querySelector('#number1').value);
var number2 = parseInt(document.querySelector('#number2').value);
var op = document.querySelector('#operator').value;

var calculate;

if (op=='add'){
   alert(calculate = number1 + number2);
}
else if(op=='min'){
    alert (calculate = number1 - number2);
}
else if(op=='div'){
    alert (calculate = number1 / number2);
}
else if(op=='mul'){
    alert (calculate = number1 * number2);
}
}