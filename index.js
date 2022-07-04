// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog extends Cat {
    speak () {
        return `${this.name} says woof!`
    }
}



class Bird extends Dog {
    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`;
        } else if (this.sex !== 'male') {
            return `${this.name} says squawk!`
        }
    }
}

let parr = new Bird('par','fmale')
console.log(parr.speak())