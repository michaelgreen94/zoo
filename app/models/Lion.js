import Warthog from './Warthog.js'

class Lion {
    //What are the form fields?
    constructor(name, hairColor, gender, maneColor, weight) {
        this.id = Math.random()
        this.name = name || '';
        this.hairColor = hairColor || '';
        this.gender = gender || '';
        this.maneColor = maneColor || '';
        this.weight = weight || 0;
    }

    roar() {
        console.log(this.name + ' is RAWRing');
    }

    eat(food) {
        if (food instanceof Warthog) {
            console.log('Yummy Pork')
            food.alive = false

        }
    }
}

// let simba = new Lion('Simba', 'Brown', 'M', 'Yellow', 200)
// let scar = new Lion('Scar', 'Red', 'M', "Black", 250)

// simba.roar()

// let lions = [simba, scar]

export default Lion

