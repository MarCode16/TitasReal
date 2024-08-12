let Taip = "Taip, tai tiesa!!";
let Ne = "Persisviesk";
let nzn = "Tai suzinok nx";

document.getElementById("myg1").onclick = function(){
    console.log(Taip);
    document.getElementById("TN").innerHTML = Taip;
    
}

document.getElementById("myg2").onclick = function(){
    console.log(Ne);
    document.getElementById("TN").innerHTML = Ne;
}

document.getElementById("myg3").onclick = function(){
    console.log(nzn);
    document.getElementById("TN").innerHTML = nzn;
}
