/**
 * Wrapping of data and methods of class in a single uint is called encapsulation
 * Why we need Encapsulation in JavaScript?
 */
class BankAccount1 {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
}
const hrittikAccount = new BankAccount1("Hrittik" , 5000);
console.log(hrittikAccount);
// Now here the problem we can change the balance from outside of the class
hrittikAccount.balance = "he he";
console.log(hrittikAccount);
// Now here we can litrally change the balance to a non numeric value from outside of the class
// here comes the concept of encapsulation to restrict the user from changing this sensitive information
// from outside of the class. User can only get access to this information through setter and getter methods.

/**
 * Using encapsulation
 */
class BankAccount2 {
    customerName;
    accountNumber;
    #balance; // to make a property private in JS we put # as prefix in the variable name

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }
}
const hrittikAccount2 = new BankAccount2("Hrittik2" , 6000);
//hrittikAccount2.#balance = "idk"; // it will throw an error
//console.log(hrittikAccount2.#balance); // it will throw an error

console.log(hrittikAccount)
/**
 * Using setter and getter methods
 * Now the user can set and get the private fields of the class only through setter and getter methods
 */
class BankAccount3 {
    customerName;
    accountNumber;
    #balance;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }
    setBalance(amount){
        // if the amount is non-numeric
        if(isNaN(amount)){
            console.log("You cannot set a non numeric value")
            return;
        }
        this.#balance = amount;
    }
    getBalance(){
        return this.#balance;
    }
}
const hrittikAccount3 = new BankAccount3("Hrittik3" , 6000);
console.log(hrittikAccount3);
// to set the balance
hrittikAccount3.setBalance(7000); // we cannot set a non-numeric value 
// to get the balance
console.log(hrittikAccount3.getBalance()); // 7000 

/**
 * Mordern way to use setter and getter methods
 */
class BankAccount4 {
    customerName;
    accountNumber;
    #balance;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }
    set balance(amount){
        // if the amount is non-numeric
        if(isNaN(amount)){
            console.log("You cannot set a non numeric value")
            return;
        }
        this.#balance = amount;
    }
    get balance(){
        return this.#balance;
    }
}
const hrittikAccount4 = new BankAccount4("Hrittik4" , 6000);
console.log(hrittikAccount4);
// to set the balance
hrittikAccount4.balance = 7000; // we cannot set a non-numeric value 
// to get the balance
console.log(hrittikAccount4.balance); // 7000 
/**
 * Here due to set and get keyword the balance act as a property not method
 * Child classes cannot access the private property
 */