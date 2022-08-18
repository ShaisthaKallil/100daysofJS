//This program returns a superhero name from provided list randomly//
var superheronames = ["Vindicate",

"Ironside",

"Torpedo",

"Bionic",

"Dynamo",

"Miraculous",

"Tornado",

"Metal Man",

"Jawbreaker",

"Barrage",

"Amplify",

"Bonfire",

"Monsoon",

"Urchin",

"Firefly",

"Rubble",

"Blaze",

"Hurricane",

"Slingshot",

"Storm Surge",

"Impenetrable",

"Quicksand",

"Night Watch",

"Mastermind",

"Captain Freedom",

"Cannonade",

"Bulletproof",

"Turbine",

"Kraken",

"Granite",

"Glazier",

"MechaMan",

"Fortitude",

"Cast Iron",

"Fireball",

"Polar Bear",

"Turbulence",

"Mako",

"Captain Victory"

];

function superheroname(){

return superheronames.at(Math.floor(Math.random()*39));
}

console.log(superheroname(superheronames));
