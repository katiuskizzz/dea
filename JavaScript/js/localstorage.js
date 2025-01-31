const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const f = document.querySelector("#datoFecha")
//es re importante las ## en la primera parte porque si no , no aparece

function almacenarData(){
    let nom,ape, fec
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    fec = document.getElementById("fecha").value

    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Apellido", ape);
    localStorage.setItem("Fecha", fec);

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
}

function cargarData(){
    let nombre,apellido,fecha
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    fecha = localStorage.getItem("Fecha");

    n.innerHTML = nombre;
    a.innerHTML = apellido;
    f.innerHTML = fecha;
}