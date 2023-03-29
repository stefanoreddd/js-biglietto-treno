let kilometerNumber = prompt("Inserisci il numero di km che vorresti percorrere");
let passengerAge = prompt("Inserisci l'età del passeggero");

kilometerNumber =parseInt(kilometerNumber);
passengerAge = parseInt(passengerAge);

let travelCost = kilometerNumber * 0.21;

if (passengerAge < 18){
    travelCost = travelCost - (travelCost * 20 / 100);
    console.log("Al prezzo è stato applicato uno sconto del 20% per i minorenni.");

} else if (passengerAge > 65){
    travelCost = travelCost - (travelCost * 40 / 100);
    console.log("Al prezzo è stato applicato uno sconto del 40% per gli over 65.");
} 
else{
    console.log("Il prezzo del biglietto è calcolato al costo di € 0,21/km.");
}

document.getElementById("travel-cost").innerHTML = "€ " + travelCost.toFixed(2);

