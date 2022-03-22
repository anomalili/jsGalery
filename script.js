window.addEventListener("load", init);
var kepek = [
    {
        cim: "1. gyönyörű kép",
        eleresiut:"./kepek/_DSC7025.jpg",
        leírás:"Kecskeharc",
    },
    {
        cim: "2. gyönyörű kép",
        eleresiut:"./kepek/_DSC7365.jpg",
        leírás:"Pre-cseresznye",
    },
    {
        cim: "3. gyönyörű kép",
        eleresiut:"./kepek/_DSC7371_1.jpg",
        leírás:"Mező",
    },
    {
        cim: "4. gyönyörű kép",
        eleresiut:"./kepek/_DSC7444.jpg",
        leírás:"Táj",
    },
    {
        cim: "5. gyönyörű kép",
        eleresiut:"./kepek/_DSC7515.jpg",
        leírás:"Fatövében fehér virág",
    },
    
]
function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return  document.getElementsByClassName(elem)
}
function $(elem){
    return  document.querySelectorAll(elem)
}
var aktualiskepIndex = 0;
function init(){
    kiirKepek()
    kepkeret()
    $("#bal")[0].addEventListener("click",bal)
    $("#jobb")[0].addEventListener("click",jobb)
}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' id='"+i +"' alt='természet'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;

}

function kepkeret() {
    for (let index = 0; index < kepek.length; index++) {
        
        $("#galeria div img")[index].addEventListener("click",kattintás)
    }
}
function kattintás(event) {
    //console.log(event.target.id)
    aktualiskepIndex= event.target.id
    kepMegjelenit();
}
function kepMegjelenit() {
    var txt = "<img src='"+kepek[aktualiskepIndex].eleresiut +"' alt='nagykep'/>"
    ID("nagykep").innerHTML = txt;
    
}

function bal() {
    aktualiskepIndex--;
    if (aktualiskepIndex < 0) {
        aktualiskepIndex=kepek.length-1
    }
    kepMegjelenit()
}
function jobb() {
    aktualiskepIndex++;
    if (aktualiskepIndex > kepek.length-1) {
        aktualiskepIndex=0
    }
    kepMegjelenit()
}