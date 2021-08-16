function rechnen(){
    console.log("test");
    let john = document.getElementById("john").value;
    let jG = document.getElementById("j-cm").value;
    let meike = document.getElementById("meike").value;
    let mG = document.getElementById("m-cm").value;
    let johnPunkt = john*5 + jG;
    let meikePunkt = meike*5 +mG;
    if (johnPunkt > meikePunkt){
        document.getElementById("j").innerHTML ="Gewint mit"+johnPunkt;
        document.getElementById("m").innerHTML ="verloren mit"+meikePunkt;
    }
    else if (johnPunkt < meikePunkt){
        document.getElementById("m").innerHTML ="Gewint mit "+meikePunkt+" Punkte";
        document.getElementById("j").innerHTML ="verloren mit "+johnPunkt+" Punkte";
    }
}