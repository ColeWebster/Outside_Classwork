const account = {
    name: "Cole Webster",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description,amount) {
        this.income.push ({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let totalBalance = 0
         
        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function(revenue){
            totalIncome = totalIncome + revenue.amount
        })

       totalBalance = totalIncome - totalExpenses

        return `${this.name} then has a balance of $${totalBalance}. With income of $${totalIncome} and expenses of $${totalExpenses}.`


    }
}


account.addExpense('Rent', 950)
account.addExpense('coffee', 3)
account.addIncome("Side Project", 2000)
account.addIncome("Job", 3000)
console.log(account.getAccountSummary())

// 1. Add income array to the account
// 2. add income method -> description, amount
// 3. getAccountSummary = income - expenses

// Name has a balance of income-expense. With income in income and expenses in expeneses