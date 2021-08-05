/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


const aM = 60;
const aH = 3600;

var totalsec = 12560;

var hour = Math.round(totalsec/aH);

//console.log("ore",hour);

var hoursec = (hour*aH);

var minutes = Math.round((totalsec-hoursec)/60);

//console.log(minutes);

var minutessec = (minutes*aM);

var seconds = (totalsec-(hoursec+minutessec));

console.log(hour+"ore", minutes+"minuti","e",seconds+"secondi");
