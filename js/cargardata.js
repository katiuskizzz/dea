window.onload = function(){
  
} function

const p = document.querySelector("#datoProduccion")
const l = document.querySelector("#datoLinea")
const v = document.querySelector("#datoVersion")
const va = document.querySelector("#datoVersionac")
const m = document.querySelector("#modulo")

function getFicha(){
    let producto,linea,version, versionac,modulo
    producto = localStorage.getItem("Producto");
    linea = localStorage.getItem("Linea");
    version = localStorage.getItem("Version");
    linea = localStorage.getItem("Linea");
    producto = localStorage.getItem("Producto");
    linea = localStorage.getItem("Linea");


    
    p.innerHTML = producto;
    l.innerHTML = linea;
    v.innerHTML = version;
    va.innerHTML = versionac;
    m.innerHTML = modulo;
}