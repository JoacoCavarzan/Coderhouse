//funcion que valida luego de presionar submit
function formValidacion(input) {
  console.log(input);
  let valueNombre = document.getElementById(input);
  valueNombre.value = ""; //vacio el input para que se vea el placeholder
  valueNombre.className = "formularioInvalido"; //cambio a color a rojo para que se vea el error
  valueNombre.placeholder = "Es necesario " + input; //mensaje de error
  band = true;
}

//funcion para cargar los turnos
function cargarTurno(e) {
  function turno(nombre, apellido, edad, dia, mes, hora) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dia = dia;
    this.mes = mes;
    this.hora = hora;
  }

  e.preventDefault();
  band = false; //Sirve para validar si entro en un if

  //Cargo las variables con los datos del usuario
  nombre = document.getElementById("Nombre").value;
  console.log(nombre);
  if (nombre == null || nombre == "") {
    nombreID = document.getElementById("Nombre").id;
    formValidacion(nombreID);
  } else {
    let valueNombre = document.getElementById("Nombre");
    valueNombre.className = "formulario"; //Cambio al color original por esta bien la validacion
  }

  apellido = document.getElementById("Apellido").value;
  console.log(apellido);
  if (apellido == null || apellido == "") {
    apellidoID = document.getElementById("Apellido").id;
    formValidacion(apellidoID);
  } else {
    let valueApellido = document.getElementById("Apellido");
    valueApellido.className = "formulario"; //Cambio al color original por esta bien la validacion
  }

  edad = document.getElementById("Edad").value;
  console.log(edad);
  if (edad == null || edad == "") {
    edadID = document.getElementById("Edad").id;
    formValidacion(edadID);
  } else {
    let valueEdad = document.getElementById("Edad");
    valueEdad.className = "formulario"; //Cambio al color original por esta bien la validacion
  }

  //Obtengo el mes ingresado en el formulario
  mes = document.getElementById("Mes").value;
  console.log(mes);
  //Valido Mes, si no es correcto creo el mensaje de error
  if (mes < 1 || mes > 12 || mes == null || mes == "") {
    mesID = document.getElementById("Mes").id;
    formValidacion(mesID);
  } else {
    let valueMes = document.getElementById("Mes");
    valueMes.className = "formulario"; //Cambio al color original por esta bien la validacion
  }

  dia = document.getElementById("Dia").value;
  console.log(dia);
  //Valido Dia, si no es correcto creo el mensaje de error
  if (dia < 1 || dia > 31 || dia == null || dia == "") {
    diaID = document.getElementById("Dia").id;
    formValidacion(diaID);
  } else {
    let valueDia = document.getElementById("Dia");
    valueDia.className = "formulario"; //Cambio al color original por esta bien la validacion
  }

  hora = document.getElementById("Hora").value;
  console.log(hora);
  if (hora == null || hora == "") {
    horaID = document.getElementById("Hora").id;
    formValidacion(horaID);
  } else {
    let valueHora = document.getElementById("Hora");
    valueHora.className = "formulario"; //Cambio al color original por esta bien la validacion
  }

  //Creo el Objeto con el nuevo turno, si es vacio significa que no tiene error
  if (band == false) {
    nuevoTurno = new turno(nombre, apellido, edad, dia, mes, hora);
    disponibilidadYGuardado(e);
    console.log(nuevoTurno);
  }
}

//funcion que valida si el turno esta disponible
function disponibilidadYGuardado() {
  if (listaTurnos.length != 0) {
    //Si es el primer turno, pasa directo a guardar el turno
    turnoHabilitado = true;
    listaTurnos.forEach((item) => {
      // recorre el array y en cada posicion comparo el dia, mes y hora, si todas coinciden significa que ya existe el turno por lo tanto NO esta disponible
      if (item.mes == nuevoTurno.mes) {
        if (item.dia == nuevoTurno.dia) {
          if (item.hora == nuevoTurno.hora) {
            turnoHabilitado = false;
          }
        }
      } else {
        bandera = true;
      }
    });
  } else {
    bandera = true;
  }
  //Si bandera es true significa que no es compatible
  if (bandera == true && turnoHabilitado == true) {
    guardarTurno();
  } else {
    alert("Lo lamento, pero el turno ya NO esta disponible");
  }
}

//funcion que guardar los objetos en un array
function guardarTurno() {
  listaTurnos.push(nuevoTurno);
  console.log(listaTurnos);
  // Imprimo el mensaje de guardado.
  alert(
    "Felicitaciones su turno fue guardado para " +
      nuevoTurno.apellido +
      " " +
      nuevoTurno.nombre +
      " el dia " +
      nuevoTurno.dia +
      "/" +
      nuevoTurno.mes +
      " a las " +
      nuevoTurno.hora +
      " horas."
  );
}

//////////***************************    INCIO DE PROGRAMA     *************************************************///////////
//Declaro el array y variables globales
const listaTurnos = [];
const form = document.getElementById("form");

//sirve para validaciones
let bandera = false;
let turnoHabilitado = true;

//textoARemplazar se utiliza para mostrar en texto la validacion que se hace en el evento input
let textoAReemplazarMes = document.getElementById("textoValidacionMes");
let textoAReemplazarDia = document.getElementById("textoValidacionDia");
let mes = document.getElementById("Mes");
let dia = document.getElementById("Dia");

//Evento que valida cuando se van introduciendo los inputs del mes y dia.
mes.addEventListener("input", () => {
  if (mes.value < 1 || mes.value > 12) {
    textoAReemplazarMes.textContent = mes.value + " no es un mes valido";
  } else {
    textoAReemplazarMes.textContent = "";
  }
});

dia.addEventListener("input", () => {
  if (dia.value < 1 || dia.value > 31) {
    textoAReemplazarDia.textContent = dia.value + " no es un dia valido";
  } else {
    textoAReemplazarDia.textContent = "";
  }
});

//Evento para escuchar el boton cargarTurno
form.addEventListener("submit", cargarTurno);
