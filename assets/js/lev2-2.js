function dif(){
    let num = document.getElementById("num").value;
    let dif = 27 - num;
    if (num > 27){
       dif = dif * -1;
       document.getElementById("dif").innerHTML = dif+" ist die Differenz zwischen 27 und "+num; 
    }
    else {
        document.getElementById("dif").innerHTML = dif+" ist die Differenz zwischen 27 und "+num; 
    }
}