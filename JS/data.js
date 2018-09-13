

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
    } 
}

const data = {
    items: {
        income: [],
        expense: []
    },
    totals: {
        income: 0,
        expense: 0
    },
    grandTotal: 0
}

export const addNewData = (inputData) => {
    const {type, description, value} = inputData;
    let newItem;
    let id = 0;
        if(data.items[type].length > 0) {
            id = data.items[type][data.items[type].length - 1] + 1
        } 


    if (type === 'income') {
        newItem = new Income(id, description, value)
    } else if (type === 'expense') {
        newItem = new Expense(id, description, value)
    }

    data.items[type].push(newItem);

    return newItem;
}

const calculateTotals = (type) => {
    data.item[type].forEach(item => {
        data.totals[type] += item;
    })
}

export const calculateBudget = () => {
    calculateTotals('income');
    calculateTotals('expense');
    data.grandTotal = data.totals.income - data.totals.expense;  
}

