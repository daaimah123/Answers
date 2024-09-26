// Write a program that creates an `account` object with the following characteristics:

class Account {
  constructor(name) {
    // * A `name` property.
    // * A `balance` property set to 0 
    this.name = name;
    this.balance = 0;
  }
  // * A `deposit` method adding the (positive or negative) value passed as an argument to the account balance.
  deposit(amount) {
    this.balance = amount + this.balance;
  }
  // * A `describe` method that prints the account description in the console.
  describe() {
    console.log(`${this.name}'s account balance is ${this.balance}`)
  }

  // * A `transfer` method with two parameters: the name of the account that will receive the transfer, and the amount of money to transfer. 
  transfer(recipientAccount, amount) {
    this.deposit(-amount);
    recipientAccount.deposit(amount)

  }

  credit(amount) {
    if (this.balance > amount) {
      this.balance = amount + this.balance
    } else {
      console.log('Not enough funds')
    }
  }
}

// ## Test
// - Create an account for Billy, Rosie, Jack and Jill
let billysAccount = new Account('Billy')
let rosiesAccount = new Account('Rosie')
let jacksAccount = new Account('Jack')
let jillsAccount = new Account('Jill')

// - Give each of the accounts a deposit on money
billysAccount.deposit(100);
rosiesAccount.deposit(200);
jacksAccount.deposit(300);
jillsAccount.deposit(400)

// - Print a string describing the current amount of money on each account
billysAccount.describe()
rosiesAccount.describe()
jacksAccount.describe()
jillsAccount.describe()

// - Transfer positive values between Billy and Jack and negative values between Rosie and Jack
billysAccount.transfer(jacksAccount, 50)
billysAccount.describe()
jacksAccount.describe()

rosiesAccount.transfer(jacksAccount, -50)
rosiesAccount.describe()
jacksAccount.describe()

jacksAccount.credit(200)
jacksAccount.describe()



// # Extra
// - How might a `credit` method work? 
/*
1. Check if credit amount is more than account's balance.
2. If credit is more than account's balance, do not give credit.
3. If balance, is more than credit amount, add credit to balance. 
*/


