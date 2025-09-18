function calcularEdad(fechaNacimiento) {
    var fechaActual = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var añoActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDate();
    var añoNac = fechaNac.getFullYear();
    var mesNac = fechaNac.getMonth();
    var diaNac = fechaNac.getDate();
    var edad = añoActual - añoNac;
    var cumpleañosYaPasó = mesActual > mesNac || (mesActual === mesNac && diaActual >= diaNac);
    if (!cumpleañosYaPasó) {
        edad--;
    }
    return edad;
}
var nombre = "Luis";
var fecha = "2020-09-15";
var edad = calcularEdad(fecha);
console.log("".concat(nombre, " tiene ").concat(edad, " a\u00F1os."));
