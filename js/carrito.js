// alert ("sapo")

let boxMinus = document.getElementById("boxMinus")
let boxCantidad = document.getElementById("boxCantidad")
let boxPlus = document.getElementById("boxPlus")
let numeroProductos = document.getElementById("numeroProductos")
let valorProducto = 239997;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto)
document.getElementById("precioUnidad").innerHTML = auxValorProducto;



   // console.log("vengo de la consola") ir a inspeccionar y hundir consola y el objeto que hara eso
    // alert("holis") esta añlerta aparece arriba de la pagina 
    // alert(document.getElementById("boxCantidad").innerHTML) PARA SABER SI ESTA LEYENDO LOS VALORES



boxPlus.addEventListener("click", function(){

    let auxCant = document.getElementById("boxCantidad").innerHTML
    if(auxCant < 10){
        auxCant++;
        boxCantidad.innerHTML = auxCant
       determinarSingularPlural(auxCant)

      let multi = valorProducto * auxCant,
    auxSubTotal = new Intl.NumberFormat("de-DE").format(multi);

    document.getElementById("subtotal").innerHTML = auxSubTotal;

    }


})
boxMinus.addEventListener("click",function(){

    let auxCanti = document.getElementById("boxCantidad").innerHTML
    if(auxCanti > 0){
        auxCanti--;
        boxCantidad.innerHTML = auxCanti
        determinarSingularPlural(auxCanti)

        
      let resta =  valorProducto * auxCanti,
      auxSubTotal = new Intl.NumberFormat("de-DE").format(resta);
  
      document.getElementById("subtotal").innerHTML = auxSubTotal;

    }
     
})
function determinarSingularPlural(auxCant){
    if(auxCant == 1){
        numeroProductos.innerHTML = "(" + auxCant + " Producto)"
    }
    else if ((auxCant== 0 || auxCant >1 )){
        numeroProductos.innerHTML = "(" + auxCant + " Productos)"
    }   
}

