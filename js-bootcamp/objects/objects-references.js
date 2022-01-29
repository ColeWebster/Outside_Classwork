// Challenge Area

// addIncome

// resetAccount

// getAccountSummary
// Account for anderw has $900. $1000 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount


let myAccount =  {
    name: "Cole",
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    // console.log(account)
}
let addIncome = function(account, income) {
    account.income = account.income + income
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 500)
addExpense(myAccount, 2.50)
console.log(getAccountSummary(myAccount))
// getAccountSummary
resetAccount(myAccount)
//reset account
console.log(getAccountSummary(myAccount))
// getAccountSummary