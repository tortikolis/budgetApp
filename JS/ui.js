export const DOMElementsSelection = {
      addBtn: document.querySelector('.add__btn'),
      typeInput: document.querySelector('.add__type'),
      descriptionInput: document.querySelector('.add__description'),
      valueInput: document.querySelector('.add__value'),
      incomeList: document.querySelector('.income__list'),
      expensesList: document.querySelector('.expenses__list'),
      grandTotalField: document.querySelector('.budget__value'),
      incomeTotalField: document.querySelector('.budget__income--value'),
      expensesTotalField: document.querySelector('.budget__expenses--value'),
      expensesTotalPercentage: document.querySelector('.budget__expenses--percentage')
}

export const getInputs = (elements) => {
    const {typeInput, descriptionInput, valueInput} = elements;
    return {
        type: typeInput.value,
        description: descriptionInput.value,
        value: parseFloat(valueInput.value)
    }
}

// const renderIncome = (id, description, value) => {
//     const incomeListItem = 
//     `<div class="item clearfix" id="income-${id}">
//     <div class="item__description">${description}</div>
//     <div class="right clearfix">
//         <div class="item__value">${value}</div>
//         <div class="item__delete">
//             <button class="item__delete--btn">
//                 <i class="ion-ios-close-outline"></i>
//             </button>
//         </div>
//     </div>
// </div>`
// }

// const renderExpense = (id, description, value, percentage) => {
//     const expenseListItem = 
//     `<div class="item clearfix" id="expense-${expenseNum}">
//     <div class="item__description">${description}</div>
//     <div class="right clearfix">
//         <div class="item__value">${value}</div>
//         <div class="item__percentage"></div>
//         <div class="item__delete">
//             <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
//         </div>
//     </div>
// </div>`
// }

export const renderData = (data) => {


}

