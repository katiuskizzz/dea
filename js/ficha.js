const proy = document.querySelector("#resproyec")
const nom = document.querySelector("#resproduct")
const lpro = document.querySelector("#resli")
const veranterior = document.querySelector("#resver")
const veractual = document.querySelector("#resact")
const modu = document.querySelector("#resmod")

const desprodu = document.querySelector("#resdes")
const obproduct = document.querySelector("#resobj")

const ardes = document.querySelector("#resarq")

const refis = document.querySelector("#reshar")
const relos = document.querySelector("#ressof")
const recos = document.querySelector("#resotr")
const minic = document.querySelector("#rescli")
const logic = document.querySelector("#reslog")
const clire = document.querySelector("#resapl")

const funs = document.querySelector("#resfun")
const adifun = document.querySelector("#resadi")
const carapro = document.querySelector("#rescar")
 
 
 function cargardatos(){

  let proyecto, producto, linea, versiones, version, modulo, descripcion, objetivo, arquitectura,hardware,software,otros,fisico,logico,aplicativo,funcionales,adicionales,caracteristicas

  proyecto = document.getElementById("pro_nom").value
  producto = document.getElementById("nom_product").value
  linea = document.getElementById("li_product").value
  versiones = document.getElementById("ver_product").value 
  version = document.getElementById("act_product").value
  modulo = document.getElementById("mod_product").value
  descripcion = document.getElementById("des_product").value
  objetivo = document.getElementById("obj_product").value
  arquitectura = document.getElementById("arq_product").value
  hardware = document.getElementById("har_product").value
  software = document.getElementById("sof_product").value
  otros = document.getElementById("otr_product").value
  fisico = document.getElementById("cli_product").value
  logico = document.getElementById("log_product").value
  aplicativo = document.getElementById("apl_product").value
  funcionales = document.getElementById("fun_product").value
  adicionales = document.getElementById("adi_product").value
  caracteristicas = document.getElementById("car_product").value

  //almacenamiento
  localStorage.setItem("Nombre del proyecto", proyecto);
  localStorage.setItem("Nombre del producto", producto);
  localStorage.setItem("Linea de produccion", linea);
  localStorage.setItem("Versiones anteriores del producto", versiones);
  localStorage.setItem("Version actual del producto", version);
  localStorage.setItem("Modulo", modulo);
  localStorage.setItem("Descripcion del peroducto", descripcion);
  localStorage.setItem("Objetivo del producto",  objetivo);
  localStorage.setItem("Descripcion del producto", arquitectura);
  localStorage.setItem("Requerimientos fisicos minimos", hardware);
  localStorage.setItem("Requerimientos logicos necesarios", software);
  localStorage.setItem("Recomendaciones", otros);
  localStorage.setItem("Requerimientos fisicos minimos cliente", fisico);
  localStorage.setItem("Requerimientos logicos necesarios cliente", logico);
  localStorage.setItem("Recomendaciones cliente", aplicativo);
  localStorage.setItem("Funciones del sistema", funcionales);
  localStorage.setItem("Funcionalidades adicionales", adicionales);
  localStorage.setItem("Caracteristicas del producto", caracteristicas);
  //limpiar
  document.getElementById("pro_nom").value = "";
  document.getElementById("nom_product").value = "";
  document.getElementById("li_product").value = "";
  document.getElementById("ver_product").value = "";
  document.getElementById("act_product").value = "";
  document.getElementById("mod_product").value = "";
  document.getElementById("des_product").value = "";
  document.getElementById("obj_product").value = "";
  document.getElementById("arq_product").value = "";
  document.getElementById("har_product").value = "";
  document.getElementById("sof_product").value = "";
  document.getElementById("otr_product").value = "";
  document.getElementById("cli_product").value = "";
  document.getElementById("log_product").value = "";
  document.getElementById("apl_product").value = "";
  document.getElementById("fun_product").value = "";
  document.getElementById("adi_product").value = "";
  document.getElementById("car_product").value = "";

}

function clearlocalStorage(){
  localStorage.clear();
}