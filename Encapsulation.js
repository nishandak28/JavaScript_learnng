class Bank {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }

    deposit(amount) {
        this.#amount += amount;
        console.log(`Amount deposited ${amount} , Current Balance : ${this.#amount}`);
    }

     withdrawed(amount) {
        this.#amount -= amount;
        console.log(`Amount withdrawed ${amount} , Current Balance : ${this.#amount}`);
    }

}

let b = new Bank(100);
b.deposit(100);
b.withdrawed(50);