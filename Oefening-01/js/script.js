`use strict`

const firstName = prompt("Wat is je voornaam?");
const LastName = prompt("Wat is je achternaam?");
const age = parseInt(prompt("Wat is je leeftijd?"), 10);

if(!firstName || !LastName ||isNaN(age)){
    console.log("Vul zowel je voornaam als achternaam als leeftijd in.");
}
else if (age < 12 || age > 60){
    console.log("U behoort niet tot de gezochte leeftijdsklasse!");
}
else {
    console.log(`Welkom ${firstName} ${LastName}, je bent ${age} jaar oud.`);
}
