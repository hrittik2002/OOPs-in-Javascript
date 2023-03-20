/***
 * Inheritance using class (es6)
 */
class BankAccount {
    customerName;
    accountNumber;
    balance = 0; // inital balance is 0

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    
    deposit(amount){
        this.balance += amount;
    }

    withdrow(amount){
        this.balance -= amount;
    }
}
// child classes
class SBIBankAccount extends BankAccount{
    timePeriod;

    constructor(customerName , balance , timePeriod){
        super(customerName , balance); // super keyword is used so that we don't need to redefine everything
        this.timePeriod = timePeriod;
    }
    getTimePeriod(){
        return this.timePeriod;
    }
}
const hrittikAccount = new SBIBankAccount("Hrittik" , 500 , 5);
console.log(hrittikAccount);

class ICICIBankAccount extends BankAccount{
    isLoan;

    constructor(customerName , balance , isLoan){
        super(customerName , balance); // super keyword is used so that we don't need to redefine everything
        this.isLoan = isLoan;
    }
    isLoneTaken(){
        if(this.isLoan){
            return true;
        }
        else return false;
    }
}
const hrittikAccount2 = new ICICIBankAccount("Hrittik" , 5000 , false);
console.log(hrittikAccount2);

/**
 * Inheritance using constructor function
 */
 
const BankAccount2 = function(customerName , balance){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}
BankAccount2.prototype.deposit = function(amount){
    this.balance += amount;
}
BankAccount2.prototype.withdrow = function(amount){
    this.balance -= amount;
}
const hrittikAccount3 = new BankAccount2("Hrittik3" , 500);
console.log(hrittikAccount3);

const SBIBankAccount2 = function(timePeriod){
    __proto__ : BankAccount2,
    this.timePeriod = timePeriod
}
SBIBankAccount2.prototype.getTimePeriod = function(){
    return this.timePeriod;
}
const hrittikAccount4 = new SBIBankAccount2("Hrittik3" , 600 , 5);
console.log(hrittikAccount4);