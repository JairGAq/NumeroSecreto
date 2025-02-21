//Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
//console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maxIntentos = 3;


while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

  console.log(numeroUsuario);
  /*
    Este codigo realiza
    la comparacion
    */
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(
      `Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;
    //palabraIntentos = 'intentos';
    if (intentos > maxIntentos) {
      alert(
        `llegaste al limite de ${maxIntentos} intentos`
      );
      break;
    }
    //La condicion no se cumplio
    //alert('Lo siento, no acertaste el numero');
  }
}
