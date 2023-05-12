

const p = document.querySelector("#datoProduccion")
const l = document.querySelector("#datoLinea")
const v = document.querySelector("#datoVersion")
const va = document.querySelector("#datoVersionac")
const m = document.querySelector("#modulo")

//es re importante las ## en la primera parte porque si no , no aparece


function almacenarData(){
    let pro, lin,ver, versa,mod
    pro= document.getElementById("producto").value
    lin = document.getElementById("linea").value
    ver = document.getElementById("version").value
    versa = document.getElementById("versionac").value
    mod = document.getElementById("modulo").value

    localStorage.setItem("Producto", pro);
    localStorage.setItem("Linea", lin);
    localStorage.setItem("Version", ver);
    localStorage.setItem("Versionac", versa);
    localStorage.setItem("Modulo", mod);


    document.getElementById("producto").value = "";
    document.getElementById("linea").value = "";
    document.getElementById("version").value = "";
    document.getElementById("versionac").value = "";
    document.getElementById("modulo").value = "";

}

function cargarData(){
    let producto,linea,version, versionac, modulo
    producto = localStorage.getItem("Producto");
    linea = localStorage.getItem("Linea");
    version = localStorage.getItem("Version");
    versionac = localStorage.getItem("Versionac");
    modulo = localStorage.getItem("Modulo");
    

    
    p.innerHTML = producto;
    l.innerHTML = linea;
    v.innerHTML = version;
    va.innerHTML = versionac;
    m.innerHTML = modulo;
}