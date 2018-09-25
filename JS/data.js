class Income {
    constructor(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
}

class Expense {
    constructor(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }
    
    calculatePercentages(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round(this.value * 100 / totalIncome)
        }
    }
}

export const data = {
    items: {
        income: [],
        expense: []
    },
    totals: {
        income: 0,
        expense: 0
    },
    grandTotal: 0,
    TotExpensePercentage: 0,
    percentages: []
}

export const addNewData = (inputData) => {
    const {type, description, value} = inputData;
    let newItem;
    let id = 0;
    if(data.items[type].length > 0) {
        id = data.items[type][data.items[type].length - 1].id + 1
    } 
    if (type === 'income') {
        newItem = new Income(id, description, value)
    } else if (type === 'expense') {
        newItem = new Expense(id, description, value)
    }
    data.items[type].push(newItem);

    return newItem;
}

const calculateTotals = type => {
    let total = 0;
    data.items[type].forEach(item => {
        total += item.value;
    })
    data.totals[type] = total;

    return total;
}

export const calculateAllPercentages = () => {
    data.items.expense.forEach((item) => {
        item.calculatePercentages(data.totals.income);
    });

    data.TotExpensePercentage = data.grandTotal > 0 ? parseInt(data.totals.expense * 100 / data.grandTotal) : -1;
}

export const calculateBudget = () => {
    calculateTotals('income');
    calculateTotals('expense');
    data.grandTotal = data.totals.income - data.totals.expense;  
}

export const deleteItem = (id, type) => {
    const newItems = data.items[type].filter(item => {
        return item.id !== id;
    });
    data.items[type] = newItems;
}

export const getPercentages = () => {
    return data.items.expense.map(item => item.percentage)
}



