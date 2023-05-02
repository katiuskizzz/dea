function calcular(){
    var cantidad1 = document.getElementById('cantidad1').value
    var precio1 = document.getElementById('precio1').value
    var total1 = precio1 * cantidad1
    document.getElementById('total1').innerText = total1

    var cantidad2 = document.getElementById('cantidad2').value
    var precio2 = document.getElementById('precio2').value
    var total2 = cantidad2 * precio2
    document.getElementById('total2').innerText = total2
    calcularTotal(total1, total2)
}

function precio1() {
    var selectProduct1 = document.getElementById("productos")
    var precio1 = selectProduct1.options[selectProduct1.selectedIndex].value
    var inputPrecio1 = document.getElementById("precio1")
    inputPrecio1.value = precio1
}

function precio2(){
    var selectProduct2 = document.getElementById("productos2")
    var precio2 = selectProduct2.options[selectProduct2.selectedIndex].value
    var inputPrecio2 = document.getElementById("precio2")
    inputPrecio2.value = precio2
}

function calcularTotal(precio1, precio2) {
    document.getElementById('totalAbsoluto').innerText = parseInt(precio1) + parseInt(precio2)
}
function limpiarCantidad() {
    document.getElementById('cantidad1').value = " ";
    document.getElementById('cantidad2').value = "";
    document.getElementById('total1').innerText = "";
    document.getElementById('total2').innerText = "";
    document.getElementById('totalAbsoluto').innerText = "";
    document.getElementById('factura').innerText ="";
  }

function getFactura() {
    var selectProducto1 = document.getElementById('productos')
    var nomProducto1 = selectProducto1.options[selectProducto1.selectedIndex].innerText

    var selectProducto2 = document.getElementById('productos2')
    var nomProducto2 = selectProducto2.options[selectProducto2.selectedIndex].innerText

    var cantidad1 = document.getElementById('cantidad1').value
    var cantidad2 = document.getElementById('cantidad2').value

    var precio1 = document.getElementById('precio1').value
    var precio2 = document.getElementById('precio2').value

    var factura = document.getElementById('factura')
    factura.innerHTML = `<li><p>${nomProducto1}</p><p>Cantidad: ${ cantidad1}</p><p>Precio productos: ${ cantidad1 * precio1}</p></li>`
    factura.innerHTML += `<li><p>${nomProducto2}</p><p>cantidad: ${ cantidad2}</p><p>Precio productos: ${ cantidad2 * precio2}</p></li>`
    factura.innerHTML += `<li><p>total</p><p>${(cantidad1 * precio1) + (cantidad2 * precio2)}</p></li>`
    var cantidad1 = document.getElementById('cantidad1').value
    var precio1 = document.getElementById('precio1').value
    var total1 = precio1 * cantidad1
    document.getElementById('total1').innerText = total1

    var cantidad2 = document.getElementById('cantidad2').value
    var precio2 = document.getElementById('precio2').value
    var total2 = cantidad2 * precio2
    document.getElementById('total2').innerText = total2
    calcularTotal(total1, total2)
}