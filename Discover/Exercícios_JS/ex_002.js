let family = {
    incomes: [1500, 161.22, 452, 777],
    expenses: [250.43, 88.7, 3200.12],
}

function sum(array) {
    let total = 0;
    for (value of array) {
        total = total+value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const total = calculateIncomes-calculateExpenses
    console.log(`Total de receitas: ${calculateIncomes.toFixed(2)}`)
    console.log(`Total de despesas: ${calculateExpenses.toFixed(2)}`)
    console.log(`Balanço: ${total.toFixed(2)}`)
}


calculateBalance()