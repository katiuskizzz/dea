
//respuesta
    let proyecto, producto, linea, versiones, version, modulo, descripcion, objetivo, arquitectura,hardware,software,otros,fisico,logico,aplicativo,funcionales,adicionales,caracteristicas

proyecto = localStorage.getItem("Nombre del proyecto")
producto = localStorage.getItem("Nombre del producto");
linea = localStorage.getItem("Linea de produccion");
versiones = localStorage.getItem("Versiones anteriores del producto");
version = localStorage.getItem("Version actual del producto");
modulo = localStorage.getItem("Modulo");
descripcion = localStorage.getItem("Descripcion del peroducto");
objetivo = localStorage.getItem("Objetivo del producto");
arquitectura = localStorage.getItem("Descripcion del producto");
hardware = localStorage.getItem("Requerimientos fisicos minimos");
software = localStorage.getItem("Requerimientos logicos necesarios");
otros = localStorage.getItem("Recomendaciones");
fisico = localStorage.getItem("Requerimientos fisicos minimos cliente");
logico = localStorage.getItem("Requerimientos logicos necesarios cliente");
aplicativo = localStorage.getItem("Recomendaciones cliente");
funcionales = localStorage.getItem("Funciones del sistema");
adicionales = localStorage.getItem("Funcionalidades adicionales");
caracteristicas = localStorage.getItem("Caracteristicas del producto");

proy. innerHTML = proyecto;
nom. innerHTML = producto;
lpro. innerHTML = linea;
veranterior.  innerHTML = versiones;
veractual. innerHTML = version;
modu. innerHTML = modulo;
desprodu. innerHTML = descripcion;
obproduct. innerHTML = objetivo;
ardes. innerHTML = arquitectura;
refis. innerHTML = hardware;
relos. innerHTML = software;
recos. innerHTML = otros;
minic. innerHTML =  fisico;
logic. innerHTML =  logico;
clire. innerHTML = aplicativo;
funs. innerHTML = funcionales;
adifun. innerHTML = adicionales;
carapro. innerHTML = caracteristicas;









