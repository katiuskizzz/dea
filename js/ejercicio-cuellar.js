
window.onload = function( ){
    cargarData()

}
const t = document.querySelector("#datoTipo")
const n = document.querySelector("#datoNumero")



function almacenarDatos(){
    let tip = document.getElementById("tipo").value;
    let num = document.getElementById("numero").value;

    tip = document.getElementById("tipo").value
    num = document.getElementById("numero").value

    localStorage.setItem("Tipo", tip);
    localStorage.setItem("Numero", num);

    document.getElementById("tipo").value = "";
    document.getElementById("numero").value = "";

}

function cargarData(){
    let tipo,numero
    tipo = localStorage.getItem("Tipo");
    numero = localStorage.getItem("Numero");

    t.innerHTML = tipo;
    n.innerHTML = numero;
}