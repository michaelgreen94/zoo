class Warthog {
  constructor(name, gender, age, color, hasTusks = false, leftTuskLenght = 0, rightTuskLength = 0) {
    this.name = name || ''
    this.gender = gender || ''
    this.age = age || 0
    this.color = color || ''
    this.hasTusks = hasTusks
    this.alive = true
    this.tusks = {
      left: leftTuskLenght,
      right: rightTuskLength
    };
  }
  charge() {
    console.log(this.name + ' is charging');
  }

  totalTuskLenght() {
    return this.tusks.left + this.tusks.right
  }

}

// let pumba = new Warthog('Pumba', 'M', 42, 'Brown', true, 17, 22)

// new Warthog()

// pumba.charge()
// console.log(pumba.totalTuskLenght());

export default Warthog
