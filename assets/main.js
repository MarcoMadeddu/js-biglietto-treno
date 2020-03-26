//verificare java
console.log("java is done");

// ottenere numero kilometri e eta del passegero

var km = parseInt(prompt("Quanti km devi percorrere?"));
var age = parseInt(prompt("Quanti anni hai?"));

console.log("Rispettivamente Kilometri e età: ", km,age);

//Stabilire il prezzo del biglietto in base ai km

var prezzo = (km * 0.21);
console.log("Prezzo iniziale: ", prezzo,"$");

//applicare, se necessario, uno sconto

if (age < 18){

  var percentuale = ((prezzo * 20) /100);
  console.log("Percentuale minorenne: ", percentuale);

   prezzo = (prezzo - percentuale);
  console.log("Prezzo con sconto applicato: ", prezzo.toFixed(2),"$");

  //Output del risultato:
  document.getElementById("price").innerHTML += prezzo.toFixed(2) + "$";
  document.getElementById("sale").innerHTML += "Secondo la nostra tariffa GIOVANI è stato applicato uno sconto di: " + percentuale.toFixed(2) + "$";

} else if(age > 65){

  var percentuale = ((prezzo * 40) /100);
  console.log("Percentuale anziano: ", percentuale,"%");

   prezzo = (prezzo - percentuale);
  console.log("Prezzo con sconto applicato: ", prezzo.toFixed(2),"$");

  //Outuput del risultato
  document.getElementById("price").innerHTML += prezzo.toFixed(2) + "$";
  document.getElementById("sale").innerHTML += "Secondo la nostra tariffa ANZIANI è stato applicato uno sconto di: " + percentuale.toFixed(2) + "$";

} else{
  console.log("Il biglietto non ha ricevuto sconti", prezzo)

  //Outuput del risultato
  document.getElementById("price").innerHTML += prezzo.toFixed(2) + "$";
  document.getElementById("sale").innerHTML += "Secondo la nostra tariffa non è stato applicato nessuno sconto al tuo biglietto ";
}
