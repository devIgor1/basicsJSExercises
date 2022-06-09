function button(){
    var number = document.getElementById('age').value;
    if (number < 18){
        alert('You are underage');    
    }
    else if(number>=18){
        alert('You are of age');
    }
}