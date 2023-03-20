class BankAccount {
    customerName;
    accountNumber;
    balance = 0; // inital balance is 0

    /**
     * The constructor method is a special method for creating and initializing an object 
     * created with a class. There can only be one special method with the name 
     * "constructor" in a class — a SyntaxError is thrown if the class contains 
     * more than one occurrence of a constructor method.
     */
    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    
    // member methods
    deposit(amount){
        this.balance += amount;
    }

    withdrow(amount){
        this.balance -= amount;
    }
}

// create object of BankAccount class
const hrittikAccount = new BankAccount("Hrittik" , 6000);
hrittikAccount.deposit(500);
hrittikAccount.withdrow(600);
console.log(hrittikAccount);