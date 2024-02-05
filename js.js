// Man indsætter denne kode, for at få det aktuelle tidspunkt og datoen. 
var time = new Date().getHours();

// Vælg den passende hilsen baseret på tidspunktet på dagen.
//Tid er en variabel.
if (time >= 5 && time < 10) {
    console.log("Godmorgen");
} else if (time >= 10 && time < 18) {
    console.log("Goddag");
} else if (time >= 18 && time < 24) {
    console.log("Godaften");
} else {
    console.log("Godnat");
}

// Det jeg har skrevet heroppe betyder i bund og grund dette.
//Hvis "time" (som er min variabel) er mellem 5 (inklusiv) og 10 (eksklusiv), udskriver vi "Godmorgen".
//Hvis time er mellem 10 (inklusiv) og 18 (eksklusiv), udskriver vi "Goddag".
//Hvis time er mellem 18 (inklusiv) og 24 (eksklusiv), udskriver vi "Godaften".
//Hvis ingen af de ovenstående betingelser er opfyldt (dvs. time er mindre end 5 eller 24), udskriver vi "Godnat".