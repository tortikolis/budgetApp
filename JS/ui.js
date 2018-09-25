export const DOMElementsSelection = {
      addBtn: document.querySelector('.add__btn'),
      container: document.querySelector('.container'),
      typeInput: document.querySelector('.add__type'),
      descriptionInput: document.querySelector('.add__description'),
      valueInput: document.querySelector('.add__value'),
      incomeList: document.querySelector('.income__list'),
      expensesList: document.querySelector('.expenses__list'),
      grandTotalField: document.querySelector('.budget__value'),
      incomeTotalField: document.querySelector('.budget__income--value'),
      expensesTotalField: document.querySelector('.budget__expenses--value'),
      expensesTotalPercentage: document.querySelector('.budget__expenses--percentage'),
      monthField: document.querySelector('.budget__title--month')
}

 const getIncomeElement = (id, description, value) => {
     const incomeListItem = 
     `<div class="item clearfix" id="income-${id}">
     <div class="item__description">${description}</div>
     <div class="right clearfix">
         <div class="item__value">+${value}</div>
         <div class="item__delete">
             <button class="item__delete--btn">
                 <i class="ion-ios-close-outline"></i>
             </button>
         </div>
     </div>
 </div>`

    return incomeListItem;
 }

 const getExpenseElement = (id, description, value) => {
     const expenseListItem = 
     `<div class="item clearfix" id="expense-${id}">
     <div class="item__description">${description}</div>
     <div class="right clearfix">
         <div class="item__value">-${value}</div>
         <div class="item__percentage"></div>
         <div class="item__delete">
             <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
         </div>
     </div>
 </div>`

    return expenseListItem
 }

 export const getInputs = (elements) => {
    const {typeInput, descriptionInput, valueInput} = elements;
    return {
        type: typeInput.value,
        description: descriptionInput.value,
        value: parseFloat(valueInput.value)
    }
}

 export const renderTotals = data => {
    DOMElementsSelection.incomeTotalField.textContent = data.totals.income;
    DOMElementsSelection.expensesTotalField.textContent = data.totals.expense;
    DOMElementsSelection.grandTotalField.textContent = data.grandTotal;
    DOMElementsSelection.expensesTotalPercentage.textContent = data.TotExpensePercentage + '%';
 }

export const renderItem = (item, type) => {
    const { id, description, value } = item;

    if(type === 'income') {
        DOMElementsSelection.incomeList.insertAdjacentHTML('beforeend', getIncomeElement(id, description, value))
    } else {
        DOMElementsSelection.expensesList.insertAdjacentHTML('beforeend', getExpenseElement(id, description, value))
    }
}

 export const deleteDOMItem = (id,type) => {
     console.log(`#${type}-${id}`)
    const el = document.querySelector(`#${type}-${id}`);
    el.parentElement.removeChild(el);
 }

export const displayPercentages = percentages => {
    const percentagesFields = [...document.querySelectorAll('.item__percentage')];
    percentagesFields.forEach( (field, index) => {
        if(percentages[index] > 0){
             field.textContent = `${percentages[index]}%`
         } else {
             field.textContent = '--%'
         }
     })
}

export const showMonth = () => {
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNow = MONTHS[new Date().getMonth()];

    DOMElementsSelection.monthField.textContent = monthNow;
}

export const clearInputs = elements => {
    const {descriptionInput, valueInput} = elements;
    
    descriptionInput.value = '';
    valueInput.value = '';
}

