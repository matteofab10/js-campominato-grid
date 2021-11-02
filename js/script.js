const container = document.querySelector('#mf-container');
const listNumbers = [];

document.getElementById('inizia').addEventListener('click', function() {
  console.log('ho cliccato play');

  let select = document.getElementById('difficolta');
  let difficolta = document.getElementById("difficolta").value = "facile";

  if (difficolta === facile)
  
    // 1. partiamo da quello che abbiamo vsito stamattina e rifacciamolo. funionznante.

  // 2. siccome il codice ha  un numero di quadrati FISSO, dobbiamo fare in modo che
  // questl numero vari in base AL VALORE DELLA SELECT

  // come si legge il valore della select? google 

  // valore letto ad esempio = 'medio'

  let numeroCaselle = 100;

  // leggo il valore della select



  // devo creare 100 caselle
  for (let i=0; i < numeroCaselle; i++){
    //const sq = createSquare(container);

    // creo la casella
    const sq = document.createElement('div');
    sq.className = 'square';
    sq.innerHTML = i;

    // la aggiungo al contenitore
    container.append(sq);    
  
    sq.addEventListener('click', function(){

    });
  }
  
  /*
  function createSquare(contenitoreQuadrati){
    const sq = document.createElement('div');
    sq.className = 'square';
    contenitoreQuadrati.append(sq);
    return sq;
  }
  */

});