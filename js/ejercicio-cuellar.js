const t = document.querySelector("#datoTipo")
const n = document.querySelector("#datoNumero")

function almacenarDatos(){
    let tip,num 
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