function checkAirQuality(val,p1,p2,bgc){
    val=document.getElementById("range").value
    if (val <= 50){
        p1 = "Good"
        p2 = "Little or no Risk"
        bgc = "green"
    }
    else if (val > 50 && val <=100) {
        p1 = "Moderate"
        p2 = "Acceptable quality"
        bgc= "yellow"
    }
    else {
        p1 = "Unhealthy for sensitive groups"
        p2 = "Generable publics not likely affected"
        bgc = "orange"
    }
    document.getElementById("wert").innerHTML = val;
    document.getElementById("wert-1").innerHTML = p1;
    document.getElementById("wert-2").innerHTML = p2;
    document.body.style.backgroundColor = bgc ;
}