//CALCULADORA DE PROMEDIOS DE NOTAS

//SALUDO
function saludar() {
  alert("Bienvenid@ a la calculadora de promedios de exámen!");
}
saludar();

//FUNCION DE PROMEDIO
function promediar(exam1, exam2, exam3) {
  const resultado = (exam1 + exam2 + exam3) / 3;
  return resultado;
}

const valor1 = Number(prompt("Ingrese la nota de su primer examen"));
const valor2 = Number(prompt("Ingrese la nota de su segundo examen"));
const valor3 = Number(prompt("Ingrese la nota de su tercer examen"));

const resultadoFinal = promediar(valor1, valor2, valor3);

//MENSAJE PARA PROMEDIO FINAL
alert("Tu promedio de exámenes es de " + resultadoFinal);
console.log("Tu promedio de exámenes es de " + resultadoFinal);

//CONDICIONAL PARA SABER SI APROBÓ O DESAPROBÓ TENIENDO EN CUENTA QUE SE APRUEBA CON 7 O MAS
if (resultadoFinal >= 7) {
  alert("FELICITACIONES !!!! Estás aprobad@!");
} else if (resultadoFinal <= 6) {
  alert(
    "Tu promedio no alcanza para aprobar, te esperamos para que sigas practicando!"
  );
}
