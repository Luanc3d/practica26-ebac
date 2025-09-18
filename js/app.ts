function calcularEdad(fechaNacimiento: string): number {
  const fechaActual: Date = new Date();
  const fechaNac: Date = new Date(fechaNacimiento);

  const añoActual: number = fechaActual.getFullYear();
  const mesActual: number = fechaActual.getMonth();
  const diaActual: number = fechaActual.getDate();

  const añoNac: number = fechaNac.getFullYear();
  const mesNac: number = fechaNac.getMonth();
  const diaNac: number = fechaNac.getDate();

  let edad: number = añoActual - añoNac;

  const cumpleañosYaPasó: boolean =
    mesActual > mesNac || (mesActual === mesNac && diaActual >= diaNac);

  if (!cumpleañosYaPasó) {
    edad--;
  }

  return edad;
}


const nombre: string = "Luis";
const fecha: string = "2020-09-15";
const edad: number = calcularEdad(fecha);

console.log(`${nombre} tiene ${edad} años.`);