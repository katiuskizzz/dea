

const p = document.querySelector("#datoProduccion")
const l = document.querySelector("#datoLinea")
const v = document.querySelector("#datoVersion")
const va = document.querySelector("#datoVersionac")
const m = document.querySelector("#modulo")
const d = document.querySelector("#descripcion")
const o = document.querySelector("#objetivo")
const ded = document.querySelector("#descripcion2")
const r = document.querySelector("#requisitos")
const req = document.querySelector("#requerimientos1")
//es re importante las ## en la primera parte porque si no , no aparece


function almacenarData(){
    let pro, lin,ver, versa,mod, des, obj, desd, re, reque
    pro = document.getElementById("producto").value
    lin = document.getElementById("linea").value
    ver = document.getElementById("version").value
    versa = document.getElementById("versionac").value
    mod = document.getElementById("modulo").value
    des = document.getElementById("descripcion").value
    obj = document.getElementById("objetivo").value
    desd = document.getElementById("descripcion2").value
    re = document.getElementById("requisitos").value
    reque = document.getElementById("requerimientos1").value


    localStorage.setItem("Producto", pro);
    localStorage.setItem("Linea", lin);
    localStorage.setItem("Version", ver);
    localStorage.setItem("Versionac", versa);
    localStorage.setItem("Modulo", mod);
    localStorage.setItem("Descripcion", des);
    localStorage.setItem("Objetivo", obj );
    localStorage.setItem("Descripcion2", desd);
    localStorage.setItem("Requisitos", re);
    localStorage.setItem("Requerimientos1", reque);


    document.getElementById("producto").value = "";
    document.getElementById("linea").value = "";
    document.getElementById("version").value = "";
    document.getElementById("versionac").value = "";
    document.getElementById("modulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("objetivo").value = "";
    document.getElementById("descripcion2").value = "";
    document.getElementById("requisitos").value = "";
    document.getElementById("requerimientos1").value = "";

}

function cargarData(){
    let producto,linea,version, versionac, modulo, descripcion, objetivo, descripcion2,requisitos,requerimientos1

    producto = localStorage.getItem("Producto");
    linea = localStorage.getItem("Linea");
    version = localStorage.getItem("Version");
    versionac = localStorage.getItem("Versionac");
    modulo = localStorage.getItem("Modulo");
    descripcion = localStorage.getItem("Descripcion");
    objetivo = localStorage.getItem("Objetivo");
    descripcion2 = localStorage.getItem("Descripcion2");
    requisitos = localStorage.getItem("Requisitos");
    requerimientos1 = localStorage.getItem("Requerimientos1");
    

    
    p.innerHTML = producto;
    l.innerHTML = linea;
    v.innerHTML = version;
    va.innerHTML = versionac;
    m.innerHTML = modulo;
    d.innerHTML = descripcion;
    o.innerHTML = objetivo;
    ded.innerHTML = descripcion2;
    r. innerHTML = requisitos;
    req.innerHTML = requerimientos1;
}