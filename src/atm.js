class Atm {
    constructor(options) {
        this.funds = options.initialFunds
    }

    withdraw(amount) {
        this.funds -= amount
    }
}

module.exports = Atm