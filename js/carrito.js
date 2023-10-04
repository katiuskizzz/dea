// alert ("sapo")

let boxMinus = document.getElementById("boxMinus")
let boxCantidad = document.getElementById("boxCantidad")
let boxPlus = document.getElementById("boxPlus")
    // console.log("vengo de la consola") ir a inspeccionar y hundir consola y el objeto que hara eso
    // alert("holis") esta añlerta aparece arriba de la pagina 
    // alert(document.getElementById("boxCantidad").innerHTML) PARA SABER SI ESTA LEYENDO LOS VALORES

boxPlus.addEventListener("click", function(){

    let auxCant = document.getElementById("boxCantidad").innerHTML
    if(auxCant < 10){
        auxCant++;
        boxCantidad.innerHTML = auxCant
    }


})
boxMinus.addEventListener("click",function(){

    let auxCanti = document.getElementById("boxCantidad").innerHTML
    if(auxCanti > 0){
        auxCanti--;
        boxCantidad.innerHTML = auxCanti
    }
})