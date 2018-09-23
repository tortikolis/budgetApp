
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
    
    calculatePercentages(){
        return this.value * 100 / data.totals.expense
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
    percentages: []
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
    let total = 0;
    data.items[type].forEach(item => {
        total += item.value;
    })
    data.totals[type] = total;

    return total;
}

export const calculateAllPercentages = () => {
    data.percentages = data.items.expense.map((item) => {
        return item.calculatePercentages()
    });

    return data.percentages;
}

export const calculateBudget = () => {
    calculateTotals('income');
    calculateTotals('expense');
    data.grandTotal = data.totals.income - data.totals.expense;  
}



