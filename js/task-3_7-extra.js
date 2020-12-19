const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const transactionNew = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };
    return transactionNew;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (amount > this.balance)
      return alert('Cнятие такой суммы не возможно, недостаточно средств');
    else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let trans of this.transactions) {
      if (trans.id === id) return trans;
    }
  },

  getTransactionTotal(type) {
    let totalAmount = 0;
    for (let trans of this.transactions) {
      if (trans.type === type) totalAmount += trans.amount;
    }
    return totalAmount;
  },
};

// account.deposit(50);
// account.deposit(40);
// account.deposit(20);
// account.withdraw(20);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account);
