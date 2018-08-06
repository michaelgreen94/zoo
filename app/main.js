import Lion from "./models/Lion.js";
import Bear from "./models/Bear.js";
import Warthog from "./models/Warthog.js";

let simba = new Lion('Simba')
let pumba = new Warthog('Pumba')

console.log('is pumba alive?', pumba.alive)

simba.eat(pumba)

console.log('is pumba alive?', pumba.alive)

console.log(simba);
