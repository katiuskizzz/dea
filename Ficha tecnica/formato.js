function getFicha(){
    let producto = document.getElementById("nom_producto").value
    document.getElementById("resproducto").innerText = producto


    let creado = document.getElementById("creado").value
    document.getElementById("resproduct").innerText = creado

    let expedicion = document.getElementById("expedicion").value
    document.getElementById("resproduc").innerText = expedicion

    let vencimiento = document.getElementById("vencimiento").value
    document.getElementById("resprodu").innerText = vencimiento

    let envio = document.getElementById("envio").value
    document.getElementById("resprod").innerText = envio

}