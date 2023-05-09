function getFicha() {
    let producto = document.getElementById("nom_producto").value
    document.getElementById("resproduct").innerText = producto

    let linea = document.getElementById("linea").value
    document.getElementById("resproducto").innerText = linea

    let version = document.getElementById("version").value
    document.getElementById("resproductt").innerText = version

    let versiona = document.getElementById("versiona").value
    document.getElementById("resproduc").innerText = versiona

    let modulo = document.getElementById("modulo").value
    document.getElementById("resproducts").innerText = modulo
}