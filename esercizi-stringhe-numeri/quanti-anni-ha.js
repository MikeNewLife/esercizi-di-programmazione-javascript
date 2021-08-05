/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var yeartoday = 2021;
var birthday = 1990;

età = (yeartoday - birthday);

console.log("età",età);

yearto100 = (100 - età);

console.log("anni mancanti per raggiungere i 100",yearto100);
