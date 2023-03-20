// Functional Constructors
function BankAccount(customerName , balance){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = (amount) => {
        this.balance += amount;
    },
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

const hrittik = new BankAccount("Hrittik" , 500);
const Pratik = new BankAccount("Pratik" , 5000);
hrittik.deposit(900);
Pratik.withdraw(1000);
console.log(Pratik , hrittik);