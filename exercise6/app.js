function addition(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    var sum = parseInt(number1) + parseInt(number2);                                                                        
    alert('The sum of the numbers is '+sum)
}

function subtraction(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    var sub = parseInt(number1) - parseInt(number2);
    alert('The subtraction of the numbers is '+sub)
}