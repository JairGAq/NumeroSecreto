//Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = 'intento';
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

  console.log(numeroUsuario);
    /*
    Este codigo realiza
    la comparacion
    */
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    intentos++;
    palabraIntentos = 'intentos';
    if (intentos > 3) {
      palabraIntentos = 'llegaste al limite de intentos';
        break;}
    //La condicion no se cumplio
    //alert('Lo siento, no acertaste el numero');
  }
}
