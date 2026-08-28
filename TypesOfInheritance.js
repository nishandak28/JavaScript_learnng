
//Single Inheritance
class Animal {
    eat() {
        console.log("Animal Eats")
    }   
}

class Dog extends Animal {
    bark() {
        console.log("Dog is an Barking Animal");
    }
}

let d = new Dog()
d.eat();
d.bark();

//multilevel inheritance

class vechicle {
    moves() {
        console.log("Vechicle moves");
    }
}
class car extends vechicle {
    has() {
        console.log("Car has 4 wheels");
    }
}
class Benz extends car{
    type() {
        console.log("Benz is the luxiry type")
    }
}
let b = new Benz();
b.moves();
b.has();
b.type();

//MUTIPLE INHERITANCE
// 2 parent one child



let parent1 = {
    reader() {
        console.log("I am tha parent 1 Fast reader")
    }
}

let parent2 = {
    run() {
        console.log("I am parent2 fast runner");
    }
}

class child{}

Object.assign(child.prototype,  parent1 , parent2)

let ch = new child();
ch.reader();
ch.run();