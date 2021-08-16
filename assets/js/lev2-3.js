function sum(num1,num2){
    console.log("test");
    num1 = document.getElementById("num-1").value;
    num2 = document.getElementById("num-2").value;
    let summ = num1*1 + num2*1;
    if (num1 == num2){
     summ *=5;
    } else{
        summ=summ;
    }
    document.getElementById("summe").innerHTML = "Summe: "+summ;
}